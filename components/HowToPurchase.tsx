const areas = [
  "Colombo",
  "Gampaha",
  "Negombo",
  "Kandy",
  "Galle",
  "Kurunegala",
  "Jaffna",
  "Matara",
];

export default function HowToPurchase() {
  return (
    <section id="how-to-purchase" className="bg-cream relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-honey-deep text-xs font-700 uppercase tracking-[0.2em] block mb-4">
              How To Purchase
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-700 text-ink leading-tight mb-6">
              Islandwide delivery, straight to your door.
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed mb-8">
              Order online and we&apos;ll get a freshly pressed batch to you
              wherever you are on the island. Here&apos;s how it works, and
              where we currently reach.
            </p>

            <ol className="space-y-5 mb-10">
              <Step
                n="01"
                title="Place your order"
                body="Pick your flavours and quantity from the Products page."
              />
              <Step
                n="02"
                title="We press and pack"
                body="Your order is pressed in small batches and bottled within the week."
              />
              <Step
                n="03"
                title="Delivered islandwide"
                body="Couriered to your door, chilled and ready to drink, anywhere in Sri Lanka."
              />
            </ol>

            <div className="bg-ink rounded-sm p-7">
              <h3 className="font-display text-lg font-600 text-honey mb-2">
                Want to stock Beezips?
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-4">
                We&apos;re actively partnering with distributors, shops, and
                cafés across the island. If you&apos;d like to carry Beezips,
                we&apos;d like to hear from you.
              </p>
              <a
                href="mailto:partners@beezips.com"
                className="inline-block bg-honey text-ink font-700 text-sm px-5 py-2.5 rounded-sm hover:bg-cream transition-colors"
              >
                Become a Distributor
              </a>
            </div>
          </div>

          <div>
            <div className="bg-charcoal rounded-sm p-8 lg:p-10 h-full">
              <h3 className="font-display text-xl font-600 text-cream mb-1">
                Where we currently distribute
              </h3>
              <p className="text-cream/50 text-sm mb-8">
                Not on this list yet? Online delivery still reaches you,
                islandwide.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((a) => (
                  <div
                    key={a}
                    className="flex items-center gap-3 text-cream/85 text-sm border-b border-cream/10 pb-3"
                  >
                    <span className="hex w-2.5 h-2.5 bg-honey flex-shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="flex gap-5">
      <span className="font-display text-honey-deep/50 text-2xl font-700 leading-none">
        {n}
      </span>
      <div>
        <h4 className="font-700 text-ink mb-1">{title}</h4>
        <p className="text-ink/60 text-sm leading-relaxed">{body}</p>
      </div>
    </li>
  );
}
