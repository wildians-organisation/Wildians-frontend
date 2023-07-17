import React from "react";
import Header from "components/Header/Header";
import TezosToEuroConverter from "../ConversionService/ConversionService";

function TopPart() {
    return (
        <>
            <div className="headerBackground bg-cover bg-forest-bg font-goghbold p-4 h-500-px">
                <Header />
                <div className="flex flex-col justify-center h-screen md:ml-32">
                    <div className="text-beige text-4xl font-mulish w-1/2">
                        Welcome to the Wildians!
                        <br />
                        Join the adventure by buying your first NFT for sustainable development!
                    </div>
                    <div
                        style={{ width: "fit-content" }}
                        className="flex w-fit items-center bg-bordeau rounded-3xl px-2.5 mt-9 text-beige font-medium justify-center text-sm md:text-base whitespace-nowrap"
                    >
                        GET YOUR WILDIAN
                    </div>
                    <div
                        className="absolute bottom-5 right-6 bg-emerald-800 rounded-xl p-15 flex justify-center items-center"
                        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)", width: "250px", height: "100px" }}
                    >
                        <div>
                            <div>
                                <span className="flex justify-center text-sm text-greeny"><label>WE PROUDLY DONATED</label></span>
                            </div>
                            <span className="flex justify-center text-2xl text-white"><TezosToEuroConverter/></span>
                            <div>
                                <span className="flex justify-center text-sm text-greeny"><label>TO SUSTAINABLE ASSOCIATIONS</label></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopPart;
