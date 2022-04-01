import React from "react";
import Link from "next/link";
import Router from "next/router";
import ConnexionWallet from "../ButtonConnexionWallet/ConnexionWallet";
import { scrollToSection } from "pages";

// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const goLandingPage = () => {
    Router.push("/");
  };

  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="footer">
          <div classname="gap-6" style={{ display: "-webkit-inline-flex" }} >
            <div id="elmtRight">
              <ul>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/24/NFT_Icon.png?20191215204608"
                    height="50"
                    width="50"
                    onClick={() => goLandingPage()}
                  ></img>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6 ml-3">
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => scrollToSection("concept")}
              >
                {" "}
                Concept
              </a>
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => scrollToSection("adopt")}
              >
                {" "}
                Adopt
              </a>
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => scrollToSection("roadmap")}
              >
                {" "}
                Roadmap
              </a>
            </div>
          </div>
          <div id="elmtMid" className="text-blueGray-500 hover:text-blueGray-800">
            <a> Marketplace </a>
          </div>
          <div id="elmtLeft" style={{ display: "-webkit-inline-flex" }}>
            <button
              className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-discord"></i>
            </button>
            <li className="flex items-center">
              <ConnexionWallet />
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
