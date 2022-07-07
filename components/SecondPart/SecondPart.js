import React from "react";

function SecondPart() {
    return <div className="flex items-center -mt-44">
        <div className="ml-16 mt-64">
            <p className="text-6xl tracking-[.75em] font-bold text-greeny">WILDIANS</p>
            <p className="text-6xl tracking-[.75em] text-wildianBlack">IS A UNIQUE PROJECT</p>
            <p className="text-6xl tracking-[.75em] text-wildianBlack">BUILT AROUND</p>
            <p className="text-6xl tracking-[.75em] font-bold text-wildianBlack">TEZOS BLOCKCHAIN.</p>
            <br></br>
            <p className="text-6xl tracking-[.75em] text-wildianBlack">ADOPT YOUR <a className="text-6xl tracking-[.75em] font-bold text-darkGreen">WILDLY</a>,</p>
            <p className="text-6xl tracking-[.75em] text-wildianBlack absolute">BE A PART OF A <a className="text-6xl tracking-[.75em] font-bold text-wildianBlack">BETTER WORLD</a>.</p>
        </div>
        <img
            className="w-74 h-74 relative left-48 transform -rotate-90"
            src={"/img/antlers.png"}
            alt="antlers"
        />
    </div >;
}
export default SecondPart;