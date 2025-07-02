import profilePic from "../data/photos/Profile.jpg";
import ReactRotatingText from 'react-rotating-text';
import Social from "./Social";
import { useEffect, useRef } from "react";

const roles = [
  "Fullstack Engineer",
  "Software Engineer",
  "Web Developer",
  "Tech Enthusiast",
  "Junior Cybersecurity Specialist",
  "Cat Lover 🐱",
];


function useScrollFadeIn() {
  const ref = useRef();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("opacity-100", "translate-y-0");
        } else {
          node.classList.remove("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.5 }
    );
    node.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700", "ease-out");
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Hero() {
  const leftRef = useScrollFadeIn();
  const rightRef = useScrollFadeIn();

  return (
    <section
      className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-24 px-6 max-w-6xl mx-auto min-h-screen py-0"
      style={{ minHeight: "100vh" }}
    >
      <div
        ref={leftRef}
        className="md:w-1/2 space-y-4 lg:ml-12 flex flex-col justify-center h-full"
        style={{ minHeight: "60vh" }}
      >
        <h1 className="text-4xl font-extrabold">
          Nhien Loc Bui <span className="inline-block">👋</span>
        </h1>
        <h2 className="text-xl font-semibold">
          I'm a{" "}
          <ReactRotatingText items={roles} typingInterval={100} pause={1500} />
        </h2>

        <p className="text-gray-600 mb-6">
          Welcome to my portfolio! I am a Masters in Computer Science student at Oregon State University, transitioning from AI research to cybersecurity.
          I have a passion for building secure and efficient software solutions.
          Punctual, open-minded, and communicative, I excel in meeting deadlines and contributing seamlessly to the software development lifecycle. 
          I am eager to leverage my skills and collaborative mindset to drive success within a dynamic team environment to improve the world, one line of code at a time.
        </p>

        {/* <button className="mt-4 px-10 py-5 bg-black text-white rounded-lg text-lg font-semibold shadow hover:bg-gray-800 transition-all duration-300">
          Say Hello    
          <span>  🚀</span>
        </button> */}
        <div className="flex justify-center">
          <a
            href="/Luke_Resume.pdf"
            download
            className="mt-4 inline-flex items-center px-6 py-3 bg-black text-white rounded-xl text-lg font-semibold shadow hover:bg-gray-800 transition-all duration-300"
          >
            Download Resume
            <svg
              className="ml-2"
              width="30"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <rect x="9" y="13" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center relative">
            <div className="w-1 h-1.5 bg-black rounded-full animate-bounce absolute top-2"></div>
          </div>
          <p className="mt-2 text-sm">Scroll Down ↓</p>
        </div>
        
      </div>
        

      <div
        ref={rightRef}
        className="md:w-1/3 flex justify-center mt-8 md:mt-0 items-center h-full"
        style={{ minHeight: "60vh" }}
      >
        <div className="card example-1">
          <div className="inner">
            <img
              src={profilePic}
              alt="Nhien Loc Bui"
              className="w-[340px] h-[340px] rounded-full object-cover shadow-lg"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
        <div className="ml-4 flex flex-col items-center">
          <Social />
        </div>
      </div>
    </section>
  );
}