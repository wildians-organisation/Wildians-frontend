import TopPart from "components/LandingPage/TopPart";
import BottomPart from "components/LandingPage/BottomPart";

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
  return (
    <div className="">
      <TopPart />
      <BottomPart />
    </div>
  );
}
