import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import Seo from "../components/Seo";
import InquiryForm from "../components/InquiryForm";
import Reveal from "../components/Reveal";

import { BUSINESS } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";

const PHONE_1 = BUSINESS.phone;
const PHONE_2 = BUSINESS.alternatePhone;

function phoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BUSINESS.location
)}`;

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Hafiz Lifelong Interior | Meerut"
        description="Contact Hafiz Lifelong Interior in Pabla, Incholi, Meerut for school furniture, artificial grass, sports nets, box cricket and sports infrastructure inquiries."
        path="/contact"
      />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden="true"
          className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-lime/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        />

        <div className="container-shell relative pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
          <Reveal>
            <div className="max-w-5xl">
              <div className="eyebrow">
                <span
                  aria-hidden="true"
                  className="h-px w-7 shrink-0 bg-lime"
                />
                Contact Hafiz Lifelong Interior
              </div>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Let’s talk about your{" "}
                <span className="text-lime">space.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Tell us what you are planning and the team can discuss your
                requirement, approximate quantity and location with you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/get-quote"
                  className="btn-primary"
                >
                  Get a Free Quote
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 focus:ring-offset-navy"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CONTACT + FORM
      ========================================================= */}
      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          {/* =====================================================
              CONTACT INFO
          ===================================================== */}
          <Reveal>
            <div className="space-y-5">
              <div className="rounded-[2rem] bg-navy p-6 text-white shadow-soft sm:p-8">
                <div className="eyebrow">
                  <span
                    aria-hidden="true"
                    className="h-px w-7 shrink-0 bg-lime"
                  />
                  Direct contact
                </div>

                <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                  Speak with the team.
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                  Choose the contact method that works best for you.
                </p>

                {/* PRIMARY PHONE */}
                <a
                  href={phoneHref(PHONE_1)}
                  aria-label={`Call Hafiz Lifelong Interior on ${PHONE_1}`}
                  className="mt-7 flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-lime/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime text-navy">
                    <Phone size={19} aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                      Call
                    </div>

                    <div className="mt-1 text-sm font-extrabold">
                      {PHONE_1}
                    </div>
                  </div>
                </a>

                {/* SECONDARY PHONE */}
                <a
                  href={phoneHref(PHONE_2)}
                  aria-label={`Call Hafiz Lifelong Interior on ${PHONE_2}`}
                  className="mt-3 flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-lime/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime text-navy">
                    <Phone size={19} aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                      Alternate Call
                    </div>

                    <div className="mt-1 text-sm font-extrabold">
                      {PHONE_2}
                    </div>
                  </div>
                </a>

                {/* WHATSAPP */}
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Hafiz Lifelong Interior on WhatsApp"
                  className="mt-3 flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-lime/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <MessageCircle size={19} aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                      WhatsApp
                    </div>

                    <div className="mt-1 text-sm font-extrabold">
                      Chat with us
                    </div>
                  </div>
                </a>

                {/* LOCATION */}
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open Hafiz Lifelong Interior location in Google Maps`}
                  className="mt-3 flex min-w-0 items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-lime/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime text-navy">
                    <MapPin size={19} aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                      Location
                    </div>

                    <div className="mt-1 text-sm font-extrabold leading-5">
                      {BUSINESS.location}
                    </div>

                    <div className="mt-1 text-xs font-semibold text-lime">
                      Open in Google Maps →
                    </div>
                  </div>
                </a>

                {/* EMAIL */}
                {BUSINESS.email && (
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    aria-label={`Email ${BUSINESS.email}`}
                    className="mt-3 flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-lime/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime text-navy">
                      <Mail size={19} aria-hidden="true" />
                    </span>

                    <div className="min-w-0">
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                        Email
                      </div>

                      <div className="mt-1 break-all text-sm font-extrabold">
                        {BUSINESS.email}
                      </div>
                    </div>
                  </a>
                )}
              </div>

              {/* LOCATION CARD */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime/15 text-lime">
                  <MapPin size={20} aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-display text-xl font-extrabold text-navy sm:text-2xl">
                  Visit / discuss your requirement
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {BUSINESS.location}
                </p>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-extrabold text-navy transition hover:border-lime hover:bg-lime/5"
                >
                  <MapPin size={14} aria-hidden="true" />
                  Open Location
                  <ArrowRight size={14} aria-hidden="true" />
                </a>

                <p className="mt-4 text-xs leading-5 text-slate-500">
                  For project discussions, contact the team first to confirm
                  the appropriate details.
                </p>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              FORM
          ===================================================== */}
          <Reveal delay={0.08}>
            <div className="min-w-0">
              <div className="mb-5">
                <div className="eyebrow">
                  <span
                    aria-hidden="true"
                    className="h-px w-7 shrink-0 bg-lime"
                  />
                  Send an inquiry
                </div>

                <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                  Tell us what you need.
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  Share your requirement, approximate quantity and location.
                </p>
              </div>

              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          QUICK CONTACT CTA
      ========================================================= */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-lime p-6 sm:p-9 lg:p-10">
              <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                  <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-navy/60">
                    Prefer a quick conversation?
                  </div>

                  <h2 className="mt-2 font-display text-2xl font-extrabold text-navy sm:text-3xl">
                    Call or WhatsApp the team.
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-navy/65">
                    Directly discuss your furniture, turf, netting or sports
                    infrastructure requirement.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap lg:justify-end">
                  <a
                    href={phoneHref(PHONE_1)}
                    className="btn-dark w-full sm:w-auto"
                  >
                    <Phone size={16} aria-hidden="true" />
                    Call Now
                  </a>

                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-navy/15 bg-white px-5 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-white sm:w-auto"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    WhatsApp
                  </a>

                  <Link
                    to="/get-quote"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-navy/15 bg-white px-5 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-white sm:w-auto"
                  >
                    Full Quote Form
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}