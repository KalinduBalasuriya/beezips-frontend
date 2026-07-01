export default function OurStory() {
  return (
    <section id="our-story" className="bg-cream relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="text-honey-deep text-xs font-700 uppercase tracking-[0.2em] block mb-4">
            Our Story
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-ink leading-tight">
            Started in a
            <br />
            <span className="italic">backyard orchard.</span>
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-ink/75 text-lg leading-relaxed">
          <p>
            Beezips began with three mango trees, a juicer that overheated
            after the second jug, and a question nobody in the family could
            answer: why does store-bought juice taste like nothing grew it?
          </p>
          <p>
            We started pressing fruit the way our grandmothers did, just for
            ourselves, then for the neighbours, then for the neighbours&apos;
            neighbours. Every batch was small enough to taste-test by hand and
            honest enough that we never needed to dress it up with sugar
            syrup or flavouring.
          </p>
          <p>
            The name comes from that habit of small, careful batches, zipped
            shut and sent out the same week they were pressed, the way bees
            cap a cell the moment the honey inside is ready. We&apos;re still
            doing it that way. We just bought a bigger juicer.
          </p>

          <div className="flex flex-wrap gap-10 pt-6 border-t border-ink/10">
            <Stat value="2019" label="First batch pressed" />
            <Stat value="100%" label="Real fruit, every bottle" />
            <Stat value="0" label="Artificial flavouring used" />
          </div>
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
