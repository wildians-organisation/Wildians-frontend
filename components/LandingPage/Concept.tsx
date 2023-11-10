import React from "react";
import rectangle from "../../public/fonts/rectangle-33.png";

export function Concept() {
    return (
        <div id="Concept">
            <div
                className="bg-no-repeat bg-cover p-4 h-1000-px"
                style={{ height: "800px" }}
            >
                <div className="relative top-56 h-96">
                    <div className="text-center text-white title-typo mb-4">
                        Concept
                    </div>
                </div>
                <div
                    className="relative flex justify-between "
                    style={{
                        height: "315px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 155px 0 155px"
                    }}
                >
                    <div className="text-white pl-6" style={{ width: "598px" }}>
                        <p
                            style={{
                                color: "#FFF",
                                fontFamily: "Gogh",
                                fontSize: "150px",
                                fontStyle: "normal",
                                fontWeight: "800",
                                lineHeight: "50px"
                            }}
                        >
                            {" "}
                            “ <br />
                        </p>
                        <p
                            style={{
                                color: "#FFF",
                                fontFamily: "Arial",
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: "800",
                                lineHeight: "normal"
                            }}
                        >
                            Wildians,
                            <br />
                            c’est l’ambition de transmettre
                            <br />
                            la culture <br />
                            du{" "}
                            <span style={{ color: "#90E0D3" }}>
                                développement durable
                            </span>
                            <br />
                            et de{" "}
                            <span style={{ color: "#90E0D3" }}>
                                passer à l’action
                            </span>
                            , <br />
                            ensemble.
                        </p>
                    </div>
                    <div
                        className="text-white body-typo pl-6"
                        style={{ width: "598px" }}
                    >
                        {" "}
                        Nous constatons qu’il est difficile de visualiser
                        concrètement l’
                        <b>
                            <b>impact de nos actions quotidiennes.</b>
                        </b>
                        <br />
                        <br />
                        Alors comment interpréter les dures conséquences du
                        dérèglement climatique et des problèmes sociétaux qui
                        nous entourent ?<br />
                        <br />
                        Comment les mettre en lien avec notre impact personnel
                        et en déduire les actions à mener ?<br />
                        <br />
                        La solution : une{" "}
                        <b>
                            <b>application mobile</b>
                        </b>{" "}
                        permettant, de manière ludique, de{" "}
                        <b>
                            <b>comprendre</b>
                        </b>{" "}
                        ces causes racines et de créer des{" "}
                        <b>
                            <b>habitudes respectueuses de la planète.</b>
                        </b>
                        <br />
                        <br />
                        Le tout accompagné de ton{" "}
                        <b>
                            <b>Wildian</b>
                        </b>{" "}
                        : ton{" "}
                        <b>
                            <b>compagnon virtuel</b>
                        </b>
                        , qui sera le reflet de votre évolution commune sur les
                        3 piliers du développement durable, Société, Economie et
                        Environnement.
                        <br />
                        <br />
                        Alors n’hésite plus !{" "}
                        <b>
                            <b>Rejoins notre communauté</b>
                        </b>
                        , interagis avec d'autres membres, et ensemble ...{" "}
                        <br />
                        <br />
                        <p
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                color: "#FFF",
                                fontFamily: "Mulish",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal",
                                padding: "0 50px",
                                width: "600px"
                            }}
                        >
                            <img
                                src={rectangle.src}
                                alt="rectangle"
                                width="0.8%"
                                height="1%"
                                style={{ marginTop: "20px" }}
                            />
                            <b>
                                <b>
                                    <br />
                                    Transformons nos{" "}
                                    <span style={{ color: "#90E0D3" }}>
                                        habitudes
                                    </span>{" "}
                                    pour un{" "}
                                    <span style={{ color: "#90E0D3" }}>
                                        monde plus durable
                                    </span>
                                    .
                                </b>
                            </b>
                            <img
                                src={rectangle.src}
                                alt="rectangle"
                                width="0.8%"
                                height="1%"
                                style={{ marginTop: "20px" }}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Concept;
