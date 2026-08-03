import Container from "@/components/layout/container";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-stone-200 bg-[#FAF8F5] py-40"
    >
      <Container>
        <div className="grid gap-24 lg:grid-cols-[1.7fr_0.7fr]">
          <div className="max-w-[58ch]">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              About
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-[-0.05em] leading-[1.05] text-stone-900">
              I like building software that feels effortless to use.
            </h2>

            <div className="mt-10 space-y-6 text-[19px] leading-[1.9] text-stone-700">
              <p>
                I'm Keshav, a software engineer with a BS-MS in Mathematics &
                Computing from NIT Agartala.
              </p>

              <p>
                Most of my time goes into building products, learning new
                technologies, and making small improvements that add up over
                time.
              </p>

              <p>
                I enjoy working with people who care about building things well
                and shipping them often.
              </p>
            </div>
          </div>

          <aside className="space-y-12 pt-4">
            <Info
              title="Education"
              value="NIT Agartala"
              subtitle="Mathematics & Computing"
            />

            <Info
              title="Interested in"
              value="Product Engineering"
              subtitle="Full-Stack • AI"
            />

            <Info
              title="Now"
              value="Open to Software Engineering Roles"
              subtitle="Available Immediately"
            />
          </aside>
        </div>
      </Container>
    </section>
  );
}

function Info({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.18em] text-stone-400">
        {title}
      </p>

      <p className="text-lg font-medium text-stone-900">{value}</p>

      <p className="text-stone-600">{subtitle}</p>
    </div>
  );
}
