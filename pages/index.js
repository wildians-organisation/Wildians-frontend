import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Router from "next/router";
import Header from "components/Headers/Header";
import Midpart from "components/MidPart/Midpart";

export function scrollToSection(sectionId) {
  if (sectionId == "concept") {
    const elt = document.getElementById("idconcept");
    elt.scrollIntoView({ behavior: "smooth" });
  } else if (sectionId == "adopt") {
    const elt = document.getElementById("idadopt");
    elt.scrollIntoView({ behavior: "smooth" });
  } else if (sectionId == "roadmap") {
    const elt = document.getElementById("idroadmap");
    elt.scrollIntoView({ behavior: "smooth" });
  } else if (sectionId == "marketplace") {
    const elt = document.getElementById("idmarketplace");
    elt.scrollIntoView({ behavior: "smooth" });
  } else {
  }
}

export default function Landing() {
  const goToMarketPlace = () => {
    Router.push("/marketplace");
  };

  return (
    <div className="">
      <Header />
      <Midpart />
    </div>
  );
}
