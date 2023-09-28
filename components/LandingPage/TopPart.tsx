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
                        Contribute to a better world
                        <br />
<<<<<<< HEAD:components/LandingPage/TopPart.tsx
                        Join the adventure by buying your first NFT for
                        sustainable development!
=======
                        by joining our community
>>>>>>> dev:components/LandingPage/TopPart.js
                    </div>
                    <div
                        className="text-white md:cursor-pointer btn-layout btn-style body-highlight-typo hover:get-hover"
                        style={{ width: "fit-content" }}
                    >
                        GET YOUR WILDIAN
                    </div>
                    <div
                        className="absolute bottom-5 right-6 bg-emerald-800 rounded-xl p-15 flex justify-center items-center"
<<<<<<< HEAD:components/LandingPage/TopPart.tsx
                        style={{
                            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                            width: "250px",
                            height: "100px"
                        }}
                    >
                        <div>
                            <div>
                                <span className="flex justify-center text-sm text-greeny">
                                    <label>WE PROUDLY DONATED</label>
                                </span>
                            </div>
                            <span className="flex justify-center text-2xl text-white">
                                <TezosToEuroConverter />
                            </span>
                            <div>
                                <span className="flex justify-center text-sm text-greeny">
                                    <label>TO SUSTAINABLE ASSOCIATIONS</label>
                                </span>
=======
                        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)", width: "300px", height: "100px" }}
                    >
                        <div>
                            <div>
                                <span className="flex justify-center text-sm body-highlight-typo text-greeny"><label>WE PROUDLY DONATED</label></span>
                            </div>
                            <span className="flex justify-center text-2x1 body-highlight-typo text-white"><TezosToEuroConverter/></span>
                            <div>
                                <span className="flex justify-center text-sm body-highlight-typo text-greeny"><label>TO SUSTAINABLE ASSOCIATIONS</label></span>
>>>>>>> dev:components/LandingPage/TopPart.js
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopPart;
