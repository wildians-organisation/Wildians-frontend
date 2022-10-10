import Footer from "components/LandingPage/Footer.js";
import Router from "next/router";
import Header from "components/LandingPage/Header";
import Midpart from "components/LandingPage/Midpart";
import SecondPart from "components/LandingPage/SecondPart";

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
      <SecondPart />
      <Midpart />
      <Footer />
    </div>
  );
}
