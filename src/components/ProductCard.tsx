import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { Product } from "../data/site";
import {
  productWhatsappMessage,
  whatsappUrl,
} from "../lib/whatsapp";

import Reveal from "./Reveal";

interface ProductCardProps {
  product: Product;
  index?: number;
}

function productPath(product: Product) {
  const basePath =
    product.category === "School Furniture"
      ? "/school-furniture"
      : "/sports-solutions";

  return `${basePath}/${product.slug}`;
}

export default function ProductCard({
  product,
  index = 0,
}: ProductCardProps) {
  const detailsUrl = productPath(product);

  return (
    <Reveal
      delay={Math.min(index * 0.04, 0.2)}
      className="h-full"
    >
      <article
        className="
          group flex h-full min-w-0 flex-col
          overflow-hidden
          rounded-3xl
          border border-slate-200
          bg-white
          shadow-soft
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-strong
        "
      >
        {/* ==================================================
            IMAGE
        ================================================== */}

        <Link
          to={detailsUrl}
          aria-label={`View ${product.name}`}
          className="
            relative block
            aspect-[4/3]
            overflow-hidden
            bg-slate-100
          "
        >
          <img
            src={product.image}
            alt={product.name}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            className="
              h-full w-full
              object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />

          {/* IMAGE OVERLAY */}

          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-gradient-to-t
              from-navy/25
              via-transparent
              to-transparent
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
            "
          />

          {/* CATEGORY */}

          <span
            className="
              absolute left-4 top-4
              max-w-[calc(100%-2rem)]
              truncate
              rounded-full
              bg-navy/90
              px-3 py-1.5
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.12em]
              text-lime
              shadow-sm
              backdrop-blur
            "
          >
            {product.category}
          </span>
        </Link>

        {/* ==================================================
            CONTENT
        ================================================== */}

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3
            className="
              font-display
              text-xl
              font-extrabold
              leading-tight
              text-navy
            "
          >
            {product.name}
          </h3>

          <p
            className="
              mt-2
              flex-1
              text-sm
              leading-6
              text-slate-600
            "
          >
            {product.description}
          </p>

          {/* ==================================================
              ACTIONS
          ================================================== */}

          <div
            className="
              mt-5
              flex
              flex-col
              gap-2
              min-[380px]:flex-row
              min-[380px]:items-center
              min-[380px]:justify-between
            "
          >
            <Link
              to={detailsUrl}
              className="
                inline-flex
                min-h-10
                items-center
                gap-1.5
                text-sm
                font-extrabold
                text-navy
                transition-colors
                hover:text-lime
              "
            >
              <span>View Details</span>
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="
                  transition-transform
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            <a
              href={whatsappUrl(
                productWhatsappMessage(product.name)
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get a quote for ${product.name} on WhatsApp`}
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                gap-1.5
                rounded-full
                border border-slate-200
                px-3.5
                py-2
                text-xs
                font-extrabold
                text-navy
                transition-all
                hover:border-lime
                hover:bg-lime/5
              "
            >
              <MessageCircle
                size={14}
                aria-hidden="true"
              />

              <span>Quote</span>
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}