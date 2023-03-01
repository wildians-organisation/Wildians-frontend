import React from "react";
import Image from "next/image";
import * as config from "../../config/config.js";
import Wildians from "components/Wildian/Wildians";

function BottomPart() {
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
                        description="With the deer contribute directly to the WWF."
                        nft_adress={config.DEER_NFT}
                    />
                    <Wildians
                        image={"/img/v2/visuels/Wolf.png"}
                        title="Wolf_3D"
                        pillar="SOCIETY"
                        description="With the wolf contribute directly to Greenpeace."
                        nft_adress={config.WOLF_NFT}
                    />
                    <Wildians
                        image={"/img/v2/visuels/Bull.png"}
                        title="Bull_3D"
                        pillar="ECONOMY"
                        description="With the bull contribute directly to Unicef."
                        nft_adress={config.BULL_NFT}
                    />
                </div>
            </div>
        </div>
    );
}

export default BottomPart;
