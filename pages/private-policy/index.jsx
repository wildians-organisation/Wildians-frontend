import React from "react";
import Router from "next/router";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer";

export default function PrivatePrivacy() {
  // Display items in a list with add button on each items
  return (
    <>
      <Navbar transparent />
      <main>
        <div style={{ marginTop: 290 }}>
          <center>
            <p>Welcome to the best private policy of the universe!</p>
            <p>Work in progress...</p>
          </center>
        </div>
      </main>
      <Footer />
    </>);
};