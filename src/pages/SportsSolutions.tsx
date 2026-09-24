import {
  ArrowRight,
  Check,
  Dumbbell,
  Goal,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import SportsCard from "../components/SportsCard";
import Reveal from "../components/Reveal";

import { products } from "../data/site";

import boxCricket from "../assets/images/box-cricket-night.jpg";
import artificialGrass from "../assets/images/artificial-grass.jpg";
import footballTurf from "../assets/images/football-turf-night.jpg";
import sportsFacility from "../assets/images/sports-facility-night.jpg";
import boxNet from "../assets/images/box-net-reference.jpg";

const applications = [
  {
    title: "Box Cricket",
    description:
      "Enclosed sports setups combining turf, netting and playing-space requirements.",
    icon: Trophy,
    image: boxCricket,
  },
  {
    title: "Artificial Grass",
    description:
      "Artificial grass solutions for sports and recreational applications.",
    icon: ShieldCheck,
    image: artificialGrass,
  },
  {
    title: "Football Turf",
    description:
      "Turf-focused solutions for football and other sports applications.",
    icon: Goal,
    image: footballTurf,
  },
  {
    title: "Sports Netting",
    description:
      "Cricket, boundary and other sports netting requirements.",
    icon: Dumbbell,
    image: boxNet,
  },
];

const solutionPoints = [
  "Artificial grass applications",
  "Cricket and sports nets",
  "Boundary netting",
  "Box cricket setups",
  "Football turf categories",
  "Sports facility requirements",
];

export default function SportsSolutions() {
  const items = products.filter(
    (product) => product.category === "Sports Infrastructure"
  );

  return (
    <>
      <Seo
        title="Sports Infrastructure, Turf & Sports Nets | Hafiz Lifelong Interior"
        description="Explore box cricket, football turf, artificial grass, cricket nets, football nets, tennis court nets, safety nets and boundary nets."
        path="/sports-solutions"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <img
            src={boxCricket}
            alt=""
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        </div>

        <div className="container-shell relative pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-40">
          <Reveal>
            <div className="max-w-5xl">
              <div className="eyebrow">Sports Infrastructure</div>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Build the playing space around your{" "}
                <span className="text-lime">requirement.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Artificial grass, sports nets, box cricket and
                football-focused turf solutions represented in the supplied
                project references.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/get-quote" className="btn-primary">
                  Discuss Your Sports Project
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View Sports Projects
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative">
              <img
                src={sportsFacility}
                alt="Sports facility"
                className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
              />

              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-navy/95 p-4 text-white shadow-xl sm:bottom-7 sm:left-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime text-navy">
                  <Sparkles size={19} />
                </div>

                <div>
                  <div className="text-xs font-extrabold uppercase tracking-[0.12em] text-lime">
                    Sports solutions
                  </div>
                  <div className="mt-1 text-sm font-bold">
                    From turf to netting
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <div className="eyebrow">Sports range</div>

              <h2 className="section-title mt-4">
                Complete sports infrastructure for{" "}
                <span className="text-lime">different applications.</span>
              </h2>

              <p className="section-copy mt-5">
                The supplied business material represents artificial grass,
                sports nets, box cricket, football turf and related sports
                facility requirements.
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Exact setup requirements can vary according to the available
                space, intended sport and project scope. These details can be
                discussed during consultation.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {solutionPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                      <Check size={16} />
                    </div>

                    <span className="text-sm font-bold text-navy">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="bg-navy py-16 text-white sm:py-20 lg:py-24">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Explore the range"
              title={
                <>
                  Sports solutions for{" "}
                  <span className="text-lime">real playing spaces.</span>
                </>
              }
              copy="Explore the sports infrastructure categories available in the supplied business material."
            />
          </Reveal>

          {items.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {items.map((product, index) => (
                <Reveal key={product.slug} delay={index * 0.05}>
                  <SportsCard product={product} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
              <p className="text-sm font-semibold text-white/60">
                Sports products will be added here.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Core applications"
              title={
                <>
                  Explore the{" "}
                  <span className="text-lime">sports categories.</span>
                </>
              }
              copy="Different sports spaces require different combinations of turf, grass and netting."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white shadow-lg">
                        <Icon size={19} />
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-display text-xl font-extrabold text-navy">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED VISUAL */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={boxCricket}
                  alt="Box cricket facility"
                  loading="lazy"
                  className="min-h-[360px] w-full object-cover lg:h-full"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 to-transparent p-6 pt-24 sm:p-8 sm:pt-28">
                  <div className="eyebrow">Box cricket</div>

                  <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                    Enclosed playing spaces with turf and netting.
                  </h3>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-5">
                <img
                  src={footballTurf}
                  alt="Football turf"
                  loading="lazy"
                  className="h-full min-h-[220px] w-full rounded-[2rem] object-cover"
                />

                <img
                  src={artificialGrass}
                  alt="Artificial grass"
                  loading="lazy"
                  className="h-full min-h-[220px] w-full rounded-[2rem] object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NETTING */}
      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <div className="eyebrow">Sports netting</div>

              <h2 className="section-title mt-4">
                Netting solutions for{" "}
                <span className="text-lime">sports spaces.</span>
              </h2>

              <p className="section-copy mt-5">
                The supplied references include cricket nets, boundary nets
                and other sports netting applications.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Cricket netting",
                  "Boundary netting",
                  "Safety-focused netting applications",
                  "Sports facility net requirements",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold text-navy"
                  >
                    <Check size={18} className="text-lime" />
                    {item}
                  </div>
                ))}
              </div>

              <Link to="/get-quote" className="btn-primary mt-7">
                Discuss Netting Requirement
                <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <img
              src={boxNet}
              alt="Sports netting reference"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="eyebrow">Start your sports project</div>

                <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                  Have a sports infrastructure requirement?
                  <span className="text-lime"> Let's discuss it.</span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Share your location, approximate requirement and the type of
                  sports space you are planning.
                </p>
              </div>

              <Link to="/get-quote" className="btn-primary shrink-0">
                Get a Free Quote
                <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}