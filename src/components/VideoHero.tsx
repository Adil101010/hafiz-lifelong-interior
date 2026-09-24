import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/hero-poster.jpg";
import { whatsappUrl } from "../lib/whatsapp";

const PHONE_1 = "+916397163814";
const PHONE_2 = "+919759343623";

const whatsappLink = whatsappUrl(
  "Hello Hafiz Lifelong Interior, I would like to discuss my project."
);

function phoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

const trustPoints = [
  "Custom Solutions",
  "Quality Materials",
  "Professional Execution",
];

export default function VideoHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="
        relative isolate
        overflow-hidden
        bg-navy
        text-white
      "
    >
      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      <img
        src={heroImage}
        alt="Hafiz Lifelong Interior project"
        fetchPriority="high"
        decoding="async"
        className="
          absolute inset-0
          h-full w-full
          object-cover object-center
        "
      />

      {/* =====================================================
          IMAGE OVERLAY
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-r
          from-navy
          via-navy/90
          to-navy/35

          max-md:bg-gradient-to-b
          max-md:from-navy/90
          max-md:via-navy/70
          max-md:to-navy/45
        "
      />

      {/* Extra readability layer for smaller screens */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-navy/10
          sm:bg-transparent
        "
      />

      {/* =====================================================
          BOTTOM TRANSITION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0
          h-28
          bg-gradient-to-t
          from-paper
          via-paper/60
          to-transparent
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          container-shell
          relative z-10
          flex
          min-h-[700px]
          items-center
          pb-28
          pt-32

          min-[375px]:min-h-[720px]

          sm:min-h-[740px]
          sm:pb-28
          sm:pt-36

          lg:min-h-[780px]
          lg:pb-32
          lg:pt-36

          xl:min-h-[800px]
        "
      >
        <div className="w-full max-w-4xl min-w-0">
          {/* =================================================
              EYEBROW
          ================================================== */}

          <div
            className="
              mb-5
              inline-flex
              max-w-full
              items-center
              gap-2
              rounded-full
              border border-lime/25
              bg-navy/50
              px-3
              py-2
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.14em]
              text-lime
              backdrop-blur-md

              sm:mb-6
              sm:px-4
              sm:text-[10px]
              sm:tracking-[0.16em]
            "
          >
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-lime
                shadow-[0_0_0_5px_rgba(140,207,0,.12)]

                sm:h-2
                sm:w-2
              "
            />

            <span className="truncate">
              Furniture • Interior • Sports Infrastructure
            </span>
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1
            id="hero-title"
            className="
              max-w-4xl
              font-display
              text-[clamp(2.75rem,11vw,6.8rem)]
              font-extrabold
              leading-[0.91]
              tracking-[-0.045em]

              sm:text-[clamp(3.5rem,8vw,6.8rem)]
            "
          >
            We Build
            <br />
            <span className="text-lime">
              Better Spaces.
            </span>
          </h1>

          {/* =================================================
              SUPPORTING HEADLINE
          ================================================== */}

          <p
            className="
              mt-5
              max-w-2xl
              text-lg
              font-semibold
              leading-7
              text-white/90

              sm:mt-6
              sm:text-2xl
              sm:leading-8

              lg:text-3xl
              lg:leading-9
            "
          >
            Furniture, interiors and sports infrastructure
            designed around the way you use your space.
          </p>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-white/70

              sm:mt-5
              sm:text-base
              sm:leading-7

              lg:text-lg
              lg:leading-8
            "
          >
            From school furniture and custom interior solutions
            to artificial grass, cricket nets and complete sports
            infrastructure — we help turn your requirements into
            practical, quality spaces.
          </p>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <div
            className="
              mt-7
              grid
              w-full
              grid-cols-1
              gap-2.5

              min-[420px]:flex
              min-[420px]:flex-wrap

              sm:mt-8
              sm:gap-3
            "
          >
            {/* PRIMARY CTA */}

            <Link
              to="/school-furniture"
              className="
                btn-primary
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                gap-2
                px-5
                text-center

                min-[420px]:w-auto
                sm:px-6
              "
            >
              <span>Explore Our Solutions</span>

              <ArrowRight
                size={18}
                aria-hidden="true"
                className="shrink-0"
              />
            </Link>

            {/* QUOTE CTA */}

            <Link
              to="/get-quote"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border border-white/20
                bg-white/10
                px-5
                text-center
                text-sm
                font-extrabold
                text-white
                backdrop-blur-md
                transition

                hover:bg-white/15

                min-[420px]:w-auto
                sm:px-6
              "
            >
              Get Free Quote
            </Link>

            {/* WHATSAPP CTA */}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discuss your project with Hafiz Lifelong Interior on WhatsApp"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border border-lime/30
                bg-lime/10
                px-5
                text-center
                text-sm
                font-extrabold
                text-white
                backdrop-blur-md
                transition

                hover:bg-lime/20

                min-[420px]:w-auto
                sm:px-6
              "
            >
              <MessageCircle
                size={18}
                aria-hidden="true"
                className="shrink-0"
              />

              WhatsApp Us
            </a>
          </div>

          {/* =================================================
              TRUST POINTS
          ================================================== */}

          <div
            className="
              mt-7
              flex
              max-w-3xl
              flex-wrap
              gap-x-5
              gap-y-3
              text-xs
              font-semibold
              text-white/75

              sm:mt-9
              sm:gap-x-7
              sm:text-sm
            "
          >
            {trustPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2"
              >
                <Check
                  size={15}
                  aria-hidden="true"
                  className="shrink-0 text-lime"
                />

                {point}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP CONTACT CARD
      ====================================================== */}

      <div
        className="
          absolute
          bottom-8
          right-6
          z-20
          hidden
          w-[285px]
          rounded-2xl
          border border-white/15
          bg-navy/50
          p-5
          shadow-xl
          backdrop-blur-xl

          lg:block
          xl:right-8
        "
      >
        <div
          className="
            text-[10px]
            font-extrabold
            uppercase
            tracking-[0.18em]
            text-lime
          "
        >
          Let's discuss your project
        </div>

        <p
          className="
            mt-2
            text-sm
            font-semibold
            leading-5
            text-white/85
          "
        >
          Tell us what you need and we'll help you find the
          right solution.
        </p>

        <div className="mt-4 space-y-2.5">
          {/* PRIMARY PHONE */}

          <a
            href={phoneHref(PHONE_1)}
            aria-label={`Call ${PHONE_1}`}
            className="
              flex
              items-center
              gap-2
              text-sm
              font-bold
              text-white
              transition
              hover:text-lime
            "
          >
            <Phone
              size={16}
              aria-hidden="true"
              className="shrink-0"
            />

            <span>+91 6397163814</span>
          </a>

          {/* SECONDARY PHONE */}

          <a
            href={phoneHref(PHONE_2)}
            aria-label={`Call ${PHONE_2}`}
            className="
              flex
              items-center
              gap-2
              text-sm
              font-bold
              text-white
              transition
              hover:text-lime
            "
          >
            <Phone
              size={16}
              aria-hidden="true"
              className="shrink-0"
            />

            <span>+91 9759343623</span>
          </a>

          {/* WHATSAPP */}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="
              flex
              items-center
              gap-2
              pt-1
              text-sm
              font-bold
              text-lime
              transition
              hover:text-white
            "
          >
            <MessageCircle
              size={16}
              aria-hidden="true"
              className="shrink-0"
            />

            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}