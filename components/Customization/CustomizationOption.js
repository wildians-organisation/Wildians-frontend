import React from "react";

const CustomOption = ({ label, options, optionName, handleOptionSelect, optionList }) => {
  return (
    <div>
      <label htmlFor={optionName}>{label}:</label>
      <select
        id={optionName}
        name={optionName}
        value={options[optionName]}
        onChange={(e) => handleOptionSelect(e, optionName)}
      >
        <option value="">Select {label.toLowerCase()} type</option>
        {optionList.map((optionValue) => (
          <option value={optionValue} key={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomOption;