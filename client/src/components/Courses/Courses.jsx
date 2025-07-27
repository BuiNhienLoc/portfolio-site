import { useState } from "react";

// Example course data
const courses = [
  {
    title: "Introduction to Frontend Development",
    provider: "Vietnamese-German University",
    abstract: "Learn the basics of frontend development including HTML, CSS, and JavaScript.",
  },
  {
    title: "CS540: Software Engineering",
    provider: "Oregon State University",
    abstract: "An introduction to software engineering principles and practices.",
  },
  {
    title: "Version Control",
    provider: "coursera",
    abstract: "Learn how to use version control systems like Git.",
  },
  {
    title: "React Basics",
    provider: "coursera",
    abstract: "Get started with React, a popular JavaScript library for building user interfaces.",
  },
  {
    title: "Introduction to Cybersecurity",
    provider: "coursera",
    abstract: "Understand the fundamentals of cybersecurity and how to protect systems.",
  },
  {
    title: "AI for Everyone",
    provider: "coursera",
    abstract: "A non-technical introduction to AI and its applications.",
  },
  {
    title: "Database Systems",
    provider: "Oregon State University",
    abstract: "Covers relational databases, SQL, and database design.",
  },
  // {
  //   title: "Algorithms",
  //   provider: "Oregon State University",
  //   abstract: "Study of algorithms, complexity, and problem-solving techniques.",
  // },
  // {
  //   title: "Operating Systems",
  //   provider: "Oregon State University",
  //   abstract: "Introduction to operating system concepts and design.",
  // },
  // {
  //   title: "Networks",
  //   provider: "Oregon State University",
  //   abstract: "Covers computer networking principles and protocols.",
  // },
  // {
  //   title: "Machine Learning",
  //   provider: "coursera",
  //   abstract: "An introduction to machine learning concepts and algorithms.",
  // },
  // {
  //   title: "Data Structures",
  //   provider: "Oregon State University",
  //   abstract: "Learn about data structures and their applications in programming.",
  // },
  // Add more courses as needed
];

const CARDS_PER_PAGE = 10;

function splitCoursesForRows(visibleCourses) {
  const n = visibleCourses.length;

  if (n <= 5) {
    // All courses fit in one row
    return [visibleCourses]; // Return as a single row
  }
  else if (n%2 === 0) {
    return [visibleCourses.slice(0, n / 2), visibleCourses.slice(n / 2)];
  }
  else {
    // If odd, split into two rows with the first row having one more item
    return [visibleCourses.slice(0, Math.ceil(n / 2)), visibleCourses.slice(Math.ceil(n / 2))];
  }
}

export default function Courses() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(courses.length / CARDS_PER_PAGE);

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const visibleCourses = courses.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const rows = splitCoursesForRows(visibleCourses);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto" id="courses-section">
      <h2 className="text-4xl font-bold text-center mb-2">Courses</h2>
      <p className="text-gray-500 text-center mb-8">University Courses</p>
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

          {/* Courses Rows */}
          <div className="flex flex-col gap-8 w-full items-center">
            {rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`flex gap-8 w-full justify-center`}
                style={{
                  minHeight: "240px",
                  height: "240px",
                }}
              >
                {row.map((course, idx) => (
                  <div
                    key={course.title}
                    className="flex flex-col items-center bg-white rounded-[2rem] shadow border border-gray-200 w-60 h-full overflow-hidden transition-transform hover:scale-105"
                    title={course.title}
                  >
    
                    <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center">
                      <span className="font-semibold text-lg text-gray-800 mb-2">{course.title}</span>
                      <span className="text-gray-500 text-sm">{course.abstract}</span>
                    </div>
                  </div>
                ))}
              </div>
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