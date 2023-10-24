import { Disclosure } from "@headlessui/react";
import React from "react";

export default function Support() {
    return (
        <div className="py-40" style={{ backgroundColor: "#223734" }}>
            <h1 className="text-center text-4xl text-white font-bold mb-16">
                Soutiens notre Projet de Changement : Ensemble vers un Avenir
                Durable
            </h1>
            <div className="flex justify-center gap-x-8">
                <div
                    className="text-white text-base"
                    style={{ width: "600px" }}
                >
                    <p className="mb-8">
                        Cher(e) ami(e) du développement durable,
                    </p>
                    <p className="mb-8">
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
                            <Disclosure.Button className="py-2">
                                Comment fonctionne notre crowdfunding ?
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500">
                                TODO
                            </Disclosure.Panel>
                        </Disclosure>
                    </div>
                    <div className="border-b-2">
                        <Disclosure>
                            <Disclosure.Button className="py-2">
                                Pourquoi avons-nous besoin de ton soutien ?
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500">
                                TODO
                            </Disclosure.Panel>
                        </Disclosure>
                    </div>
                </div>
                <div>
                    <div
                        className="text-white text-base mb-16 border-l-4 pl-4"
                        style={{ width: "600px" }}
                    >
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
