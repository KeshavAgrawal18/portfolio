import { ArrowUpRight } from "lucide-react";

interface ExperienceItemProps {
  period: string;
  role: string;
  company: string;
  description: string;
  link?: string;
}

export default function ExperienceItem({
  period,
  role,
  company,
  description,
  link,
}: ExperienceItemProps) {
  return (
    <article className="group grid gap-8 py-14 md:grid-cols-[150px_1fr]">
      <div>
        <p className="text-sm tracking-wide text-stone-400">{period}</p>
      </div>

      <div className="max-w-xl">
        <h3 className="text-[1.45rem] font-semibold tracking-[-0.02em] text-stone-900 transition-colors group-hover:text-stone-700">
          {role}
        </h3>

        <p className="mt-2 text-[15px] font-medium text-stone-500">{company}</p>

        <p className="mt-5 text-[17px] leading-8 text-stone-600">
          {description}
        </p>

        {link && (
          <a
            href={link}
            className="group/link mt-7 inline-flex items-center gap-2 text-sm font-medium text-stone-900"
          >
            View project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
