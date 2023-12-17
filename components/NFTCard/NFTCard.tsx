import React from "react";
import Attribute from "./Attribute";

function NFTCard({ metadata, nftNumber }) {
    var animal = metadata.name;

    if (animal === "BICHE") {
        animal = "DEER";
    }
    const date = metadata.firstTime;

    const getColorClass = () => {
        switch (animal) {
            case "DEER":
                return "text-green-deer";
            case "WOLF":
                return "text-red-wolf";
            case "BULL":
                return "text-yellow-bull";
            default:
                return "";
        }
    };

    const getAnimalImage = () => {
        const deer_IMG = "/img/v2/visuels/cerf.jpg";
        const wolf_IMG = "/img/v2/visuels/loup.jpg";
        const bull_IMG = "/img/v2/visuels/taureau.jpg";

        switch (animal) {
            case "DEER":
                return deer_IMG;
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
            case "DEER":
                return "WWF";
            default:
                return "";
        }
    };

    const getONGLink = () => {
        switch (animal) {
            case "DEER":
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
                                    <b>
                                        <b>{getONGName(animal)}</b>
                                    </b>
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
                            <div>
                                <span className={getColorClass()}>
                                    Learn more &gt;
                                </span>
                            </div>
                        </a>
                    </div>
                    <div
                        className="ml-6"
                        style={{
                            marginTop: "2.7rem",
                            backgroundColor: "attributegreen",
                            borderRadius: "10px"
                        }}
                    >
                        <div
                            className="text-center text-white"
                            style={{ marginTop: "0.6rem" }}
                        >
                            <span>
                                <b>
                                    <b>Birthday</b>
                                </b>
                            </span>
                        </div>
                        <div
                            className="text-center text-white"
                            style={{
                                marginBottom: "0.7rem",
                                marginRight: "1rem",
                                marginLeft: "1rem"
                            }}
                        >
                            {formatDate(date)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFTCard;
