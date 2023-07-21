import React from "react";
import Attribute from "./Attribute";

function NFTCard({ metadata }) {
    return (
        <div className="card nft-card-layout nft-card-style flex ">
            <div className="w-2/5 object-cover flex justify-center">
                <img
                    className="object-cover pic-border"
                    src={
                        // "https://ipfs.io/ipfs/bafybeigd6i6oskzsoeiwar4rtovyuxzgltn46735dvgac3unxkh2wmx3ie"
                        metadata.displayUri.replace(
                            "ipfs://",
                            "https://ipfs.io/ipfs/"
                        )
                    }
                    alt="Wolf_3D"
                    layout="fill"
                />
            </div>
            <div className="w-3/5 p-4 flex-1 items-center justify-items-center">
                <div className="flex text-white items-baseline">
                    <span className="title-typo nft-name-layout name-layout mt-4 ml-6">
                        Ellie{" "}
                    </span>
                    <span className="nft-id-font">#001</span>
                </div>
                <div className="body-italic-typo text-white nft-pillar-layout ml-6">
                    The primary pillar
                </div>
                <div className="mt-4 bio-layout">
                    <div className="title-typo text-white nft-name-layout mt-6 ml-6">
                        Bio
                    </div>
                    <div className="flex justify-between ml-6">
                        <div className=" bio-desc-layout">
                            <span className="text-white">
                                By adopting me, you supported WWF
                            </span>
                        </div>
                        <div
                            className="text-white md:cursor-pointer btn-layout white-btn-style body-highlight-typo hover:learn-hover " /**className="m-auto rounded-full border-white border-solid"**/
                        >
                            <div>Learn more &gt;</div>
                        </div>
                    </div>
                    <div className="ml-6">
                        <Attribute
                            title="Birthday"
                            description="14 mars 2000"
                        />
                    </div>
                </div>
                <div>
                    <div className="title-typo text-white nft-name-layout attribute-layout mt-6 ml-6">
                        Attributes
                    </div>
                    <div className="flex text-white flex-col">
                        <div className="flex flex-row justify-center">
                            <Attribute title="Horn" description="Red" />
                            <Attribute title="Fur" description="Red" />
                            <Attribute title="Hoof" description="Red" />
                        </div>
                        <div className="flex flex-row justify-center">
                            <Attribute title="Ear" description="Red" />
                            <Attribute title="Tail" description="Red" />
                            <Attribute title="Decoration" description="Red" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFTCard;
