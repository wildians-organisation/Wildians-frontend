import React from "react";
import axios from "axios";
import * as config from "../../../config/config.js";
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import Layout from "components/AdminDashBoard/Layout.js";
import { Component } from "react/cjs/react.production.min.js";
import FinanceStatsGrid from "components/AdminDashBoard/FinanceStatsGrid.js";
import OrganisationRepartition from "components/AdminDashBoard/OrganisationRepartition.js";
import { totalTransac } from "../index.js";
import { WildiansPrices } from "domain/price.ts";

const firebaseConfig = {
    apiKey: `${config.GCPAPIKEY}`,
    authDomain: `${config.GCPAUTHDOMAIN}`,
    databaseURL: `${config.GCPDATABASEURL}`,
    projectId: `${config.GCPPROJECTID}`,
    storageBucket: `${config.GCPSTORAGEBUCKET}`,
    messagingSenderId: `${config.GCPMESSAGINGSENDERID}`,
    appId: `${config.GCPAPPID}`,
    measurementId: `${config.MEASUREMENTID}`
};

export default function Admin() {
    // Display items in a list with add button on each items

    const [allTezos, setAllTezos] = React.useState(0);
    const [wildiansTezos, setWildiansTezos] = React.useState(0);
    const [ongTezos, setOngTezos] = React.useState(0);
    const app = initializeApp(firebaseConfig);
    const functions = getFunctions(app);
    functions.region = config.BUCKET_REGION;

    const getContractInformations = async () => {
        setAllTezos(totalTransac * WildiansPrices.NFT);
        setWildiansTezos(
            totalTransac * config.WILDIANS_PART * WildiansPrices.NFT
        );
        setOngTezos(
            totalTransac * config.ASSOCIATION_PART * WildiansPrices.NFT
        );
    };

    React.useEffect(async () => {
        getContractInformations();
    }, []);

    return (
        <>
            <Layout>
                <p className="text-gray-700 text-3xl mb-16 font-bold">
                    Finance
                </p>
                <FinanceStatsGrid
                    allTezos={allTezos}
                    wildiansTezos={wildiansTezos}
                    ongTezos={ongTezos}
                />
                <OrganisationRepartition />
            </Layout>
        </>
    );
}
