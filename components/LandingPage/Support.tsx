import { Disclosure } from "@headlessui/react";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Support() {
    return (
        <div className="py-10" style={{ backgroundColor: "#223734" }}>
            <h1 className="text-center title-typo text-white font-bold mb-16">
                Soutiens notre Projet de Changement : Ensemble vers un Avenir
                Durable
            </h1>
            <div className="flex justify-center gap-x-8 body-typo flex-col md:flex-row px-2 gap-4">
                <div className="text-white text-base md:w-600 flex flex-col gap-8">
                    <p>Cher(e) ami(e) du développement durable,</p>
                    <p>
                        Tu as sûrement déjà ressenti l'urgence d'agir pour notre
                        planète, pour notre société et pour notre économie sans
                        forcément savoir comment. C'est pourquoi nous avons
                        imaginé un projet unique qui vise à te sensibiliser,
                        t'éduquer et t'accompagner vers un mode de vie plus
                        durable. Mais pour en faire une réalité, nous avons
                        besoin de soutien, et c'est là que tu entres en jeu.
                    </p>
                    <div className="border-b-2">
                        <Disclosure>
                            {({ open }) => (
                                /* Use the `open` state to conditionally change the direction of an icon. */
                                <>
                                    <Disclosure.Button className="flex justify-between w-full">
                                        <strong>
                                            Comment fonctionne notre
                                            crowdfunding ?
                                        </strong>
                                        <ChevronRightIcon
                                            className={
                                                open
                                                    ? "transform -rotate-90 w-8 h-8"
                                                    : "rotate-90 transform w-8 h-8"
                                            }
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel>
                                        <p>
                                            Nous avons choisi de représenter les
                                            trois piliers du développement
                                            durable à travers trois personnages
                                            inspirants : Ellie le cerf, Noa le
                                            loup et Fabio le taureau. Chacun
                                            d'entre eux incarne une{" "}
                                            <strong>dimension cruciale </strong>
                                            de notre{" "}
                                            <strong>
                                                avenir commun
                                            </strong> :{" "}
                                            <strong className="text-greeny">
                                                l'environnement, la société et
                                                l'économie.
                                            </strong>
                                        </p>
                                        <p>
                                            Lorsque tu choisis d'adopter l'un de
                                            ces personnages, une partie du prix
                                            de vente est automatiquement
                                            <strong>
                                                {" "}
                                                reversée à une association
                                            </strong>{" "}
                                            en lien avec le pilier
                                            correspondant. Ainsi, en soutenant
                                            l'un de nos Wildians, tu contribues
                                            directement à des
                                            <strong>
                                                {" "}
                                                actions concrètes
                                            </strong>{" "}
                                            en faveur de l'environnement, de la
                                            société ou de l'économie.
                                        </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div className="border-b-2 flex flex-col">
                        <Disclosure>
                            {({ open }) => (
                                /* Use the `open` state to conditionally change the direction of an icon. */
                                <>
                                    <Disclosure.Button className="flex justify-between w-full">
                                        <strong>
                                            Pourquoi avons-nous besoin de ton
                                            soutien ?
                                        </strong>
                                        <ChevronRightIcon
                                            className={
                                                open
                                                    ? "transform -rotate-90 w-8 h-8"
                                                    : "rotate-90 transform w-8 h-8"
                                            }
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel>
                                        <p>
                                            Le reste des fonds collectés grâce à
                                            ce crowdfunding seront entièrement
                                            dédiés à la création d'une
                                            <strong>
                                                {" "}
                                                application mobile inédite
                                            </strong>{" "}
                                            et, pour autant,{" "}
                                            <strong>indispensable</strong>.
                                            Cette app sera conçue pour t'
                                            <strong>accompagner</strong>, pas à
                                            pas, dans ta transition vers un{" "}
                                            <strong className="text-greeny">
                                                mode de vie plus durable.
                                            </strong>
                                        </p>
                                        <p>
                                            Elle t'aidera à comprendre les
                                            enjeux environnementaux, sociétaux
                                            et économiques qui nous entourent.
                                            Tu y trouveras des conseils
                                            pratiques pour changer tes
                                            habitudes, réduire ton empreinte
                                            écologique et soutenir des
                                            initiatives responsables. Grâce à
                                            des informations claires et des
                                            actions concrètes, nous voulons
                                            t'aider à devenir un{" "}
                                            <strong>
                                                acteur du changement
                                            </strong>
                                            . Ensemble, nous pouvons créer un
                                            monde plus vert, plus équitable et
                                            plus prospère pour tous. Chaque
                                            contribution, qu'elle soit grande ou
                                            petite, nous rapproche de cet{" "}
                                            <strong>objectif commun</strong>.
                                        </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
                <div>
                    <div className="text-white text-base mb-16 border-l-4 pl-4 md:w-600">
                        <p className="mb-4">
                            Rejoins-nous dans cette aventure passionnante pour
                            un avenir meilleur. Choisis un pilier, soutiens
                            notre crowdfunding et deviens le héros de ta propre
                            histoire de développement durable.
                        </p>
                        <p style={{ color: "#90E0D3" }}>
                            Ensemble, nous pouvons changer le monde.
                        </p>
                    </div>
                    <div className="flex justify-center gap-16">
                        <img src="/img/Bull%20hoof.svg" alt="" />
                        <img src="/img/Deer%20hoof.svg" alt="" />
                        <img src="/img/Wolf%20paw.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
