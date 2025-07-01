import { useState } from "react";

// Example certificate data
const certificates = [
  {
    title: "Introduction to Frontend Development",
    provider: "coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Coursera_logo.svg",
    url: "https://coursera.org/certificate/frontend-intro",
  },
  {
    title: "Programming with JavaScript",
    provider: "coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Coursera_logo.svg",
    url: "https://coursera.org/certificate/js-programming",
  },
  {
    title: "Version Control",
    provider: "coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Coursera_logo.svg",
    url: "https://coursera.org/certificate/version-control",
  },
  {
    title: "React Basics",
    provider: "coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Coursera_logo.svg",
    url: "https://coursera.org/certificate/react-basics",
  },
  {
    title: "Introduction to Cybersecurity",
    provider: "coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Coursera_logo.svg",
    url: "https://coursera.org/certificate/cybersecurity-intro",
  },
  {
    title: "AI for Everyone",
    provider: "coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Coursera_logo.svg",
    url: "https://coursera.org/certificate/ai-for-everyone",
  }
  // Add more certificates as needed
];

const CARDS_PER_PAGE = 4;

export default function Certificates() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(certificates.length / CARDS_PER_PAGE);

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const visibleCertificates = certificates.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto" id="certificates-section">
      <h2 className="text-4xl font-bold text-center mb-2">Certificates</h2>
      <p className="text-gray-500 text-center mb-8">My achievements and learning journey</p>
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className={`absolute left-0 z-10 bg-white rounded-full shadow p-2 text-2xl transition hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed`}
            aria-label="Previous"
          >
            <span>&#8249;</span>
          </button>

          {/* Certificates Row */}
          <div className="flex gap-8 justify-center w-full">
            {visibleCertificates.map((cert) => (
              <a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-white rounded-[2rem] shadow border border-gray-200 w-60 min-h-[340px] overflow-hidden transition-transform hover:scale-105"
                title={cert.title}
              >
                <div className="bg-[#0056d2] w-full flex items-center justify-center" style={{ height: "180px" }}>
                  <img
                    src={cert.logo}
                    alt={cert.provider}
                    className="h-12"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <div className="flex-1 flex items-center justify-center px-4 py-6 text-center">
                  <span className="font-semibold text-lg text-gray-800">{cert.title}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className={`absolute right-0 z-10 bg-white rounded-full shadow p-2 text-2xl transition hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed`}
            aria-label="Next"
          >
            <span>&#8250;</span>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === page ? "bg-gray-800" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}