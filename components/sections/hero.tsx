import Container from "@/components/layout/container";
import Intro from "@/components/hero/intro";
import FeaturedWork from "@/components/hero/featured-work";

export function Hero() {
  return (
    <section id="hero" className="bg-[#FAF8F5] pt-40 pb-28">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_0.85fr]">
          <Intro />
          <FeaturedWork />
        </div>
      </Container>
    </section>
  );
}
