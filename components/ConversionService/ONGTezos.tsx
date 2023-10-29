import { useEffect, useState } from "react";
import axios from "axios";
import { WildiansPrices } from "../../domain/price";
import { ASSOCIATION_PART, CONTRACT_ADDRESS } from "../../config/config";

export default function OngTezos() {
    const [ongTezos, setOngTezos] = useState(0);

    useEffect(() => {
        async function getTransactionsInformations() {
            try {
                const response = await axios.get(
                    `https://api.ghostnet.tzkt.io/v1/contracts/${CONTRACT_ADDRESS}/storage/history?limit=1000`
                );
                let totalTransac = 0;
                response.data.forEach((element) => {
                    if (element.operation.type !== "origination") {
                        const ong_name =
                            element.operation.parameter.value.ong_name;
                        if (ong_name !== "") {
                            totalTransac += 1;
                        }
                    }
                });
                const ongTezosValue =
                    totalTransac * ASSOCIATION_PART * WildiansPrices.NFT;
                setOngTezos(ongTezosValue);
            } catch (e) {
                console.error(e);
            }
        }

        getTransactionsInformations();
    }, []);
    return ongTezos;
}
