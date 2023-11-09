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
            <div className="bg-forest-bg bg-no-repeat ">
                <HeaderVitrine />
                <div className="flex flex-col justify-center h-screen md:ml-32">
                    <div className="text-white title-typo first-parag-layout">
                            L’aventure Wildians :
                            <br />
                            Ton parcours vers un mode de vie responsable !
                    </div>
                    <button
                        onClick={handleRedirect}
                        className="text-white md:cursor-pointer btn-layout btn-style body-highlight-typo hover:get-hover"
                        style={{ width: "fit-content" }}
                    >
                        Découvrir le concept
                    </button>
                </div>
                <div
                className="w-1/3 h-48 p-2 left-0 bottom-0"
                style={{
                    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                    backgroundColor: "#223734"
                }}></div>


            </div>
            
        </>
    );
}

export default TopPartVitrine;
