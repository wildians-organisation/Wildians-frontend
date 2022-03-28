import React, { useRef } from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Router from "next/router";

const scrollToRef = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop - 50,
    left: 0,
    behavior: "smooth",
  });
};

export default function Landing() {
  const goToMarketPlace = () => {
    Router.push("/marketplace");
  };

  const myRef = useRef(null);
  //const executeScroll = () => scrollToRef(myRef)

  return (
    <div className="absolute inset-0 h-full flex flex-col justify-between w-full">
      <Navbar transparent />
      <main className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div style={{ marginTop: 290 }}>
          <center>
            <p>Welcome to NFPets !!!</p>
            <p>Work in progress...</p>
          </center>
        </div>
      </main>
      <Footer />
    </div>
  );
}
