import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "./ContactButtons";

import heroImage from "../assets/images/hero-poster.jpg";

export default function VideoHero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-navy text-white sm:min-h-[720px] lg:min-h-[760px]">
      {/* Hero image */}
      <img
        src={heroImage}
        alt="Hafiz Lifelong Interior sports facility project"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/20" />
      <div className="absolute inset-0 bg-black/10" />
      {/* Bottom transition */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper via-paper/30 to-transparent" />

      {/* Content */}
     <div className="container-shell relative z-10 flex min-h-[620px] -translate-y-8 items-center pb-28 pt-28 sm:min-h-[660px] sm:translate-y-0 sm:pb-24 sm:pt-32 lg:min-h-[700px]">
        <div className="w-full max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-lime/30 bg-navy/40 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-lime backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-[0.18em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-lime shadow-[0_0_0_5px_rgba(140,207,0,.12)]" />
            <span>Furniture + Sports Infrastructure</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            Smart Furniture.
            <br />
            <span className="text-lime">Better Spaces.</span>
            <br />
            Better Play.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-6 text-white/80 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            Premium school furniture, artificial grass and complete sports
            infrastructure solutions for schools, colleges, coaching centres,
            institutes and sports facilities.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              to="/school-furniture"
              className="btn-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              Explore Our Solutions
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/get-quote"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur-md transition hover:bg-white/15 sm:w-auto"
            >
              Get Free Quote
            </Link>

            <WhatsAppButton
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur-md transition hover:bg-white/15 sm:w-auto"
              label="WhatsApp Us"
            />
          </div>

          {/* Product/service highlights */}
          <div className="mt-8 flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-white/65 sm:mt-9 sm:gap-x-5 sm:text-sm">
            <span>School Furniture</span>
            <span className="text-lime/70">•</span>
            <span>Artificial Grass</span>
            <span className="text-lime/70">•</span>
            <span>Sports Nets</span>
            <span className="text-lime/70">•</span>
            <span>Box Cricket</span>
          </div>
        </div>
      </div>

      {/* Desktop capability badge */}
      <div className="absolute bottom-8 right-8 z-10 hidden max-w-[260px] rounded-2xl border border-white/15 bg-black/25 p-4 backdrop-blur-md lg:block">
        <div className="text-xs font-bold uppercase tracking-[0.16em] text-lime">
          Featured capability
        </div>

        <div className="mt-1 text-sm font-semibold leading-5 text-white">
          Furniture and sports infrastructure solutions for your project.
        </div>
      </div>
    </section>
  );
}