import React from "react";
import Header from "components/Header/Header";
function TopPart() {
    return (
        <>
            <div className="bg-cover bg-forest-bg bg-forest-layout"/**className="headerBackground bg-cover  bg-forest-bg font-goghbold p-4 h-500-px"**/>
                <Header />
                <div className="flex flex-col justify-center h-screen md:ml-32">
                    <div className="text-white header-typo2 first-parag-layout"/**className="text-beige text-4xl  font-mulish w-1/2"**/>
                        Contribute to a better world
                        <br />
                        by joining our community
                    </div>
                    <div className="text-white btn-layout btn-style body-highlight-typo hover:get-hover"
                        style={{ width: "fit-content" }}
                        /**className="flex w-fit items-center bg-bordeau rounded-3xl  px-2.5 mt-9 text-beige font-medium justify-center text-sm md:text-base whitespace-nowrap"**/
                    >
                        GET YOUR WILDIAN
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopPart;
