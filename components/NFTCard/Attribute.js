import React from "react";

function Attribute({ title, description }) {
    return (
        <div className="bg-attributegreen w-1/4 pl-1 rounded-lg mr-3 mb-3 mt-3 attribute">
            <div className="font-bold">{title}</div>
            <div>{description}</div>
        </div>
    );
}

export default Attribute;
