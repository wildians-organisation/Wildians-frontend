import React from "react";
import Image from "next/image";

function Bull() {
    return (
        <div className="flex flex-col justify-center items-center w-4/12">
            <Image
                src={"/img/v2/visuels/Bull.png"}
                alt="Bull_3D"
                width={200}
                height={250}
            />
            <div className="text-center mt-4 w-5/12 text-xs md:text-base">
                ECONOMY
            </div>
            <div className="text-center mt-4 w-5/12 text-xs md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam ut risus viverra scelerisque.
            </div>
        </div>
    );
}
export default Bull;
