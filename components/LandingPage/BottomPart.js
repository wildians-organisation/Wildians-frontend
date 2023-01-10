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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam
          ut risus viverra scelerisque. In metus tellus, congue id turpis
          scelerisque, vulputate suscipit velit. Nunc pretium ipsum id venenatis
          fringilla.
        </div>
        <div className="explanationPart flex justify-evenly items-center text-beige mt-12">
          <Wildians image={"/img/v2/visuels/Deer.png"} title="Deer_3D" pillar="ENVIRONNEMENT" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam ut risus viverra scelerisque." nft_adress={config.DEER_NFT} />
          <Wildians image={"/img/v2/visuels/Wolf.png"} title="Wolf_3D" pillar="SOCIETY" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam ut risus viverra scelerisque." nft_adress={config.WOLF_NFT} />
          <Wildians image={"/img/v2/visuels/Bull.png"} title="Bull_3D" pillar="ECONOMY" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam ut risus viverra scelerisque." nft_adress={config.BULL_NFT} />
        </div>
      </div>
    </div>
  );
}

export default BottomPart;
