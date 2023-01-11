import React from "react";
import ConnexionWallet from "components/ButtonConnexionWallet/ConnexionWallet";
import HeaderDropdown from "components/Dropdowns/HeaderDropdown";
import Link from "next/link";
import Image from "next/image";
function Header() {
  return (
    <div className="flex justify-around items-center">
      <div className="flex items-center">
        {/* <img
              className="w-14 h-auto md:w-28 lg:w-42 headerLogo"
              src={"/img/logo_header.png"}
              alt="header_logo"
            /> */}
        <Image
          className="headerLogo"
          src={"/img/logo_header.png"}
          alt="Wildians logo"
          width={56}
          height={40}
        />
        <div className="text-beige p-2 md:hover:text-greenkaki md:cursor-pointer">
          THE PROJECT
        </div>
        <div className="text-beige p-2 md:hover:text-greenkaki md:cursor-pointer">
          ASSOCIATION
        </div>
      </div>
      <div className="md:hidden" id="dropdown">
        <HeaderDropdown id="header_dropdown " />
      </div>
      <div className="md:flex hidden md:items-center">
        <div className="flex gap-2">
          <a href="https://discord.gg/grjatzrcKp" target="_blank">
            <Image
              className="headerDiscord  mr-4"
              src={"/img/discord_f8ffe9.png"}
              alt="discord_logo"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.instagram.com/wildians/" target="_blank">
            <Image
              className="headerInsta mr-4"
              src={"/img/v2/visuels/insta_f8ffe9.png"}
              alt="insta_logo"
              width={30}
              height={30}
            />
          </a>
          <a href="https://twitter.com/Wildians_off" target="_blank">
            <Image
              className="headerTwitter mr-4"
              src={"/img/twitter_f8ffe9.png"}
              alt="twitter_logo"
              width={30}
              height={30}
            />
          </a>
        </div>
        <ConnexionWallet></ConnexionWallet>
        <div className="md:flex items-center md:w-min">
          <Link className="" href="admin">
            <div className="group flex rounded-md cursor-pointer items-center w-full px-2 py-2 md:whitespace-nowrap md:h-min md:text-sm  md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3 md:hover:bg-greenkaki md:hover:text-greeny md:text-greenkaki md:bg-greeny md:rounded-full  md:ease-linear md:transition-all md:duration-150">
              Admin
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
