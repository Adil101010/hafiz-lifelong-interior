import { useMemo, useState } from "react";
import { ArrowRight, Image as ImageIcon, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";

import schoolFurnitureReference from "../assets/images/school-furniture-reference.jpg";
import studentDeskBench from "../assets/images/student-desk-bench.jpg";
import studentDeskDetail from "../assets/images/student-desk-detail.jpg";
import studentDeskSide from "../assets/images/student-desk-side.jpg";

import artificialGrass from "../assets/images/artificial-grass.jpg";
import boxCricketNight from "../assets/images/box-cricket-night.jpg";
import boxCricketPoster from "../assets/images/box-cricket-night-poster.jpg";
import boxNetReference from "../assets/images/box-net-reference.jpg";
import footballTurfNight from "../assets/images/football-turf-night.jpg";
import sportsFacilityNight from "../assets/images/sports-facility-night.jpg";

type GalleryCategory =
  | "School Furniture"
  | "Sports"
  | "Artificial Grass"
  | "Box Cricket"
  | "Sports Nets"
  | "Football Turf";

interface GalleryItem {
  title: string;
  category: GalleryCategory;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Student Desk & Bench",
    category: "School Furniture",
    image: studentDeskBench,
    description:
      "School furniture visual showing student desk and bench configuration.",
  },
  {
    title: "Furniture Detail",
    category: "School Furniture",
    image: studentDeskDetail,
    description:
      "Close-up view of school furniture detailing and construction.",
  },
  {
    title: "Student Desk — Side View",
    category: "School Furniture",
    image: studentDeskSide,
    description:
      "Side profile of student desk and bench furniture.",
  },
  {
    title: "School Furniture",
    category: "School Furniture",
    image: schoolFurnitureReference,
    description:
      "School furniture reference visual from the supplied business material.",
  },

  {
    title: "Artificial Grass",
    category: "Artificial Grass",
    image: artificialGrass,
    description:
      "Artificial grass surface suitable for sports and recreational applications.",
  },
  {
    title: "Box Cricket",
    category: "Box Cricket",
    image: boxCricketNight,
    description:
      "Box cricket environment shown in the supplied project imagery.",
  },
  {
    title: "Box Cricket Installation",
    category: "Box Cricket",
    image: boxCricketPoster,
    description:
      "Box cricket installation reference from the supplied business imagery.",
  },
  {
    title: "Cricket Netting",
    category: "Sports Nets",
    image: boxNetReference,
    description:
      "Cricket netting reference for sports practice environments.",
  },
  {
    title: "Football Turf",
    category: "Football Turf",
    image: footballTurfNight,
    description:
      "Football turf environment shown in the supplied sports imagery.",
  },
  {
    title: "Sports Facility",
    category: "Sports",
    image: sportsFacilityNight,
    description:
      "Sports facility reference from the supplied business imagery.",
  },
];

const filters = [
  "All",
  "School Furniture",
  "Sports",
  "Artificial Grass",
  "Box Cricket",
  "Sports Nets",
  "Football Turf",
] as const;

type Filter = (typeof filters)[number];

const WHATSAPP_NUMBER = "916397163814";

