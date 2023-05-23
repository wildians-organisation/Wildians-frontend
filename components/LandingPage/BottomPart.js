import React from "react";
import axios from "axios";
import * as config from "../../config/config.js";
import Wildians from "components/Wildian/Wildians";

function BottomPart() {
    let [dataFinance, setDataFinance] = React.useState([
        { name: "ENVIRONMENT", value: 0 },
        { name: "SOCIETY", value: 0 },
        { name: "ECONOMY", value: 0 }
    ]);
    const deerONG = ["WWF", "Oceana", "GreenPeace"];
    const wolfONG = [
        "Action Against Hunger",
        "Save the Children",
        "Wikimedia Foundation (Wikipedia)",
        "Charity: Water"
    ];
    const bullONG = [
        "AIDS",
        "UNICEF",
        "MADRE",
        "Relief International Inc.",
        "Amnesty International"
    ];
    async function getTransactionsInformations() {
        const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history?limit=1000`
        );
        let environment = 0;
        let society = 0;
        let economy = 0;

        response.data.map((element) => {
            if (element.operation.type == "transaction") {
                let ong_name = element.operation.parameter.value.ong_name;
                if (deerONG.includes(ong_name)) {
                    environment += 1;
                }
                else if (bullONG.includes(ong_name)) {
                    economy += 1;
                }
                else if (wolfONG.includes(ong_name)) {
                    society += 1;
                }
            }
        });
        setDataFinance((prevState) => {
            const newData = [...prevState];
            newData[0].value = environment;
            newData[1].value = society;
            newData[2].value = economy;
            return newData;
        });
    }
    React.useEffect(() => {
        getTransactionsInformations();
    }, []);
    return (
        <div className="h-screen bg-cover bg-emerald-800  bg-wood-bg font-goghbold">
            <div className="relative top-48 h-96">
                <div className="text-center text-4xl md:text-5xl lg:text-6xl text-greeny">
                    GET YOUR WILDIANS
                </div>
                <div className="m-auto h-77px w-576px text-center font-normal leading-5 text-beige">
                    Each pillar allows you to contribute to a different
                    association. Which one will you choose?
                </div>
                <div className="explanationPart flex justify-evenly items-center text-beige mt-12">
                    <Wildians
                        image={"/img/v2/visuels/Deer.png"}
                        title="Deer_3D"
                        pillar="ENVIRONNEMENT"
                        description="With the deer contribute directly to"
                        nft_adress={config.DEER_NFT}
                        ong_list={deerONG}
                        nft_sold={dataFinance[0].value}
                    />
                    <Wildians
                        image={"/img/v2/visuels/Wolf.png"}
                        title="Wolf_3D"
                        pillar="SOCIETY"
                        description="With the wolf contribute directly to"
                        nft_adress={config.WOLF_NFT}
                        ong_list={wolfONG}
                        nft_sold={dataFinance[1].value}
                    />
                    <Wildians
                        image={"/img/v2/visuels/Bull.png"}
                        title="Bull_3D"
                        pillar="ECONOMY"
                        description="With the bull contribute directly to"
                        nft_adress={config.BULL_NFT}
                        ong_list={bullONG}
                        nft_sold={dataFinance[2].value}
                    />
                </div>
            </div>
        </div>
    );
}

export default BottomPart;
