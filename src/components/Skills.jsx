export default function Skills() {
  const skills = ["JavaScript", "React", "Node.js", "Docker"];
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-200 text-sm px-3 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}