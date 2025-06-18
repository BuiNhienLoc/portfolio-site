import profilePic from "../photos/Profile.jpg";
import ReactRotatingText from 'react-rotating-text';

const roles = [
  "Fullstack Engineer",
  "Software Engineer",
  "Web Developer",
  "Tech Enthusiast",
  "Junior Cybersecurity Specialist",
  "Cat Lover 🐱",
];

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-24 px-6 max-w-6xl mx-auto">
      <div className="md:w-1/2 space-y-4 lg:ml-12">{/* Added lg:ml-12 for right shift on large screens */}
        <h1 className="text-4xl font-extrabold">Nhien Loc Bui <span className="inline-block">👋</span></h1>
        <h2 className="text-xl font-semibold">
          I'm a <ReactRotatingText
          items={roles}
          typingInterval={100}
          pause={1500}
        /></h2>

        <p className="text-gray-600 mb-6">
          Welcome to my portfolio! I am a Masters in Computer Science student at Oregon State University, transitioning from AI research to cybersecurity.
          I have a passion for building secure and efficient software solutions.
          Punctual, open-minded, and communicative, I excel in meeting deadlines and contributing seamlessly to the software development lifecycle. 
          I am eager to leverage my skills and collaborative mindset to drive success within a dynamic team environment to improve the world, one line of code at a time.
        </p>

        <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg text-lg font-semibold shadow hover:bg-gray-800">
          Say Hello
          <span>🚀</span>
        </button>

        <div className="mt-10 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center relative">
            <div className="w-1 h-1.5 bg-black rounded-full animate-bounce absolute top-2"></div>
          </div>
          <p className="mt-2 text-sm">Scroll Down ↓</p>
        </div>
      </div>

      <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
        <img
          src={profilePic}
          alt="Nhien Loc Bui"
          className="w-63 h-63 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}