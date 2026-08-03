import { projects } from "@/data/projects";
import { Card } from "@/components/projects/card";
import { Header } from "@/components/projects/header";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Header />

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
