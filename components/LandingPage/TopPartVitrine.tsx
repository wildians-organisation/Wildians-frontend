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
            <div className="bg-forest-bg bg-no-repeat">
                <HeaderVitrine />
                <div className="flex flex-col justify-center h-screen md:ml-32 gap-8 mx-2">
                    <div className="text-white title-typo flex flex-col gap-4">
                        L’aventure Wildians :
                        <p className="break-word">
                            Ton parcours vers un mode de vie responsable !
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <button
                            onClick={handleRedirect}
                            className="text-white md:cursor-pointer btn-layout btn-style body-highlight-typo hover:get-hover xl:my-8 w-64"
                        >
                            Découvrir le concept
                        </button>
                    </div>
                </div>
                <div
                    className="w-1/3 h-32 md:h-48 relative left-0 top-1 hidden md:block"
                    style={{
                        clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                        backgroundColor: "#223734"
                    }}
                ></div>
                <div
                    className="w-1/3 h-16 md:h-48 relative left-0 top-1 bottom-0 md:hidden"
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
