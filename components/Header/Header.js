import React from "react";
import ConnexionWallet from "components/ButtonConnexionWallet/ConnexionWallet";
import HeaderDropdown from "components/Dropdowns/HeaderDropdown";
import Link from "next/link";
import Image from "next/image";
function Header() {
    return (
        <div className="flex justify-around items-center">
            <div className="flex items-center">
                <a href="/">
                    <Image
                        className="headerLogo"
                        src={"/img/logo_header.png"}
                        alt="Wildians logo"
                        width={56}
                        height={40}
                    />
                </a>
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
                    <a
                        href="https://www.instagram.com/wildians/"
                        target="_blank"
                    >
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
            </div>
        </div>
    );
}

export default Header;
