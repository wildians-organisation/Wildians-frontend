import Image from "next/image";
import React from "react";

export default function BottomPartVitrine() {
    return (
        <div
            className="flex items-center flex-col md:flex-row justify-center bg-brown bg-no-repeat bg-cover p-4 h-1000-px"
            style={{
                height: "350px",
                backgroundColor: "#403831"
            }}
        >
            <div className="relative flex justify-between md:w-600">
                <div className="text-white flex justify-between">
                    <a href="/">
                        <Image
                            className="headerLogo"
                            src={"/img/v2/visuels/logo.svg"}
                            alt="Wildians logo"
                            width={200}
                            height={181}
                        />
                    </a>

                    <div className="text-white pl-6 align-items hidden md:block">
                        <div className="marker-typo">WE ARE</div>
                        <div className="title-typo">Wildians</div>
                    </div>
                    <div className="text-white pl-6 align-items md:hidden absolute left-8">
                        <div className="marker-typo">WE ARE</div>
                        <div className="title-typo">Wildians</div>
                    </div>
                </div>
            </div>
            <div className="text-white pl-6">
                <div className="title-typo md:w-600 whitespace-nowrap mb-4">
                    Envie de discuter avec nous ?
                </div>
                <div className="body-typo md:w-600 mb-4">
                    Parce que Wildians c’est avant tout une communauté,
                    participe à la construction de celle-ci en nous partageant
                    tes retours ici :{" "}
                </div>
                <div className="flex gap-2 ml-auto mt-3">
                    <a
                        href="https://discord.gg/grjatzrcKp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            className="headerDiscord mr-4 default-logo-fill-footer hover:turquoise"
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 640 512"
                        >
                            <style></style>
                            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com/wildians/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            className="headerInsta mr-4 default-logo-fill-footer hover:turquoise"
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
                            className="headerTwitter mr-4 default-logo-fill-footer hover:turquoise"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ height: "1.9em", width: "1.5em" }}
                            viewBox="0 0 21 22"
                        >
                            <style></style>
                            <path d="M12.6832 9.3875L20.331 0.5H18.5187L11.8781 8.21689L6.57433 0.5H0.457031L8.47741 12.1693L0.457031 21.4892H2.26941L9.28201 13.3399L14.8832 21.4892H21.0005L12.6827 9.3875H12.6832ZM10.2009 12.2721L9.38826 11.1101L2.92244 1.86396H5.70615L10.9241 9.3259L11.7368 10.4879L18.5195 20.1873H15.7358L10.2009 12.2726V12.2721Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
