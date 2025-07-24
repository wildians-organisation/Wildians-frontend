import React, { useContext } from "react";
import Image from "next/image";
import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import * as config from "../../config/config";
import { char2Bytes } from "@taquito/tzip16";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
import axios from "axios";
import ModalONG from "./ModalONG";
import { firestore } from "../../firebaseConfig";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import SnackbarService, {
    SnackbarType
} from "../SnackbarService/SnackbarService";
import BottomPart from "../LandingPage/BottomPart";
const nftToMint = 1;

const network = { type: NetworkType.GHOSTNET as any };

export interface WhitelistDocument {
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

function Wildians(Wildians) {
    const [wallet, setWallet] = React.useState<BeaconWallet>();
    const SnackbarContext = useContext(SnackbarService);
    const [showModal, setShowModal] = React.useState(false);
    const [token_id, setToken_id] = React.useState(-1);
    const [nbTokenMinted, setNbTokenMinted] = React.useState(0);
    const [userAddress, setUserAddress] = React.useState<string | null>("");
    const [Tezos, setTezos] = React.useState(new TezosToolkit(config.RPC_URL));
    const [selectedONG, setSelectedONG] = React.useState("");
    const salesCollection = collection(firestore, "sales");
    const [statusSaleList, setStatusSaleList] = React.useState([]);
    const [isStatusOpen, setIsStatusOpen] = React.useState(false);
    const [time, setTime] = React.useState(
        new Date().toLocaleTimeString().slice(0, 5)
    );
    const [day, setDay] = React.useState(new Date().toISOString().slice(0, 10));
    const [whitelistedUsers, setWhitelistedUsers] = React.useState<string[]>(
        []
    );
    const whitelistCollection = collection(firestore, "whitelist");
    const deerONG = [
        "/img/v2/visuels/WWF.png",
        "/img/v2/visuels/Oceana.png",
        "/img/v2/visuels/Greenpeace.png"
    ];
    const wolfONG = [
        "/img/v2/visuels/Action against hunger.png",
        "/img/v2/visuels/Save the children.png",
        "/img/v2/visuels/Charity_ water.png"
    ];
    const bullONG = [
        "/img/v2/visuels/Amnesty International.png",
        "/img/v2/visuels/AIDS.png",
        "/img/v2/visuels/Wikimedia Found.png"
    ];
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
    function isOpenDay(openDay, openTime) {
        if (day > openDay || (day === openDay && time >= openTime)) {
            return true;
        }
        return false;
    }

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
        fetchWhitelistData().then((address: string[]) => {
            if (sales["openDay"] !== "") {
                setIsStatusOpen(isOpenDay(sales["openDay"], sales["openTime"]));
            } else setIsStatusOpen(sales["status"]);

            if (address.includes(userAddress!)) {
                handleWhitelistScheduledOpening(sales);
            }
        });
    }

    /*** Function to fetch whitelisted users ***/
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

    const handleModal = () => {
        setShowModal(!showModal);
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
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString().slice(0, 5));
            setDay(new Date().toISOString().slice(0, 10));
            getStatusSales();
        }, 1000);
        return () => clearInterval(timer);
    }, [time, day, userAddress]);

    /*** Function to connect to the wallet ***/
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

    /*** Function to disconnect to the wallet ***/
    const disconnect = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await wallet!.clearActiveAccount();
        await wallet!.disconnect();
        setUserAddress(null);
    };

    React.useEffect(() => {
        initializeWallet();
    }, []);

    const renderModal = () => {
        if (showModal) {
            return (
                <ModalONG
                    Wildians={Wildians}
                    isOpen={showModal}
                    onClose={handleModal}
                    onMint={mintNFT}
                    setONG={setSelectedONG}
                    ONG={selectedONG}
                    isStatusOpen={isStatusOpen}
                />
            );
        } else {
            return null;
        }
    };
    const renderBottompart = () => {
        if (showModal) {
            return <BottomPart />;
        } else {
            return null;
        }
    };
    const handleONGButtonClick = (item) => {
        var ONG_name = "";
        if (item == "/img/v2/visuels/WWF.png") {
            ONG_name = "WWF";
            Wildians.set_display_ong_selection([ONG_name, "", ""]);
        }
        if (item == "/img/v2/visuels/Oceana.png") {
            ONG_name = "Oceana";
            Wildians.set_display_ong_selection([ONG_name, "", ""]);
        }
        if (item == "/img/v2/visuels/Greenpeace.png") {
            ONG_name = "GreenPeace";
            Wildians.set_display_ong_selection([ONG_name, "", ""]);
        }
        if (item == "/img/v2/visuels/Action against hunger.png") {
            ONG_name = "Action Against Hunger";
            Wildians.set_display_ong_selection(["", ONG_name, ""]);
        }
        if (item == "/img/v2/visuels/Save the children.png") {
            ONG_name = "Save The Children";
            Wildians.set_display_ong_selection(["", ONG_name, ""]);
        }
        if (item == "/img/v2/visuels/Charity_ water.png") {
            ONG_name = "Charity: Water";
            Wildians.set_display_ong_selection(["", ONG_name, ""]);
        }
        if (item == "/img/v2/visuels/Amnesty International.png") {
            ONG_name = "Amnesty International";
            Wildians.set_display_ong_selection(["", "", ONG_name]);
        }
        if (item == "/img/v2/visuels/AIDS.png") {
            ONG_name = "AIDS";
            Wildians.set_display_ong_selection(["", "", ONG_name]);
        }
        if (item == "/img/v2/visuels/Wikimedia Found.png") {
            ONG_name = "Wikimedia Foundation (Wikipedia)";
            Wildians.set_display_ong_selection(["", "", ONG_name]);
        }
        setSelectedONG(ONG_name);
    };
    /*** Function to get the smart contract ***/
    const getSmartContract = async () => {
        const contract = await Tezos.wallet.at(config.CONTRACT_ADDRESS);
        return contract;
    },
        /*** Function to mint the nft ***/
        mintNFT = async (url, selectedONG) => {
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
                        selectedONG,
                        token_id
                    )
                    .send({ amount: 1000 });

                await op.confirmation(3);
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
    return (
        <div className="nft-frame">
            {Wildians.image === "/img/v2/visuels/taureau.jpg" ? (
                <div className="nft-frame-image-bull"></div>
            ) : Wildians.image === "/img/v2/visuels/cerf.jpg" ? (
                <div className="nft-frame-image-deer"></div>
            ) : Wildians.image === "/img/v2/visuels/loup.jpg" ? (
                <div className="nft-frame-image-wolf"></div>
            ) : Wildians.image === "/img/v2/visuels/taureau-grey.jpg" ? (
                <div className="nft-frame-image-bull-grey"></div>
            ) : Wildians.image === "/img/v2/visuels/loup-grey.jpg" ? (
                <div className="nft-frame-image-wolf-grey"></div>
            ) : Wildians.image === "/img/v2/visuels/cerf-grey.jpg" ? (
                <div className="nft-frame-image-deer-grey"></div>
            ) : null}
            <div className="nft-frame-below-img">
                <div className="nft-frame-name">{Wildians.name}</div>
                <div className="text-center body-highlight-typo text-white">
                    {Wildians.pillar}
                </div>
                <div className="nft-frame-adopted py-4">
                    {Wildians.nft_sold} adoptés
                </div>
                <div className="text-center body-italic-typo text-white">
                    {Wildians.ong}
                </div>
            </div>
        </div>
    );
}
export default Wildians;
