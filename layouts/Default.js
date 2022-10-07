

import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";

export default function DefaultLayout({ children }) {
    return (
        <>
            <Navbar transparent />
            <div>
                {children}
            </div>
        </>
    );
}
