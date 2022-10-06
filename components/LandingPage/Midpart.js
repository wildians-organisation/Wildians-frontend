import React from "react";

function Midpart() {
  return (
    <div className="h-screen bg-cover  bg-mid-bg font-goghbold">
      <div className="relative top-48 h-96">
        <div className="text-center text-4xl md:text-5xl lg:text-6xl text-greeny">
          HOW DOES THIS WORK
        </div>
        <div className="flex justify-evenly items-center text-beige mt-12">
          <div className="flex flex-col justify-center items-center w-4/12">
            <img
              className="w-10 h-auto md:w-20 lg:w-30"
              src={"/img/envt_f8ffe9.png"}
              alt="envt_logo"
            />
            <div className="flex">
              <img
                className="w-10 h-auto md:w-24 lg:w-30"
                src={"/img/society_f8ffe9.png"}
                alt="society_logo"
              />

              <img
                className="w-10 h-auto md:w-20 lg:w-30 "
                src={"/img/economy_f8ffe9.png"}
                alt="economy_logo"
              />
            </div>
            <div className="text-center mt-4 w-5/12 text-xs md:text-base">
              Choose among the three components of sustainable development
            </div>
          </div>

          <div className="self-end w-4/12">
            <div className=" flex flex-col justify-center items-center">
              <img
                className="w-28 h-auto md:w-40 lg:w-52"
                src={"/img/give_f8ffe9.png"}
                alt="envt_logo"
              />
              <div className="text-center  mt-4 w-5/12 text-xs md:text-base">
                20 % for an association linked to your Wildy family{" "}
              </div>
            </div>
          </div>
          <div className="self-end w-4/12">
            <div className="flex flex-col justify-center items-center ">
              <img
                className="w-28 h-auto md:w-40 lg:w-52"
                src={"/img/play_f8ffe9.png"}
                alt="envt_logo"
              />
              <div className="text-center mt-4 w-5/12 text-xs md:text-base">
                Play with your Wildy Act for a better world{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Midpart;
