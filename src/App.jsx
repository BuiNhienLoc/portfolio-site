import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import JobInput from "./components/JobInput";

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
      <Hero />
      <JobInput />
      <Skills />
      <Projects />
    </div>
  );
}