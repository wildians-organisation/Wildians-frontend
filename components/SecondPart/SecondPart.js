import React from "react";

function SecondPart() {
    return <div className="flex items-center justify-between">
        <div className="ml-16">
            <div className="text-5xl tracking-[.75em] font-bold text-greeny">WILDIANS</div>
            <div className="text-teal-500 text-4xl">IS A UNIQUE PROJECT</div>
            <div className="text-teal-500 text-4xl">BUILT AROUND</div>
            <div className="text-teal-500 text-4xl">TEZOS BLOCKCHAIN.</div>
            <div className="text-teal-500 text-4xl">ADOPT YOUR WILDY,</div>
            <div className="text-teal-500 text-4xl">BE A PART OF A BETTER WORLD.</div>
        </div>
        <img
            className="w-74 h-74 relative left-28 transform -rotate-90"
            src={"/img/antlers.png"}
            alt="antlers"
        />
    </div>;
}
export default SecondPart;