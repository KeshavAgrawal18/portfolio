"use client";

import clsx from "clsx";
import { NAV_LINKS } from "@/lib/constants";

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

export default function NavLinks({ mobile = false, onClick }: NavLinksProps) {
  return (
    <nav
      className={clsx(
        mobile ? "flex flex-col gap-7" : "hidden items-center gap-10 md:flex",
      )}
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onClick}
          className={clsx(
            "relative text-[15px] font-medium tracking-[-0.02em] transition-all duration-300",
            mobile
              ? "text-lg text-stone-700 hover:translate-x-1 hover:text-stone-950"
              : "text-stone-600 hover:text-stone-950",
          )}
        >
          {link.label}

          {!mobile && (
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 rounded-full bg-stone-900 transition-all duration-300 group-hover:w-full" />
          )}
        </a>
      ))}
    </nav>
  );
}
