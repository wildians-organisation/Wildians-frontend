

import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
//import Navbar from "components/Navbars/IndexNavbar";

export default function DefaultLayout({ children }) {
    return (
        <>
            <div>
                { /*<Navbar transparent />*/ }
            </div>
            <div>
                {children}
            </div>
        </>
    );
}
