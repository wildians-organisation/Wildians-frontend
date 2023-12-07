import React, { useContext } from "react";
import axios from "axios";
import * as config from "../../config/config";
import Wildians, {
    StatusSale,
    WhitelistDocument
} from "./../../components/Wildian/Wildians";
import { firestore } from "../../firebaseConfig";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import { NetworkType } from "@airgap/beacon-sdk";
import { char2Bytes } from "@taquito/tzip16";
import SnackbarService, {
    SnackbarType
} from "../SnackbarService/SnackbarService";

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
    const [showModal, setShowModal] = React.useState(false);
    const [day, setDay] = React.useState(new Date().toISOString().slice(0, 10));
    const SnackbarContext = useContext(SnackbarService);

    const salesCollection = collection(firestore, "sales");
    const whitelistCollection = collection(firestore, "whitelist");
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
    const fetchWhitelistData = async () => {
        const querySnapshot = await getDocs(whitelistCollection);
        const documents = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        let tmpWhitelist: string[] = [];
        documents.forEach((doc: WhitelistDocument) => {
            const whitelistAddress = doc.formData!["adresseWallet"];
            tmpWhitelist.push(whitelistAddress);
        });
        setWhitelistedUsers(tmpWhitelist);
        return tmpWhitelist;
    };

    function handleWhitelistScheduledOpening(sales) {
        if (sales["whitelistOpenDay"] !== "") {
            if (
                isOpenDay(sales["whitelistOpenDay"], sales["whitelistOpenTime"])
            )
                setIsStatusOpen(true);
            else if (!sales["status"]) setIsStatusOpen(false);
        } else setIsStatusOpen(sales["whitelistStatus"] || sales["status"]);
    }

    function handleScheduledOpening(sales) {
        fetchWhitelistData().then((address) => {
            if (sales["openDay"] !== "") {
                setIsStatusOpen(isOpenDay(sales["openDay"], sales["openTime"]));
            } else setIsStatusOpen(sales["status"]);

            if (address.includes(userAddress!)) {
                handleWhitelistScheduledOpening(sales);
            }
        });
    }
    const getStatusSales = async () => {
        onSnapshot(salesCollection, (snapshot) => {
            const statusSales: StatusSale[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                const {
                    whitelistStatus,
                    whitelistOpenDay,
                    whitelistOpenTime,
                    status,
                    openDay,
                    openTime
                } = data;
                statusSales.push({
                    id: doc.id,
                    whitelistStatus,
                    whitelistOpenDay,
                    whitelistOpenTime,
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

    function showSuccessModal() {
        setShowModal(true);
    }

    const disconnect = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await wallet!.clearActiveAccount();
        await wallet!.disconnect();
        setUserAddress(null);
    };

    const Modal = () => {

        const closeModal = function() {
            setTimeout(() => {
                console.log("Closing modal");
            }, 1000);
            setShowModal(false);
        };
        

        return (
            <div className="modal-overlay">
                <div className="modal">
                    <button className="modal-close" onClick={() => closeModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white">
                        <path d="M5.50172 0.898279C4.89819 0.315373 4.08987 -0.00716997 3.25084 0.000120968C2.41181 0.00741191 1.60921 0.343953 1.0159 0.937259C0.422597 1.53057 0.0860556 2.33316 0.0787646 3.17219C0.0714737 4.01122 0.394017 4.81955 0.976923 5.42308L11.5145 15.9607L0.976923 26.4983C0.67129 26.7935 0.427507 27.1466 0.259798 27.537C0.0920892 27.9274 0.00381303 28.3473 0.000120823 28.7722C-0.00357139 29.1971 0.0773934 29.6185 0.238292 30.0117C0.399191 30.405 0.636801 30.7623 0.937258 31.0627C1.23771 31.3632 1.595 31.6008 1.98827 31.7617C2.38154 31.9226 2.80291 32.0036 3.22781 31.9999C3.6527 31.9962 4.0726 31.9079 4.46302 31.7402C4.85343 31.5725 5.20653 31.3287 5.50172 31.0231L16.0393 20.4855L26.5769 31.0231C27.1805 31.606 27.9888 31.9285 28.8278 31.9212C29.6668 31.9139 30.4694 31.5774 31.0627 30.9841C31.656 30.3908 31.9926 29.5882 31.9999 28.7492C32.0072 27.9101 31.6846 27.1018 31.1017 26.4983L20.5641 15.9607L31.1017 5.42308C31.6846 4.81955 32.0072 4.01122 31.9999 3.17219C31.9926 2.33316 31.656 1.53057 31.0627 0.937259C30.4694 0.343953 29.6668 0.00741191 28.8278 0.000120968C27.9888 -0.00716997 27.1805 0.315373 26.5769 0.898279L16.0393 11.4359L5.50172 0.898279Z" fill="white"/>
                    </svg>
                    </button>
                    <div className="modal-content">
                        <div className="modal-image">
                            <img src="/img/v2/visuels/Wolf.png" alt="Modal" />
                        </div>
                        <div className="modal-text">
                            <h1>Félicitation,
                                <br />
                                tu viens d’adopter Noa !
                            </h1> <br />
                            <p style={{ fontSize: '20px' }}>
                                <b>
                                    En faisant cela, tu soutiens l’association
                                    <span style={{ color: '#90E0D3' }}> {currentSelectedOng}</span>.
                                </b>
                            </p> < br/>
                            <p >Rends toi sur la page <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Collection</span> pour retrouver tous tes Wildians et rejoins ta nouvelle 
                            < br/> famille sur les réseaux:
                            </p>
                            <div className="logo-container">
                                <img src="/img/v2/visuels/Wolf.png" alt="Discord Logo" className="logo" />
                                <img src="/img/v2/visuels/Wolf.png" alt="Instagram Logo" className="logo" />
                                <img src="/img/v2/visuels/Wolf.png" alt="X Logo" className="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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
        showSuccessModal();
        // mintNFT(currentNFTAddress, currentSelectedOng);
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

            const querySnapshotWL = await getDocs(whitelistCollection);
            const whitelistedUsers = querySnapshotWL.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            const querySnapshotSales = await getDocs(salesCollection);
            const salesStatus = querySnapshotSales.docs[0].data();

            let is_whitelisted = false;
            whitelistedUsers.map((user: WhitelistDocument) => {
                if (user.formData!.adresseWallet == activeAccount!.address) {
                    is_whitelisted = true;
                    return;
                }
            });

            let normal_sales_open = salesStatus.status;
            let WL_sales_open = salesStatus.whitelistStatus;
            
            //const op = await contract.methods.mint(config.WALLET_ADRESS, nftToMint, MichelsonMap.fromLiteral({ '': url }), token_id).send();
            try {
                const op = await contract.methods
                    .big_boi_mint(
                        WL_sales_open,
                        activeAccount!.address,
                        nftToMint,
                        1000 * config.TEZOS_CONVERTER,
                        is_whitelisted,
                        MichelsonMap.fromLiteral({ "": url }),
                        normal_sales_open,
                        currentSelectedONG,
                        token_id
                    )
                    .send({ amount: 1000 });

                await op.confirmation(3);
                
                showSuccessModal();
                getTransactionsInformations();
                // SnackbarContext!.showSnackbar(
                //     "Successful transaction!",
                //     SnackbarType.Success
                // );
                // TODO popup success message with specific css on top of the screen

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
                    {showModal && <Modal/>}
                </div>
            </div>
        </div>
    );
}

export default BottomPart;
