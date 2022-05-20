

import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";

export default function DefaultLayout({ children }) {
    return (
        <>
            {/* <Navbar transparent /> */}
            <div>
                bonjour PICOLA
            </div>
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
                {children}
            </div>
        </>
    );
}
