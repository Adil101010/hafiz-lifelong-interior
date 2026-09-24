import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import type { Product } from "../data/site";
import {
  productWhatsappMessage,
  whatsappUrl,
} from "../lib/whatsapp";
import Reveal from "./Reveal";

interface SportsCardProps {
  product: Product;
  index?: number;
}

export default function SportsCard({
  product,
  index = 0,
}: SportsCardProps) {
  const detailsUrl = `/sports-solutions/${product.slug}`;

  return (
    <Reveal
      delay={Math.min(index * 0.04, 0.2)}
      className="h-full"
    >
      <article className="group relative flex h-full min-h-[320px] min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-navy shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong">

        {/* IMAGE */}
        <Link
          to={detailsUrl}
          aria-label={`View ${product.name}`}
          className="absolute inset-0 block"
        >
          <img
            src={product.image}
            alt={product.name}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/5"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </Link>

        {/* CONTENT */}
        <div className="relative z-10 mt-auto min-w-0 p-5 sm:p-6">

          {/* CATEGORY */}
          <div className="mb-2 inline-flex max-w-full rounded-full bg-navy/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] !text-lime backdrop-blur-sm">
            <span className="truncate">
              {product.category}
            </span>
          </div>

          {/* TITLE */}
          <h3 className="font-display text-2xl font-extrabold leading-tight !text-white sm:text-[1.65rem]">
            {product.name}
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-2 max-w-lg text-sm leading-6 !text-white/75">
            {product.description}
          </p>

          {/* ACTIONS */}
          <div className="mt-5 flex flex-col gap-2 min-[390px]:flex-row min-[390px]:items-center">

            {/* VIEW SOLUTION */}
            <Link
              to={detailsUrl}
              className="
                inline-flex min-h-10
                items-center justify-center gap-2
                rounded-full
                bg-white
                px-4 py-2
                text-xs font-extrabold
                !text-navy
                transition
                hover:bg-lime
                hover:!text-navy
              "
            >
              <span>View Solution</span>
              <ArrowRight
                size={15}
                className="shrink-0 !text-navy"
                aria-hidden="true"
              />
            </Link>

            {/* WHATSAPP QUOTE */}
            <a
              href={whatsappUrl(
                productWhatsappMessage(product.name)
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get a quote for ${product.name} on WhatsApp`}
              className="
                inline-flex min-h-10
                items-center justify-center gap-2
                rounded-full
                border border-white/25
                bg-navy/60
                px-4 py-2
                text-xs font-extrabold
                !text-white
                backdrop-blur-sm
                transition
                hover:border-lime
                hover:bg-lime
                hover:!text-navy
              "
            >
              <MessageCircle
                size={15}
                className="shrink-0 !text-white"
                aria-hidden="true"
              />
              <span>Get Quote</span>
            </a>

          </div>
        </div>
      </article>
    </Reveal>
  );
}