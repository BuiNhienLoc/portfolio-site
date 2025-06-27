import { useState } from "react";

// Example education data
const educationData = [
  {
    title: "Thang Long Highschool for the Gifted",
    subtitle: "High School",
    date: "2016 - 2019",
    description: "Specialized in Physics. Participated in various academic competitions and extracurricular activities.",
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 3L2 9l10 6 10-6-10-6zm0 13v5m-7-7v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
      </svg>
    ),
  },
  {
    title: "Vietnamese-German University",
    subtitle: "Dual Bachelor of Science in Computer Science",
    date: "2019 - 2023",
    description: "Studied Mechatronics Engineering. Developed strong foundation in engineering principles and teamwork.",
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 3L2 9l10 6 10-6-10-6zm0 13v5m-7-7v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
      </svg>
    ),
  },
  {
    title: "Frankfurt University of Applied Sciences",
    subtitle: "Dual Bachelor of Science in Computer Science",
    date: "2021 - 2022",
    description: "A fully-funded exchange program in Germany. Focused on software engineering and AI.",
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 3L2 9l10 6 10-6-10-6zm0 13v5m-7-7v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
      </svg>
    ),
  },
  {
    title: "Oregon State University",
    subtitle: "Master of Science in Computer Science",
    date: "2024 - Current",
    description: "Focusing on AI and Cybersecurity. Engaged in research and software development projects.",
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 3L2 9l10 6 10-6-10-6zm0 13v5m-7-7v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
      </svg>
    ),
  },
];

function EducationCard({ edu, isActive, onClick }) {
  return (
    <>
      <div
        className={`relative bg-white rounded-2xl shadow-lg p-6 cursor-pointer flex flex-col items-start transition-transform hover:scale-105 border-2 ${
          isActive ? "border-indigo-400" : "border-transparent"
        }`}
        onClick={onClick}
      >
        <div className="flex items-center gap-3 mb-2">
          {edu.icon}
          <span className="text-lg font-bold">{edu.title}</span>
        </div>
        <span className="text-gray-500 mb-1">{edu.subtitle}</span>
        <span className="text-sm text-gray-400 flex items-center gap-1 mb-2">
          <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {edu.date}
        </span>
        <span className="text-indigo-600 font-medium mt-2">Show more &gt;</span>
      </div>
      {/* Modal */}
      {isActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border-4 border-indigo-300 relative animate-fadeIn">
            <button
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold"
              onClick={onClick}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center gap-4">
              {edu.icon}
              <h2 className="text-2xl font-bold mb-2 text-center">{edu.title}</h2>
              <div className="text-gray-500">{edu.subtitle}</div>
              <div className="text-sm text-gray-400 flex items-center gap-1">
                <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {edu.date}
              </div>
              <p className="mt-4 text-base text-center">{edu.description}</p>
            </div>
          </div>
        </div>
      )}
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

export default function Education() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">Education</h2>
      <p className="text-gray-500 text-center mb-8">My personal journey</p>
      
      {/* Timeline */}
      <div className="relative flex flex-col items-center">
        <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-gray-300 -translate-x-1/2 z-0" />
        <div className="flex flex-col gap-3 w-full z-10">
          {educationData.map((edu, idx) => (
            <div key={idx} className={`flex ${idx % 2 === 0 ? "justify-start" : "justify-end"} w-full relative`}>
              <div className="absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 bg-gray-400 rounded-full border-4 border-white z-20" />
              <div className={`w-[320px]`}>
                <EducationCard
                  edu={edu}
                  isActive={activeIdx === idx}
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}