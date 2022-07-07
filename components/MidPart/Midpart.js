import React from "react";

function Midpart() {
  return (
    <div className="h-screen bg-cover  bg-mid-bg font-goghbold">
      <div className="relative top-48 h-96">
        <div className="text-center text-4xl text-greeny">
          HOW DOES THIS WORK
        </div>
        <div className="flex justify-evenly items-center text-beige mt-16">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-20 h-20"
              src={"/img/envt_f8ffe9.png"}
              alt="envt_logo"
            />
            <div className="flex">
              <img
                className="w-24 h-24 mr-4"
                src={"/img/society_f8ffe9.png"}
                alt="society_logo"
              />

              <img
                className="w-20 h-20 "
                src={"/img/economy_f8ffe9.png"}
                alt="economy_logo"
              />
            </div>
            <div className="text-center mt-4 w-64">
              Choose among the three componen ts of sustainable development
            </div>
          </div>

          <div>
            <div className=" flex flex-col justify-center items-center">
              <img
                className="w-36 h-36"
                src={"/img/give_f8ffe9.png"}
                alt="envt_logo"
              />
              <div className="text-center  mt-4 w-64">
                20 % for an association linked to your Wildy family{" "}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-36 h-36"
                src={"/img/play_f8ffe9.png"}
                alt="envt_logo"
              />
              <div className="text-center mt-4 w-64">
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
