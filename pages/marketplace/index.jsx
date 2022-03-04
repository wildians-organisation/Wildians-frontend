import React from "react";
import Router from "next/router";


export default function MarketPlace() {
  const goBack = () => {
    Router.push("/");
  };
  // Display items in a list with add button on each items
  return (
    <>
      <main>
        <div>
          <center>
            <img onClick={() => goBack()} style={{ marginTop: 10 }} src="https://upload.wikimedia.org/wikipedia/commons/2/24/NFT_Icon.png?20191215204608" height="50" width="50"></img>
          </center>
        </div>
        <div style={{ marginTop: 290 }}>
          <center>
            <p>Welcome to the best marketplace of the universe!</p>
            <p>Work in progress...</p>
          </center>
        </div>
      </main>
    </>);
};
