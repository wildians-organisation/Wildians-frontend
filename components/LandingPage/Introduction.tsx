import React from "react";

function Introduction() {
    return (
        <div>
            <div style={{ height: "800px" }}>
                <div className="relative top-56 h-96">
                    <div className="text-center text-white title-typo mb-20">
                        Wildians, qui sommes-nous ?
                    </div>
                    <div className="component-container-intro">
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
                                Economy
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
                                Environment
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
                                Society
                            </p>
                        </div>
                    </div>
                    <div className="text-white text-base mb-16 mt-14 flex justify-center items-center">
                        <div className="text-white body-typo desc-layout2 border-l-4 pl-4">
                            Ensemble, Ellie, Noa et Fabio forment un trio
                            harmonieux, représentant les trois piliers
                            essentiels du développement durable : la
                            <strong> protection de l'environnement</strong> , la{" "}
                            <strong>promotion de la société équitable </strong>
                            et la{" "}
                            <strong> gestion économique responsable</strong>.
                            Chacun à leur manière, ils t'aideront à trouver l'
                            <strong>équilibre </strong>
                            nécessaire pour construire un{" "}
                            <strong>
                                <span className="text-greeny">
                                    avenir durable
                                </span>
                            </strong>{" "}
                            pour notre planète et ses habitants.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
