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
      <div>
        <div name="first-part" className="flex items-center ml-40">
          <div name="big-logo">
            <img
              className="w-56 h-40"
              src={"/img/logo_36544f.png"}
              alt="twitter_logo"
            />
          </div>
          <div name="main-text" className="ml-24">
            <div name="firstPart-MainText" className="flex items-center">
              <p className="text-6xl tracking-[.75em] font-bold text-greeny">ENTER THE </p>
              <div name="logoInText" className="flex ml-9">
                <img
                  className="w-8 h-8"
                  src={"/img/discord_403831.png"}
                  alt="discord_logo"
                />
                <img
                  className="w-8 h-8 ml-2"
                  src={"/img/insta_403831.png"}
                  alt="twitter_logo"
                />
                <img
                  className="w-8 h-8 ml-2"
                  src={"/img/twitter_403831.png"}
                  alt="twitter_logo"
                />
                <img
                  className="w-8 h-8 ml-2"
                  src={"/img/tiktok_403831.png"}
                  alt="twitter_logo"
                />
              </div>
            </div>
            <p className="text-6xl tracking-[.75em] font-bold text-greeny">WILDIANS COMMUNITY</p>
          </div>
        </div>

        <div name="second-part" className="text-center mb-4 mt-16">
          <div name="top-part">
            <a
              className="text-base"
              onClick={() => goToIndicatedPage("/about")}
            >
              About us
            </a>
            <a className="text-xl ml-12">
              {" "}|{" "}
            </a>
            <a
              className="text-base ml-12"
              onClick={() => goToIndicatedPage("/white-paper")}
            >
              White-Paper
            </a>
            <a className="text-xl ml-12">
              {" "}|{" "}
            </a>
            <a
              className="text-base ml-12"
              onClick={() => goToIndicatedPage("/F.A.Q")}
            >
              F.A.Q
            </a>
          </div>

          <div name="bottom-part" className="">
            <a
              className="text-xs"
              onClick={() => goToIndicatedPage("/terms-of-use")}
            >
              Terms of use
            </a>
            <a className="text-xl ml-12">
              {" "}|{" "}
            </a>
            <a
              className="text-xs ml-12"
              onClick={() => goToIndicatedPage("/privacy-policy")}
            >
              Privacy policy
            </a>

          </div>
        </div>
      </div>
    </>
  );
}