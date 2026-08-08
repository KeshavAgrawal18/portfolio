interface AchievementItemProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function AchievementItem({
  title,
  subtitle,
  description,
}: AchievementItemProps) {
  return (
    <article className="border-t border-stone-200 py-8">
      <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
        {title}
      </p>

      <h3 className="mt-3 text-[1.9rem] font-medium leading-tight text-stone-900">
        {subtitle}
      </h3>

      <p className="mt-4 max-w-2xl text-[1.05rem] leading-8 text-stone-600">
        {description}
      </p>
    </article>
  );
}
