import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live?: string;
  github?: string;
};

type CardProps = {
  project: Project;
  priority?: boolean;
};

export function Card({ project, priority }: CardProps) {
  return (
    <article className="group grid gap-8 rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-sm md:grid-cols-[1.15fr_1fr]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <p className="mt-4 text-muted-foreground leading-7">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-5">
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              className="inline-flex items-center gap-2 font-medium hover:opacity-70"
            >
              View Project
              <FiArrowUpRight />
            </Link>
          )}

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <FiGithub />
              GitHub
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
