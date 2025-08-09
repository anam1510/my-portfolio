import React from "react";
const projects = [
  {
    title: "Coffee Shop Website",
    description:
      "A clean coffee shop website built using HTML and CSS, deployed on Netlify.",
    link: "https://coffeecosta.netlify.app",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="p-8 pt-24 min-h-[100vh]">
      <div>
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="mb-6 text-gray-600">
          Here are a few projects I've worked on recently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-md p-6 shadow-md shadow-amber-800"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 text-gray-950">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
