import React from "react";
import rectangle from "../../public/fonts/rectangle-33.png";

export function Concept() {
    return (
        <div id="Concept">
            <div className="bg-no-repeat bg-cover py-20 px-4">
                <div>
                    <div className="text-center text-white mb-4 title-typo2">
                        <p>Concept</p>
                    </div>
                </div>
                <div className="flex md:justify-center flex-col md:flex-row gap-8 pt-16 md:pt-32 md:items-center">
                    <div className="text-white md:w-600 title-wild-frame-typo hidden md:block">
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
                    </div>
                    <div className="text-white md:w-600 title-wild-frame-typo md:hidden">
                        Wildians, c’est l’ambition de transmettre la culture du
                        <span style={{ color: "#90E0D3" }}>
                            {" "}
                            développement durable{" "}
                        </span>
                        et de
                        <span style={{ color: "#90E0D3" }}>
                            {" "}
                            passer à l’action
                        </span>
                        , ensemble.
                    </div>
                    <div className="text-white md:w-600 body-typo">
                        <p>
                            {" "}
                            Nous constatons qu’il est difficile de visualiser
                            concrètement l’
                            <b>
                                <b>impact de nos actions quotidiennes.</b>
                            </b>
                            <br />
                            <br />
                            Alors comment interpréter les dures conséquences du
                            dérèglement climatique et des problèmes sociétaux
                            qui nous entourent ?<br />
                            <br />
                            Comment les mettre en lien avec notre impact
                            personnel et en déduire les actions à mener ?<br />
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
                            , qui sera le reflet de votre évolution commune sur
                            les 3 piliers du développement durable, Société,
                            Economie et Environnement.
                            <br />
                            <br />
                            Alors n’hésite plus !{" "}
                            <b>
                                <b>Rejoins notre communauté</b>
                            </b>
                            , interagis avec d'autres membres, et ensemble ...{" "}
                            <br />
                            <br />
                        </p>
                        <div className="flex justify-center">
                            <div className="font-bold border-l-2 px-2 border-r-2 p-r-2 md:border-l-2 md:border-r-2 md:pl-4 md:pr-4">
                                Transformons nos{" "}
                                <span style={{ color: "#90E0D3" }}>
                                    habitudes
                                </span>{" "}
                                pour un{" "}
                                <span style={{ color: "#90E0D3" }}>
                                    monde plus durable
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Concept;
