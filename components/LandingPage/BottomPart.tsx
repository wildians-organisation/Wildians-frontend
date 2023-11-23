import React, { useContext } from "react";
import axios from "axios";
import * as config from "../../config/config";
import { firestore } from "../../firebaseConfig";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import { NetworkType } from "@airgap/beacon-sdk";
import { char2Bytes } from "@taquito/tzip16";
import SnackbarService, {
    SnackbarType
} from "../SnackbarService/SnackbarService";
import Wildians from "../Wildian/Wildians";


export interface ambassadorDocument {
    id: string;
    formData?: {
        adresseWallet: string;
        commentaire: string;
        loginMail: string;
        name: string;
        plateformeContact: string;
        profile: string;
    };
}

export interface StatusSale {
    id: string;
    status: boolean;
    openDay: string;
    openTime: string;
}

const network = { type: NetworkType.GHOSTNET };

const nftToMint = 1;

function BottomPart() {
    const [dataFinance, setDataFinance] = React.useState([
        { name: "ENVIRONMENT", value: 0 },
        { name: "SOCIETY", value: 0 },
        { name: "ECONOMY", value: 0 }
    ]);
    const [currentSelectedOng, setCurrentSelectedOng] = React.useState("");
    const [currentNFTAddress, setCurrentNFTAddress] = React.useState("");
    const [display_ong_selection, setDisplay_ong_selection] = React.useState([
        "",
        "",
        ""
    ]);
    const [nbTokenMinted, setNbTokenMinted] = React.useState(0);
    const [isStatusOpen, setIsStatusOpen] = React.useState(false);
    const [whitelistedUsers, setWhitelistedUsers] = React.useState<string[]>(
        []
    );
    const [userAddress, setUserAddress] = React.useState<string | null>("");
    const [wallet, setWallet] = React.useState<BeaconWallet>();
    const [token_id, setToken_id] = React.useState(-1);
    const [Tezos, setTezos] = React.useState(new TezosToolkit(config.RPC_URL));
    const [time, setTime] = React.useState(
        new Date().toLocaleTimeString().slice(0, 5)
    );
    const [day, setDay] = React.useState(new Date().toISOString().slice(0, 10));
    const SnackbarContext = useContext(SnackbarService);

    const salesCollection = collection(firestore, "sales");
    const ambassadorCollection = collection(firestore, "AmbassadorList");
    const deerONG = ["WWF", "Oceana", "GreenPeace"];
    const wolfONG = [
        "Action Against Hunger",
        "Save the Children",
        "Wikimedia Foundation (Wikipedia)",
        "Charity: Water"
    ];
    const bullONG = [
        "AIDS",
        "UNICEF",
        "MADRE",
        "Relief International Inc.",
        "Amnesty International"
    ];

    function isOpenDay(openDay, openTime) {
        if (day > openDay || (day === openDay && time >= openTime)) {
            return true;
        }
        return false;
    }

    async function updateSelectedOngNFTAddress() {
        for (const element in display_ong_selection) {
            if (display_ong_selection[element] != "") {
                setCurrentSelectedOng(display_ong_selection[element]);
                if (deerONG.includes(display_ong_selection[element])) {
                    setCurrentNFTAddress(config.DEER_NFT);
                }
                if (bullONG.includes(display_ong_selection[element])) {
                    setCurrentNFTAddress(config.BULL_NFT);
                }
                if (wolfONG.includes(display_ong_selection[element])) {
                    setCurrentNFTAddress(config.WOLF_NFT);
                }
            }
        }
    }

    async function getTransactionsInformations() {
        const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history?limit=1000`
        );
        let environment = 0;
        let society = 0;
        let economy = 0;

        response.data.map((element) => {
            if (element.operation.type == "transaction") {
                let ong_name = element.operation.parameter.value.ong_name;
                if (deerONG.includes(ong_name)) {
                    environment += 1;
                } else if (bullONG.includes(ong_name)) {
                    economy += 1;
                } else if (wolfONG.includes(ong_name)) {
                    society += 1;
                }
            }
        });
        setDataFinance((prevState) => {
            const newData = [...prevState];
            newData[0].value = environment;
            newData[1].value = society;
            newData[2].value = economy;
            return newData;
        });
    }

    function handleScheduledOpening(sales) {
        if (sales["openDay"] !== "") {
            setIsStatusOpen(isOpenDay(sales["openDay"], sales["openTime"]));
        } else setIsStatusOpen(sales["status"]);
    }
    
    const getStatusSales = async () => {
        onSnapshot(salesCollection, (snapshot) => {
            const statusSales: StatusSale[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                const {
                    status,
                    openDay,
                    openTime
                } = data;
                statusSales.push({
                    id: doc.id,
                    status,
                    openDay,
                    openTime
                });
            });

            if (statusSales.length > 0) handleScheduledOpening(statusSales[0]);
        });
    };

    async function initializeWallet() {
        const _wallet = new BeaconWallet({ name: "Demo" });
        setWallet(_wallet);
        Tezos.setWalletProvider(_wallet);
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("beacon:accounts")) {
                setUserAddress(
                    JSON.parse(localStorage.getItem("beacon:accounts") || "")[0]
                        .address
                );
            }
            getTokenID();
        } else {
            await connectToWallet();
            getTokenID();
        }
    }
    React.useEffect(() => {
        getTransactionsInformations();
        updateSelectedOngNFTAddress();
        initializeWallet();
    }, [display_ong_selection, dataFinance]);
    const connectToWallet = async () => {
        const activeAccount = await wallet!.client.getActiveAccount();
        if (activeAccount) {
            setUserAddress(activeAccount.address);
        } else {
            await wallet!.requestPermissions({
                network: network
            });
            let tmp = await wallet!.getPKH();
            setUserAddress(tmp);
        }
    };

    const disconnect = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await wallet!.clearActiveAccount();
        await wallet!.disconnect();
        setUserAddress(null);
    };

    const getTokenID = async () => {
        try {
            const response = await axios.get(
                `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/`
            );
            const tokenID = Number(response.data.all_tokens);
            setToken_id(tokenID);
        } catch (e) {
            console.error(e);
        }
    };

    const handleMint = () => {
        mintNFT(currentNFTAddress, currentSelectedOng);
    };
    const getSmartContract = async () => {
            const contract = await Tezos.wallet.at(config.CONTRACT_ADDRESS);
            return contract;
        },
        /*** Function to mint the nft ***/
        mintNFT = async (url, currentSelectedONG) => {
            await disconnect();
            await connectToWallet();
            let tmpNbTokenMinted = nbTokenMinted + 1;
            setNbTokenMinted(tmpNbTokenMinted);
            const contract = await getSmartContract();
            url = char2Bytes(url);
            const activeAccount = await wallet!.client.getActiveAccount();
            setUserAddress(activeAccount!.address);

            const querySnapshotWL = await getDocs(ambassadorCollection);
            const ambassadorList = querySnapshotWL.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            const querySnapshotSales = await getDocs(salesCollection);
            const salesStatus = querySnapshotSales.docs[0].data();

            let is_ambassador = false;
            ambassadorList.map((user: ambassadorDocument) => {
                if (user.formData!.adresseWallet == activeAccount!.address) {
                    is_ambassador = true;
                    return;
                }
            });

            let normal_sales_open = salesStatus.status;
            let price_transaction = 1000;

            if (is_ambassador)
                price_transaction = 0;
            
            try {
                const op = await contract.methods
                    .big_boi_mint(
                        activeAccount!.address,
                        nftToMint,
                        price_transaction * config.TEZOS_CONVERTER,
                        MichelsonMap.fromLiteral({ "": url }),
                        normal_sales_open,
                        currentSelectedONG,
                        token_id
                    )
                    .send({ amount: price_transaction });

                await op.confirmation(3);
                getTransactionsInformations();
                SnackbarContext!.showSnackbar(
                    "Successful transaction!",
                    SnackbarType.Success
                );
                return op;
            } catch (error) {
                SnackbarContext!.showSnackbar(
                    "Transaction failed",
                    SnackbarType.Error
                );
            }
        };

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString().slice(0, 5));
            setDay(new Date().toISOString().slice(0, 10));
            getStatusSales();
        }, 1000);
        return () => clearInterval(timer);
    }, [time, day]);
    return (
        <div className="bg-wood-bg bg-no-repeat bg-cover p-4 h-1000-px">
            <div className="relative top-48 h-96">
                <div className="text-center text-white get-typo">
                    GET YOUR WILDIAN
                </div>
                <div className="text-center body-typo text-white flex-col">
                    Each pillar allows you to contribute to a different
                    association. Which one will you choose?
                </div>
                <div className="explanationPart nft-global-frame flex justify-evenly items-stretch text-white mt-12 mb-10">
                    <Wildians
                        image={"/img/v2/visuels/Deer.png"}
                        title="Deer_3D"
                        pillar="ENVIRONNEMENT"
                        description="With the deer contribute directly to the environnement ONG(s)."
                        nft_adress={config.DEER_NFT}
                        ong_list={deerONG}
                        nft_sold={dataFinance[0].value}
                        set_display_ong_selection={setDisplay_ong_selection}
                        display_ong_selection={display_ong_selection}
                    />
                    <Wildians
                        image={"/img/v2/visuels/Wolf.png"}
                        title="Wolf_3D"
                        pillar="SOCIETY"
                        description="With the wolf contribute directly to the society ONG(s)."
                        nft_adress={config.WOLF_NFT}
                        ong_list={wolfONG}
                        nft_sold={dataFinance[1].value}
                        set_display_ong_selection={setDisplay_ong_selection}
                        display_ong_selection={display_ong_selection}
                    />
                    <Wildians
                        image={"/img/v2/visuels/Bull.png"}
                        title="Bull_3D"
                        pillar="ECONOMY"
                        description="With the bull contribute directly to the economy ONG(s)."
                        nft_adress={config.BULL_NFT}
                        ong_list={bullONG}
                        nft_sold={dataFinance[2].value}
                        set_display_ong_selection={setDisplay_ong_selection}
                        display_ong_selection={display_ong_selection}
                    />
                </div>

                <div className="bottom-buttons">
                    <button
                        className="take-the-test-button md:uppercase default-connexion hover:connexion body-highlight-typo text-greeny md:whitespace-nowrap md:hover:text-greenkaki"
                        type="button"
                    >
                        Take the test
                    </button>
                    <button
                        onClick={() => {
                            handleMint();
                        }}
                        className="mint-button text-white md:cursor-pointer btn-layout btn-style body-highlight-typo hover:get-hover "
                        type="button"
                        disabled={!isStatusOpen}
                    >
                        {!isStatusOpen ? "Sells are currently closed" : "Mint"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BottomPart;
