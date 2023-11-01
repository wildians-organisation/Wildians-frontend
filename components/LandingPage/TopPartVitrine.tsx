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
                className="bg-forest-bg bg-no-repeat" /**className="headerBackground bg-cover  bg-forest-bg font-goghbold p-4 h-500-px"**/
            >
                <HeaderVitrine />
                <div className="flex flex-col justify-center h-screen md:ml-32">
                    <div className="text-white header-typo2 first-parag-layout">
                        <p
                            style={{
                                color: "#FFF",
                                fontFamily: "Arial",
                                fontSize: "40px",
                                fontStyle: "normal",
                                fontWeight: "800",
                                lineHeight: "normal"
                            }}
                        >
                            L’aventure Wildians :
                            <br />
                            Ton parcours vers un mode de vie responsable !
                        </p>
                    </div>
                    <button
                        onClick={handleRedirect}
                        className="text-white md:cursor-pointer btn-layout btn-style body-highlight-typo hover:get-hover"
                        style={{ width: "fit-content" }}
                    >
                        Découvrir le concept
                    </button>
                </div>
            </div>
        </>
    );
}

export default TopPartVitrine;
