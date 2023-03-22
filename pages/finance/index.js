import React from "react";
import axios from "axios";
import * as config from "../../config/config.js";
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import Layout from "../../components/AdminDashBoard/Layout";
import { Component } from "react/cjs/react.production.min.js";

const firebaseConfig = {
    apiKey: "AIzaSyBSHruPb10RXmD9pV71vsoXFhltiUztJME",
    authDomain: "aerobic-guide-364710.firebaseapp.com",
    databaseURL:
        "https://aerobic-guide-364710-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "aerobic-guide-364710",
    storageBucket: "aerobic-guide-364710.appspot.com",
    messagingSenderId: "56985705002",
    appId: "1:56985705002:web:add456f54103a40817c153",
    measurementId: "G-22ZZYQGFRS"
};

export default function Admin() {
    // Display items in a list with add button on each items
    const [nbrToken, setNbrToken] = React.useState();
    const [nbNFTConnectedAdress, setNbNFTConnectedAdress] = React.useState();
    const [clientsAddress, setClientsAddress] = React.useState([]);
    const [userAddress, setUserAddress] = React.useState("");
    const [userNFTs, setUserNFTs] = React.useState([]);
    const [tezosAmount, setTezosAmount] = React.useState(0);
    const [numberWallets, setNumberWallets] = React.useState(0);
    const app = initializeApp(firebaseConfig);
    const functions = getFunctions(app);
    functions.region = config.BUCKET_REGION;
    const countWallets = httpsCallable(
        functions,
        "statisticsController-countWallets"
    );
    /*** Function to add wallet adress to firebase ***/
    const getWallets = async () => {
        try {
            const response = await countWallets();
            setNumberWallets(response.data);
        } catch (e) {
            console.error(e);
        }
    };
    // Get informations about the smartcontract with the tzkt api
    const getContractInformations = async () => {
        const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history`
        );
        const nbrNftMinted = response.data.length;
        setNbrToken(nbrNftMinted - 1);
        let tmp = [];
        let tmpAmount = 0;
        var wallets = new Map();
        response.data.forEach((element) => {
            if (element.operation.type != "origination") {
                let data_value = element.operation.parameter.value;

                tmpAmount += data_value.cost / config.TEZOS_CONVERTER;
                tmp.push(data_value.address);
                if (wallets.has(data_value.address)) {
                    wallets.set(
                        data_value.address,
                        wallets.get(data_value.address) + 1
                    );
                } else {
                    wallets.set(data_value.address, 1);
                }
            }
        });
        setClientsAddress(tmp);
        setUserNFTs(wallets);
        setTezosAmount(tmpAmount);
    };

    // Get the number of NFTs of the wallet connected
    const getNFTMintByUser = async (userAdress) => {
        const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history`
        );
        var nb = 0;
        response.data.forEach((element) => {
            if (
                element.operation.type !== "origination" &&
                element.operation.parameter.value.address === userAdress
            ) {
                nb = nb + 1;
            }
        });
        setNbNFTConnectedAdress(nb);
    };

    React.useEffect(async () => {
        if (
            typeof window !== "undefined" &&
            window.localStorage.getItem("beacon:accounts")
        ) {
            setUserAddress(
                JSON.parse(localStorage.getItem("beacon:accounts"))[0].address
            );
            getContractInformations();
            getNFTMintByUser(
                JSON.parse(localStorage.getItem("beacon:accounts"))[0].address
            );
            getWallets();
        }
    }, []);

    const listItems2 = Array.from(userNFTs).map((addr, id) => (
        <li key={id}>
            {addr[0]} : {addr[1]}
        </li>
    ));

    return (
        <>
            <div className="bg-gray-100">
                <Layout>
                    <p className="text-gray-700 text-3xl mb-16 font-bold">
                        Finance
                    </p>

                    <div className="grid lg:grid-cols-3 gap-5 mb-16">
                        <div className="rounded bg-white h-40 shadow-sm">
                            Tezos Generated: {tezosAmount}
                        </div>
                        <div className="rounded bg-white h-40 shadow-sm">
                            Tezos for us: {tezosAmount * config.WILDIANS_PART}
                        </div>
                        <div className="rounded bg-white h-40 shadow-sm">
                            {" "}
                            Tezos donated to association:{" "}
                            {tezosAmount * config.ASSOCIATION_PART}
                        </div>
                    </div>

                    <div className="grid col-1 bg-white h-96 shadow-sm">
                        <div className="rounded bg-white h-40 shadow-sm">
                            {" "}
                            Number of token: {nbrToken}
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    );
}
