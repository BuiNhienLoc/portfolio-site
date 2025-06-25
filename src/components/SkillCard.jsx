import { useState } from "react";

export default function SkillCard({ skill }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Skill Card */}
      <div
        className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 cursor-pointer transition-transform hover:scale-105 min-w-[180px] min-h-[220px]"
        onClick={() => setShowModal(true)}
      >
        <img src={skill.logo} alt={skill.name} className="w-20 h-20 mb-4" />
        <span className="text-xl font-semibold italic">{skill.name}</span>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full border-4 border-blue-300 relative animate-fadeIn">
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img src={skill.logo} alt={skill.name} className="w-32 h-32" />
              <div className="flex-1">
                <h2 className="text-3xl font-bold italic mb-2">{skill.name}</h2>
                <div className="mb-2">
                  <span className="font-bold text-lg">Describesion</span>
                  <p className="text-base">{skill.description}</p>
                </div>
                <div className="mb-2">
                  <span className="font-bold">Experience:</span> {skill.years}+ years
                </div>
                <div>
                  <span className="font-bold">Projects:</span>
                  <div className="flex gap-3 mt-2 flex-wrap">
                    {skill.projects.map((p, idx) => (
                      <a
                        key={idx}
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center bg-gray-100 rounded-lg p-2 w-24 shadow hover:bg-gray-200 transition"
                      >
                        {p.logo && (
                          <img src={p.logo} alt={p.title} className="w-10 h-10 mb-1" />
                        )}
                        <span className="text-xs text-center">{p.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal animation */}
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
    </>
  );
}