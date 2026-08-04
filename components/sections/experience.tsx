import Container from "@/components/layout/container";
import ExperienceItem from "@/components/experience/experience-item";
import { EXPERIENCES } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-stone-200 bg-[#FAF8F5] py-20"
    >
      <Container>
        <header className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-stone-900 md:text-5xl">
            Building products, one step at a time.
          </h2>

          <p className="mt-5 text-lg text-stone-600">
            A journey through startups, student leadership, and building
            products from scratch.
          </p>
        </header>

        <div className="mt-16 divide-y divide-stone-200">
          {EXPERIENCES.map((experience) => (
            <ExperienceItem
              key={`${experience.company}-${experience.role}`}
              {...experience}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
