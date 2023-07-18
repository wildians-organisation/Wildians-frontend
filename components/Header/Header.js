import React from "react";
import ConnexionWallet from "components/ButtonConnexionWallet/ConnexionWallet";
import HeaderDropdown from "components/Dropdowns/HeaderDropdown";
import Link from "next/link";
import Image from "next/image";
function Header() {
    return (
        <div className="header-layout">
            <div className="flex items-center mt-3_5 mr-30">
                <a href="/">
                    <Image
                        className="headerLogo"
                        src={"/img/v2/visuels/logo.svg"}
                        alt="Wildians logo"
                        width={89}
                        height={78}
                    />
                </a>
                <div
                    className="text-white project-layout md:cursor-pointer body-highlight-typo  md:hover:text-greeny md:whitespace-nowrap mt-3_5" /**className="text-beige p-2 md:hover:text-greenkaki md:cursor-pointer"**/
                >
                    THE PROJECT
                </div>
                <div
                    className="text-white asso-layout md:cursor-pointer body-highlight-typo  md:hover:text-greeny mt-3_5" /**className="text-beige p-2 md:hover:text-greenkaki md:cursor-pointer"**/
                >
                    ASSOCIATION
                </div>
                <Link href="personnalisation" className="text-white pers-layout body-highlight-typo  md:hover:text-greeny md:whitespace-nowrap mt-3_5" /**className="text-beige p-2 md:hover:text-greenkaki md:cursor-pointer"**/>
                        NFT CUSTOMIZATION
                </Link>
            </div>
            
            <div className="md:hidden" id="dropdown">
                <HeaderDropdown id="header_dropdown " />
            </div>

            <div className="md:flex hidden md:items-center mt-3_5 ml-30 ">

                
                <div className="flex gap-2">
                    <Link className="text-white" href="nft-collection">
                        <div className="text-white collection-layout body-highlight-typo  md:hover:text-greeny md:whitespace-nowrap mt-3_5" /**className="text-gray-900 group flex rounded-md cursor-pointer items-center px-2 py-2 md:whitespace-nowrap md:h-min md:text-sm md:text-greenkaki md:bg-greeny md:hover:bg-greenkaki md:hover:text-greeny md:rounded-full md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150"**/>
                            MY COLLECTION
                        </div>
                    </Link>
                    <a
                        href="https://discord.gg/grjatzrcKp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            className="headerDiscord  mr-5"
                            src={"/img/discord_f8ffe9.png"}
                            alt="discord_logo"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/wildians/"
                        target="_blank "
                        rel="noreferrer"
                    >
                        <Image
                            className="headerInsta mr-5"
                            src={"/img/v2/visuels/insta_f8ffe9.png"}
                            alt="insta_logo"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a
                        href="https://twitter.com/Wildians_off"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            className="headerTwitter mr-5"
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
