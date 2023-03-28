import React from "react";
import axios from "axios";
import * as config from "../../config/config.js";
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import Layout from "../../components/AdminDashBoard/Layout";
import TopCards from "components/AdminDashBoard/TopCards.js";
import DashboardStatsGrid from "components/AdminDashBoard/DashboardStatsGrid.js";
import TransactionChart from "components/AdminDashBoard/TransactionChart.js";
import RecentOrders from "components/AdminDashBoard/RecentOrders.js";

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
    const [tezosAmount, setTezosAmount] = React.useState(0);
    const [transacAmount, setTransacAmount] = React.useState(0);
    const [clientAmount, setClientAmount] = React.useState(0);
    const [numberWallets, setNumberWallets] = React.useState(0);
    const [lastTransacWallets, setlastTransacWallets] = React.useState(
        new Map()
    );
    const [totalMonthTransac, setTotalMonthTransac] = React.useState(0);
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
        const currentDate = new Date();
        const thirtyDaysAgo = currentDate.setDate(currentDate.getDate() - 30);
        let tmp = [];
        let tmpAmount = 0;
        let totalTransac = 0;
        let totalClient = 0;
        var wallets = new Map();
        var lastTransacWallet = new Map();
        let tmpTotalMonthTransac = 0;
        response.data.forEach((element) => {
            if (element.operation.type != "origination") {
                let transactionDate = new Date(element.timestamp);
                if (transactionDate >= thirtyDaysAgo) {
                    tmpTotalMonthTransac = tmpTotalMonthTransac + 1;
                }
                let data_value = element.operation.parameter.value;

                tmpAmount += data_value.cost / config.TEZOS_CONVERTER;
                tmp.push(data_value.address);
                if (wallets.has(data_value.address)) {
                    wallets.set(
                        data_value.address,
                        wallets.get(data_value.address) + 1
                    );
                    totalTransac = totalTransac + 1;
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
        setTotalMonthTransac(tmpTotalMonthTransac);
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
            getNFTMintByUser(
                JSON.parse(localStorage.getItem("beacon:accounts"))[0].address
            );
        }
        getContractInformations();
        getWallets();
    }, []);

    const listItems2 = Array.from(userNFTs).map((addr, id) => (
        <li key={id}>
            {addr[0]} : {addr[1]}
        </li>
    ));

    //create a list of the last transaction of each wallet

    const data = Array.from(userNFTs, ([key, value]) => {
        const element = {
            adress: key,
            transac: value,
            last: new Date(lastTransacWallets.get(key)).toLocaleString()
        };
        return {
            adress: element.adress,
            transac: element.transac,
            last: element.last
        };
    });

    return (
        <>
            <Layout>
                <p className="text-gray-700 text-3xl mb-16 font-bold">
                    Wallet info
                </p>
                <DashboardStatsGrid totalMonthTransaction={totalMonthTransac} />
                <TransactionChart />
                <RecentOrders recentTransacData={data} />
            </Layout>
        </>
    );
}
