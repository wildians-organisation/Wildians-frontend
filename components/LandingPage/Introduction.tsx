import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
};

function Introduction() {
    return (
        <div className="py-20">
            <div className="text-center text-white title-typo">
                Wildians, qui sommes-nous ?
            </div>
            <div className="md:hidden">
                <Slider {...settings}>
                    <div className="image-container-intro">
                        <img
                            src={"/img/v2/visuels/bull_shadow.png"}
                            width={300}
                            height={300}
                        />
                        <p className="description-intro title-wild-frame-typo text-greeny">
                            Fabio
                        </p>
                        <p className="description-intro body-highlight-typo text-white">
                            Économie
                        </p>
                    </div>
                    <div className="image-container-intro">
                        <img
                            src={"/img/v2/visuels/deer_shadow.png"}
                            width={300}
                            height={300}
                        />
                        <p className="description-intro title-wild-frame-typo text-greeny">
                            Ellie
                        </p>
                        <p className="description-intro body-highlight-typo text-white">
                            Environnement
                        </p>
                    </div>
                    <div className="image-container-intro">
                        <img
                            src={"/img/v2/visuels/wolf_shadow.png"}
                            width={300}
                            height={300}
                        />
                        <p className="description-intro title-wild-frame-typo text-greeny">
                            Noa
                        </p>
                        <p className="description-intro body-highlight-typo text-white">
                            Societé
                        </p>
                    </div>
                </Slider>
            </div>
            <div className="hidden md:flex justify-evenly">
                <div className="image-container-intro">
                    <img
                        src={"/img/v2/visuels/bull_shadow.png"}
                        width={300}
                        height={300}
                    />
                    <p className="description-intro title-wild-frame-typo text-greeny">
                        Fabio
                    </p>
                    <p className="description-intro body-highlight-typo text-white">
                        Économie
                    </p>
                </div>
                <div className="image-container-intro">
                    <img
                        src={"/img/v2/visuels/deer_shadow.png"}
                        width={300}
                        height={300}
                    />
                    <p className="description-intro title-wild-frame-typo text-greeny">
                        Ellie
                    </p>
                    <p className="description-intro body-highlight-typo text-white">
                        Environnement
                    </p>
                </div>
                <div className="image-container-intro">
                    <img
                        src={"/img/v2/visuels/wolf_shadow.png"}
                        width={300}
                        height={300}
                    />
                    <p className="description-intro title-wild-frame-typo text-greeny">
                        Noa
                    </p>
                    <p className="description-intro body-highlight-typo text-white">
                        Societé
                    </p>
                </div>
            </div>
            <div className="pl-2 pr-4">
                <div className="text-white text-base mt-14 flex justify-center items-center">
                    <div className="text-white body-typo border-l-4 pl-4 w-600 text-justify">
                        Ensemble, Ellie, Noa et Fabio forment un trio
                        harmonieux, représentant les trois piliers essentiels du
                        développement durable : la
                        <strong> protection de l'environnement</strong> , la{" "}
                        <strong>promotion de la société équitable </strong>
                        et la <strong> gestion économique responsable</strong>
                        .<br /> Chacun à leur manière, ils t'aideront à trouver
                        l'
                        <strong>équilibre </strong>
                        nécessaire pour construire un{" "}
                        <strong>
                            <span className="text-greeny">avenir durable</span>
                        </strong>{" "}
                        pour notre planète et ses habitants.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
