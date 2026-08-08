import Container from "@/components/layout/container";
import { ACHIEVEMENTS } from "@/data/achievements";
import AchievementItem from "@/components/achievements/achievement-item";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="border-t border-stone-200 bg-[#FAF8F5] py-16"
    >
      <Container>
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Highlights
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-stone-900 md:text-5xl">
            A few milestones along the way.
          </h2>
        </div>

        <div className="mt-16 divide-y divide-stone-200">
          {ACHIEVEMENTS.map((achievement, index) => (
            <AchievementItem key={achievement.title} {...achievement} />
          ))}
        </div>
      </Container>
    </section>
  );
}
