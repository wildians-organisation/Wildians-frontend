import React from "react";
import Router from "next/router";
import Navbar from "components/Navbars/AuthNavbar.js";

export default function MarketPlace() {
  const goBack = () => {
    Router.push("/");
  };
  // Display items in a list with add button on each items
  return (
    <>
      <main>
        <div style={{ marginTop: 290 }}>
          <center>
            <p>Welcome to the best marketplace of the universe!</p>
            <p>Work in progress...</p>
          </center>
        </div>
      </main>
    </>);
};
