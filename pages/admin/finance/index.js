import React from "react";
import axios from "axios";
import * as config from "../../../config/config.js";
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import Layout from "components/AdminDashBoard/Layout.js";
import { Component } from "react/cjs/react.production.min.js";
import FinanceStatsGrid from "components/AdminDashBoard/FinanceStatsGrid.js";
import OrganisationRepartition from "components/AdminDashBoard/OrganisationRepartition.js";
import DetailsDons from "components/AdminDashBoard/DetailsDons.js";
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
    const [userNFTs, setUserNFTs] = React.useState([]);
    const [test, setTest] = React.useState(0);
    const [dataFinance, setDataFinance] = React.useState([
        { name: "ENVIRONMENT", value: 0 },
        { name: "SOCIETY", value: 0 },
        { name: "ECONOMY", value: 0 }
    ]);
    const [detailsDons, setdetailsDons] = React.useState(new Map());

    const getContractInformations = async () => {
        const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history?limit=1000`
        );
        var wallets = [];
        response.data.forEach((element) => {
            if (element.operation.type != "origination") {
                let data_value = element.operation.parameter.value;

                if (wallets.includes(data_value.address) == false) {
                    wallets.push(data_value.address);
                    detailsDons.set(data_value.address, {
                        WWF: 0,
                        Greenpeace: 0,
                        Unicef: 0
                    });
                    fetchData(data_value.address);
                }
            }
        });
        setUserNFTs(wallets);
    };

    const fetchData = async (userAddressToFetch) => {
        try {
            const response = await axios.get(
                `https://api.ghostnet.tzkt.io/v1/tokens/balances?account=${userAddressToFetch}`
            );
            for (let i = 0; i < response["data"].length; i++) {
                if (
                    response["data"][i]["token"]["metadata"] == null ||
                    response["data"][i]["token"]["metadata"] == undefined
                )
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

                        detailsDons.get(userAddressToFetch)["WWF"] += 1;
                    } else if (
                        response["data"][i]["token"]["metadata"]["name"] ==
                        "WOLF"
                    ) {
                        setDataFinance((prevState) => {
                            const newData = [...prevState];
                            newData[1].value = newData[1].value + 1;
                            return newData;
                        });
                        detailsDons.get(userAddressToFetch)["Greenpeace"] += 1;
                    } else if (
                        response["data"][i]["token"]["metadata"]["name"] ==
                        "BULL"
                    ) {
                        setDataFinance((prevState) => {
                            const newData = [...prevState];
                            newData[2].value = newData[2].value + 1;
                            return newData;
                        });
                        detailsDons.get(userAddressToFetch)["Unicef"] += 1;
                    }
                }
            }
            if (
                detailsDons.get(userAddressToFetch)["WWF"] == 0 &&
                detailsDons.get(userAddressToFetch)["Greenpeace"] == 0 &&
                detailsDons.get(userAddressToFetch)["Unicef"] == 0
            ) {
                detailsDons.delete(userAddressToFetch);
            }
        } catch (e) {
            console.error(e);
        }
    };

    React.useEffect(() => {
        getContractInformations();
    }, []);

    return (
        <>
            <Layout>
                <p className="text-gray-700 text-3xl mb-16 font-bold">
                    Finance
                </p>
                <FinanceStatsGrid />
                <OrganisationRepartition data={dataFinance} />
                <DetailsDons details={detailsDons} />
            </Layout>
        </>
    );
}
