import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-honey/15">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative w-9 h-9 flex items-center justify-center transition-transform group-hover:rotate-45">
              <Image
                src="/logo.png"
                alt="Beezips logo"
                fill
                className="object-contain"
                priority
              />
            </span>

            <span className="font-display text-xl font-700 text-cream">
              Beezips
            </span>
          </div>
          <p className="text-cream/50 text-sm leading-relaxed">
            Bee knows the best. Pure fruit juice, pressed in small batches and
            delivered islandwide.
          </p>
        </div>

        <FooterCol
          heading="Company"
          links={[
            { label: "Our Story", href: "#our-story" },
            { label: "Why Beezips", href: "#why-beezips" },
            { label: "Products", href: "/products" },
            { label: "Contact", href: "#how-to-purchase" },
          ]}
        />

        <FooterCol
          heading="Account"
          links={[
            { label: "Login", href: "/login" },
            { label: "Sign Up", href: "/signup" },
            {
              label: "Become a Distributor",
              href: "mailto:partners@beezips.com",
            },
          ]}
        />

        <div>
          <h4 className="text-cream font-700 text-sm uppercase tracking-wide mb-4">
            Get in touch
          </h4>
          <ul className="space-y-2 text-sm text-cream/50">
            <li>info@beezips.com</li>
            <li>+94 70 767 76734</li>
            <li>No 236/2, Chilaw Rd, Bingiriya</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/40">
        <span>© {new Date().getFullYear()} Beezips. All rights reserved.</span>
        <span>Pressed with patience, islandwide.</span>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-cream font-700 text-sm uppercase tracking-wide mb-4">
        {heading}
      </h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-cream/50 hover:text-honey text-sm transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
