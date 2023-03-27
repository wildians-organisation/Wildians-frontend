import React from "react";
import axios from "axios";
import * as config from "../../../config/config.js";
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import Layout from "components/AdminDashBoard/Layout.js";
import { Component } from "react/cjs/react.production.min.js";
import FinanceStatsGrid from "components/AdminDashBoard/FinanceStatsGrid.js";
import OrganisationRepartition from "components/AdminDashBoard/OrganisationRepartition.js";
import { IoConstructOutline } from "react-icons/io5";

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

    const getContractInformations = async () => {
        const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history`
        );
        const nbrNftMinted = response.data.length;
        setNbrToken(nbrNftMinted - 1);
        let tmp = [];
        let tmpAmount = 0;
        let totalTransac = 0;
        let totalClient = 0;
        var wallets = new Map();
        var lastTransacWallet = new Map();
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
                    totalTransac = totalTransac + 1;
                    lastTransacWallet.set(
                        data_value.address,
                        element.timestamp
                    );
                } else {
                    wallets.set(data_value.address, 1);
                    totalTransac = totalTransac + 1;
                    totalClient = totalClient + 1;
                    lastTransacWallet.set(
                        data_value.address,
                        element.timestamp
                    );
                }
            }
        });
        setClientsAddress(tmp);
        setUserNFTs(wallets);
        setTezosAmount(tmpAmount);
        setTransacAmount(totalTransac);
        setClientAmount(totalClient);
        setlastTransacWallets(lastTransacWallet);
    };

    const fetchData = async (userAddressToFetch) => {
        console.log("hello");
        console.log(userAddressToFetch);
        try {
            for (let j = 0; j < listUsers.length; j++) {
            const response = await axios.get(
                `https://api.ghostnet.tzkt.io/v1/tokens/balances?account=${listUsers[j]}`
            );
            console.log(response.status);
            for (let i = 0; i < response["data"].length; i++) {
                if (response["data"][i]["token"]["metadata"] == null) continue;
                else {
                    console.log(
                        response["data"][i]["token"]["metadata"]["name"]
                    );
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

    React.useEffect(() => {
        getContractInformations();
        console.log(userNFTs);
        const fetchDataForUserNFTs = async () => {
            await Promise.all(
                Array.from(userNFTs).forEach(async (addr, id) => {
                    for (let j = 0; j < 2; j++) {
                        await fetchData(addr[0]);
                        console.log(addr[0]);
                        console.log(j);
                    }
                })
            );
            console.log(dataFinance);
        };

        fetchDataForUserNFTs();
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
