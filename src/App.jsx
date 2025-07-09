import React, { useEffect, useState, useRef } from "react";
import Hero from "./components/Home/Hero";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import JobInput from "./components/AI/JobInput";
import Skills from "./components/Skills/SkillGrid";
import Experience from "./components/Experience/Experience";
import Certificates from "./components/Certificates/Certificates";



// Navigation bar component
function Navbar() {
  const navItems = [
    { label: "Home", id: "hero-section" },
    { label: "Education", id: "education-section" },
    { label: "Experience", id: "experience-section" },
    { label: "Skills", id: "skills-section" },
    { label: "Certificates", id: "certificates-section" },
    { label: "Projects", id: "projects-section" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="font-bold text-lg tracking-wide text-indigo-600">Nhien Loc Bui</span>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Simulate loading for 1s
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handler to jump to skills and open the card
  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setTimeout(() => {
      skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
      <Navbar />
      <div className=""> {/* Add padding for navbar */}
        <section id="hero-section">
          <Hero />
        </section>
        <section id="jobinput-section">
          <JobInput />
        </section>
        <section id="education-section">
          <Education />
        </section>
        <section id="experience-section">
          <Experience />
        </section>
        <section id="skills-section" ref={skillsRef}>
          <Skills selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill}/>
        </section>
        <section id="certificates-section">
          <Certificates />
        </section>
        <section id="projects-section">
          <Projects onSkillClick={handleSkillClick} />
        </section>
      </div>
    </div>
  );
}