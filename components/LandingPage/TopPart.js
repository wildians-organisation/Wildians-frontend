import React from "react";
import Header from "components/Header/Header";
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
                        by joining our community
                    </div>
                    <div
                        className="text-white md:cursor-pointer btn-layout btn-style body-highlight-typo hover:get-hover"
                        style={{ width: "fit-content" }}
                    >
                        GET YOUR WILDIAN
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopPart;
