import React, { useState, useEffect } from "react";
import OngTezos from "./ONGTezos";

function TezosToEuroConverter() {
    const [euroAmount, setEuroAmount] = useState(0);
    const [conversionRate, setConversionRate] = useState(0);

    useEffect(() => {
        const fetchConversionRate = async () => {
            try {
                const response = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=tezos&vs_currencies=eur"
                );
                const data = await response.json();
                const tezosToEuroRate = data?.tezos?.eur;
                if (tezosToEuroRate) {
                    setConversionRate(tezosToEuroRate);
                } else {
                    console.error("Error while retrieving conversion factor");
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchConversionRate();
    }, []);
    const tezosAmount = OngTezos();

    useEffect(() => {
        const convertedEuroAmount = tezosAmount * conversionRate;
        setEuroAmount(convertedEuroAmount);
    }, [tezosAmount, conversionRate]);

    const formattedEuroAmount = euroAmount.toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return <span>{formattedEuroAmount} €</span>;
}

export default TezosToEuroConverter;
