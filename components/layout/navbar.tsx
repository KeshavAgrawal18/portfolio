"use client";

import { Button } from "@/components/ui/button";

import Logo from "./logo";
import NavLinks from "./nav-links";
import MobileNav from "./mobile-nav";

import { RESUME_LINK } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-3xl border border-stone-200/80 bg-white/75 px-6 lg:px-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <NavLinks />

        {/* Resume Button */}
        <div className="hidden md:flex">
          <Button className="rounded-2xl bg-stone-900 px-5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-md">
            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileNav />
      </div>
    </header>
  );
}
