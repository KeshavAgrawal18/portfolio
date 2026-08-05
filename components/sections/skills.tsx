import Container from "@/components/layout/container";
import SkillGroup from "@/components/skills/skill-group";

import { SKILL_GROUPS } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-stone-200 bg-[#FAF8F5] py-16"
    >
      <Container>
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-stone-900 md:text-4xl">
            Technologies I use.
          </h2>

          <p className="mt-5 text-[17px] leading-8 text-stone-600">
            I enjoy building full-stack products with modern web technologies,
            choosing tools based on the problem rather than the latest trend.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-20 gap-y-14 md:grid-cols-2 xl:grid-cols-4">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