const whatsappMessage = encodeURIComponent(
  "Hello Hafiz Lifelong Interior, I would like to discuss a project."
);

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === filter
    );
  }, [filter]);

  const selectedIndex =
    selected !== null
      ? galleryItems.indexOf(filtered[selected])
      : -1;

  return (
    <>
      <Seo
        title="Projects & Gallery | Hafiz Lifelong Interior"
        description="Explore school furniture, artificial grass, box cricket, cricket nets, football turf and sports facility imagery from Hafiz Lifelong Interior."
        path="/gallery"
      />

      {/* =====================================================
          PAGE INTRO
      ====================================================== */}
      <section className="relative overflow-hidden bg-paper pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-lime/10 blur-3xl" />

        <div className="container-shell relative">
          <Reveal>
            <div className="eyebrow">
              <span className="h-px w-7 bg-lime" />
              Projects & gallery
            </div>

            <h1
              className="
                max-w-5xl
                font-display
                text-5xl
                font-extrabold
                leading-[0.95]
                tracking-[-0.04em]
                text-navy

                sm:text-6xl
                lg:text-8xl
              "
            >
              A closer look at{" "}
              <span className="text-lime">
                our work.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-slate-600

                sm:text-lg
                sm:leading-8
              "
            >
              Explore selected furniture, turf and sports
              infrastructure visuals from the supplied business
              material.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FILTER + GALLERY
      ====================================================== */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="container-shell">

          {/* FILTERS */}
          <div
            className="
              no-scrollbar
              mb-8
              flex
              gap-2
              overflow-x-auto
              pb-2

              sm:mb-10
            "
          >
            {filters.map((item) => {
              const active = filter === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setFilter(item);
                    setSelected(null);
                  }}
                  className={`
                    min-h-10
                    shrink-0
                    whitespace-nowrap
                    rounded-full
                    px-4
                    py-2.5
                    text-xs
                    font-extrabold
                    transition-all

                    ${
                      active
                        ? "bg-navy text-white shadow-soft"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-lime hover:text-navy"
                    }
                  `}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* RESULT COUNT */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-navy">
              <ImageIcon size={17} className="text-lime" />
              {filtered.length}{" "}
              {filtered.length === 1 ? "visual" : "visuals"}
            </div>

            <div className="hidden text-xs font-semibold text-slate-400 sm:block">
              Click any image to view full size
            </div>
          </div>

          {/* =================================================
              MASONRY GALLERY
          ================================================== */}
          <div
            className="
              columns-1
              gap-4

              sm:columns-2
              lg:columns-3
              xl:columns-4
            "
          >
            {filtered.map((item, index) => (
              <Reveal
                key={`${item.title}-${item.category}`}
                delay={(index % 4) * 0.035}
                className="mb-4 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setSelected(index)}
                  className="
                    group
                    relative
                    block
                    w-full
                    overflow-hidden
                    rounded-[1.35rem]
                    bg-slate-100
                    text-left
                    outline-none
                    focus-visible:ring-2
                    focus-visible:ring-lime
                    focus-visible:ring-offset-2
                  "
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="
                      block
                      h-auto
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-[1.035]
                    "
                  />

                  {/* Hover overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-navy/90
                      via-navy/10
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Image info */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      translate-y-3
                      p-5
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-lime">
                      {item.category}
                    </div>

                    <div className="mt-1 text-base font-extrabold text-white">
                      {item.title}
                    </div>

                    <div className="mt-2 text-xs leading-5 text-white/65">
                      View full image
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* EMPTY STATE */}
          {filtered.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-paper px-6 py-16 text-center">
              <h3 className="font-display text-2xl font-extrabold text-navy">
                No visuals in this category yet.
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                More project imagery can be added here as genuine
                project photography becomes available.
              </p>

              <button
                type="button"
                onClick={() => setFilter("All")}
                className="btn-primary mt-6"
              >
                View all visuals
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          PROJECT / SERVICE CTA
      ====================================================== */}
      <section className="bg-navy py-16 text-white sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <Reveal>
              <div className="eyebrow">
                Start your project
              </div>

              <h2
                className="
                  max-w-4xl
                  font-display
                  text-4xl
                  font-extrabold
                  tracking-tight

                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Have a requirement in mind?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                Tell us about your furniture, interior or sports
                infrastructure requirement and start a direct
                conversation with the team.
              </p>
            </Reveal>

            <Reveal
              delay={0.08}
              className="flex flex-col gap-3 sm:flex-row lg:flex-col"
            >
              <Link
                to="/get-quote"
                className="btn-primary whitespace-nowrap"
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
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  border border-white/15
                  bg-white/5
                  px-6
                  py-3.5
                  text-sm
                  font-extrabold
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}
      {selected !== null && selectedIndex >= 0 && (
        <Lightbox
          items={galleryItems}
          index={selectedIndex}
          onClose={() => setSelected(null)}
          onChange={(index) => {
            const item = galleryItems[index];

            if (!item) {
              setSelected(null);
              return;
            }

            const filteredIndex = filtered.indexOf(item);

            if (filteredIndex >= 0) {
              setSelected(filteredIndex);
            } else {
              setSelected(null);
            }
          }}
        />
      )}
    </>
  );
}