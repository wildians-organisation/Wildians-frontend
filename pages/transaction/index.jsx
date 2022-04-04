import React from "react";
import Footer from "components/Footers/Footer";
import Navbar from "components/Navbars/AuthNavbar.js";

export default function Transaction() {
  // Display items in a list with add button on each items
  return (
    <div className="absolute inset-0 h-full flex flex-col justify-between w-full">
      <Navbar transparent />
      <main className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div style={{ marginTop: 290 }}>
          <center>
            <p>Welcome to the best transaction page of the universe!</p>
            <p>Work in progress...</p>
          </center>
        </div>
      </main>
      <Footer />
    </div>);
};