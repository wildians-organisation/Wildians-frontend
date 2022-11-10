import React from "react";
// components
import ConnexionWallet from "components/ButtonConnexionWallet/ConnexionWallet";
import HeaderDropdown from "components/Dropdowns/HeaderDropdown";
import Router from "next/router";

const goToIndicatedPage = (pageName) => {
  Router.push(pageName);
};

export default function Header() {
  return (
    <>
      <div className=" bg-cover  bg-banner-p font-goghbold p-4 h-500-px">
        <div className="flex justify-around items-center">
          <div className="flex items-center">
            <img
              className="w-14 h-auto md:w-28 lg:w-42"
              src={"/img/logo_header.png"}
              alt="header_logo"
            />
            <div className="text-beige text-6vw">ILDIANS</div>
          </div>
          <div className="md:hidden ">
            <HeaderDropdown />
          </div>
          <div className="md:flex hidden md:items-center">
            <img
              className="w-6 h-6 mr-4"
              src={"/img/discord_f8ffe9.png"}
              alt="discord_logo"
            />
            <img
              className="w-6 h-6"
              src={"/img/twitter_f8ffe9.png"}
              alt="twitter_logo"
            />

            <ConnexionWallet></ConnexionWallet>
          </div>
        </div>
        <div>
          <div className="text-center flex flex-col items-center mt-24 mb-6">
            <div className="text-beige text-10vw">COMING SOON</div>
            <img
              className="w-28 h-auto md:w-42 lg:w-56"
              src={"/img/logo_header.png"}
              alt="header_logo"
            />
          </div>
        </div>
        <div className="flex items-center justify-end ">
          <div className="fixed z-10 flex items-center justify-center bg-bordeau rounded-3xl w-40 h-8 md:w-44 md:h-12 mr-6 bottom-28">
            <div className="text-beige justify-end mr-1 text-xl md:text-2xl">
              JOIN US
            </div>
            <img
              className="w-7 h-7"
              src={"/img/discord_f8ffe9.png"}
              alt="discord_logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
