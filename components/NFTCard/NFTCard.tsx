import React from "react";
import Attribute from "./Attribute";

function NFTCard({ metadata, nftNumber }) {

    const animal = metadata.name;
    const date = metadata.firstTime;

    const getColorClass = () => {
        switch (metadata.name) {
            case "BICHE":
                return "text-blue-500";
            case "WOLF":
                return "text-green-500";
            case "BULL":
                return "text-red-500";
            default:
                return "";
        }
    };

    const getAnimalImage = () => {
        const biche_IMG = "/img/v2/visuels/Deer.png";
        const wolf_IMG = "/img/v2/visuels/Wolf.png";
        const bull_IMG = "/img/v2/visuels/Bull.png";

        switch (metadata.name) {
            case "BICHE":
                return biche_IMG;
            case "WOLF":
                return wolf_IMG;
            case "BULL":
                return bull_IMG;
            default:
                return "";
        }
    };

    const getONGName = (animal) => {
        switch (animal) {
            case "WOLF":
                return "Charity Watter";
            case "BULL":
                return "Amnesty International";
            case "BICHE":
                return "WWF";
            default:
                return "";
        }
    };

    const getONGLink = () => {
        switch (metadata.name) {
            case "BICHE":
                return "https://www.wwf.fr/";
            case "WOLF":
                return "https://www.charitywater.org/";
            case "BULL":
                return "https://soutenir.amnesty.fr/";
            default:
                return "#";
        }
    };

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            month: "long",
            day: "numeric",
            year: "numeric"
        };
        const formattedDate = new Date(dateString).toLocaleDateString(
            undefined,
            options
        );
        return formattedDate;
    };

    return (
        <div className="card nft-card-layout nft-card-style flex ">
            <div className="w-1/2 object-cover flex justify-center">
                <img
                    className="object-cover pic-border"
                    src={getAnimalImage()}
                    alt={`${metadata.name}_Image`}
                />
            </div>
            <div className="w-1/2 p-4 flex-1 items-center justify-items-center">
                <div className={`flex items-baseline ${getColorClass()}`}>
                    <span className="title-typo nft-name-layout name-layout mt-4 ml-6">
                        {metadata.name}{" "}
                    </span>
                    <span className="nft-id-font">
                        #{String(nftNumber).padStart(3, "0")}
                    </span>
                </div>
                <div className="body-italic-typo text-white nft-pillar-layout ml-6">
                    The primary pillar
                </div>
                <div className="mt-4 bio-layout">
                    <div className="title-typo text-white nft-name-layout mt-6 ml-6">
                        Bio
                    </div>
                    <div className="flex justify-between ml-6">
                        <div className=" bio-desc-layout whitespace-nowrap">
                            <span className="text-white">
                                By adopting me, you supported{" "}
                                <span className={getColorClass()}>
                                    {getONGName(animal)}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="ml-6 text-white md:cursor-pointer btn-layout white-btn-style body-highlight-typo hover:learn-hover">
                        <a
                            href={getONGLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>Learn more &gt;</div>
                        </a>
                    </div>
                    <div className="ml-6 body-highlight-typo">
                        <Attribute
                            title="Birthday"
                            description={formatDate(date)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFTCard;
