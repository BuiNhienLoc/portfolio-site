import { useEffect, useState } from "react";

const roles = [
  "Fullstack Engineer",
  "Software Engineer",
  "Web Developer",
  "Tech Enthusiast",
  "Junior Cybersecurity Specialist",
  "Cat Lover",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 text-center md:text-left">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-2">Nhien Loc Bui <span className="inline-block">👋</span></h1>
        <h2 className="text-xl font-medium mb-4">I'm a <span className="text-blue-600">{roles[index]}</span></h2>
        <p className="text-gray-600 mb-6">
          Welcome to my portfolio! I am a Masters student at Oregon State University, transitioning from AI research to cybersecurity.
          I have a passion for building secure and efficient software solutions.
          Punctual, open-minded, and communicative, I excel in meeting deadlines and contributing seamlessly to the software development lifecycle. 
          I am eager to leverage my skills and collaborative mindset to drive success within a dynamic team environment to improve the world, one line of code at a time.
        </p>
        <button className="px-6 py-2 bg-gray-900 text-white rounded-lg flex items-center gap-2">
          Say Hello
          <span>🚀</span>
        </button>
        <div className="mt-10 flex justify-center md:justify-start">
          <div className="animate-bounce flex flex-col items-center">
            <div className="border-2 border-black rounded-full w-6 h-10 flex items-center justify-center">
              <div className="w-1 h-2 bg-black rounded-full"></div>
            </div>
            <span className="mt-2 text-sm">Scroll Down ↓</span>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <img
          src="/your-photo.jpg"
          alt="Hai Cao Xuan"
          className="w-64 h-64 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}