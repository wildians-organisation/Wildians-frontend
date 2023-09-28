import React from "react";
import Router from "next/router";

/**
 * fonction permettant de naviguer parmis les différentes pages du footer
 * @param {*} pageName
 */
const goToIndicatedPage = (pageName) => {
    Router.push(pageName);
};

function ConnectedButton({ disconnect }) {
    return <div onClick={disconnect}>Logout</div>;
}
export default ConnectedButton;
