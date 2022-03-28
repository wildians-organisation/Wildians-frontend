import Router from "next/router";
import React from "react";

export default function Footer() {
  /**
   * fonction permettant de naviguer parmis les différentes pages du footer
   * @param {*} pageName
   */
  const goToIndicatedPage = (pageName) => {
    Router.push(pageName);
  };

  return (
    <>
      <footer className="relative bottom-4 bg-blueGray-200 pt-8 pb-6 ">
        <div className="flex flex-wrap items-center md:justify-between justify-center place-content-evenly">
          <div id="footerdenhaut" className="footer">
            <div id="elmtLeft">
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
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-instagram"></i>
              </button>
            </div>
            <div
              id="elmtMid"
              className="text-sm text-blueGray-500 font-semibold py-1"
              style={{ position: "relative", right: 6 }}
            >
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => goToIndicatedPage("/about")}
              >
                About
              </a>{" "}
              -{" "}
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => goToIndicatedPage("/white-paper")}
              >
                White-Paper
              </a>{" "}
              -{" "}
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => goToIndicatedPage("/F.A.Q")}
              >
                F.A.Q
              </a>
            </div>
            <div id="elmtRight">
              <a className="text-blueGray-500 hover:text-blueGray-800">
                NFPets
              </a>{" "}
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => goToIndicatedPage("/contact-us")}
              >
                {" "}
                Contact us{" "}
              </a>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div id="footerdenbas" style={{ width: "100%", textAlign: "center" }}>
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => goToIndicatedPage("/terms-of-use")}
              >
                Terms of use -{" "}
              </a>
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => goToIndicatedPage("/privacy-policy")}
              >
                {" "}
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
