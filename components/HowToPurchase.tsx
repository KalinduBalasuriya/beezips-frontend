import Link from "next/link";

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

const WHATSAPP_NUMBER = "94707676734"; // replace with your real number, no + or spaces
const WHATSAPP_DISPLAY = "+94 70 767 6734"; // how it shows in the UI

export default function HowToPurchase() {
  return (
    <section id="how-to-purchase" className="bg-cream relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-honey-deep text-md font-700 uppercase tracking-[0.2em] block mb-4">
              How To Purchase
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-700 text-ink leading-tight mb-6">
              Islandwide delivery, straight to your door.
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed mb-8">
              <span className="italic font-semibold">Ordering is simple!</span>{" "}
              Just drop us a message on WhatsApp and we&apos;ll take it from
              there. Here&apos;s how it works.
            </p>

            <ol className="space-y-5 mb-10">
              <Step
                n="01"
                title="Message us on WhatsApp"
                body={
                  <span>
                    Send us a message at{" "}
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#25D366] font-600 hover:underline"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      {WHATSAPP_DISPLAY}
                    </a>{" "}
                    and let us know you&apos;d like to place an order.
                  </span>
                }
              />
              <Step
                n="02"
                title="Choose your products"
                body="Tell us which flavours you want and how many bottles, we'll confirm availability and give you the total right on the chat."
              />
              <Step
                n="03"
                title="We press, pack and deliver"
                body="Your order is pressed in small batches, bottled fresh, and couriered to your door anywhere in Sri Lanka."
              />
            </ol>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Beezips!%20I'd%20like%20to%20place%20an%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-700 px-6 py-3.5 rounded-sm hover:bg-[#1ebc5a] transition-colors mb-10"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Order via WhatsApp
            </a>

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

function Step({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: React.ReactNode;
}) {
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
