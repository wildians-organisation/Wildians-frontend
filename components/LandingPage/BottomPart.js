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
                } else if (bullONG.includes(ong_name)) {
                    economy += 1;
                } else if (wolfONG.includes(ong_name)) {
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
        <div className="bg-wood-bg bg-no-repeat bg-cover p-4 h-500-px">
            <div className="relative top-48 h-96">
                <div
                    className="text-center text-white get-typo" /**className="text-center text-4xl md:text-5xl lg:text-6xl text-greeny"**/
                >
                    GET YOUR WILDIAN
                </div>
                <div className="text-center body-typo text-white flex-col">
                    Each pillar allows you to contribute to a different
                    association. Which one will you choose?
                </div>
                <div className="explanationPart flex justify-evenly items-stretch text-white mt-12">
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
                <div
                    className="text-center text-white body-italic-typo pt-14 pb-2" /**className="text-center text-4xl md:text-5xl lg:text-6xl text-greeny"**/
                >
                    Need some help to choose ?
                </div>
                <button
                    className="md:uppercase test-layout items-center flex-col justify-end m-auto default-connexion hover:connexion body-highlight-typo text-greeny md:whitespace-nowrap md:hover:text-greenkaki"
                    /**className="mintNFT text-gray-900 group flex rounded-full items-center px-2 py-2 md:h-min md:text-sm md:text-greenkaki md:bg-greeny md:hover:bg-greenkaki md:hover:text-greeny  md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded-full md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150 md:whitespace-nowrap "**/
                    type="button"
                >
                    Take the test
                </button>
            </div>
        </div>
    );
}

export default BottomPart;
