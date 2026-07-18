import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="leading-none">
        <h1 className="text-[15px] font-semibold tracking-[-0.03em] text-stone-900 transition-colors duration-300">
          Keshav Agrawal
        </h1>

        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-stone-500">
          Full Stack Engineer
        </p>
      </div>
    </Link>
  );
}
