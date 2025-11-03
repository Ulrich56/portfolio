import React from "react";

const Formations = () => {
  const formations = [
    {
      title: "Formation intensive en développement Fullstack",
      school: "Wecode",
      location: "Yopougon, Côte d'Ivoire",
      date: "Juillet 2025 – Présent",
      details: [
        "Conception et développement d'applications web avec Laravel, Vue.js, Nest.js et Next.js",
        "Collaboration en équipe pour la réalisation de maquettes et de sites",
        "Utilisation de HTML, CSS, Tailwind CSS, JavaScript/jQuery",
        "Rédaction de documentation technique et déploiement de sites web",
      ],
    },
    {
      title: "Licence en Réseau et Sécurité Informatique",
      school: "Université Virtuelle de Côte d'Ivoire",
      location: "Cocody, Côte d'Ivoire",
      date: "Septembre 2024 – Présent",
      details: [
        "Introduction au développement d'applications",
        "Création de sites vitrines avec HTML, CSS et JavaScript",
      ],
    },
    {
      title: "Baccalauréat C",
      school: "Collège d’Enseignement Général 2 de Pobè",
      location: "Pobè, Bénin",
      date: "Septembre 2017 – Juillet 2024",
      details: ["Formation scientifique avec spécialisation en mathématiques et physique"],
    },
  ];

  return (
    <section id="formations" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-purple-500 border-b-4 border-blue-500 border-opacity-50 w-fit mx-auto mb-8 animate-bounce">Formations</h2>

      <div className="space-y-8">
        {formations.map((formation, index) => (
          <div key={index} className=" border-2 border-red-500 text-white px-4 py-2 transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-1">{formation.title}</h3>
            <p className="text-gray-400 font-medium">{formation.school}</p>
            <p className="text-sm text-gray-300 italic">
              {formation.location} — {formation.date}
            </p>
            <ul className="list-disc list-inside mt-3 text-white space-y-1">
              {formation.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formations;
