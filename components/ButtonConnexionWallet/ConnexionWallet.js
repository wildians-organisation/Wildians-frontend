import React, { useContext } from "react";
import SnackbarService from "../SnackbarService/SnackbarService";
import ConnectedButton from "./ConnectedButton";
import { TezosToolkit } from "@taquito/taquito";
import { NetworkType } from "@airgap/beacon-sdk";
import { BeaconWallet } from "@taquito/beacon-wallet";
import * as config from "../../config/config.js";
import Link from "next/link";
import { firestore } from "../../firebaseConfig";
import {
    collection,
    addDoc,
    query,
    limit,
    where,
    getDocs,
    updateDoc,
    doc
} from "firebase/firestore";

async function addWallet(walletAddress) {
    const userCollection = collection(firestore, "user");
    const now = new Date();

    const userQuery = query(
        collection(firestore, "user"),
        where("walletAddress", "==", walletAddress),
        limit(1)
    );
    const snapshot = await getDocs(userQuery);

    if (snapshot.empty) {
        addDoc(userCollection, {
            walletAddress: walletAddress,
            firstConnection: now.getTime(),
            lastConnection: now.getTime()
        });
    } else {
        snapshot.forEach((snap) => {
            updateDoc(doc(firestore, "user/" + snap.id), {
                lastConnection: new Date().getTime()
            });
        });
    }
}

const network = { type: NetworkType.GHOSTNET };

/*** Function to connect to wallet, with useState to avoid creating multiple instances ***/
export default function ConnexionWallet() {
    const [wallet, setWallet] = React.useState({});
    const [Tezos, setTezos] = React.useState(new TezosToolkit(config.RPC_URL));
    const [userAddress, setUserAddress] = React.useState(null);

    const SnackbarContext = useContext(SnackbarService);

    React.useEffect(() => {
        (async () => {
            const initialUserAdress = localStorage.getItem("userAdress");
            setUserAddress(initialUserAdress);
            if (initialUserAdress !== null) {
                addWalletToFirebase(initialUserAdress);
            }
            const _wallet = new BeaconWallet({ name: "Demo" });
            setWallet(_wallet);
            Tezos.setWalletProvider(_wallet);
        })();
    }, []);

    /*** Function to add wallet adress to firebase ***/
    const addWalletToFirebase = async (walletAddress) => {
        try {
            const response = await addWallet(walletAddress);
        } catch (e) {
            SnackbarContext.showSnackbar("Wallet connection failure", "error");
            console.error(e);
        }
    };

    /*** Function to connect to the wallet ***/
    const connectToWallet = async () => {
        const activeAccount = await wallet.client.getActiveAccount();
        if (activeAccount) {
            setUserAddress(activeAccount.address);
            localStorage.setItem("userAdress", activeAccount.address);
        } else {
            await wallet.requestPermissions({
                network: network
            });
            let tmp = await wallet.getPKH();
            setUserAddress(tmp);
            localStorage.setItem("userAdress", tmp);
            addWalletToFirebase(tmp);
            SnackbarContext.showSnackbar(
                "Successful wallet connection!",
                "success"
            );
        }
    };

    /*** Function to disconnect to the wallet ***/
    const disconnect = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await wallet.clearActiveAccount();
        await wallet.disconnect();
        localStorage.removeItem("userAdress");
        setUserAddress(null);
        SnackbarContext.showSnackbar("Successful wallet logout!", "success");
    };

    /*** Render ***/
    return (
        <div className="md:flex items-center md:w-min">
            <div
                onClick={() => connectToWallet()}
                className="flex items-center md:uppercase btn-layout default-connexion hover:connexion body-highlight-typo text-greeny md:whitespace-nowrap md:hover:text-greenkaki"
                /** className="connexionWallet group flex items-center px-2 py-2 md:h-min md:text-sm  md:text-greenkaki md:bg-greeny md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded-full md:shadow md:hover:shadow-lg md:hover:bg-greenkaki md:hover:text-greeny md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150 md:whitespace-nowrap"**/
                type="button"
            >
                {!userAddress ? (
                    <div>Connect Your Wallet</div>
                ) : (
                    <ConnectedButton
                        walletAdress={userAddress}
                        disconnect={disconnect}
                    />
                )}
            </div>
            {userAddress && (
                <Link className="text-white" href="nft-collection">
                    <div className="text-gray-900 group flex rounded-md cursor-pointer items-center px-2 py-2 md:whitespace-nowrap md:h-min md:text-sm md:text-greenkaki md:bg-greeny md:hover:bg-greenkaki md:hover:text-greeny md:rounded-full md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150">
                        My collection
                    </div>
                </Link>
            )}
        </div>
    );
}
