"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { company, navLinks } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-atlantic/10 bg-foam/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-8">
        <a
          href="#inicio"
          className="relative block h-9 w-[130px] shrink-0 sm:h-10 sm:w-[150px] md:h-12 md:w-[180px]"
        >
          <Image
            src="/logo.png"
            alt="Globatel"
            fill
            priority
            className={`object-contain object-left ${
              onDark ? "brightness-0 invert" : ""
            }`}
            sizes="180px"
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                onDark
                  ? "text-foam/85 hover:text-foam"
                  : "text-ink-muted hover:text-atlantic"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${company.phoneTel}`}
            className="rounded-sm bg-coral px-3 py-2 text-sm font-semibold text-foam transition-colors hover:bg-coral-deep xl:px-4"
          >
            {company.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="relative z-10 flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <span
            className={`absolute h-0.5 w-5 transition-transform ${
              onDark ? "bg-foam" : "bg-atlantic"
            } ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-0.5 w-5 transition-opacity ${
              onDark ? "bg-foam" : "bg-atlantic"
            } ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-0.5 w-5 transition-transform ${
              onDark ? "bg-foam" : "bg-atlantic"
            } ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-atlantic/10 bg-foam px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${company.phoneTel}`}
              className="mt-2 inline-flex w-fit rounded-sm bg-atlantic px-4 py-2.5 text-sm font-semibold text-foam"
              onClick={() => setOpen(false)}
            >
              Llamar {company.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
