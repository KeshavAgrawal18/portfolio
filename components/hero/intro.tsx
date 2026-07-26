import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import SocialLinks from "./social-links";
import { RESUME_LINK } from "@/lib/constants";

export default function Intro() {
  return (
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
        Full-Stack Engineer
      </p>

      <h1 className="mt-6 text-6xl font-semibold tracking-[-0.06em] text-stone-900">
        Hi, I'm Keshav.
      </h1>

      <p className="mt-8 text-lg leading-8 text-stone-600">
        I like building products that people enjoy using. From the first idea to
        the final deployment, I enjoy figuring things out along the way.
      </p>

      <div className="mt-10 flex gap-4">
        <Button className="rounded-xl">
          <Link href="#projects">View my work</Link>
        </Button>

        <Button variant="outline" className="rounded-xl">
          <a href={RESUME_LINK} target="_blank">
            Resume
          </a>
        </Button>
      </div>

      <p className="mt-8 text-sm text-stone-500">
        ● Open to full-stack software engineering opportunities.
      </p>

      <SocialLinks />
    </div>
  );
}
