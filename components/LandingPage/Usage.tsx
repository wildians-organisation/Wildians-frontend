import UsageItem from "./UsageItem";

export function Usage() {
    return (
        <div className="py-20 mt-40">
            <h1 className="text-center title-typo text-white mb-16">
                Wildians, bien plus qu'une simple application !
            </h1>
            <div className="flex justify-center items-center">
                <div className="flex justify-center" style={{ width: "600px" }}>
                    <img src="/img/wildians_phone.svg" alt="" />
                </div>
                <div
                    className="flex flex-col gap-y-4 w-600"
                >
                    <UsageItem
                        title="📚 Ressources & Éducation"
                        content="Plonge dans une bibliothèque de contenus, de vidéos et de mini-cours pour enrichir tes connaissances sur le développement durable."
                    />
                    <UsageItem
                        title="🎮 Jeu & Apprentissage"
                        content="Relève des défis quotidiens, participe à des quêtes sur les 3 piliers du développement durable et gagne des récompenses."
                    />
                    <UsageItem
                        title="🌱 Un Wildian à tes côtés"
                        content="Regarde ton compagnon évoluer au fil de tes actions responsables, il sera le reflet de ton parcours."
                    />
                    <UsageItem
                        title="🌍 Impact en Direct"
                        content="Visualise en temps réel l'impact des actions Wildians : de l'eau économisée, des vies sauvées, et bien plus encore."
                    />
                    <UsageItem
                        title="🌐 Communauté Wildians"
                        content="Échange, partage et collabore avec d'autres membres passionnés. Organise des événements, pose tes questions, et ensemble, faisons la différence."
                    />
                </div>
            </div>
        </div>
    );
}
