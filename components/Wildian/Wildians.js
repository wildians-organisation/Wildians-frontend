import React from "react";
import Image from "next/image";
import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import * as config from "../../config/config.js";
import { char2Bytes } from "@taquito/tzip16";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
import axios from "axios";
import ModalONG from "./ModalONG.js";
import { firestore } from "firebaseConfig.js";
import {collection,onSnapshot} from "firebase/firestore";

const nftToMint = 1;

const network = { type: NetworkType.GHOSTNET };

function Wildians(Wildians) {
    const [wallet, setWallet] = React.useState({});

    const [showModal, setShowModal] = React.useState(false);
    const [token_id, setToken_id] = React.useState(-1);

    const [userAddress, setUserAddress] = React.useState("");
    const [Tezos, setTezos] = React.useState(new TezosToolkit(config.RPC_URL));
    const statusSaleCollection = collection(firestore, "sales");
    const [statusSaleList, setStatusSaleList] = React.useState([]);
    const [isStatusOpen, setIsStatusOpen] = React.useState(false);
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

    const getStatusSales = async () => {
        onSnapshot(statusSaleCollection, (snapshot) => {
            const statusSales = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                const { whitelistStatus, status } = data;
                statusSales.push({ id: doc.id, whitelistStatus, status });
            });
    
            setStatusSaleList(statusSales);
    
            if (statusSales.length > 0) {
                const firstStatusSale = statusSales[0];
                setIsStatusOpen(firstStatusSale.status === "open");
            }
        });
    };

    // Function to open the modal
    const openModal = () => {
        setShowModal(true);
    };
    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
    };

    React.useEffect(() => {
        (async () => {
            const _wallet = new BeaconWallet({ name: "Demo" });
            setWallet(_wallet);
            Tezos.setWalletProvider(_wallet);
        })();
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("beacon:accounts")) {
                setUserAddress(
                    JSON.parse(localStorage.getItem("beacon:accounts"))[0]
                        .address
                );
            }
            setToken_id(getTokenID());
        } else {
            connectToWallet();
            setToken_id(getTokenID());
        }

        getStatusSales()
        .then((statusSales) => {
            // Find the appropriate status sale based on your logic
            if (statusSales.length > 0) {
              const firstStatusSale = statusSales[0];
              setIsStatusOpen(firstStatusSale.status == "open");
            }
          })
          .catch((error) => {
            console.error("Error fetching status sales:", error);
          });

    }, []);

    /*** Function to connect to the wallet ***/
    const connectToWallet = async () => {
        const activeAccount = await wallet.client.getActiveAccount();
        if (activeAccount) {
            setUserAddress(activeAccount.address);
        } else {
            await wallet.requestPermissions({
                network: network
            });
            let tmp = await wallet.getPKH();
            setUserAddress(tmp);
        }
    };

    /*** Function to disconnect to the wallet ***/
    const disconnect = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await wallet.clearActiveAccount();
        await wallet.disconnect();
        setUserAddress(null);
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
            const contract = await getSmartContract();
            url = char2Bytes(url);
            const activeAccount = await wallet.client.getActiveAccount();
            console.log(activeAccount.address);
            //const op = await contract.methods.mint(config.WALLET_ADRESS, nftToMint, MichelsonMap.fromLiteral({ '': url }), token_id).send();
            const op = await contract.methods
                .big_boi_mint(
                    activeAccount.address,
                    nftToMint,
                    1000 * config.TEZOS_CONVERTER,
                    MichelsonMap.fromLiteral({ "": url }),
                    selectedONG,
                    token_id
                )
                .send({ amount: 1000 });
            return await op.confirmation(3);
        };

    return (
        <div className="flex flex-col justify-end items-center w-4/12">
            <Image
                src={Wildians.image}
                alt={Wildians.title}
                width={200}
                height={250}
            />
            <div className="text-center mt-4 w-5/12 text-xs md:text-base">
                {Wildians.pillar}
            </div>
            <div className="text-center mt-4 w-5/12 text-xs md:text-base">
                {Wildians.description}
            </div>

            <button
                onClick={openModal}
                className="mintNFT text-gray-900 group flex rounded-full items-center px-2 py-2 md:h-min md:text-sm md:text-greenkaki md:bg-greeny md:hover:bg-greenkaki md:hover:text-greeny  md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded-full md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150 md:whitespace-nowrap "
                type="button"
                disabled={!isStatusOpen}
            >
                {isStatusOpen ? ("Select an ONG") : ("Not available")}
            </button>
            <ModalONG
                isOpen={showModal}
                onClose={closeModal}
                onMint={mintNFT}
                Wildians={Wildians}
            >
                {" "}
            </ModalONG>
        </div>
    );
}
export default Wildians;
