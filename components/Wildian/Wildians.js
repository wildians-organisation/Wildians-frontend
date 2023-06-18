import React from "react";
import Image from "next/image";
import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import * as config from "../../config/config.js";
import { char2Bytes } from "@taquito/tzip16";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
import axios from "axios";
import ModalONG from "./ModalONG.js";
import { firestore } from "../../firebaseConfig";
import { collection, onSnapshot, getDocs } from "firebase/firestore";

const nftToMint = 1;

const network = { type: NetworkType.GHOSTNET };

function Wildians(Wildians) {
    const [wallet, setWallet] = React.useState({});

    const [showModal, setShowModal] = React.useState(false);
    const [token_id, setToken_id] = React.useState(-1);
    const [nbTokenMinted, setNbTokenMinted] = React.useState(0);
    const [userAddress, setUserAddress] = React.useState("");
    const [Tezos, setTezos] = React.useState(new TezosToolkit(config.RPC_URL));
    const [selectedONG, setSelectedONG] = React.useState("");
    const salesCollection = collection(firestore, "sales");
    const [statusSaleList, setStatusSaleList] = React.useState([]);
    const [isStatusOpen, setIsStatusOpen] = React.useState(false);
    const [time, setTime] = React.useState(new Date().toLocaleTimeString().slice(0,5));
    const [day, setDay] = React.useState(new Date().toISOString().slice(0, 10));
    const [whitelistedUsers,setWhitelistedUsers] = React.useState([]);
    const whitelistCollection = collection(firestore, "whitelist");

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
        if (day > openDay || (day === openTime && time >= openTime)) {
            return true
        }
        return false
    }

    function handleScheduledOpening(sales) {
        fetchWhitelistData().then((address) => {
            if (sales['openDay'] !== "") 
                setIsStatusOpen(isOpenDay(sales['openDay'], sales['openTime']))
            else
                setIsStatusOpen(sales["status"])
            if (address.includes(userAddress)) {
                if (sales['whitelistOpenDay'] !== "") {
                    if (isOpenDay(sales['whitelistOpenDay'], sales['whitelistOpenTime']))
                        setIsStatusOpen(true)
                    else if (!sales["status"])
                        setIsStatusOpen(false)
                }
                else
                    setIsStatusOpen(sales["whitelistStatus"] || sales["status"])
            }
        })
    }
    
    /*** Function to fetch whitelisted users ***/
    const fetchWhitelistData = async () => {
        const querySnapshot = await getDocs(whitelistCollection);
        const documents = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        let tmpWhitelist = []
        documents.forEach((doc)=> {
            const whitelistAddress = doc.formData["adresseWallet"]
            tmpWhitelist.push(whitelistAddress)
        })
        setWhitelistedUsers(tmpWhitelist);
        return tmpWhitelist
    };

    const getStatusSales = async () => {
        onSnapshot(salesCollection, (snapshot) => {
            const statusSales = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                const { whitelistStatus, whitelistOpenDay, whitelistOpenTime,status, openDay, openTime } = data;
                statusSales.push({ id: doc.id, whitelistStatus,  whitelistOpenDay, whitelistOpenTime,status, openDay, openTime});
            });

            if (!userAddress)
                setIsStatusOpen(false)
        
            else if (statusSales.length > 0)
                handleScheduledOpening(statusSales[0])
            
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
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString().slice(0,5));
            setDay(new Date().toISOString().slice(0, 10))
            getStatusSales()
          }, 1000);

        // Nettoyer la mise à jour lors du démontage du composant
        return () => clearInterval(timer);
    }, [time, day]);

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
            let tmpNbTokenMinted = nbTokenMinted + 1;
            setNbTokenMinted(tmpNbTokenMinted);
            const contract = await getSmartContract();
            url = char2Bytes(url);
            const activeAccount = await wallet.client.getActiveAccount();
            setUserAddress(activeAccount.address);

            const querySnapshotWL = await getDocs(whitelistCollection);
            const whitelistedUsers = querySnapshotWL.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            const querySnapshotSales = await getDocs(salesCollection);
            const salesStatus = querySnapshotSales.docs[0].data();

            let is_whitelisted = false;
            whitelistedUsers.map((user) => {
                if (user.formData.adresseWallet == activeAccount.address) {
                    is_whitelisted = true;
                    return;
                }
            });

            let normal_sales_open = salesStatus.status;
            let WL_sales_open = salesStatus.whitelistStatus;
            //const op = await contract.methods.mint(config.WALLET_ADRESS, nftToMint, MichelsonMap.fromLiteral({ '': url }), token_id).send();
            const op = await contract.methods
                .big_boi_mint(
                    WL_sales_open,
                    activeAccount.address,
                    nftToMint,
                    1000 * config.TEZOS_CONVERTER,
                    is_whitelisted,
                    MichelsonMap.fromLiteral({ "": url }),
                    normal_sales_open,
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
                {Wildians.description} {selectedONG}.
            </div>

            <button
                onClick={openModal}
                className="mintNFT text-gray-900 group flex rounded-full items-center px-2 py-2 md:h-min md:text-sm md:text-greenkaki md:bg-greeny md:hover:bg-greenkaki md:hover:text-greeny  md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded-full md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150 md:whitespace-nowrap "
                type="button"
                disabled={!isStatusOpen}
            >
                {isStatusOpen ? "Select an ONG" : "Not available"}
            </button>
            <ModalONG
                isOpen={showModal}
                onClose={closeModal}
                onMint={mintNFT}
                Wildians={Wildians}
                setONG={setSelectedONG} 
            >
                {" "}
            </ModalONG>
            <div className="text-center mt-4 w-5/12 text-xs md:text-base">
                {Wildians.nft_sold}  already sold !
            </div>
        </div>
        
    );
}
export default Wildians;
