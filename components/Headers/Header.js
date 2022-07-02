import React from "react";
// components
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/*<img src={"/banner.png"} alt="Logo"></img>*/}
      <div className="h-screen bg-cover  bg-banner-p font-goghbold flex justify-around items-baseline">
        <div className="flex items-center">
          <img
            className="w-28 h-20"
            src={"/img/logo_header.png"}
            alt="header_logo"
          />
          <div className="text-beige text-6xl">ILDIANS</div>
        </div>
        <div className="flex ">
          <img
            className="w-10 h-10 mr-4"
            src={"/img/discord_f8ffe9.png"}
            alt="discord_logo"
          />
          <img
            className="w-10 h-10"
            src={"/img/twitter_f8ffe9.png"}
            alt="twitter_logo"
          />
        </div>
      </div>
    </>
  );
}
