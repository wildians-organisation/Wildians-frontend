import React from "react";
import Image from "next/image";
import Deer from "../Wildian/Deer";
import Wolf from "components/Wildian/Wolf";
import Bull from "components/Wildian/Bull";

function BottomPart() {
  return (
    <div className="h-screen bg-cover bg-emerald-800  bg-wood-bg font-goghbold">
      <div className="relative top-48 h-96">
        <div className="text-center text-4xl md:text-5xl lg:text-6xl text-greeny">
          GET YOUR WILDIANS
        </div>
        <div className="m-auto h-77px w-576px text-center font-normal leading-5 text-beige">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam
          ut risus viverra scelerisque. In metus tellus, congue id turpis
          scelerisque, vulputate suscipit velit. Nunc pretium ipsum id venenatis
          fringilla.
        </div>
        <div className="explanationPart flex justify-evenly items-center text-beige mt-12">
          <Deer></Deer>
          <Wolf></Wolf>
          <Bull></Bull>
        </div>
      </div>
    </div>
  );
}

export default BottomPart;
