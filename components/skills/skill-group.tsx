interface SkillGroupProps {
  title: string;
  skills: string[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="border-t border-stone-200 pt-7">
      <h3 className="text-lg font-medium tracking-[-0.01em] text-stone-900">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="text-[16px] leading-7 text-stone-600">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
