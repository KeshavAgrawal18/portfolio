import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedWork() {
  return (
    <Link
      href="#projects"
      className="group block rounded-3xl border border-stone-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src="/images/meetxpert.png"
        alt="MeetXpert"
        width={1200}
        height={800}
        className="rounded-2xl border border-stone-200 transition-transform duration-500 group-hover:scale-[1.02]"
      />

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-tight text-stone-900">
            MeetXpert
          </h3>

          <ArrowUpRight className="h-5 w-5 text-stone-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-stone-700" />
        </div>

        <p className="mt-3 leading-7 text-stone-600">
          An expert booking platform built to make one-on-one learning simple.
        </p>
      </div>
    </Link>
  );
}
