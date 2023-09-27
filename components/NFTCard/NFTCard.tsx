import React from "react";
import Attribute from "./Attribute";

function NFTCard({ metadata }) {
    return (
        <div className="card h-96 rounded-lg flex w-full">
            <div className="w-2/5 object-cover flex justify-center">
                <img
                    className="object-cover"
                    src={
                        // "https://ipfs.io/ipfs/bafybeigd6i6oskzsoeiwar4rtovyuxzgltn46735dvgac3unxkh2wmx3ie"
                        metadata.displayUri.replace(
                            "ipfs://",
                            "https://ipfs.io/ipfs/"
                        )
                    }
                    alt="Wolf_3D"
                />
            </div>
            <div className="w-3/5 text-white p-4 ">
                <div className="flex text-white font-bold flex-row  items-baseline ">
                    <div className="text-3xl ">Ellie</div>
                    <div className="ml-1">#001</div>
                </div>
                <div className="italic text-xs">The primary pillar</div>
                <div className="mt-4">
                    <div className="font-bold text-2xl">Bio</div>
                    <div className="flex justify-between">
                        <div>By adopting me, you supported WWF</div>
                        <div className="m-auto rounded-full border-white border-solid">
                            <div className="text-xs">Learn of &gt;</div>
                        </div>
                    </div>
                    <Attribute title="Created" description="14 mars 2000" />
                </div>
                <div>
                    <div className="font-bold text-2xl">Attributes</div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <Attribute title="Color" description="Red" />
                            <Attribute title="Color" description="Red" />
                            <Attribute title="Color" description="Red" />
                        </div>
                        <div className="flex flex-row">
                            <Attribute title="Color" description="Red" />
                            <Attribute title="Color" description="Red" />
                            <Attribute title="Color" description="Red" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFTCard;
