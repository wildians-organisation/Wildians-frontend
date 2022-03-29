import React from "react";
import Link from "next/link";
import Router from "next/router";
import ConnexionWallet from "../ButtonConnexionWallet/ConnexionWallet";

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
          <div style={{ display: "-webkit-inline-flex" }}>
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
            <div className="align-middle">
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
              //onClick={() => goToIndicatedPage("/privacy-policy")}
              >
                {" "}
                Concept
              </a>
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
              //onClick={() => goToIndicatedPage("/privacy-policy")}
              >
                {" "}
                Adopt
              </a>
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
              //onClick={() => goToIndicatedPage("/privacy-policy")}
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
