import { useState } from "react";

// Example experience data
const experienceData = [
    {
        title: "Software Engineer Intern",
        company: "Tech Solutions Inc.",
        date: "June 2023 - August 2023",
        description: "Developed web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 3L2 9l10 6 10-6-10-6zm0 13v5m-7-7v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
        </svg>
        ),
    },
    {
        title: "Full Stack Developer",
        company: "Web Innovators Ltd.",
        date: "January 2024 - Present",
        description: "Building scalable web applications with a focus on user experience and performance optimization.",
        icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 3L2 9l10 6 10-6-10-6zm0 13v5m-7-7v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
        </svg>
        ),
    },
];

function ExperienceCard({ exp, isActive, onClick }) {
    return (
        <div
            className={`relative bg-white rounded-2xl shadow-lg p-6 cursor-pointer flex flex-col items-start transition-transform hover:scale-105 border-2 ${isActive ? "border-indigo-400" : "border-transparent"}`}
            onClick={onClick}
        >
            <div className="flex items-center gap-3 mb-2">
                {exp.icon}
                <h3 className="text-xl font-semibold">{exp.title}</h3>
            </div>
            <span className="text-gray-600">{exp.company}</span>
            <span className="text-sm text-gray-500">{exp.date}</span>
            <p className="mt-2 text-gray-700">{exp.description}</p>
        </div>
    );
}

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="p-6">
            <h2 className="text-4xl font-bold text-center mb-2">Experience</h2>
            <p className="text-gray-500 text-center mb-8">My work through the year</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experienceData.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        exp={exp}
                        isActive={activeIndex === index}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>
        </section>
    );
}