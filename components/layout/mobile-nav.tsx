"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "./logo";
import NavLinks from "./nav-links";
import { RESUME_LINK } from "@/lib/constants";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="flex h-11 w-11 items-center justify-center rounded-2xl border border-stone-200 bg-white/80 text-stone-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white hover:shadow-md">
          <Menu className="h-5 w-5" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex w-[340px] flex-col border-l border-stone-200 bg-[#FAF8F5] px-8 py-8"
        >
          <SheetHeader className="mb-12">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <Logo />
          </SheetHeader>

          <NavLinks mobile onClick={() => setOpen(false)} />

          <div className="mt-auto pt-10">
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-2xl bg-stone-900 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
