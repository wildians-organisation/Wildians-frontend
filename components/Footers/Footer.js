import Router from "next/router";
import React from "react";

export default function Footer() {

  /**
   * fonction permettant de naviguer parmis les différentes pages du footer
   * @param {*} pageName
   */
  const goToIndicatedPage = (pageName) => {
    Router.push(pageName)
  };

  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">

        <div className="flex flex-wrap items-center md:justify-between justify-center place-content-evenly">
          <div id="footerdenhaut" className="w-full md:w-4/12 px-4 mx-auto text-center place-content-evenly space-between" style="display: inline-flex;width: 100%;justify-content: space-between;flex-direction: row;flex-wrap: wrap;align-items: center;">
            <div>
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
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-instagram"></i>
              </button>
            </div>

            <div className="text-sm text-blueGray-500 font-semibold py-1">
              <a className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => goToIndicatedPage("/about")}
              >
                About
              </a> - <a
                className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => goToIndicatedPage("/white-paper")}
              >
                White-Paper
              </a> - <a
                className="text-blueGray-500 hover:text-blueGray-800"
                onClick={() => goToIndicatedPage("/F.A.Q")}
              >
                F.A.Q
              </a>

            </div>
            <div >
              <a
                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                onClick={() => goToIndicatedPage("/contact-us")}                      >
                Contact Us
              </a>
            </div>
            <hr className="my-6 border-blueGray-300" />
          </div>
        </div>
        <div id="footerdenhaut" className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              <a
                href="https://www.creative-tim.com?ref=nnjs-footer"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                Terms of use - </a>
              <a
                className="text-blueGray-500 hover:text-blueGray-800"
              > Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
