import React from "react";

function Team() {
    return (
        <div className="py-20 pt-40 pb-40">
            <div className="text-center text-white title-typo mb-20">
                Wildians, une équipe de passionnés
            </div>
            <div className="container-team-pres mb-20">
                <div className="team-frame">
                    <img
                        className="team-image max-w-none"
                        src={"../img/v2/visuels/maxime.png"}
                    />
                    <div className="below-image">
                        <div className="title-wild-frame-typo2 text-greeny text-center">
                            Maxime
                        </div>
                        <div className="subtitle-typo text-white text-center">
                            Fondateur
                        </div>
                    </div>
                </div>
                <div className="team-frame">
                    <img
                        className="team-image max-w-none"
                        src={"../img/v2/visuels/aurelie.png"}
                    />
                    <div className="below-image">
                        <div className="title-wild-frame-typo2 text-greeny text-center">
                            Aurélie
                        </div>
                        <div className="subtitle-typo text-white text-center">
                            UX Design
                        </div>
                    </div>
                </div>
                <div className="team-frame">
                    <img
                        className="team-image max-w-none"
                        src={"../img/v2/visuels/elea.png"}
                    />
                    <div className="below-image">
                        <div className="title-wild-frame-typo2 text-greeny text-center">
                            Éléa
                        </div>
                        <div className="subtitle-typo text-white text-center">
                            Communauté
                        </div>
                    </div>
                </div>
                <div className="team-frame">
                    <img
                        className="team-image max-w-none"
                        src={"../img/v2/visuels/solene.png"}
                    />
                    <div className="below-image">
                        <div className="title-wild-frame-typo2 text-greeny text-center">
                            Solène
                        </div>
                        <div className="subtitle-typo text-white text-center">
                            Communauté
                        </div>
                    </div>
                </div>
            </div>
            <div className="pl-2 pr-4">
                <div className="text-white text-base mt-14 flex justify-center items-center">
                    <div className="text-white body-typo pl-4 w-600 text-center">
                        Un grand merci à tous ceux qui ont apporté leur pierre à
                        l’édifice Wildians :<br />
                        <strong>
                            Romain, le PAE SIGL, Bastien, Eva, Rebecca, Gwen,
                            Hugo x2, Alice
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
