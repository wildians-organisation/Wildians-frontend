import React from "react";

function Attribute({ title, description }) {
    return (
        <div className="attribute-box-layout attribute-box-style mr-3 mb-3 mt-3 attribute text-white flex-col flex">
            <div className="font-bold">{title}</div>
            <div>{description}</div>
        </div>
    );
}

export default Attribute;
