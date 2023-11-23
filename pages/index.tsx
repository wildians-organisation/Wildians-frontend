import TopPartVitrine from "../components/LandingPage/TopPartVitrine";
import { Usage } from "../components/LandingPage/Usage";
import Concept from "../components/LandingPage/Concept";
import React from "react";
import BottomPartVitrine from "../components/LandingPage/BottomPartVitrine";
import Support from "../components/LandingPage/Support";
import TopPart from "./../components/LandingPage/TopPart";
import BottomPart from "./../components/LandingPage/BottomPart";
import Introduction from "./../components/LandingPage/Introduction";
import RoadMapVitrine from "../components/LandingPage/Roadmap";

export function scrollToSection(sectionId) {
    if (sectionId == "concept") {
        const elt = document.getElementById("idconcept");
        elt!.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId == "adopt") {
        const elt = document.getElementById("idadopt");
        elt!.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId == "roadmap") {
        const elt = document.getElementById("idroadmap");
        elt!.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId == "marketplace") {
        const elt = document.getElementById("idmarketplace");
        elt!.scrollIntoView({ behavior: "smooth" });
    } else {
    }
}

export default function Landing() {
    return (
        <div style={{ backgroundColor: "#223734" }}>
            <TopPartVitrine />
            <Concept />
            <Introduction />
            <Usage />
            <Support />
            <RoadMapVitrine />
            <BottomPartVitrine />
        </div>
        /*<div className="">
            <TopPart />
            <BottomPart />
        </div>*/
    );
}
