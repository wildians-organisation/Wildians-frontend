import React from "react";
import Image from "next/image";

function HeaderVitrine() {
    return (
        <div className="h-20 flex md:px-32 md:justify-between pt-4 items-center">
            <div className="">
                <a href="/">
                    <Image
                        className="headerLogo"
                        src={"/img/v2/visuels/logo.svg"}
                        alt="Wildians logo"
                        width={89}
                        height={78}
                    />
                </a>
            </div>
            <div className="gap-2 hidden md:flex items-center">
                <a
                    href="https://www.instagram.com/wildians/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        className="headerInsta mr-4 default-logo-fill-header hover:turquoise"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                    >
                        <style></style>
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                </a>
                <a
                    href="https://twitter.com/Wildians_off"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        className="headerTwitter mr-4 default-logo-fill-header-twitter hover:turquoise"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 21 22"
                    >
                        <style></style>
                        <path d="M12.6832 9.3875L20.331 0.5H18.5187L11.8781 8.21689L6.57433 0.5H0.457031L8.47741 12.1693L0.457031 21.4892H2.26941L9.28201 13.3399L14.8832 21.4892H21.0005L12.6827 9.3875H12.6832ZM10.2009 12.2721L9.38826 11.1101L2.92244 1.86396H5.70615L10.9241 9.3259L11.7368 10.4879L18.5195 20.1873H15.7358L10.2009 12.2726V12.2721Z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default HeaderVitrine;
