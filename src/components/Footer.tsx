import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import { BUSINESS } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "School Furniture", to: "/school-furniture" },
  { label: "Sports Solutions", to: "/sports-solutions" },
  { label: "Projects", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const solutionLinks = [
  { label: "School Furniture", to: "/school-furniture" },
  { label: "Artificial Grass", to: "/sports-solutions/artificial-grass" },
  { label: "Sports Nets", to: "/sports-solutions/cricket-nets" },
  { label: "Box Cricket", to: "/sports-solutions/box-cricket" },
  { label: "Football Turf", to: "/sports-solutions/football-turf" },
  { label: "Sports Solutions", to: "/sports-solutions" },
];

function phoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(BUSINESS.location);

function BrandMark() {
  return (
    <Link
      to="/"
      aria-label="Hafiz Lifelong Interior home"
      className="inline-flex flex-col"
    >
      <div className="font-display text-[25px] font-black leading-none tracking-[-0.04em] sm:text-[29px]">
        <span className="text-white">HAFIZ </span>
        <span className="text-lime">LIFELONG</span>
      </div>

      <div className="mt-2 text-[8px] font-bold uppercase tracking-[0.28em] text-white/55 sm:text-[9px]">
        Interior <span className="text-lime">•</span> Furniture{" "}
        <span className="text-lime">•</span> Sports
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <>
      {/* Mobile fixed contact bar */}
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-200 bg-white px-2 py-2 shadow-[0_-8px_30px_rgba(7,27,65,0.18)] sm:hidden"
      >
        <div className="grid grid-cols-3 gap-2">
          {/* CALL */}
          <a
            href={phoneHref(BUSINESS.phone)}
            aria-label={`Call ${BUSINESS.phone}`}
            className="flex min-h-12 min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl bg-navy px-1 text-center !text-white transition active:scale-[0.98]"
          >
            <Phone
              size={17}
              strokeWidth={2.5}
              className="shrink-0 !text-white"
              aria-hidden="true"
            />

            <span className="block truncate text-[10px] font-extrabold leading-none !text-white">
              CALL
            </span>
          </a>

          {/* WHATSAPP */}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="flex min-h-12 min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl bg-[#25D366] px-1 text-center !text-navy transition active:scale-[0.98]"
          >
            <MessageCircle
              size={17}
              strokeWidth={2.5}
              className="shrink-0 !text-navy"
              aria-hidden="true"
            />

            <span className="block truncate text-[10px] font-extrabold leading-none !text-navy">
              WHATSAPP
            </span>
          </a>

          {/* GET QUOTE */}
          <Link
            to="/get-quote"
            aria-label="Get a quote"
            className="flex min-h-12 min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl bg-lime px-1 text-center !text-navy transition active:scale-[0.98]"
          >
            <ArrowUpRight
              size={17}
              strokeWidth={2.5}
              className="shrink-0 !text-navy"
              aria-hidden="true"
            />

            <span className="block truncate text-[10px] font-extrabold leading-none !text-navy">
              GET QUOTE
            </span>
          </Link>
        </div>
      </nav>

      {/* Main footer */}
      <footer className="bg-navy pb-28 pt-16 text-white sm:pb-10 sm:pt-20">
        <div className="container-shell">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_.75fr_.9fr_1fr] lg:gap-8">
            {/* Brand */}
            <div className="min-w-0">
              <BrandMark />

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
                School furniture, artificial grass, sports nets and sports
                infrastructure solutions from Pabla, Incholi, Meerut.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-3 py-2 text-xs font-bold text-lime">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-lime"
                />
                Furniture + Sports Solutions
              </div>

              <div className="mt-7">
                <Link
                  to="/get-quote"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-lime px-4 py-3 text-sm font-extrabold !text-navy transition hover:bg-lime/90 hover:!text-navy"
                >
                  Start an inquiry
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <FooterCol title="Quick Links" links={quickLinks} />

            {/* Solutions */}
            <FooterCol title="Our Solutions" links={solutionLinks} />

            {/* Contact */}
            <div className="min-w-0">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-lime">
                Contact
              </h3>

              <div className="mt-5 space-y-3">
                {[BUSINESS.phone, BUSINESS.alternatePhone].map((phone) => (
                  <a
                    key={phone}
                    href={phoneHref(phone)}
                    className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm font-bold text-white/75 transition hover:border-lime/30 hover:text-white"
                  >
                    <Phone
                      size={17}
                      className="shrink-0 text-lime"
                      aria-hidden="true"
                    />

                    <span>{phone}</span>
                  </a>
                ))}

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm font-bold text-white/75 transition hover:border-lime/30 hover:text-white"
                >
                  <MessageCircle
                    size={17}
                    className="shrink-0 text-[#25D366]"
                    aria-hidden="true"
                  />

                  WhatsApp
                </a>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl p-2 text-sm leading-6 text-white/65 transition hover:bg-white/5 hover:text-white"
                >
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0 text-lime"
                    aria-hidden="true"
                  />

                  <span>{BUSINESS.location}</span>
                </a>

                {BUSINESS.email && (
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="flex min-w-0 items-start gap-3 p-2 text-sm leading-6 text-white/65 transition hover:text-white"
                  >
                    <Mail
                      size={17}
                      className="mt-0.5 shrink-0 text-lime"
                      aria-hidden="true"
                    />

                    <span className="min-w-0 break-all">
                      {BUSINESS.email}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} {BUSINESS.name}. All rights
              reserved.
            </span>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              <Link
                to="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                className="transition hover:text-white"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

interface FooterLink {
  label: string;
  to: string;
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="min-w-0">
      <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-lime">
        {title}
      </h3>

      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 min-[400px]:grid-cols-3 lg:flex lg:flex-col lg:gap-3">
        {links.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="group flex min-w-0 items-center gap-1 text-sm font-semibold text-white/65 transition hover:text-white"
          >
            <span className="truncate">{label}</span>

            <ArrowUpRight
              size={13}
              aria-hidden="true"
              className="shrink-0 opacity-0 transition group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}