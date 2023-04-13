import React from "react";
import axios from "axios";
import * as config from "../../config/config.js";
import Layout from "../../components/AdminDashBoard/Layout";
import DashboardStatsGrid from "components/AdminDashBoard/DashboardStatsGrid.js";
import TransactionChart from "components/AdminDashBoard/TransactionChart.js";
import RecentOrders from "components/AdminDashBoard/RecentOrders.js";
import { firestore } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const NUMBER_OF_MONTHS = 12;
export let totalTransac = 0;

function initializeMonthsConnections() {
    const monthConnections = [];

    for (let i = 0; i < NUMBER_OF_MONTHS; ++i) {
        monthConnections[i] = 0;
    }

    return monthConnections;
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Get number of connections of the current month
async function getConnectionStats() {
    const yearConnections = initializeMonthsConnections();
    let lastTwoWeeksConnections = 0;
    let lastOneMonthConnections = 0;

    const now = new Date();
    const currentYear = now.getFullYear();
    const nowMinusTwoWeeks = addDays(now, -14);
    const nowMinusOneMonth = addDays(now, -30);

    // Get a snapshot of the path
    const doc = await getDocs(collection(firestore, "user"));
    doc.forEach((snap) => {
        const snapshotValue = snap.data();
        const currentUserDate = new Date(snapshotValue.lastConnection);
        if (currentUserDate.getFullYear() === currentYear) {
            ++yearConnections[currentUserDate.getMonth()];
            if (currentUserDate.getTime() >= nowMinusTwoWeeks.getTime()) {
                ++lastTwoWeeksConnections;
            }
            if (currentUserDate.getTime() >= nowMinusOneMonth.getTime()) {
                ++lastOneMonthConnections;
            }
        }
    });

    return {
        yearConnections,
        lastTwoWeeksConnections,
        lastOneMonthConnections
    };
}

export default function Admin() {
    // Display items in a list with add button on each items
    const [nbrToken, setNbrToken] = React.useState();
    const [nbNFTConnectedAdress, setNbNFTConnectedAdress] = React.useState();
    const [clientsAddress, setClientsAddress] = React.useState([]);
    const [userAddress, setUserAddress] = React.useState("");
    const [userNFTs, setUserNFTs] = React.useState([]);
    const [tezosAmount, setTezosAmount] = React.useState(0);
    const [clientAmount, setClientAmount] = React.useState(0);
    const [lastTransacWallets, setlastTransacWallets] = React.useState(
        new Map()
    );
    const [totalMonthTransac, setTotalMonthTransac] = React.useState(0);
    const [connectionStats, setConnectionStats] = React.useState("");

    // Get informations about the smartcontract with the tzkt api
    const getContractInformations = async () => {
        const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history?limit=1000`
        );
        const nbrNftMinted = response.data.length;
        setNbrToken(nbrNftMinted - 1);
        const currentDate = new Date();
        const thirtyDaysAgo = currentDate.setDate(currentDate.getDate() - 30);
        let tmp = [];
        let tmpAmount = 0;
        let totalTransacCompute = 0;
        let totalClient = 0;
        var wallets = new Map();
        var lastTransacWallet = new Map();
        let tmpTotalMonthTransac = 0;
        response.data.forEach((element) => {
            if (element.operation.type == "transaction") {
                totalTransacCompute = totalTransacCompute + 1;
            }
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
                } else {
                    wallets.set(data_value.address, 1);
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
        totalTransac = totalTransacCompute;
        setClientAmount(totalClient);
        setlastTransacWallets(lastTransacWallet);
        setTotalMonthTransac(tmpTotalMonthTransac);
    };

    // Get the number of NFTs of the wallet connected
    const getNFTMintByUser = async (userAdress) => {
        const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history?limit=1000`
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
        setConnectionStats(await getConnectionStats());
    }, []);

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

    const lastTransac =
        data != undefined && data.length > 0 ? data[0].last : "Erreur";

    return (
        <>
            <Layout>
                <p className="text-gray-700 text-3xl mb-16 font-bold">
                    Wallet info
                </p>
                <DashboardStatsGrid
                    lastTransac={lastTransac}
                    totalTransac={totalTransac}
                    totalMonthTransaction={totalMonthTransac}
                    connectionStats={connectionStats}
                    totalClient={clientAmount}
                />
                <TransactionChart />
                <RecentOrders recentTransacData={data} />
            </Layout>
        </>
    );
}
