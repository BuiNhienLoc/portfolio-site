import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

export default function SkillsGrid({ selectedSkill, setSelectedSkill, onProjectClick }) {
  return (
    <section className="p-6">
      <h2 className="text-4xl font-bold text-center mb-2">Skills</h2>
      <p className="text-gray-500 text-center mb-8">What I can bring to the table</p>
      <div className="flex flex-wrap gap-8 justify-center">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            openModal={selectedSkill === skill.name}
            setSelectedSkill={setSelectedSkill}
            onProjectClick={onProjectClick}
          />
        ))}
      </div>
    </section>
  );
}