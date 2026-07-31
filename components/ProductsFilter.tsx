"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Filter } from "@/types/products";

interface FilterOption {
  label: string;
  value: Filter;
}

interface FilterBarProps {
  activeFilter: Filter;
  onFilterChange: (value: Filter) => void;
  productCount: number;
}

const filters: FilterOption[] = [
  { label: "All Products", value: "all" },
  { label: "Small", value: "200ml" },
  { label: "Large", value: "375ml" },
];

export default function ProductsFilter({
  activeFilter,
  onFilterChange,
  productCount,
}: FilterBarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLabel =
    filters.find((f) => f.value === activeFilter)?.label ?? "All Products";

  return (
    <section className="bg-cream border-b border-ink/10 sticky top-14 z-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-3 flex items-center gap-3">
        {/* ── Mobile: dropdown ── */}
        <div className="relative flex sm:hidden flex-1" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-1.5 rounded-md border border-ink/20 text-sm font-600 text-ink w-full justify-between bg-cream"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-ink/50" />
              {activeLabel}
            </span>
            <ChevronDown
              size={14}
              className={`text-ink/50 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-cream border border-ink/10 rounded-md shadow-lg overflow-hidden z-50">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => {
                    onFilterChange(f.value);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm font-600 transition-colors flex items-center justify-between ${
                    activeFilter === f.value
                      ? "bg-honey text-ink"
                      : "text-ink/70 hover:bg-cream-dim"
                  }`}
                >
                  {f.label}
                  {activeFilter === f.value && (
                    <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Desktop: pill buttons ── */}
        <div className="hidden sm:flex items-center gap-3 flex-1">
          <span className="text-ink/50 text-xs font-700 uppercase tracking-widest mr-2">
            Filter by size
          </span>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => onFilterChange(f.value)}
              className={`px-4 py-1 rounded-md text-xs font-600 border transition-colors ${
                activeFilter === f.value
                  ? "bg-honey text-ink border-none"
                  : "bg-transparent text-ink/70 border-ink/20 hover:border-ink/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <span className="text-ink/40 text-xs hidden sm:block ml-auto">
          {productCount} products
        </span>
      </div>
    </section>
  );
}
