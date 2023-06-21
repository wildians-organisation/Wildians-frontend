import React, { useState } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";

export default function CustomizeNFT() {
    const [selectedOption, setSelectedOption] = useState("");
    const [options, setOptions] = useState({
      wood: "",
      foot: "",
      facialExpression: "",
      ears: "",
      color: "",
      horn: "",
      nose: "",
      hoof: "",
    });
  
    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };
  
    const handleOptionSelect = (event, optionName) => {
      const { value } = event.target;
      setOptions((prevState) => ({
        ...prevState,
        [optionName]: value,
      }));
    };
    

    //TODO : Add component for option
    const renderOptions = () => {
      if (selectedOption === "deer") {
        return (
          <div>
            <div>
              <label htmlFor="wood">Wood:</label>
              <select
                id="wood"
                name="wood"
                value={options.wood}
                onChange={(e) => handleOptionSelect(e, "wood")}
              >
                <option value="">Select wood type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="foot">Foot:</label>
              <select
                id="foot"
                name="foot"
                value={options.foot}
                onChange={(e) => handleOptionSelect(e, "foot")}
              >
                <option value="">Select foot type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="facialExpression">Facial Expression:</label>
              <select
                id="facialExpression"
                name="facialExpression"
                value={options.facialExpression}
                onChange={(e) => handleOptionSelect(e, "facialExpression")}
              >
                <option value="">Select facial expression</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="ears">Ears:</label>
              <select
                id="ears"
                name="ears"
                value={options.ears}
                onChange={(e) => handleOptionSelect(e, "ears")}
              >
                <option value="">Select ear type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="color">Color:</label>
              <select
                id="color"
                name="color"
                value={options.color}
                onChange={(e) => handleOptionSelect(e, "color")}
              >
                <option value="">Select color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </div>
          </div>
        );
      } else if (selectedOption === "bull") {
        return (
          <div>
            <div>
              <label htmlFor="horn">Horn:</label>
              <select
                id="horn"
                name="horn"
                value={options.horn}
                onChange={(e) => handleOptionSelect(e, "horn")}
              >
                <option value="">Select horn type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="nose">Nose:</label>
              <select
                id="nose"
                name="nose"
                value={options.nose}
                onChange={(e) => handleOptionSelect(e, "nose")}
              >
                <option value="">Select nose type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="ears">Ears:</label>
              <select
                id="ears"
                name="ears"
                value={options.ears}
                onChange={(e) => handleOptionSelect(e, "ears")}
              >
                <option value="">Select ear type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="hoof">Hoof:</label>
              <select
                id="hoof"
                name="hoof"
                value={options.hoof}
                onChange={(e) => handleOptionSelect(e, "hoof")}
              >
                <option value="">Select hoof type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="color">Color:</label>
              <select
                id="color"
                name="color"
                value={options.color}
                onChange={(e) => handleOptionSelect(e, "color")}
              >
                <option value="">Select color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </div>
            <div>
              <label htmlFor="facialExpression">Facial Expression:</label>
              <select
                id="facialExpression"
                name="facialExpression"
                value={options.facialExpression}
                onChange={(e) => handleOptionSelect(e, "facialExpression")}
              >
                <option value="">Select facial expression</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
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
                selectedOption === "deer" ? "bg-green-500" : "bg-gray-500"
              } p-4 w-full mb-4`}
              onClick={() => handleOptionChange("deer")}
            >
              Deer
            </button>
          </div>
          <div>
            <button
              className={`${
                selectedOption === "bull" ? "bg-green-500" : "bg-gray-500"
              } p-4 w-full`}
              onClick={() => handleOptionChange("bull")}
            >
              Bull
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-black text-6vw font-goghbold text-white text-center">
            Custom my NFT
          </div>
        </div>
        <div className="w-1/4">
          <div>{renderOptions()}</div>
        </div>
      </div>
      <div className="text-center text-black text-2xl">
        Selected: {selectedOption}
      </div>
    </div>
  );
}

