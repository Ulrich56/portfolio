import React from "react";

const projects = [
  {
    title: "Post-it App - Note Management",
    description:
      "Application de gestion de notes avec Vue.js, Pinia, Vue Router et une API distante.",
    image: "/public/images/postit.png", 
    tech: ["Vue.js", "Pinia", "TailwindCSS", "API REST"],
    link: "https://post-it-repository-b8ik.vercel.app/",
  },
  {
    title: "My Show Time",
    description:
      "Application full-stack de réservation d’événements avec Nest.js, MongoDB et Docker.",
    image: "/assets/showtime.png",
    tech: ["Nest.js", "MongoDB", "TailwindCSS", "Docker"],
  },
  {
    title: "Rotten Tomatoes",
    description:
      "Plateforme de découverte et de notation cinématographique avec Next.js, TMDB API et MongoDB.",
    image: "/public/images/rotten.png",
    tech: ["Next.js", "TMDB API", "MongoDB", "Docker"],
    link: "https://rotten-tomatoes-1.onrender.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-purple-500 border-b-4 border-blue-500 border-opacity-50 w-fit mx-auto mb-6 animate-bounce">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-red-500 text-white px-4 py-2 transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)] shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 ">
              <h3 className="text-xl font-semibold mb-2 text-red-500">{project.title}</h3>
              <p className="text-gray-300 mb-3 ">{project.description}</p>
              <ul className="flex flex-wrap gap-2 text-sm text-purple-600 mb-4">
                {project.tech.map((tech, i) => (
                  <li key={i} className="bg-purple-100 px-2 py-1 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
