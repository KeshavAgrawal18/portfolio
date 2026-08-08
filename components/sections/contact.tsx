import Container from "@/components/layout/container";
import { ArrowUpRight } from "lucide-react";

import { RESUME_LINK, SOCIAL_LINKS } from "@/lib/constants";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-stone-200 bg-[#FAF8F5] py-16"
    >
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-stone-900 md:text-5xl">
            Thanks for taking the time to look through my work.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-stone-600">
            <p>
              I’m open to interesting conversations, thoughtful collaborations,
              and opportunities to build something useful.
            </p>

            <p>
              If something here resonated with you, I'd love to hear from you.
            </p>
          </div>

          <a
            href={SOCIAL_LINKS.email}
            className="mt-12 inline-flex items-center gap-2 text-lg font-medium text-stone-900 transition-all duration-300 hover:gap-3"
          >
            Send an email
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-16 border-t border-stone-200 pt-8">
            <div className="flex flex-wrap gap-8 text-stone-500">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-stone-900"
              >
                GitHub
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-stone-900"
              >
                LinkedIn
              </a>

              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-stone-900"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
