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
import ProductsFilter from "@/components/ProductsFilter";

// ─── Data ────────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "94707676734";

const products: Product[] = [
  {
    id: "mixed-fruit",
    flavor: "Mixed Fruit",
    tagline: "A tropical medley in every sip",
    accentColor: "#e8562a",
    bgColor: "#fff0eb",
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
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20 ">
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

      {/* Products grid */}
      <section className="bg-cream">
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
            className="inline-flex rounded-lg items-center gap-2 border border-cream text-sm text-cream font-700 px-6 py-3 hover:bg-[#1ebc5a] hover:border-[#25D366] transition-colors"
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
