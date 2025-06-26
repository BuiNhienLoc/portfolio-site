import { skills } from "./data/skills";
import SkillCard from "./SkillCard";

export default function SkillsGrid() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}