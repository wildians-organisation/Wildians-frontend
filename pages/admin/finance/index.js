import React from "react";
import axios from "axios";
import { getFunctions, httpsCallable } from "firebase/functions";
import Layout from "components/AdminDashBoard/Layout.js";
import FinanceStatsGrid from "components/AdminDashBoard/FinanceStatsGrid.js";
import OrganisationRepartition from "components/AdminDashBoard/OrganisationRepartition.js";
import { functions } from "../../../firebaseConfig";
import { totalTransac } from "../index.js";
import { WildiansPrices } from "domain/price.ts";

export default function Admin() {
    // Display items in a list with add button on each items

    const [allTezos, setAllTezos] = React.useState(0);
    const [wildiansTezos, setWildiansTezos] = React.useState(0);
    const [ongTezos, setOngTezos] = React.useState(0);
    // Display items in a list with add button on each items
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
