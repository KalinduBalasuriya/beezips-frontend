import Image from "next/image";

const reasons = [
  {
    title: "100% Pure, natural taste",
    body: "Made with 100% real fruits for a naturally rich, authentic flavour. Every sip delivers the fresh taste of real fruit, exactly as nature intended.",
  },
  {
    title: "Genuinely made with real fruits",
    body: "Most of our fruits come straight from our own orchards, where they're harvested fresh. We never rely on purchased fruit pulps or concentrates.",
  },
  {
    title: "Naturally preserved",
    body: "Our juices are gently pasteurized and bottled under sterile conditions to maintain freshness. No artificial flavours, colours or preservatives are ever added.",
  },
  {
    title: "No artificial ingredients",
    body: "Nothing artificial goes into our bottles. No added flavours, colours, preservatives, or unnecessary additives just real fruit, carefully prepared and naturally enjoyed.",
  },
];

export default function WhyBeezips() {
  return (
    <section id="why-beezips" className="relative flex items-center">
      <Image
        src="/why-beezips-banner3.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/85 -z-10" />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
        <div className="max-w-xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-honey text-xs sm:text-sm font-700 uppercase tracking-[0.2em] block mb-3">
            Why Beezips
          </span>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-700 text-cream leading-tight">
            We kept it as close to the orchard as a bottle allows.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="bg-charcoal/60 border border-honey/15 rounded-sm p-4 sm:p-5 lg:p-7 hover:border-honey/50 transition-colors group"
            >
              <div className="hidden sm:block">
                <HexBadge index={i} />
              </div>
              <h3 className="font-display text-base sm:text-lg font-600 text-cream mb-2 flex gap-x-2">
                <div className="sm:hidden">
                  <HexBadge index={i} />
                </div>
                {r.title}
              </h3>
              <p className="text-cream/60 text-xs sm:text-sm leading-relaxed">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HexBadge({ index }: { index: number }) {
  return (
    <div className="relative w-10 h-9 sm:w-12 sm:h-10 lg:w-14 lg:h-12 mb-4 sm:mb-5 lg:mb-6">
      <svg viewBox="0 0 100 86.6" className="absolute inset-0 w-full h-full">
        <path
          d="M35,0 L65,0 Q75,0 80,8.66 L95,34.64 Q100,43.3 95,51.96 L80,77.94 Q75,86.6 65,86.6 L35,86.6 Q25,86.6 20,77.94 L5,51.96 Q0,43.3 5,34.64 L20,8.66 Q25,0 35,0 Z"
          className="fill-honey/15 group-hover:fill-honey transition-colors duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-700 text-xs sm:text-sm text-honey group-hover:text-ink transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
