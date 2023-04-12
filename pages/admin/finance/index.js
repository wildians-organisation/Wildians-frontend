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
import Wildians from "components/Wildian/Wildians.js";
import { WildiansTypes } from "domain.js/wildians.ts";

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
    let [userNFTs, setUserNFTs] = React.useState([]);
    let [detailsDons, setDetailsDons] = React.useState([]);
    let [dataFinance, setDataFinance] = React.useState([
        { name: "ENVIRONMENT", value: 0 },
        { name: "SOCIETY", value: 0 },
        { name: "ECONOMY", value: 0 }
    ]);

    const getContractInformations = async () => {
        const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history?limit=1000`
        );
        var wallets = [];
        console.log("hello");
        console.log(dataFinance);
        let environment = 0;
        let society = 0;
        let economy = 0;

        // Create an array of promises for fetchData calls
        const fetchDataPromises = response.data.map(async (element) => {
            if (element.operation.type != "origination") {
                let data_value = element.operation.parameter.value;

                if (!wallets.includes(data_value.address)) {
                    wallets.push(data_value.address);
                    let result = await fetchData(data_value.address);
                    environment += result.ENVIRONMENT;
                    society += result.SOCIETY;
                    economy += result.ECONOMY;
                }
            }
        });

        // Wait for all promises to resolve
        await Promise.all(fetchDataPromises);

        setDataFinance((prevState) => {
            const newData = [...prevState];
            newData[0].value = environment;
            newData[1].value = society;
            newData[2].value = economy;
            return newData;
        });
        console.log(dataFinance);

        setUserNFTs(wallets);
    };

    // Define a function to process data
    const processResponseData = (responseData) => {
        let ENVIRONMENT = 0;
        let SOCIETY = 0;
        let ECONOMY = 0;

        for (let i = 0; i < responseData["data"].length; i++) {
            if (
                responseData["data"][i]["token"]["metadata"] == null ||
                responseData["data"][i]["token"]["metadata"] == undefined ||
                responseData["data"][i]["token"]["contract"]["address"] !=
                    config.CONTRACT_ADDRESS
            )
                continue;
            else {
                let dateT = responseData["data"][i]["firstTime"];
                let userAddressToFetch =
                    responseData["data"][i]["account"]["address"];
                if (
                    responseData["data"][i]["token"]["metadata"]["name"] ==
                    WildiansTypes.BICHE
                ) {
                    ENVIRONMENT += 1;

                    setDetailsDons((prevDetails) => [
                        ...prevDetails,
                        {
                            address: userAddressToFetch,
                            ong: "WWF",
                            date: new Date(dateT).toLocaleString()
                        }
                    ]);
                } else if (
                    responseData["data"][i]["token"]["metadata"]["name"] ==
                    WildiansTypes.WOLF
                ) {
                    SOCIETY += 1;

                    setDetailsDons((prevDetails) => [
                        ...prevDetails,
                        {
                            address: userAddressToFetch,
                            ong: "Greenpeace",
                            date: new Date(dateT).toLocaleString()
                        }
                    ]);
                } else if (
                    responseData["data"][i]["token"]["metadata"]["name"] ==
                    WildiansTypes.BULL
                ) {
                    ECONOMY += 1;

                    setDetailsDons((prevDetails) => [
                        ...prevDetails,
                        {
                            address: userAddressToFetch,
                            ong: "Unicef",
                            date: new Date(dateT).toLocaleString()
                        }
                    ]);
                }
            }
        }
        return {
            ENVIRONMENT: ENVIRONMENT,
            SOCIETY: SOCIETY,
            ECONOMY: ECONOMY
        };
    };

    const fetchData = async (userAddressToFetch) => {
        try {
            const response = await axios.get(
                `https://api.ghostnet.tzkt.io/v1/tokens/balances?account=${userAddressToFetch}`
            );
            let result = processResponseData(response);
            return result;
        } catch (e) {
            console.error(e);
        }
    };

    React.useEffect(() => {
        getContractInformations();
        console.log(dataFinance);
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
