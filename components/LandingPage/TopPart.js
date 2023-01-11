import React from "react";
import Header from "components/Header/Header";
function TopPart() {
  return (
    <>
      <div className="headerBackground bg-cover  bg-forest-bg font-goghbold p-4 h-500-px">
        <Header />
        <div>
          <div className=" flex flex-col items-start mt-24 mb-6 ml-12">
            <div className="text-beige text-2xl  font-mulishItalic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="flex items-center  bg-bordeau rounded-3xl  px-2.5 ">
              <div className="text-beige justify-end mr-1 text-xl md:text-2xl whitespace-nowrap">
                Get your wildians
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end "></div>
      </div>
    </>
  );
}

export default TopPart;
