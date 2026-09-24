import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import Seo from "../components/Seo";
import InquiryForm from "../components/InquiryForm";
import Reveal from "../components/Reveal";
import { BUSINESS } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";

const PHONE_1 = BUSINESS.phone;

function phoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

const steps = [
  {
    title: "Share your requirement",
    description: "Tell us what you need, approximate quantity and location.",
    icon: FileText,
  },
  {
    title: "Discuss the requirement",
    description: "Connect directly with the team to clarify the project.",
    icon: MessageCircle,
  },
  {
    title: "Plan the next step",
    description: "Discuss the suitable solution and project requirements.",
    icon: CheckCircle2,
  },
  {
    title: "Move the conversation forward",
    description: "Continue with the details needed for your requirement.",
    icon: Clock3,
  },
];

export default function Quote() {
  const [params] = useSearchParams();

  const requirement = params.get("requirement") || "";

  return (
    <>
      <Seo
        title="Get a Quote | Hafiz Lifelong Interior"
        description="Send an inquiry to Hafiz Lifelong Interior for school furniture, artificial grass, sports nets, box cricket and sports infrastructure requirements."
        path="/get-quote"
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
          <Reveal>
            <div className="max-w-4xl">
              <div className="eyebrow">
                <span
                  aria-hidden="true"
                  className="h-px w-7 shrink-0 bg-lime"
                />
                Get a quote
              </div>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Tell us what you’re{" "}
                <span className="text-lime">planning.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Share your requirement, approximate quantity and location.
                The team can discuss the requirement with you directly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          QUOTE AREA
      ========================================================= */}
      <section className="bg-paper py-14 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          {/* =====================================================
              LEFT INFORMATION
          ===================================================== */}
          <Reveal>
            <div className="min-w-0">
              <div className="eyebrow">
                <span
                  aria-hidden="true"
                  className="h-px w-7 shrink-0 bg-lime"
                />
                How it works
              </div>

              <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                Start with the requirement.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Give the team enough information to understand what you are
                looking for. You can also contact the team directly if you
                prefer a quick conversation.
              </p>

              {/* STEPS */}
              <div className="mt-7 space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="flex min-w-0 gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
                    >
                      <div className="relative shrink-0">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime/15 text-lime">
                          <Icon size={19} aria-hidden="true" />
                        </div>

                        {index < steps.length - 1 && (
                          <div
                            aria-hidden="true"
                            className="absolute left-1/2 top-11 hidden h-3 w-px -translate-x-1/2 bg-slate-200 sm:block"
                          />
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm font-extrabold text-navy sm:text-base">
                          {step.title}
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* DIRECT CONTACT */}
              <div className="mt-6 rounded-[1.75rem] bg-navy p-6 text-white shadow-soft sm:p-7">
                <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/40">
                  Prefer direct contact?
                </div>

                <h3 className="mt-2 font-display text-xl font-extrabold sm:text-2xl">
                  Talk to the team directly.
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  You can call or continue the conversation on WhatsApp.
                </p>

                <div className="mt-5 flex flex-col gap-3 min-[400px]:flex-row">
                  <a
                    href={phoneHref(PHONE_1)}
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-lime px-4 py-3 text-sm font-extrabold text-navy transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 focus:ring-offset-navy"
                  >
                    <Phone size={16} aria-hidden="true" />
                    Call Now
                  </a>

                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 focus:ring-offset-navy"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
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
                  Inquiry form
                </div>

                <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                  Tell us what you need.
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  Fill in the details below and share your requirement with the
                  team.
                </p>
              </div>

              <InquiryForm defaultRequirement={requirement} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-lime p-6 sm:p-9 lg:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                  <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-navy/60">
                    Ready to discuss?
                  </div>

                  <h2 className="mt-2 max-w-2xl font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
                    Let’s start with your requirement.
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-navy/65">
                    For a faster conversation, call or message the team on
                    WhatsApp.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
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
                    to="/contact"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-navy/15 bg-white px-5 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-white sm:w-auto"
                  >
                    Contact Page
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