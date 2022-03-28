import React from "react";
import Link from "next/link";
import Router from "next/router";

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
          <div id="elmtMid" className="relative left-28">
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
              <button
                className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                <i className="fas fa-arrow-alt-circle-down"></i> Connect to
                Wallet
              </button>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
