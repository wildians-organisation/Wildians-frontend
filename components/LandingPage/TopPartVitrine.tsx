import React from "react";
import HeaderVitrine from "../Header/HeaderVitrine";
import { useRouter } from "next/router";

function TopPartVitrine() {
    const router = useRouter();

    const handleRedirect = () => {
        const conceptSection = document.getElementById("Concept");
        if (conceptSection) {
            conceptSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div
                className="bg-forest-bg bg-no-repeat " /**className="headerBackground bg-cover  bg-forest-bg font-goghbold p-4 h-500-px"**/
            >
                <HeaderVitrine />
                <div className="flex flex-col justify-center h-screen md:ml-32 gap-8 m-2">
                    <div className="text-white header-typo3 flex flex-col gap-4">
                        <p>L’aventure Wildians :</p>
                        <p className="break-all">
                            Ton parcours vers un mode de vie responsable !
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <button
                            onClick={handleRedirect}
                            className="text-white md:cursor-pointer btn-layout btn-style body-highlight-typo hover:get-hover xl:my-8 w-52"
                        >
                            Découvrir le concept
                        </button>
                    </div>
                </div>
                <div
                    className="w-1/3 h-48 p-2 left-0 bottom-0"
                    style={{
                        clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                        backgroundColor: "#223734"
                    }}
                ></div>
            </div>
        </>
    );
}

export default TopPartVitrine;
