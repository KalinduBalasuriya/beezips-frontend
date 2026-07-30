export default function AboutUs() {
  return (
    <section id="our-story" className="bg-cream relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-16 py-24 lg:py-20 grid lg:grid-cols-12 gap-y-20">
        {/* ── Our Story — heading LEFT, text RIGHT ── */}
        <div className="lg:col-span-4 lg:col-start-1 order-1">
          <span className="text-honey-deep text-md font-700 uppercase tracking-[0.2em] block mb-4">
            Our Story
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-ink leading-tight">
            Born in a
            <br />
            <span className="italic">fruit orchard.</span>
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-ink/75 text-sm leading-relaxed font-display order-2">
          <p>
            <span className="font-bold italic">Beezips</span> didn't begin as a
            juice company. It began with a vision to grow healthy, flavourful
            fruit from the ground up.
          </p>
          <p>
            Our journey started with a fruit plantation, where every season
            reminded us that the best fruit begins long before it's harvested.
            As our orchards flourished, we asked ourselves a simple question:
            <br />
            <span className="font-semibold italic">
              Why sell our finest fruit as a raw harvest when we could preserve
              its true taste in something people could enjoy all year round?
            </span>
          </p>
          <p>
            That idea became Beezips. The name is inspired by one of nature's
            hardest workers, the bee. Without bees, fruit trees wouldn't bloom
            or bear the rich, delicious fruit we cherish. Through their
            pollination, bees help create nature's finest flavours. We like to
            think that Beezips captures that gift, carefully preserving the true
            spirit of our fruits and "zipping" it into every bottle. Today,
            every bottle reflects where we began: in the orchard, guided by
            nature, inspired by bees, and committed to sharing the authentic
            taste of real fruit.
          </p>
          <div className="flex flex-wrap gap-10 pt-6 border-t border-ink/10">
            <Stat value="2021" label="First batch pressed" />
            <Stat value="100%" label="Real fruit, every bottle" />
            <Stat value="0" label="Artificial flavouring used" />
          </div>
        </div>

        {/* Divider */}
        <div className="lg:col-span-12 border-t border-ink/10 order-3" />

        {/* ── Mission — heading RIGHT, text LEFT ── */}
        <div className="lg:col-span-6 lg:col-start-1 space-y-6 text-ink/75 text-sm md:text-md leading-relaxed font-display order-5 lg:order-4 flex items-center">
          <p>
            To craft premium fruit beverages from our own carefully grown
            harvest, preserving the authentic taste and natural goodness of
            every fruit through responsible farming, thoughtful processing, and
            an unwavering commitment to quality. We strive to bring people
            closer to nature by delivering refreshing drinks made with real
            fruit and genuine care.
          </p>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 order-4 lg:order-5">
          <span className="text-honey-deep text-md font-700 uppercase tracking-[0.2em] block mb-4">
            Our Mission
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-ink leading-tight">
            Crafted from the orchard,
            <br />
            <span className="italic">bottled with care.</span>
          </h2>
        </div>

        {/* Divider */}
        <div className="lg:col-span-12 border-t border-ink/10 order-6" />

        {/* ── Vision — heading LEFT, text RIGHT ── */}
        <div className="lg:col-span-4 lg:col-start-1 order-7 ">
          <span className="text-honey-deep text-md font-700 uppercase tracking-[0.2em] block mb-4">
            Our Vision
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-ink leading-tight">
            Sri Lanka's most trusted
            <br />
            <span className="italic">natural fruit beverage.</span>
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-6 space-y-6 text-ink/75 text-sm md:text-md leading-relaxed font-display order-8 flex items-center">
          <p>
            To become Sri Lanka's most trusted natural fruit beverage brand,
            inspiring a healthier lifestyle while showcasing the richness of
            locally grown fruits. We envision a future where every Beezips
            bottle represents sustainability, authenticity, and the remarkable
            partnership between nature, farmers, and bees.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-700 text-honey-deep">
        {value}
      </div>
      <div className="text-sm text-ink/60 mt-1">{label}</div>
    </div>
  );
}
