import React from "react";
import axios from "axios";
import * as config from "../../../config/config.js";
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import Layout from "components/AdminDashBoard/Layout.js";
import { Component } from "react/cjs/react.production.min.js";
import FinanceStatsGrid from "components/AdminDashBoard/FinanceStatsGrid.js";
import OrganisationRepartition from "components/AdminDashBoard/OrganisationRepartition.js";

const firebaseConfig = {
    apiKey: `${config.GCPAPIKEY}`,
    authDomain: `${config.GCPAUTHDOMAIN}`,
    databaseURL: `${config.GCPDATABASEURL}`,
    projectId: `${config.GCPPROJECTID}`,
    storageBucket: `${config.GCPSTORAGEBUCKET}`,
    messagingSenderId: `${config.GCPMESSAGINGSENDERID}`,
    appId: `${config.GCPAPPID}`
};

export default function Admin() {
    // Display items in a list with add button on each items
    const [nbrToken, setNbrToken] = React.useState();
    const [nbNFTConnectedAdress, setNbNFTConnectedAdress] = React.useState();
    const [clientsAddress, setClientsAddress] = React.useState([]);
    const [userAddress, setUserAddress] = React.useState("");
    const [userNFTs, setUserNFTs] = React.useState([]);
    const [listUsers, setListUsers] = React.useState([]);
    const [tezosAmount, setTezosAmount] = React.useState(0);
    const [numberWallets, setNumberWallets] = React.useState(0);
    const [dataFinance, setDataFinance] = React.useState([
        { name: "ENVIRONMENT", value: 0 },
        { name: "SOCIETY", value: 0 },
        { name: "ECONOMY", value: 0 }
    ]);
    const app = initializeApp(firebaseConfig);
    const functions = getFunctions(app);
    functions.region = config.BUCKET_REGION;
    const countWallets = httpsCallable(functions, "countWallets");
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
        let tmpUsers = [];
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
                    tmpUsers.push(data_value.address);
                }
            }
        });
        setClientsAddress(tmp);
        setUserNFTs(wallets);
        setTezosAmount(tmpAmount);
        setListUsers(tmpUsers);
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

    const fetchData = async () => {
        try {
            for (let j = 0; j < listUsers.length; j++) {
                const response = await axios.get(
                    `https://api.ghostnet.tzkt.io/v1/tokens/balances?account=${listUsers[j]}`
                );
                for (let i = 0; i < response["data"].length; i++) {
                    if (response["data"][i]["token"]["metadata"] == null)
                        continue;
                    else {
                        if (
                            response["data"][i]["token"]["metadata"]["name"] ==
                            "BICHE"
                        ) {
                            setDataFinance((prevState) => {
                                const newData = [...prevState];
                                newData[0].value = newData[0].value + 1;
                                return newData;
                            });
                        }
                        if (
                            response["data"][i]["token"]["metadata"]["name"] ==
                            "WOLF"
                        ) {
                            setDataFinance((prevState) => {
                                const newData = [...prevState];
                                newData[1].value = newData[1].value + 1;
                                return newData;
                            });
                        }
                        if (
                            response["data"][i]["token"]["metadata"]["name"] ==
                            "BULL"
                        ) {
                            setDataFinance((prevState) => {
                                const newData = [...prevState];
                                newData[2].value = newData[2].value + 1;
                                return newData;
                            });
                        }
                    }
                }
            }
        } catch (e) {
            console.error(e);
        }
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
            fetchData();
        }
    }, []);

    return (
        <>
            <Layout>
                <p className="text-gray-700 text-3xl mb-16 font-bold">
                    Finance
                </p>
                <FinanceStatsGrid />
                <OrganisationRepartition data={dataFinance} />
            </Layout>
        </>
    );
}
