import React from "react";
import Router from "next/router";
import ConnexionWallet from "components/ButtonConnexionWallet/ConnexionWallet";
import { scrollToSection } from "pages";
// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  /**
   * fonction permettant de naviguer parmis les différentes pages du footer
   * @param {*} pageName
   */
  const goToIndicatedPage = (pageName) => {
    Router.push(pageName);
  };

  /**
   * Fonction permettant de naviguer vers la landing page
   */
  const goLandingPage = () => {
    Router.push("/");
  };

  /**
   * Fonction qui permet de naviguer et d'attendre la landing page
   * @return {*} 
   */
  function waitLandingPage() {
    return new Promise((resolve) => {
      Router.push("/");
      resolve();
    });
  }

/**
 * Fonction qui te fait scroll à un endroit précis dans la landing page
 * lorsqu'on l'appelle
 * @param {*} funct
 * @param {*} section
 * @return {*} 
 */
async function waitLandingPageAndScroll(funct, section) {
    if (Router.pathname === "/") {
      funct(section);
      return;
    }
    await waitLandingPage();
    setTimeout(() => {
      funct(section);
    }, 500);
  }

  return (
    <>
      <nav className="sticky top-0 bg-indigo-500 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="footer">
          <div
            className="gap-6 mr-6"
            style={{ display: "-webkit-inline-flex" }}
          >
            <div id="elmtRight">
              <ul>
                <li>
                  <img
                    src="/img/logo.png"
                    height="75"
                    width="75"
                    onClick={() => goLandingPage()}
                  ></img>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6 ml-3">
              <a
                className="text-black hover:text-blueGray-800"
                onClick={() => {
                  waitLandingPageAndScroll(scrollToSection, "concept");
                }}
              >
                {" "}
                Concept
              </a>
              <a
                className="text-black hover:text-blueGray-800"
                onClick={() => {
                  waitLandingPageAndScroll(scrollToSection, "adopt");
                }}
              >
                {" "}
                Adopt
              </a>
              <a
                className="text-black hover:text-blueGray-800"
                onClick={() => {
                  waitLandingPageAndScroll(scrollToSection, "roadmap");
                }}
              >
                {" "}
                Roadmap
              </a>
            </div>
          </div>
          <div id="elmtMid" className="text-black hover:text-blueGray-800">
            <a
              onClick={() => {
                waitLandingPageAndScroll(scrollToSection, "marketplace");
              }}
            >
              Marketplace
            </a>
          </div>
          <div id="elmtLeft" className="flex items-center">
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

            <ConnexionWallet></ConnexionWallet>

            <button
              className="bg-white text-lightBlue-600 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3"
              type="button"
              onClick={() => goToIndicatedPage("/mypets")}
            >
              <a>My pets</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
