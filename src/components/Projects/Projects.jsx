import { useState } from "react";

// Example project data
const projects = [
  {
    title: "Smoll URL",
    category: "App",
    image: "https://i.imgur.com/4M34hi2.png",
    link: "#",
    description: "A simple URL shortener app with analytics and custom aliases.",
    skills: ["React", "Node.js", "MongoDB"],
    associations: ["Personal Project"],
    featured: true,
  },
  {
    title: "Shopee Clone",
    category: "Web",
    image: "https://i.imgur.com/0y8Ftya.png",
    link: "#",
    description: "A full-stack e-commerce web app inspired by Shopee.",
    skills: ["React", "Express", "MySQL"],
    associations: ["VNU.DC"],
    featured: false,
  },
  {
    title: "App 1",
    category: "App",
    image: "https://i.imgur.com/1Q9Z1Zm.png",
    link: "#",
    description: "A productivity app for managing daily tasks.",
    skills: ["Flutter", "Firebase"],
    associations: ["VNU.DC"],
    featured: false,
  },
  {
    title: "MUss",
    category: "Design",
    image: "https://i.imgur.com/2nCt3Sbl.png",
    link: "#",
    description: "A modern UI/UX design for a music streaming service.",
    skills: ["Figma", "UX Research"],
    associations: ["VNU.DC"],
    featured: false,
  },
];

const categories = ["All", "App", "Web", "Design"];

export default function Projects() {
  const [selected, setSelected] = useState("All");
  const [activeIdx, setActiveIdx] = useState(null);

  const filtered = selected === "All"
    ? projects
    : projects.filter(p => p.category === selected);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto" id="projects-section">
      <h2 className="text-4xl font-bold text-center mb-2">Projects</h2>
      <p className="text-gray-500 text-center mb-8">School, work and personal projects</p>
      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-xl font-semibold text-lg transition 
              ${selected === cat
                ? "bg-gray-800 text-white shadow"
                : "bg-transparent text-gray-700 hover:bg-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filtered.map((project, idx) => (
          <div
            key={project.title}
            className="relative group rounded-3xl bg-white shadow border border-gray-200 flex flex-col items-center overflow-hidden transition-all duration-200 aspect-[4/3] min-h-[270px] max-h-[340px]"
            style={{ minWidth: 320 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-3xl transition-all duration-300 group-hover:brightness-75"
              style={{ minHeight: 180, maxHeight: 220 }}
            />
            {/* Overlay on hover */}
            <button
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40"
              onClick={() => setActiveIdx(idx)}
              tabIndex={-1}
              aria-label="View more"
            >
              <span className="bg-white rounded-2xl px-8 py-4 shadow-lg text-xl font-bold flex items-center gap-2 hover:bg-gray-100 transition">
                View more
                <span className="ml-2 text-2xl">&#8594;</span>
              </span>
            </button>
            {/* Project Title */}
            <div className="absolute bottom-0 left-0 w-full bg-white/90 py-4 text-center text-xl font-semibold text-gray-800 rounded-b-3xl">
              {project.title}
            </div>
            {/* Modal for details */}
            {activeIdx === idx && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full border-4 border-blue-300 relative animate-fadeIn">
                  <button
                    className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold"
                    onClick={() => setActiveIdx(null)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <img src={project.image} alt={project.title} className="w-32 h-32 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                      <div className="mb-2 text-gray-600">{project.description}</div>
                      <div className="mb-2">
                        <span className="font-bold">Skills:</span>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          {project.skills.map((skill, i) => (
                            <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-2">
                        <span className="font-bold">Association:</span>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          {project.associations.map((association, i) => (
                            <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{association}</span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
                      >
                        Visit Project
                      </a>
                    </div>
                  </div>
                </div>
                <style>
                  {`
                    .animate-fadeIn {
                      animation: fadeIn 0.2s;
                    }
                    @keyframes fadeIn {
                      from { opacity: 0; transform: scale(0.95);}
                      to { opacity: 1; transform: scale(1);}
                    }
                  `}
                </style>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}