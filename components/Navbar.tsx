"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Products", href: "/products" },
  { label: "About", href: "#our-story" },
  { label: "Contact", href: "#how-to-purchase" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/50 backdrop-blur border-b border-honey/20">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="relative w-9 h-9 flex items-center justify-center transition-transform group-hover:rotate-45">
            <Image
              src="/logo.png"
              alt="Beezips logo"
              fill
              className="object-contain"
              priority
            />
          </span>
          <span className="font-display text-2xl font-700 text-ink tracking-tight">
            Beezips
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-ink/80 hover:text-honey transition-colors text-sm font-600 tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="border border-ink rounded-sm text-ink hover:text-cream hover:bg-ink hover:border-transparent transition-colors text-sm font-600 px-5 py-2.5"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-honey hover:text-cream text-ink text-sm font-700 px-5 py-2.5 rounded-sm hover:bg-ink transition-colors"
          >
            Sign Up
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-cream w-9 h-9 flex flex-col justify-center gap-1.5"
        >
          <span
            className={`block h-0.5 bg-honey transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 bg-honey transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 bg-honey transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-honey/20 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/90 hover:text-honey text-sm font-600 uppercase tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link
              href="/login"
              className="flex-1 text-center text-cream border border-honey/40 text-sm font-600 px-4 py-2.5 rounded-sm"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="flex-1 text-center bg-honey text-ink text-sm font-700 px-4 py-2.5 rounded-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
