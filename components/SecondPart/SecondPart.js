import React from "react";

function SecondPart() {
  return (
    <div className="flex items-center w-full h-96 bg-whiteBroke">
      <div className="ml-16   h-80 ">
        <p className=" tracking-[.75em] text-4xl md:text-5xl lg:text-6xl font-bold text-greeny ">
          WILDIANS
        </p>
        <p className="tracking-[.75em]  text-4xl md:text-5xl lg:text-6xl text-wildianBlack ">
          IS A UNIQUE PROJECT
        </p>
        <p className="tracking-[.75em]  text-4xl md:text-5xl lg:text-6xl text-wildianBlack ">
          BUILT AROUND
        </p>
        <p className=" tracking-[.75em]  text-4xl md:text-5xl lg:text-6xl font-bold text-wildianBlack ">
          TEZOS BLOCKCHAIN.
        </p>
        <br />
        <p className=" tracking-[.75em]  text-4xl md:text-5xl lg:text-6xl text-wildianBlack ">
          ADOPT YOUR{" "}
          <a className=" tracking-[.75em]  text-4xl md:text-5xl lg:text-6xl font-bold text-darkGreen ">
            WILDLY
          </a>
          ,
        </p>
        <p className=" tracking-[.75em]  text-4xl md:text-5xl lg:text-6xl text-wildianBlack absolute  ">
          BE A PART OF A{" "}
          <a className=" tracking-[.75em] text-4xl md:text-5xl lg:text-6xl font-bold text-wildianBlack  ">
            BETTER WORLD
          </a>
          .
        </p>
      </div>
      {/*<img
        className="w-74 h-74 relative left-48 transform -rotate-90"
        src={"/img/antlers.png"}
        alt="antlers"
  />*/}
    </div>
  );
}
export default SecondPart;
