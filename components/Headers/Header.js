import React from "react";
// components
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/*<img src={"/banner.png"} alt="Logo"></img>*/}
      <div className="h-screen bg-cover  bg-banner-p font-goghbold p-4">
        <div className="flex justify-around items-center">
          <div className="flex items-center">
            <img
              className="w-28 h-20"
              src={"/img/logo_header.png"}
              alt="header_logo"
            />
            <div className="text-beige text-5xl">ILDIANS</div>
          </div>
          <div className="flex ">
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
          </div>
        </div>
        <div>
          <div className="text-center flex flex-col items-center mt-24 mb-6">
            <div className="text-beige text-8xl">COMING SOON</div>
            <img
              className="w-56 h-40"
              src={"/img/logo_header.png"}
              alt="header_logo"
            />
          </div>
        </div>
        <div className="flex items-center justify-end ">
          <div className="flex items-center justify-center bg-bordeau rounded-3xl w-44 h-12 mr-6">
            <div className=" text-beige justify-end mr-1 text-2xl">JOIN US</div>
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
