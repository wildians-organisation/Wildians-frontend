import React from "react";
export default function RoadMapVitrine() {
    return (
        <div>
            <h1 className=" text-l text-white font-bold mb-16 text-left-20">
                Notre feuille de route
            </h1>
            <ul className="timeline">
                <li className="li complete">
                    <div className="timestamp">
                        <span className="Date">&nbsp;</span>
                    </div>
                    <div className="year2023"></div>
                </li>
                <li className="li complete">
                    <div className="timestamp">
                        <span className="Date">
                            <b>Octobre</b>
                        </span>
                    </div>
                    <div className="status">
                        <h4>
                            Presentation <br /> du concept Wildians
                            <br />
                            <p>&nbsp;</p> <br />
                        </h4>
                    </div>
                </li>
                <li className="li complete">
                    <div className="timestamp">
                        <span className="Date">&nbsp;</span>
                    </div>
                    <div className="year2024"></div>
                </li>
                <li className="li complete">
                    <div className="timestamp">
                        <span className="Date">
                            <b> Q1 </b>
                        </span>
                    </div>
                    <div className="status">
                        <h4>
                            <b>Crowdfunding: </b> <br />
                            Première rencontre <br /> avec ton Wildian
                            <p>&nbsp;</p>
                        </h4>
                    </div>
                </li>
                <li className="li complete">
                    <div className="timestamp">
                        <span className="Date">&nbsp;</span>
                    </div>
                    <div className="status">
                        <h4>
                            <b>Alpha de l'application: </b> <br />
                            Ouverture à une <br />
                            sélection d’ambassadeurs <br />
                            &nbsp;{" "}
                        </h4>
                    </div>
                </li>
                <li className="li complete">
                    <div className="timestamp">
                        <span className="Date">&nbsp;</span>
                    </div>
                    <div className="status">
                        <h4>
                            {" "}
                            <b>Sortie de l’application: </b>
                            <br />
                            • Premières fonctionnalités
                            <br />• Premiers parcours
                            <br /> &nbsp;
                        </h4>
                    </div>
                </li>
            </ul>
        </div>
    );
}
