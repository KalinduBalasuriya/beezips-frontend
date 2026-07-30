"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import ProductCard from "@/components/cards/ProductCard";
import WhatsAppIcon from "@/components/custom-icons/WhatsappIcon";
import { Filter, Product, Size } from "@/types/products";
import ProductsFilter from "@/components/products-filter";

// ─── Data ────────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "94707676734";

const products: Product[] = [
  {
    id: "mixed-fruit",
    flavor: "Mixed Fruit",
    tagline: "A tropical medley in every sip",
    accentColor: "#e8562a",
    bgColor: "#fff0eb",
    icon: <MixedFruitIcon />,
    sizes: [
      { size: "200ml", label: "Small", price: "Rs. 370" },
      { size: "375ml", label: "Large", price: "Rs. 650" },
    ],
    img: {
      small: "/products/mixed-fruit-large.png",
      large: "/products/mixed-fruit-large.png",
    },
  },
  {
    id: "passion-mango",
    flavor: "Passion Mango",
    tagline: "Sun-ripened mango meets passion fruit",
    accentColor: "#f5a623",
    bgColor: "#fff8eb",
    icon: <PassionMangoIcon />,
    sizes: [
      { size: "200ml", label: "Small", price: "Rs. 370" },
      { size: "375ml", label: "Large", price: "Rs. 650" },
    ],
    img: {
      small: "/products/passion-mango-large.png",
      large: "/products/passion-mango-large.png",
    },
  },
  {
    id: "tamarind",
    flavor: "Tamarind",
    tagline: "Bold, tangy, and unapologetically real",
    accentColor: "#7b3f00",
    bgColor: "#f9f0e8",
    icon: <TamarindIcon />,
    sizes: [
      { size: "200ml", label: "Small", price: "Rs. 370" },
      { size: "375ml", label: "Large", price: "Rs. 650" },
    ],
    img: {
      small: "/products/tamarind-large.png",
      large: "/products/tamarind-large.png",
    },
  },
  {
    id: "soursop",
    flavor: "Soursop",
    tagline: "Creamy, exotic, unlike anything else",
    accentColor: "#3a7d44",
    bgColor: "#eef6ef",
    icon: <SoursopIcon />,
    sizes: [
      { size: "200ml", label: "Small", price: "Rs. 370" },
      { size: "375ml", label: "Large", price: "Rs. 650" },
    ],
    img: {
      small: "/products/soursop-large.png",
      large: "/products/soursop-large.png",
    },
  },
  {
    id: "aloevera",
    flavor: "Aloe Vera",
    tagline: "Cool, clean, and good for you",
    accentColor: "#5aab6d",
    bgColor: "#edf7f0",
    icon: <AloeVeraIcon />,
    sizes: [
      { size: "200ml", label: "Small", price: "Rs. 370" },
      { size: "375ml", label: "Large", price: "Rs. 650" },
    ],
  },
  {
    id: "woodapple",
    flavor: "Wood Apple",
    tagline: "A Sri Lankan classic, bottled fresh",
    accentColor: "#8b5e3c",
    bgColor: "#f5ede4",
    icon: <WoodAppleIcon />,
    sizes: [
      { size: "200ml", label: "Small", price: "Rs. 370" },
      { size: "375ml", label: "Large", price: "Rs. 650" },
    ],
    img: {
      small: "/products/woodapple-large.png",
      large: "/products/woodapple-large.png",
    },
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const onChangeFilter = (value: Filter) => setActiveFilter(value);

  const filters: { label: string; value: Filter }[] = [
    { label: "All Products", value: "all" },
    { label: "Small", value: "200ml" },
    { label: "Large", value: "375ml" },
  ];

  const productCount =
    activeFilter === "all" ? products.length * 2 : products.length;

  return (
    <main>
      <Navbar />

      {/* Page header */}
      <section className="relative overflow-hidden">
        <Image
          src="/honeycomb-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center -z-20"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <span className="inline-flex items-center gap-2 text-honey text-xs font-700 uppercase tracking-[0.2em] mb-4">
            Our Products
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-700 text-cream leading-tight max-w-xl">
            Every bottle, pressed{" "}
            <span className="italic text-honey">fresh.</span>
          </h1>
          <p className="text-cream/65 mt-4 max-w-lg text-lg leading-relaxed">
            Six flavours, Two sizes! All made with real fruit and absolutely
            nothing artificial.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <ProductsFilter
        productCount={productCount}
        onFilterChange={onChangeFilter}
        activeFilter={activeFilter}
      />
      {/* <section className="bg-cream border-b border-ink/10 sticky top-14 z-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center gap-3 flex-wrap">
          <span className="text-ink/50 text-xs font-700 uppercase tracking-widest mr-2">
            Filter by size
          </span>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-1 rounded-md text-xs sm:text-md font-600 border transition-colors ${
                activeFilter === f.value
                  ? "bg-honey text-ink border-none"
                  : "bg-transparent text-ink/70 border-ink/20 hover:border-ink/50"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-ink/40 text-sm hidden sm:block">
            {productCount} products
          </span>
        </div>
      </section> */}

      {/* Products grid */}
      <section className="bg-cream-dim">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) =>
              product.sizes
                .filter(
                  (s) => activeFilter === "all" || s.size === activeFilter,
                )
                .map((sizeOption) => (
                  <ProductCard
                    key={`${product.id}-${sizeOption.size}`}
                    product={product}
                    sizeOption={sizeOption}
                    whatsAppNumber={WHATSAPP_NUMBER}
                  />
                )),
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-ink/80 overflow-hidden">
        <Image
          src="/hero-banner.JPG"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center -z-20"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 text-center">
          <h2 className="font-display text-3xl font-700 text-cream mb-3">
            Can&apos;t decide? Try a mix.
          </h2>
          <p className="text-cream/60 mb-8 max-w-md mx-auto">
            Message us on WhatsApp and we&apos;ll help you put together a mixed
            pack of whatever flavours catch your eye.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi Beezips! I'd like to order a mixed pack. Can you help me choose?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg items-center gap-2 bg-[#25D366] text-sm text-white font-700 px-6 py-3 hover:bg-[#1ebc5a] transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ─── Placeholder SVG Icons ────────────────────────────────────────────────────

function MixedFruitIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="32" r="16" fill="#e8562a" opacity="0.8" />
      <circle cx="48" cy="28" r="14" fill="#f5a623" opacity="0.8" />
      <circle cx="40" cy="48" r="14" fill="#e8562a" opacity="0.6" />
      <ellipse cx="40" cy="18" rx="4" ry="8" fill="#3a7d44" opacity="0.9" />
    </svg>
  );
}

function PassionMangoIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="46" rx="24" ry="22" fill="#f5a623" opacity="0.85" />
      <ellipse cx="40" cy="44" rx="18" ry="16" fill="#ffce35" opacity="0.7" />
      <path
        d="M40 10 C40 10, 34 20, 40 24 C46 20, 40 10, 40 10Z"
        fill="#3a7d44"
      />
    </svg>
  );
}

function TamarindIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 50 Q20 25, 40 20 Q60 25, 65 50 Q60 65, 40 68 Q20 65, 15 50Z"
        fill="#7b3f00"
        opacity="0.8"
      />
      <path
        d="M22 48 Q26 32, 40 28 Q54 32, 58 48"
        stroke="#5c2e00"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <circle cx="40" cy="14" r="5" fill="#3a7d44" opacity="0.9" />
    </svg>
  );
}

function SoursopIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="44" rx="22" ry="26" fill="#3a7d44" opacity="0.75" />
      <circle cx="40" cy="24" r="3" fill="#2d6235" opacity="0.6" />
      <circle cx="56" cy="32" r="3" fill="#2d6235" opacity="0.6" />
      <circle cx="60" cy="48" r="3" fill="#2d6235" opacity="0.6" />
      <circle cx="52" cy="62" r="3" fill="#2d6235" opacity="0.6" />
      <circle cx="40" cy="68" r="3" fill="#2d6235" opacity="0.6" />
      <circle cx="28" cy="62" r="3" fill="#2d6235" opacity="0.6" />
      <circle cx="20" cy="48" r="3" fill="#2d6235" opacity="0.6" />
      <circle cx="24" cy="32" r="3" fill="#2d6235" opacity="0.6" />
      <path d="M40 14 L38 20 L42 20Z" fill="#3a7d44" />
    </svg>
  );
}

function AloeVeraIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 65 C40 65, 18 50, 20 30 C22 18, 35 15, 40 20 C45 15, 58 18, 60 30 C62 50, 40 65, 40 65Z"
        fill="#5aab6d"
        opacity="0.8"
      />
      <path
        d="M40 65 L40 20"
        stroke="#3a7d44"
        strokeWidth="2.5"
        opacity="0.6"
      />
      <path
        d="M40 40 C30 35, 20 38, 18 32"
        stroke="#3a7d44"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M40 40 C50 35, 60 38, 62 32"
        stroke="#3a7d44"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

function WoodAppleIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="44" r="26" fill="#8b5e3c" opacity="0.8" />
      <circle cx="40" cy="44" r="20" fill="#a0714f" opacity="0.6" />
      <path
        d="M30 38 Q40 32, 50 38 Q40 44, 30 38Z"
        fill="#7b3f00"
        opacity="0.5"
      />
      <circle cx="40" cy="16" r="4" fill="#3a7d44" opacity="0.9" />
      <path
        d="M40 16 L44 10 Q46 8, 48 12"
        stroke="#3a7d44"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
