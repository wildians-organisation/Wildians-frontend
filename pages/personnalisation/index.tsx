import React, { useState } from "react";

import CustomOption from "../../components/Customization/CustomizationOption";
import Header from "../../components/Header/Header";

export default function CustomizeNFT() {
    const pilar = {
        Deer: "deer",
        Bull: "bull"
    };
    const [selectedOption, setSelectedOption] = useState("");
    const [name, setName] = useState("");
    const [options, setOptions] = useState({
        wood: "",
        paws: "",
        face: "",
        ears: "",
        color: "",
        horn: "",
        nose: "",
        hoof: ""
    });

    const deerOption = {
        wood: ["type 1", "type 2", "type 3"],
        paws: ["type 1", "type 2", "type 3"],
        face: ["type 1", "type 2", "type 3"],
        ears: ["type 1", "type 2", "type 3"],
        color: ["blue", "red", "yellow"]
    };

    const bullOption = {
        horn: ["type 1", "type 2", "type 3"],
        nose: ["type 1", "type 2", "type 3"],
        face: ["type 1", "type 2", "type 3"],
        ears: ["type 1", "type 2", "type 3"],
        color: ["blue", "red", "yellow"],
        hoof: ["type 1", "type 2", "type 3"]
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setOptions({
            wood: "",
            paws: "",
            face: "",
            ears: "",
            color: "",
            horn: "",
            nose: "",
            hoof: ""
        });
    };

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleOptionSelect = (event, optionName) => {
        const { value } = event.target;
        setOptions((prevState) => ({
            ...prevState,
            [optionName]: value
        }));
    };

    const renderOptions = () => {
        if (selectedOption === pilar.Deer) {
            const deerOptions = Object.keys(deerOption);
            return (
                <div>
                    {deerOptions.map((option) => (
                        <CustomOption
                            label={option}
                            options={options}
                            optionName={option}
                            handleOptionSelect={handleOptionSelect}
                            optionList={deerOption[option]}
                            key={option}
                        />
                    ))}
                </div>
            );
        } else if (selectedOption === pilar.Bull) {
            const bullOptions = Object.keys(bullOption);
            return (
                <div>
                    {bullOptions.map((option) => (
                        <CustomOption
                            label={option}
                            options={options}
                            optionName={option}
                            handleOptionSelect={handleOptionSelect}
                            optionList={bullOption[option]}
                            key={option}
                        />
                    ))}
                </div>
            );
        } else {
            return <div>Please select an option.</div>;
        }
    };

    return (
        <div>
            <div className="p-4 bg-attributegreen">
                <Header />
                <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="text-black text-6vw font-goghbold text-white">
                        Custom my NFT
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-full">
                <div className="w-1/4">
                    <div>
                        <button
                            className={`${
                                selectedOption === pilar.Deer
                                    ? "text-gray-900 rounded-full bg-green-500"
                                    : "text-gray-900 rounded-full bg-gray-500"
                            } p-4 w-full mb-4`}
                            onClick={() => handleOptionChange(pilar.Deer)}
                        >
                            Deer
                        </button>
                    </div>
                    <div>
                        <button
                            className={`${
                                selectedOption === pilar.Bull
                                    ? "text-gray-900 rounded-full bg-green-500"
                                    : "text-gray-900 rounded-full bg-gray-500"
                            } p-4 w-full `}
                            onClick={() => handleOptionChange(pilar.Bull)}
                        >
                            Bull
                        </button>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="text-center text-black text-2xl">
                        Selected: {selectedOption}
                    </div>
                    <div className="text-center text-black">
                        {Object.entries(options).map(
                            ([optionName, optionValue]) => {
                                if (optionValue !== "") {
                                    return (
                                        <div key={optionName}>
                                            {optionName}: {optionValue}
                                        </div>
                                    );
                                } else return null;
                            }
                        )}
                        {name !== "" && <div>name : {name}</div>}

                        <div>
                            Your Wildians name:
                            <input
                                type="text"
                                id="NFTname"
                                name="NFTname"
                                placeholder="Your Wildian name "
                                maxLength={8}
                                onChange={(event) => handleName(event)}
                            />
                            <br />
                        </div>
                    </div>
                </div>
                <div className="w-1/4">
                    <div>{renderOptions()}</div>
                </div>
            </div>
        </div>
    );
}
