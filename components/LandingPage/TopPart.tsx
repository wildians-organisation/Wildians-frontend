import React from "react";
import Header from "./../../components/Header/Header";
import TezosToEuroConverter from "../ConversionService/ConversionService";

function TopPart() {
    return (
        <>
            <div
                className="bg-forest-bg bg-no-repeat" /**className="headerBackground bg-cover  bg-forest-bg font-goghbold p-4 h-500-px"**/
            >
                <Header />
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
                    <div
                        className="text-white md:cursor-pointer btn-layout btn-style body-highlight-typo hover:get-hover"
                        style={{ width: "fit-content" }}
                    >
                        Découvrir le concept
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopPart;
