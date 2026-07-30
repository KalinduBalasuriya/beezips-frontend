import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

// ─── Update these with your real details ─────────────────────────────────────
const CONTACT = {
  email: "info@beezips.com",
  website: "https://www.beezips.com",
  whatsapp: { number: "94707676734", display: "+94 70 767 6734" },
  facebook: "https://www.facebook.com/beezipsfoodandbeverages",
  instagram:
    "https://www.instagram.com/beezips.organic?igsh=cHpwY2Y4cmF3cTVy&utm_source=qr",
  tiktok: "https://www.tiktok.com/@beezips.organic?_r=1&_t=ZS-98SUYygojDU",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Page header */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <Image
            src="/honeycomb-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center -z-20"
          />
          <span className="inline-flex items-center gap-2 text-honey text-xs font-700 uppercase tracking-[0.2em] mb-4">
            {/* <span className="w-6 h-px bg-honey" /> */}
            Contact Us
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-700 text-cream leading-tight max-w-xl">
            We&apos;d love to{" "}
            <span className="italic text-honey">hear from you.</span>
          </h1>
          <p className="text-cream/65 mt-4 max-w-lg text-lg leading-relaxed">
            Whether you want to place an order, become a distributor, or just
            say Hello! we&apos;re always happy to connect.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-16">
          {/* Left col — direct contact */}
          <div>
            <h2 className="font-display text-2xl font-700 text-ink mb-8">
              Reach us directly
            </h2>
            <div className="space-y-4">
              <ContactCard
                icon={<FaWhatsapp size={20} />}
                iconBg="bg-[#25D366]"
                label="WhatsApp"
                value={CONTACT.whatsapp.display}
                sublabel="Fastest way to order or ask anything"
                href={`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(
                  "Hi Beezips! I'd like to get in touch.",
                )}`}
                external
              />
              <ContactCard
                icon={<EmailIcon />}
                iconBg="bg-honey"
                label="Email"
                value={CONTACT.email}
                sublabel="We reply within 24 hours"
                href={`mailto:${CONTACT.email}`}
              />
              <ContactCard
                icon={<WebsiteIcon />}
                iconBg="bg-[#4274D9]"
                label="Website"
                value="www.beezips.com"
                sublabel="Browse our full product range"
                href={CONTACT.website}
                external
              />
            </div>
          </div>

          {/* Right col — social media */}
          <div>
            <h2 className="font-display text-2xl font-700 text-ink mb-8">
              Follow us
            </h2>
            <div className="space-y-4">
              <ContactCard
                icon={<InstagramIcon />}
                iconBg="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]
"
                label="Instagram"
                value="@beezips"
                sublabel="Behind the scenes, new flavours & updates"
                href={CONTACT.instagram}
                external
              />
              <ContactCard
                icon={<FacebookIcon />}
                iconBg="bg-[#1877F2]"
                label="Facebook"
                value="Beezips"
                sublabel="News, promotions and community"
                href={CONTACT.facebook}
                external
              />
              <ContactCard
                icon={<TikTokIcon />}
                iconBg="bg-ink"
                label="TikTok"
                value="@beezips"
                sublabel="Short videos, fresh content"
                href={CONTACT.tiktok}
                external
              />
            </div>
          </div>
        </div>
      </section>

      {/* Distributor CTA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-honey text-xs font-700 uppercase tracking-[0.2em] block mb-3">
              For Businesses
            </span>
            <h2 className="font-display text-3xl font-700 text-cream leading-tight mb-3">
              Interested in stocking Beezips?
            </h2>
            <p className="text-cream/60 text-sm leading-relaxed">
              We&apos;re actively partnering with distributors, shops, cafés,
              and supermarkets across Sri Lanka. Drop us a line and let&apos;s
              talk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <a
              href="mailto:partners@beezips.com"
              className="inline-flex items-center justify-center gap-2 bg-honey text-ink font-700 px-7 py-3.5 rounded-lg hover:bg-cream transition-colors"
            >
              <EmailIcon dark />
              Email us
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(
                "Hi Beezips! I'm interested in becoming a distributor.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg justify-center gap-2 bg-[#25D366] text-white font-700 px-7 py-3.5 hover:bg-[#1ebc5a] transition-colors"
            >
              <WhatsAppIcon />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}

// ─── Contact Card ─────────────────────────────────────────────────────────────

function ContactCard({
  icon,
  iconBg,
  label,
  value,
  sublabel,
  href,
  external,
}: {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
  sublabel: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-5 p-5 rounded-xl border border-ink/10 bg-cream hover:border-ink hover:shadow-md transition-all group"
    >
      {/* Icon circle */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white ${iconBg}`}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="text-xs text-ink/50 font-700 uppercase tracking-widest mb-0.5">
          {label}
        </div>
        <div className="font-700 text-ink  transition-colors truncate">
          {value}
        </div>
        <div className="text-xs text-ink/50 mt-0.5">{sublabel}</div>
      </div>

      {/* Arrow */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 text-ink/30 group-hover:text-honey group-hover:translate-x-1 transition-all flex-shrink-0"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon({ dark }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={dark ? "#0a0a0a" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}
