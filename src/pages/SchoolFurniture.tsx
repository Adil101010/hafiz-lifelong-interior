import {
  ArrowRight,
  Check,
  GraduationCap,
  Library,
  School,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";

import { products } from "../data/site";

import schoolFurniture from "../assets/images/school-furniture-reference.jpg";
import studentDesk from "../assets/images/student-desk-bench.jpg";
import studentDetail from "../assets/images/student-desk-detail.jpg";
import studentSide from "../assets/images/student-desk-side.jpg";

const applications = [
  {
    title: "Schools",
    description: "Furniture requirements for classrooms and learning spaces.",
    icon: School,
  },
  {
    title: "Colleges & Institutes",
    description: "Practical furniture solutions for educational environments.",
    icon: GraduationCap,
  },
  {
    title: "Libraries",
    description: "Furniture categories suited to library and study spaces.",
    icon: Library,
  },
  {
    title: "Offices",
    description: "Furniture requirements for administrative and office spaces.",
    icon: Users,
  },
];

const furnitureHighlights = [
  "Student desks and benches",
  "Classroom furniture",
  "Teacher furniture",
  "Library furniture",
  "Office furniture",
  "Custom furniture requirements",
];

export default function SchoolFurniture() {
  const items = products.filter(
    (product) => product.category === "School Furniture"
  );

  return (
    <>
      <Seo
        title="School Furniture Manufacturer & Supplier | Hafiz Lifelong Interior"
        description="Explore school desks, classroom tables, school chairs, teacher tables, library furniture and office furniture from Hafiz Lifelong Interior."
        path="/school-furniture"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <img
            src={schoolFurniture}
            alt=""
            className="h-full w-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55" />
        </div>

        <div className="container-shell relative pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-40">
          <Reveal>
            <div className="max-w-5xl">
              <div className="eyebrow">School Furniture</div>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Furniture made for{" "}
                <span className="text-lime">better learning spaces.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Practical furniture categories for schools, colleges,
                institutes, libraries, coaching centres and office
                environments.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/get-quote" className="btn-primary">
                  Request a Furniture Quote
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View Our Work
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

              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-navy/95 p-4 text-white shadow-xl backdrop-blur sm:bottom-7 sm:left-7">
                <div className="text-xs font-extrabold uppercase tracking-[0.12em] text-lime">
                  Furniture solutions
                </div>

                <div className="mt-1 text-sm font-bold">
                  Built around practical requirements
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <div className="eyebrow">Furniture range</div>

              <h2 className="section-title mt-4">
                Everything starts with understanding the{" "}
                <span className="text-lime">space.</span>
              </h2>

              <p className="section-copy mt-5">
                The supplied business references cover furniture requirements
                across educational and office environments. Exact
                configurations can be discussed according to the application,
                available space and quantity.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {furnitureHighlights.map((item) => (
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

      {/* PRODUCTS */}
      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Explore the range"
              title={
                <>
                  School furniture for{" "}
                  <span className="text-lime">everyday use.</span>
                </>
              }
              copy="Explore the available furniture categories below. Product configuration and project requirements can be discussed directly."
            />
          </Reveal>

          {items.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((product, index) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center">
              <p className="text-sm font-semibold text-slate-500">
                Furniture products will be added here.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Applications"
              title={
                <>
                  One furniture range,{" "}
                  <span className="text-lime">multiple spaces.</span>
                </>
              }
              copy="Furniture requirements can vary by environment. Explore the spaces represented in the supplied business references."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="h-full rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-lime/30 hover:bg-white hover:shadow-soft">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 font-display text-xl font-extrabold text-navy">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISUAL SHOWCASE */}
      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={studentDetail}
                  alt="Student desk furniture detail"
                  loading="lazy"
                  className="h-full min-h-[360px] w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-6 pt-20 sm:p-8 sm:pt-24">
                  <div className="eyebrow">Product detail</div>

                  <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                    Details that matter in everyday spaces.
                  </h3>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <img
                src={studentSide}
                alt="School desk side view"
                loading="lazy"
                className="h-full min-h-[360px] w-full rounded-[2rem] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CUSTOM REQUIREMENT */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[2rem] bg-navy">
            <div className="grid lg:grid-cols-[1fr_.85fr]">
              <Reveal>
                <div className="p-7 sm:p-10 lg:p-14">
                  <div className="eyebrow">Custom requirement</div>

                  <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Need furniture for a specific space?
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                    Share your requirement, approximate quantity and location.
                    The next conversation can focus on the configuration
                    suitable for your project.
                  </p>

                  <Link to="/get-quote" className="btn-primary mt-7">
                    Discuss Your Requirement
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <img
                  src={schoolFurniture}
                  alt="School furniture"
                  loading="lazy"
                  className="h-full min-h-[300px] w-full object-cover lg:min-h-full"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-paper py-14 sm:py-16">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:p-10">
              <div>
                <div className="eyebrow">Ready to discuss?</div>

                <h2 className="mt-3 font-display text-2xl font-extrabold text-navy sm:text-3xl">
                  Tell us what your space needs.
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  Send your requirement and approximate quantity to start a
                  conversation.
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