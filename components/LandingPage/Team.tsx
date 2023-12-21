import React from "react";
import Image from "next/image";
import Maxime from "../../public/img/Maxime.png";
import Aurélie from "../../public/img/Aurélie.png";
import Bastien from "../../public/img/Bastien.png";
import Elea from "../../public/img/Elea.png";

function Team() {
    return (
        <div className="py-20 mt-40">
            <div className="text-center text-white title-typo mb-20">
                Wildians, une équipe de passionnés
            </div>
            <div className="component-container-intro">
                <div className="nft-frame">
                    <Image
                        src={Maxime}
                        alt="Le boss"
                        width={135}
                        height={135}
                    />
                    <p className="title-wild-frame-typo text-greeny">Maxime</p>
                    <p className="subtitle-typo text-white">Fondateur</p>
                </div>
                <div className="nft-frame">
                    <Image
                        src={Aurélie}
                        alt="La maquettiste"
                        width={135}
                        height={135}
                    />
                    <p className="title-wild-frame-typo text-greeny">Aurélie</p>
                    <p className="subtitle-typo text-white">UX Design</p>
                </div>
                <div className="nft-frame">
                    <Image
                        src={Elea}
                        alt="Connais pas mais a l'air cool"
                        width={135}
                        height={135}
                    />
                    <p className="title-wild-frame-typo text-greeny">Elea</p>
                    <p className="subtitle-typo text-white">Communication</p>
                </div>
                <div className="nft-frame">
                    <Image
                        src={Bastien}
                        alt="C'est lui pour les dessins ???"
                        width={135}
                        height={135}
                    />
                    <p className="title-wild-frame-typo text-greeny">Bastien</p>
                    <p className="subtitle-typo text-white">Illustration 3D</p>
                </div>
            </div>
            <div className="pl-2 pr-4 mb-40">
                <div className="text-white text-base mt-14 flex justify-center items-center">
                    <div className="text-white body-typo pl-4 w-600 text-justify">
                        Un grand merci à tout ceux qui ont posé une brique dans
                        l’édifice Wildians :<br />
                        <strong>
                            Romain, le PAE SIGL (Johnny et Sach), Eva, Rebecca,
                            Gwen, Hugo x2, Alice
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
