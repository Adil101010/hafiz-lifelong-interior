import type { ReactNode } from "react";
import { ArrowLeft, ShieldCheck, FileText } from "lucide-react";
import { Link } from "react-router-dom";

import Seo from "../components/Seo";

interface LegalProps {
  title: string;
  path: string;
  children: ReactNode;
}

export function Privacy() {
  return (
    <Legal
      title="Privacy Policy"
      path="/privacy-policy"
      label="Privacy"
      icon={<ShieldCheck size={20} aria-hidden="true" />}
    >
      <p>
        This website uses the information you voluntarily submit through its
        inquiry form to respond to your business request. Email delivery is
        handled through the EmailJS service configured by the site owner.
      </p>

      <p>
        Do not submit passwords, payment information or other sensitive
        personal information through the inquiry form.
      </p>
    </Legal>
  );
}

export function Terms() {
  return (
    <Legal
      title="Terms & Conditions"
      path="/terms-and-conditions"
      label="Terms"
      icon={<FileText size={20} aria-hidden="true" />}
    >
      <p>
        Product availability, configurations, quantities, pricing, delivery and
        installation requirements are confirmed during quotation and
        consultation.
      </p>

      <p>
        Website images are provided for business presentation and reference;
        final specifications should be confirmed with Hafiz Lifelong Interior
        before an order is placed.
      </p>
    </Legal>
  );
}

function Legal({
  title,
  path,
  label,
  icon,
  children,
}: LegalProps & {
  label: string;
  icon: ReactNode;
}) {
  return (
    <>
      <Seo
        title={`${title} | Hafiz Lifelong Interior`}
        description={`${title} for Hafiz Lifelong Interior.`}
        path={path}
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

        <div className="container-shell relative pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40">
          <div className="max-w-4xl">
            <div className="eyebrow">
              <span
                aria-hidden="true"
                className="h-px w-7 shrink-0 bg-lime"
              />
              {label}
            </div>

            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Information about using the Hafiz Lifelong Interior website and
              submitting business inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <section className="bg-paper py-14 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            {/* DOCUMENT HEADER */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime/15 text-lime">
                  {icon}
                </div>

                <div className="min-w-0">
                  <div className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">
                    Hafiz Lifelong Interior
                  </div>

                  <h2 className="mt-1 font-display text-xl font-extrabold text-navy sm:text-2xl">
                    {title}
                  </h2>
                </div>
              </div>
            </div>

            {/* LEGAL CONTENT */}
            <article className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="space-y-6 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                {children}
              </div>
            </article>

            {/* BACK / CONTACT */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/"
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-navy transition hover:border-lime hover:bg-lime/5"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                Back to Home
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-navy px-5 py-2 text-sm font-extrabold text-white transition hover:bg-navy/90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}