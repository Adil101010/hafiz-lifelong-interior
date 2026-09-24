import {
  ArrowRight,
  Check,
  Factory,
  GraduationCap,
  Layers3,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

import Seo from "../components/Seo";
import VideoHero from "../components/VideoHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import SportsCard from "../components/SportsCard";

import { BUSINESS, capabilityItems, products } from "../data/site";

import heroImage from "../assets/images/hero-poster.jpg";
import schoolFurnitureImage from "../assets/images/school-furniture-reference.jpg";
import studentDeskImage from "../assets/images/student-desk-bench.jpg";
import studentDetailImage from "../assets/images/student-desk-detail.jpg";
import artificialGrassImage from "../assets/images/artificial-grass.jpg";
import boxCricketImage from "../assets/images/box-cricket-night.jpg";
import footballTurfImage from "../assets/images/football-turf-night.jpg";
import sportsFacilityImage from "../assets/images/sports-facility-night.jpg";

const PHONE_1 = "+916397163814";
const PHONE_2 = "+919759343623";

const WHATSAPP_NUMBER = PHONE_1;

const whatsappMessage = encodeURIComponent(
  "Hello Hafiz Lifelong Interior, I would like to discuss my requirement."
);

export default function Home() {
  const furniture = products
    .filter((p) => p.category === "School Furniture")
    .slice(0, 6);

  const sports = products
    .filter((p) => p.category === "Sports Infrastructure")
    .slice(0, 8);

  return (
    <>
      <Seo
        title="Hafiz Lifelong Interior | Furniture, Interior & Sports Solutions"
        description="Hafiz Lifelong Interior provides school furniture, interior and furniture solutions, artificial grass, cricket nets, box cricket and sports infrastructure solutions."
      />

      {/* =====================================================
          HERO
      ====================================================== */}
      <VideoHero />

      {/* =====================================================
          WHAT WE DO
      ====================================================== */}
      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                One partner for{" "}
                <span className="text-lime">better spaces.</span>
              </>
            }
            copy="From educational furniture and interiors to sports infrastructure, we create practical solutions around your space, requirement and project goals."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <CategoryCard
              icon={<GraduationCap />}
              title="School Furniture"
              copy="Smart, durable and student-friendly furniture for classrooms, libraries, institutes and educational spaces."
              image={schoolFurnitureImage}
              href="/school-furniture"
            />

            <CategoryCard
              icon={<Ruler />}
              title="Interior & Furniture"
              copy="Furniture and interior solutions designed around the function, look and requirements of your space."
              image={heroImage}
              href="/get-quote"
            />

            <CategoryCard
              icon={<Layers3 />}
              title="Sports Infrastructure"
              copy="Artificial grass, cricket nets, box cricket and sports facility solutions for different applications."
              image={boxCricketImage}
              href="/sports-solutions"
            />
          </div>

          {/* Trust points */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Custom Solutions",
              "Quality Materials",
              "Professional Execution",
              "Direct Support",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex items-center gap-3
                  rounded-2xl
                  border border-navy/10
                  bg-white
                  px-4 py-4
                  text-sm font-bold text-navy
                  shadow-sm
                "
              >
                <Check
                  size={17}
                  className="shrink-0 text-lime"
                />

                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SCHOOL FURNITURE
      ====================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="School furniture"
            title={
              <>
                Furniture built for{" "}
                <span className="text-lime">
                  better learning.
                </span>
              </>
            }
            copy="Durable, comfortable and practical furniture solutions for schools, colleges, institutes, libraries and educational spaces."
            action={
              <Link
                to="/school-furniture"
                className="btn-ghost"
              >
                View all furniture
                <ArrowRight size={16} />
              </Link>
            }
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {furniture.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED FURNITURE VISUAL
      ====================================================== */}
      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <Reveal className="overflow-hidden rounded-[2rem] bg-slate-100">
            <img
              src={studentDeskImage}
              alt="School student desk and bench furniture"
              loading="lazy"
              className="
                aspect-[4/3]
                h-full
                w-full
                object-cover
                transition duration-700
                hover:scale-[1.02]
              "
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="eyebrow">
              <span className="h-px w-7 bg-lime" />
              Education spaces
            </div>

            <h2 className="section-title">
              Practical furniture for{" "}
              <span className="text-lime">
                everyday learning.
              </span>
            </h2>

            <p className="section-copy">
              School furniture should balance comfort, durability,
              usability and the needs of the space. Explore solutions
              for classrooms and educational environments.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Student desk & bench",
                "Classroom furniture",
                "Practical designs",
                "Custom requirements",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-3
                    rounded-xl
                    bg-white
                    p-3.5
                    text-sm font-bold text-navy
                    shadow-sm
                  "
                >
                  <Check
                    size={18}
                    className="shrink-0 text-lime"
                  />

                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/school-furniture"
              className="btn-ghost mt-7"
            >
              Explore school furniture
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          SPORTS SOLUTIONS
      ====================================================== */}
      <section className="bg-navy py-16 text-white sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Sports solutions"
            title={
              <>
                Complete sports infrastructure{" "}
                <span className="text-lime">
                  solutions.
                </span>
              </>
            }
            copy="From artificial grass and sports nets to box cricket and turf environments, explore the sports categories represented in the supplied business references."
            action={
              <Link
                to="/sports-solutions"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border border-white/20
                  px-5 py-3
                  text-sm font-extrabold
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                Explore sports
                <ArrowRight size={16} />
              </Link>
            }
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {sports.map((product) => (
              <SportsCard
                key={product.slug}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECTS
      ====================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Featured work"
            title={
              <>
                A closer look at our{" "}
                <span className="text-lime">
                  work categories.
                </span>
              </>
            }
            copy="Explore selected visuals across furniture, turf and sports infrastructure. Actual project photography will remain the priority wherever available."
            action={
              <Link
                to="/gallery"
                className="btn-ghost"
              >
                View gallery
                <ArrowRight size={16} />
              </Link>
            }
          />

          <div className="grid gap-5 lg:grid-cols-12">
            {/* Large */}
            <ProjectImageCard
              image={studentDetailImage}
              title="Furniture Details"
              category="School Furniture"
              className="lg:col-span-7"
            />

            {/* Right top */}
            <ProjectImageCard
              image={artificialGrassImage}
              title="Artificial Grass"
              category="Sports Solutions"
              className="lg:col-span-5"
            />

            {/* Right bottom */}
            <ProjectImageCard
              image={boxCricketImage}
              title="Box Cricket"
              category="Sports Infrastructure"
              className="lg:col-span-5"
            />

            {/* Left bottom */}
            <ProjectImageCard
              image={footballTurfImage}
              title="Football Turf"
              category="Sports Solutions"
              className="lg:col-span-7"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SPORTS FEATURE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#edf6e2] py-16 sm:py-20 lg:py-24">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-lime/20 blur-3xl" />

        <div className="container-shell relative grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal>
            <div className="eyebrow text-navy">
              <span className="h-px w-7 bg-navy" />
              Sports infrastructure
            </div>

            <h2 className="section-title">
              Spaces designed for{" "}
              <span className="text-lime">
                active play.
              </span>
            </h2>

            <p className="section-copy">
              Explore practical sports infrastructure categories
              including turf, artificial grass, cricket nets and
              enclosed playing environments.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Artificial grass",
                "Sports netting",
                "Box cricket",
                "Customized setup planning",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-3
                    rounded-2xl
                    border border-navy/10
                    bg-white/75
                    p-4
                    text-sm font-bold text-navy
                  "
                >
                  <Check
                    size={18}
                    className="shrink-0 text-lime"
                  />

                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/sports-solutions"
              className="btn-dark mt-7"
            >
              Explore sports solutions
              <ArrowRight size={17} />
            </Link>
          </Reveal>

          <Reveal
            delay={0.1}
            className="overflow-hidden rounded-[2rem] shadow-strong"
          >
            <img
              src={sportsFacilityImage}
              alt="Sports facility project"
              loading="lazy"
              className="
                aspect-[4/3]
                h-full
                w-full
                object-cover
                transition duration-700
                hover:scale-[1.02]
              "
            />
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          ARTIFICIAL GRASS
      ====================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="order-2 overflow-hidden rounded-[2rem] bg-slate-100 lg:order-1">
            <img
              src={artificialGrassImage}
              alt="Artificial grass sports surface"
              loading="lazy"
              className="
                aspect-[4/3]
                h-full
                w-full
                object-cover
                transition duration-700
                hover:scale-[1.02]
              "
            />
          </Reveal>

          <Reveal
            delay={0.1}
            className="order-1 lg:order-2"
          >
            <div className="eyebrow">
              <span className="h-px w-7 bg-lime" />
              Artificial grass
            </div>

            <h2 className="section-title">
              Practical surfaces for{" "}
              <span className="text-lime">
                sports spaces.
              </span>
            </h2>

            <p className="section-copy">
              Artificial grass solutions represented in the supplied
              sports imagery, with selection and installation discussed
              around the intended application.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Sports applications",
                "Low-maintenance appearance",
                "Durable-use focus",
                "Customized installation discussion",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-3
                    rounded-xl
                    bg-paper
                    p-3.5
                    text-sm font-bold text-navy
                  "
                >
                  <ShieldCheck
                    size={18}
                    className="shrink-0 text-lime"
                  />

                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/sports-solutions/artificial-grass"
              className="btn-ghost mt-7"
            >
              Explore artificial grass
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          WHY HAFIZ
      ====================================================== */}
      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why Hafiz"
            title={
              <>
                Built around{" "}
                <span className="text-lime">
                  practical service.
                </span>
              </>
            }
            copy="A consultation-led approach focused on quality, durability, customized requirements, delivery and direct support."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Premium Quality",
                ShieldCheck,
                "Quality-focused material and project presentation.",
              ],
              [
                "Strong & Durable",
                Factory,
                "Durability is an important part of the product and project focus.",
              ],
              [
                "Customized Solutions",
                Ruler,
                "Discuss the solution around the actual requirement.",
              ],
              [
                "Expert Support",
                Users,
                "Direct communication for product and project questions.",
              ],
              [
                "Project Support",
                MapPin,
                "Support through the project conversation and delivery process.",
              ],
              [
                "Customer-Focused Service",
                Sparkles,
                "A consultation-led approach from requirement to support.",
              ],
            ].map(([title, Icon, copy], index) => {
              const IconComponent =
                Icon as typeof ShieldCheck;

              return (
                <Reveal
                  key={String(title)}
                  delay={index * 0.03}
                >
                  <div className="card h-full p-6">
                    <div
                      className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-2xl
                        bg-lime/15
                        text-navy
                      "
                    >
                      <IconComponent size={21} />
                    </div>

                    <h3
                      className="
                        mt-5
                        font-display
                        text-lg
                        font-extrabold
                        text-navy
                      "
                    >
                      {String(title)}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {String(copy)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="bg-navy py-16 text-white sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <Reveal>
              <div className="eyebrow">
                How it works
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                A clear path from requirement to delivery.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                A simple conversation keeps your requirement,
                solution and project expectations clear.
              </p>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Understand Your Requirement",
                "Discuss & Plan",
                "Design / Quotation",
                "Manufacturing / Installation",
                "Delivery & Support",
              ].map((item, index) => (
                <Reveal
                  key={item}
                  delay={index * 0.04}
                >
                  <div
                    className="
                      flex gap-4
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      p-5
                      transition
                      hover:bg-white/10
                    "
                  >
                    <span className="font-display text-2xl font-extrabold text-lime">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pt-1 text-sm font-bold">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}
      <section className="bg-lime py-12 sm:py-16">
        <div className="container-shell flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-navy/60">
              Ready to discuss your requirement?
            </div>

            <h2 className="mt-2 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Tell us about your next space.
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-navy/70 sm:text-base">
              School furniture, interior & furniture or sports
              infrastructure — start the conversation with our team.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/get-quote"
              className="btn-dark"
            >
              Get a Free Quote
              <ArrowRight size={17} />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border border-navy/15
                bg-white
                px-6 py-3.5
                text-sm font-extrabold
                text-navy
                transition
                hover:bg-white/90
              "
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT / BUSINESS DETAILS
      ====================================================== */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <div className="eyebrow">
              Contact Hafiz
            </div>

            <h2 className="section-title">
              Let's discuss your requirement.
            </h2>

            <p className="section-copy">
              For school furniture, interior & furniture or sports
              infrastructure requirements, connect directly by phone,
              WhatsApp or the inquiry form.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href={`tel:${PHONE_1}`}
                className="
                  flex items-center gap-3
                  text-sm font-bold text-navy
                  transition hover:text-lime
                "
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Phone size={17} />
                </span>

                +91 6397163814
              </a>

              <a
                href={`tel:${PHONE_2}`}
                className="
                  flex items-center gap-3
                  text-sm font-bold text-navy
                  transition hover:text-lime
                "
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Phone size={17} />
                </span>

                +91 9759343623
              </a>

              <div className="flex items-center gap-3 text-sm font-bold text-navy">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <MapPin size={17} />
                </span>

                {BUSINESS.location}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime/15 text-navy">
                <MessageCircle size={22} />
              </div>

              <h3 className="mt-5 font-display text-2xl font-extrabold text-navy">
                Tell us what you need.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Share your requirement through our inquiry form.
                You can tell us about the service, project and location,
                and our configured contact workflow can handle the enquiry.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link
                  to="/get-quote"
                  className="btn-primary"
                >
                  Open Inquiry Form
                  <ArrowRight size={17} />
                </Link>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border border-navy/10
                    bg-paper
                    px-6 py-3.5
                    text-sm font-extrabold
                    text-navy
                    transition
                    hover:bg-slate-100
                  "
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   CATEGORY CARD
========================================================= */

function CategoryCard({
  icon,
  title,
  copy,
  image,
  href,
}: {
  icon: ReactNode;
  title: string;
  copy: string;
  image: string;
  href: string;
}) {
  return (
    <Reveal>
      <Link
        to={href}
        className="
          group
          relative
          block
          min-h-[360px]
          overflow-hidden
          rounded-3xl
          bg-navy
        "
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            opacity-65
            transition duration-700
            group-hover:scale-105
            group-hover:opacity-75
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-navy
            via-navy/45
            to-transparent
          "
        />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <div
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-2xl
              bg-lime
              text-navy
            "
          >
            {icon}
          </div>

          <h3 className="mt-5 font-display text-2xl font-extrabold text-white">
            {title}
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-white/72">
            {copy}
          </p>

          <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-lime">
            Explore
            <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* =========================================================
   PROJECT IMAGE CARD
========================================================= */

function ProjectImageCard({
  image,
  title,
  category,
  className = "",
}: {
  image: string;
  title: string;
  category: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <Link
        to="/gallery"
        className="
          group
          relative
          block
          min-h-[300px]
          overflow-hidden
          rounded-[2rem]
          bg-navy
        "
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            transition duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-navy/90
            via-navy/20
            to-transparent
          "
        />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-lime">
            {category}
          </div>

          <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
            {title}
          </h3>

          <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-white/80 transition group-hover:text-lime">
            View work
            <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}