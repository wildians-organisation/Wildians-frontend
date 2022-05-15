import Link from "next/link";
import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Router from "next/router";

/*------------------------------------------------------*/
export const MyContext = React.createContext()
/*------------------------------------------------------*/

export function scrollToSection(sectionId) {
  if (sectionId == "concept") {
    const elt = document.getElementById('idconcept')
    elt.scrollIntoView({ behavior: 'smooth' })
  }
  else if (sectionId == "adopt") {
    const elt = document.getElementById('idadopt')
    elt.scrollIntoView({ behavior: 'smooth' })
  }
  else if (sectionId == "roadmap") {
    const elt = document.getElementById('idroadmap')
    elt.scrollIntoView({ behavior: 'smooth' })
  }
  else if (sectionId == "marketplace") {
    const elt = document.getElementById('idmarketplace')
    elt.scrollIntoView({ behavior: 'smooth' })
  } else {

  }
}

export default function Landing() {
  const goToMarketPlace = () => {
    Router.push("/marketplace");
  };

  /*------------------------------------------------------*/
  const [count, updateCount] = React.useState(0)
  function increment() {
    updateCount(count + 1)
  }
  /*------------------------------------------------------*/

  /*------------------------------------------------------
  ligne 52 -> 54
  ------------------------------------------------------*/
  return (
    <>
      <MyContext.Provider value={{ count, increment }}>
        <Navbar transparent />
      </MyContext.Provider>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div style={{ marginTop: 290 }}>
          <center>
            <p>Welcome to NFPets !!!</p>
            <p>Work in progress...</p>
          </center>
        </div>
      </div>



      <section id="idconcept" className="scroll-margin block relative z-1 pb-32">
        <div className="container mx-auto">
          <h2 className="text-xl font-semibold pb-4 mt-8 justify-center text-center content-center flex">
            Concept
          </h2>
          <div className="justify-center flex flex-wrap mb-6">
            <div className="w-full lg:w-12/12 px-4">
              <div className="flex flex-wrap justify-center">
                <h5>
                  Some things about us . . .
                </h5>
              </div>
            </div>
          </div>
          <div className="justify-center flex flex-wrap mb-6">
            <div className="w-full lg:w-12/12 px-4">
              <div className="flex flex-wrap justify-center">
                <h5>
                  Other things . . .
                </h5>
              </div>
            </div>
          </div>
          <div className="justify-center flex flex-wrap mb-6">
            <div className="w-full lg:w-12/12 px-4">
              <div className="flex flex-wrap justify-center">
                <h5>
                  Some things about us . . .
                </h5>
              </div>
            </div>
          </div>
          <div className="justify-center flex flex-wrap mb-6">
            <div className="w-full lg:w-12/12 px-4">
              <div className="flex flex-wrap justify-center">
                <h5>
                  Other things . . .
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="idadopt" className="scroll-margin block relative z-1 pb-32">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Wolf Pilar
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/wolf.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Deer Pilar
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/deer.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Cheetah Pilar
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/shepperd.png"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="idroadmap" className="scroll-margin block relative z-1 pb-32">
        <div className="container mx-auto">
          <h2 className="text-xl font-semibold pb-4 ml-3 justify-center text-center content-center flex">
            Roadmap
          </h2>
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Application
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/appli.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Metaverse
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/meta.png"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="scroll-margin block relative z-1 pb-32">
        <h2 id="idmarketplace" className="text-xl font-semibold pb-4">
          Marketplace
        </h2>
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 ">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Marketplace 1
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Marketplace 2
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/profile.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Marketplace 3
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/landing.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}