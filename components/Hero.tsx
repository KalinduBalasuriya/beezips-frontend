import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background image */}
      <Image
        src="/why-beezips-banner4.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-20"
      />

      {/* Darkening scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/85 -z-10" />

      <div className="mx-auto max-w-7xl w-full px-6 lg:px-12 py-16 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <span className="inline-flex items-center gap-2 text-honey text-xs font-700 uppercase tracking-[0.2em] mb-6">
            {/* <span className="w-6 h-px bg-honey" /> */}
            100% Natural Ready-to-serve fruit juice
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-cream leading-[1.02] mb-6">
            Bee knows
            <br />
            <span className="text-honey"> the best.</span>
          </h1>
          <p className="text-cream/70 text-lg max-w-md mb-10 leading-relaxed">
            Real fruit, nurtured by nature and bottled with care. Beezips brings
            the authentic flavour of every harvest to your table.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="bg-honey text-ink font-700 px-6 py-2 rounded-sm hover:bg-cream transition-colors text-sm"
            >
              Explore Products
            </Link>
            <Link
              href="#our-story"
              className="border border-cream/30 text-cream font-600 px-6 py-2 rounded-sm hover:border-honey hover:text-honey transition-colors text-sm"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BottleIllustration() {
  return (
    <div className="relative animate-float">
      {/* <svg
        width="240"
        height="420"
        viewBox="0 0 240 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_30px_60px_rgba(255,206,53,0.18)]"
      >
        <rect x="95" y="20" width="50" height="36" rx="6" fill="#1f1c18" />
        <rect x="88" y="50" width="64" height="20" rx="4" fill="#ffce35" />
        <path
          d="M70 90 C70 70, 90 70, 90 56 L150 56 C150 70, 170 70, 170 90 L182 380 C182 400, 165 410, 120 410 C75 410, 58 400, 58 380 Z"
          fill="#fff8e6"
          fillOpacity="0.08"
          stroke="#ffce35"
          strokeWidth="2"
        />
        <path
          d="M62 230 L178 230 L172 380 C172 396, 158 402, 120 402 C82 402, 68 396, 68 380 Z"
          fill="#ffce35"
        />
        <rect x="66" y="170" width="108" height="64" rx="2" fill="#0a0a0a" />
        <text
          x="120"
          y="198"
          textAnchor="middle"
          fill="#ffce35"
          fontSize="17"
          fontFamily="var(--font-fraunces), serif"
          fontWeight="700"
        >
          Beezips
        </text>
        <text
          x="120"
          y="216"
          textAnchor="middle"
          fill="#fff8e6"
          fontSize="8"
          letterSpacing="2"
          fontFamily="var(--font-jakarta), sans-serif"
        >
          PASSION FRUIT
        </text>
        <circle
          cx="40"
          cy="120"
          r="3"
          fill="#ffce35"
          className="animate-drip"
        />
        <circle
          cx="200"
          cy="160"
          r="3"
          fill="#ffce35"
          className="animate-drip"
          style={{ animationDelay: "0.8s" }}
        />
        <circle
          cx="30"
          cy="300"
          r="3"
          fill="#ffce35"
          className="animate-drip"
          style={{ animationDelay: "1.4s" }}
        />
      </svg> */}
    </div>
  );
}
