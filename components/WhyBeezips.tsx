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
              <div className="hex w-12 h-12 bg-honey/15 group-hover:bg-honey transition-colors flex items-center justify-center mb-6">
                <span className="font-display font-700 text-honey group-hover:text-ink transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-xl font-600 text-cream mb-3">
                {r.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="divider-comb" />
    </section>
  );
}
