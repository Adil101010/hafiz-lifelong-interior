import {
  ArrowRight,
  Check,
  Dumbbell,
  GraduationCap,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { BUSINESS } from "../data/site";

import schoolFurniture from "../assets/images/school-furniture-reference.jpg";
import studentDesk from "../assets/images/student-desk-bench.jpg";
import studentDetail from "../assets/images/student-desk-detail.jpg";
import sportsFacility from "../assets/images/sports-facility-night.jpg";
import artificialGrass from "../assets/images/artificial-grass.jpg";
import boxCricket from "../assets/images/box-cricket-night.jpg";
import footballTurf from "../assets/images/football-turf-night.jpg";

const focusAreas = [
  {
    title: "School Furniture",
    description:
      "Practical furniture solutions for classrooms, learning spaces and educational environments.",
    icon: GraduationCap,
    image: schoolFurniture,
  },
  {
    title: "Sports Infrastructure",
    description:
      "Sports-focused solutions including turf, nets, box cricket and related infrastructure.",
    icon: Dumbbell,
    image: sportsFacility,
  },
  {
    title: "Artificial Grass",
    description:
      "Artificial grass solutions for sports and recreational applications.",
    icon: ShieldCheck,
    image: artificialGrass,
  },
  {
    title: "Custom Solutions",
    description:
      "Requirements can be discussed around the available space, application and project needs.",
    icon: Ruler,
    image: studentDetail,
  },
];

const applications = [
  "Schools & colleges",
  "Coaching centres",
  "Educational institutes",
  "Libraries",
  "Offices",
  "Sports facilities",
];

export default function About() {
  return (
    <>
      <Seo
        title="About Hafiz Lifelong Interior | Furniture & Sports Solutions"
        description="Learn about Hafiz Lifelong Interior's school furniture, educational infrastructure, artificial grass, sports nets and customized project solutions."
        path="/about"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy pb-16 pt-32 text-white sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-lime/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="container-shell relative">
          <Reveal>
            <div className="max-w-5xl">
              <div className="eyebrow">About Hafiz Lifelong Interior</div>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Better spaces begin with{" "}
                <span className="text-lime">better solutions.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Hafiz Lifelong Interior brings together school furniture,
                interior-related furniture solutions and sports infrastructure
                for practical project requirements.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/get-quote" className="btn-primary">
                  Discuss Your Requirement
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative">
              <img
                src={studentDesk}
                alt="School student desk and bench"
                className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
              />

              <div className="absolute -bottom-5 right-4 max-w-[230px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:right-8">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-lime" />
                  <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-navy">
                    Our focus
                  </span>
                </div>

                <p className="mt-2 text-sm font-bold leading-5 text-slate-600">
                  Practical products and infrastructure for real spaces.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <div className="eyebrow">Who we are</div>

              <h2 className="section-title mt-4">
                Furniture and infrastructure designed around the requirement.
              </h2>

              <p className="section-copy mt-5">
                The business offering covers two major areas: educational
                furniture and sports infrastructure. The website keeps both
                categories connected while making it easy to explore the
                specific solution you need.
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                From classroom furniture and desks to artificial grass,
                cricket nets, box cricket and football turf categories, the
                focus is on solutions that fit the intended application and
                available space.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  ["School furniture", GraduationCap],
                  ["Sports infrastructure", Dumbbell],
                  ["Artificial grass", ShieldCheck],
                  ["Custom requirements", Ruler],
                ].map(([label, Icon]) => {
                  const ItemIcon = Icon as typeof ShieldCheck;

                  return (
                    <div
                      key={String(label)}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-lime/40 hover:bg-white"
                    >
                      <ItemIcon size={20} className="text-lime" />

                      <div className="mt-3 text-sm font-extrabold text-navy">
                        {String(label)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="What we cover"
              title={
                <>
                  Solutions for{" "}
                  <span className="text-lime">different spaces.</span>
                </>
              }
              copy="Explore the core categories represented in the supplied business references."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item, index) => {
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

      {/* TWO SIDES */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Furniture */}
            <Reveal>
              <article className="group relative min-h-[420px] overflow-hidden rounded-[2rem]">
                <img
                  src={studentDetail}
                  alt="School furniture detail"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

                <div className="relative flex min-h-[420px] flex-col justify-end p-6 text-white sm:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime text-navy">
                    <GraduationCap size={21} />
                  </div>

                  <div className="eyebrow">01 · Education</div>

                  <h3 className="mt-3 font-display text-3xl font-extrabold">
                    School Furniture
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                    Classroom and educational furniture categories for
                    schools, colleges, institutes and related learning spaces.
                  </p>

                  <Link
                    to="/school-furniture"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-lime"
                  >
                    Explore furniture
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>

            {/* Sports */}
            <Reveal delay={0.08}>
              <article className="group relative min-h-[420px] overflow-hidden rounded-[2rem]">
                <img
                  src={boxCricket}
                  alt="Box cricket sports infrastructure"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

                <div className="relative flex min-h-[420px] flex-col justify-end p-6 text-white sm:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime text-navy">
                    <Dumbbell size={21} />
                  </div>

                  <div className="eyebrow">02 · Sports</div>

                  <h3 className="mt-3 font-display text-3xl font-extrabold">
                    Sports Infrastructure
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                    Artificial grass, cricket nets, box cricket and football
                    turf categories for sports-focused spaces.
                  </p>

                  <Link
                    to="/sports-solutions"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-lime"
                  >
                    Explore sports solutions
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div>
              <div className="eyebrow">Where solutions fit</div>

              <h2 className="section-title mt-4">
                Built around the space and its purpose.
              </h2>

              <p className="section-copy mt-5">
                The supplied references identify a range of educational,
                commercial and sports applications.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2">
              {applications.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                    <Check size={18} />
                  </div>

                  <span className="text-sm font-extrabold text-navy">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISUAL STRIP */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-[1.35fr_.65fr]">
            <Reveal>
              <img
                src={footballTurf}
                alt="Football turf"
                loading="lazy"
                className="h-full min-h-[280px] w-full rounded-[2rem] object-cover"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <img
                src={artificialGrass}
                alt="Artificial grass"
                loading="lazy"
                className="h-full min-h-[280px] w-full rounded-[2rem] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="eyebrow">Let's discuss your project</div>

                <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                  Have a requirement?
                  <span className="text-lime"> Let's build the right solution.</span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Tell us what you need, where it is required and the
                  approximate quantity. We can start the conversation from
                  there.
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

      {/* BUSINESS INFO */}
      <section className="bg-white py-10 sm:py-12">
        <div className="container-shell">
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-extrabold text-navy">
                Hafiz Lifelong Interior
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {BUSINESS.shortLocation}
              </p>
            </div>

            <div className="text-sm font-bold text-navy">
              {BUSINESS.phone}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}