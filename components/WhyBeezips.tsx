const reasons = [
  {
    title: "Pure, natural taste",
    body: "No flavour concentrates and no aftertaste to mask. What you taste is the fruit we pressed that week, nothing standing in for it.",
  },
  {
    title: "Genuinely organic",
    body: "Sourced from growers who skip synthetic pesticides and fertiliser, so the fruit arrives the way it grew, not the way it was treated.",
  },
  {
    title: "Zero artificial anything",
    body: "No added sugar, no preservatives, no artificial colouring. If an ingredient needs a chemistry degree to explain, it isn't in the bottle.",
  },
  {
    title: "Small-batch pressed",
    body: "We press in quantities small enough to finish and ship within days, not warehouse-large batches sitting in concentrate for months.",
  },
];

export default function WhyBeezips() {
  return (
    <section id="why-beezips" className="honeycomb-bg relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-xl mb-16">
          <span className="text-honey text-xs font-700 uppercase tracking-[0.2em] block mb-4">
            Why Beezips
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-cream leading-tight">
            We kept it as close to the orchard as a bottle allows.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="bg-charcoal/60 border border-honey/15 rounded-sm p-7 hover:border-honey/50 transition-colors group"
            >
              <HexBadge index={i} />
              <h3 className="font-display text-xl font-600 text-cream mb-3">
                {r.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="divider-comb" /> */}
    </section>
  );
}

function HexBadge({ index }: { index: number }) {
  return (
    <div className="relative w-14 h-12 mb-6">
      <svg viewBox="0 0 100 86.6" className="absolute inset-0 w-full h-full">
        <path
          d="M35,0 L65,0 Q75,0 80,8.66 L95,34.64 Q100,43.3 95,51.96 L80,77.94 Q75,86.6 65,86.6 L35,86.6 Q25,86.6 20,77.94 L5,51.96 Q0,43.3 5,34.64 L20,8.66 Q25,0 35,0 Z"
          className="fill-honey/15 group-hover:fill-honey transition-colors duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-700 text-honey group-hover:text-ink transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
