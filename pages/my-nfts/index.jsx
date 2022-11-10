import React from "react";
import Router from "next/router";

export default function MyNFTs() {
  const goBack = () => {
    Router.push("/");
  };
  // Display items in a list with add button on each items
  return (
    <>
      <main>
        <div style={{ marginTop: 290 }}>
          <center>
            <p>Welcome to your NFTs listing of the universe!</p>
            <p>Work in progress...</p>
          </center>
        </div>
      </main>
    </>);
};
