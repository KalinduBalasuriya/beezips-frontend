"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "94707676734";

type Size = "200ml" | "375ml";
type Filter = "all" | Size;

interface SizeOption {
  size: Size;
  label: string;
  price: string;
}

interface Product {
  id: string;
  flavor: string;
  tagline: string;
  accentColor: string;
  bgColor: string;
  icon: ReactNode;
  sizes: SizeOption[];
}

const products: Product[] = [
  {
    id: "mixed-fruit",
    flavor: "Mixed Fruit",
    tagline: "A tropical medley in every sip",
    accentColor: "#e8562a",
    bgColor: "#fff0eb",
    icon: <MixedFruitIcon />,
    sizes: [
      { size: "200ml", label: "Small", price: "Rs. 120" },
      { size: "375ml", label: "Large", price: "Rs. 220" },
    ],
  },
  {
    id: "passion-mango",
    flavor: "Passion Mango",
    tagline: "Sun-ripened mango meets passion fruit",
    accentColor: "#f5a623",
    bgColor: "#fff8eb",
    icon: <PassionMangoIcon />,
    sizes: [
      { size: "200ml", label: "Small", price: "Rs. 130" },
      { size: "375ml", label: "Large", price: "Rs. 240" },
    ],
  },
  {
    id: "tamarind",
    flavor: "Tamarind",
    tagline: "Bold, tangy, and unapologetically real",
    accentColor: "#7b3f00",
    bgColor: "#f9f0e8",
    icon: <TamarindIcon />,
    sizes: [
      { size: "200ml", label: "Small", price: "Rs. 120" },
      { size: "375ml", label: "Large", price: "Rs. 220" },
    ],
  },
  {
    id: "soursop",
    flavor: "Soursop",
    tagline: "Creamy, exotic, unlike anything else",
    accentColor: "#3a7d44",
    bgColor: "#eef6ef",
    icon: <SoursopIcon />,
    sizes: [
      { size: "200ml", label: "Small", price: "Rs. 140" },
      { size: "375ml", label: "Large", price: "Rs. 260" },
    ],
  },
  {
    id: "aloevera",
    flavor: "Aloe Vera",
    tagline: "Cool, clean, and good for you",
    accentColor: "#5aab6d",
    bgColor: "#edf7f0",
    icon: <AloeVeraIcon />,
    sizes: [
      { size: "200ml", label: "Small", price: "Rs. 130" },
      { size: "375ml", label: "Large", price: "Rs. 240" },
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
      { size: "200ml", label: "Small", price: "Rs. 120" },
      { size: "375ml", label: "Large", price: "Rs. 220" },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filters: { label: string; value: Filter }[] = [
    { label: "All Products", value: "all" },
    { label: "Small - 200ml", value: "200ml" },
    { label: "Large - 375ml", value: "375ml" },
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
      <section className="bg-cream border-b border-ink/10 sticky top-20 z-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center gap-3 flex-wrap">
          <span className="text-ink/50 text-xs font-700 uppercase tracking-widest mr-2">
            Filter by size
          </span>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-1.5 rounded-md text-sm font-600 border transition-colors ${
                activeFilter === f.value
                  ? "bg-honey text-ink border-none"
                  : "bg-transparent text-ink/70 border-ink/20 hover:border-ink/50"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-ink/40 text-sm">
            {productCount} products
          </span>
        </div>
      </section>

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
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-700 px-7 py-3.5 rounded-sm hover:bg-[#1ebc5a] transition-colors"
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

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  sizeOption,
}: {
  product: Product;
  sizeOption: SizeOption;
}) {
  const waMessage = encodeURIComponent(
    `Hi Beezips! I'd like to order the ${product.flavor} juice — ${sizeOption.label} (${sizeOption.size}). Can you confirm availability?`,
  );
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-cream rounded-sm border border-ink/10 overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Placeholder image area — replace contents with <Image> once you have real photos */}
      <div
        className="relative h-56 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: product.bgColor }}
      >
        {/* <Image
          src={`/products/${product.id}.png`}
          alt={product.flavor}
          fill
          className="object-contain"
        /> */}
        <div className="flex flex-col items-center gap-3 opacity-80">
          <div className="w-20 h-20">{product.icon}</div>
          <span
            className="text-xs font-700 uppercase tracking-widest"
            style={{ color: product.accentColor }}
          >
            Placeholder image
          </span>
        </div>

        {/* Size badge */}
        <span className="absolute top-3 right-3 bg-honey text-ink text-xs font-700 px-2.5 py-1 rounded-sm">
          {sizeOption.size}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-display text-xl font-700 text-ink leading-tight">
            {product.flavor}
          </h3>
          <span
            className="text-xs font-700 uppercase tracking-wide mt-1 whitespace-nowrap"
            style={{ color: product.accentColor }}
          >
            {sizeOption.label}
          </span>
        </div>

        <p className="text-ink/55 text-sm mb-4 leading-relaxed">
          {product.tagline}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="font-display text-2xl font-700 text-ink">
              {sizeOption.price}
            </span>
            <span className="text-ink/40 text-xs">per bottle</span>
          </div>
          <div className="flex gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-cream font-700 text-sm py-2 rounded-md hover:bg-ink transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Order via WhatsApp
            </a>
            <Link
              href={`/products/${product.id}`}
              className="flex items-center justify-center gap-2 w-2/3 border border-ink/30 text-ink/80 font-700 text-sm py-2 rounded-md transition-colors  hover:border-ink hover:text-ink"
            >
              View Details
              <Eye size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── WhatsApp Icon ────────────────────────────────────────────────────────────

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Placeholder SVG Icons ────────────────────────────────────────────────────
// Replace these with real <Image> components once you have product photos

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
