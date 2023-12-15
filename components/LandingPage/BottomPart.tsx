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
import Link from "next/link";
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
                const { status, openDay, openTime } = data;
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
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <button
                        className="modal-close"
                        onClick={() => setShowModal(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="white"
                        >
                            <path
                                d="M5.50172 0.898279C4.89819 0.315373 4.08987 -0.00716997 3.25084 0.000120968C2.41181 0.00741191 1.60921 0.343953 1.0159 0.937259C0.422597 1.53057 0.0860556 2.33316 0.0787646 3.17219C0.0714737 4.01122 0.394017 4.81955 0.976923 5.42308L11.5145 15.9607L0.976923 26.4983C0.67129 26.7935 0.427507 27.1466 0.259798 27.537C0.0920892 27.9274 0.00381303 28.3473 0.000120823 28.7722C-0.00357139 29.1971 0.0773934 29.6185 0.238292 30.0117C0.399191 30.405 0.636801 30.7623 0.937258 31.0627C1.23771 31.3632 1.595 31.6008 1.98827 31.7617C2.38154 31.9226 2.80291 32.0036 3.22781 31.9999C3.6527 31.9962 4.0726 31.9079 4.46302 31.7402C4.85343 31.5725 5.20653 31.3287 5.50172 31.0231L16.0393 20.4855L26.5769 31.0231C27.1805 31.606 27.9888 31.9285 28.8278 31.9212C29.6668 31.9139 30.4694 31.5774 31.0627 30.9841C31.656 30.3908 31.9926 29.5882 31.9999 28.7492C32.0072 27.9101 31.6846 27.1018 31.1017 26.4983L20.5641 15.9607L31.1017 5.42308C31.6846 4.81955 32.0072 4.01122 31.9999 3.17219C31.9926 2.33316 31.656 1.53057 31.0627 0.937259C30.4694 0.343953 29.6668 0.00741191 28.8278 0.000120968C27.9888 -0.00716997 27.1805 0.315373 26.5769 0.898279L16.0393 11.4359L5.50172 0.898279Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <div className="modal-content">
                        <div className="modal-image">
                            <img src="/img/v2/visuels/Wolf.png" alt="Modal" />
                        </div>
                        <div className="modal-text">
                            <h1>
                                Félicitation,
                                <br />
                                tu viens d’adopter Noa !
                            </h1>{" "}
                            <br />
                            <p style={{ fontSize: "20px" }}>
                                <b>
                                    En faisant cela, tu soutiens l’association
                                    <span style={{ color: "#90E0D3" }}>
                                        {" "}
                                        {currentSelectedOng}
                                    </span>
                                    .
                                </b>
                            </p>{" "}
                            <br />
                            <p>
                                Rends toi sur la page{" "}
                                <Link
                                    href="nft-collection"
                                    style={{
                                        fontWeight: "bold",
                                        textDecoration: "underline",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => setShowModal(false)}
                                >
                                    Collection
                                </Link>{" "}
                                pour retrouver tous tes Wildians et rejoins ta
                                nouvelle
                                <br /> famille sur les réseaux:
                            </p>
                            <div className="logo-container">
                                <a href="https://discord.gg/grjatzrcKp">
                                    <svg
                                        className="headerDiscord default-logo-fill-footer hover:turquoise"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                    >
                                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/wildians/">
                                    <svg
                                        className="headerInsta default-logo-fill-footer hover:turquoise"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/Wildians_off">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="30"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.2262 8.8875L19.8739 0H18.0617L11.4211 7.71689L6.1173 0H0L8.02038 11.6693L0 20.9892H1.81238L8.82498 12.8399L14.4262 20.9892H20.5435L12.2257 8.8875H12.2262ZM9.74386 11.7721L8.93123 10.6101L2.46541 1.36396H5.24912L10.4671 8.8259L11.2797 9.9879L18.0625 19.6873H15.2788L9.74386 11.7726V11.7721Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
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
            let WL_sales_open = salesStatus.whitelistStatus;
            let price_transaction = 1000 * config.TEZOS_CONVERTER;
            let send_amount = 1000;
            if (is_ambassador) {
                price_transaction = 1 * config.TEZOS_CONVERTER;
                send_amount = 1;
            }
            try {
                const op = await contract.methods
                    .big_boi_mint(
                        activeAccount!.address,
                        nftToMint,
                        price_transaction,
                        MichelsonMap.fromLiteral({ "": url }),
                        normal_sales_open,
                        currentSelectedONG,
                        token_id
                    )
                    .send({ amount: send_amount });

                await op.confirmation(3);
                showSuccessModal();
                getTransactionsInformations();
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
    }, [time, day, showModal]);
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
                    {showModal && <Modal />}
                </div>
            </div>
        </div>
    );
}

export default BottomPart;
