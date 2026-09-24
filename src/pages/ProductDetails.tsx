import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";

import {
  BUSINESS,
  products,
  type Product,
} from "../data/site";

import {
  productWhatsappMessage,
  whatsappUrl,
} from "../lib/whatsapp";

export default function ProductDetails({
  category,
}: {
  category: Product["category"];
}) {
  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug && item.category === category
  );

  if (!product) {
    return <NotFoundProduct />;
  }

  const related = products
    .filter(
      (item) => item.category === category && item.slug !== slug
    )
    .slice(0, 3);

  const base =
    category === "School Furniture"
      ? "/school-furniture"
      : "/sports-solutions";

  const quoteUrl = `/get-quote?requirement=${encodeURIComponent(
    product.name
  )}`;

  return (
    <>
      <Seo
        title={`${product.name} | ${BUSINESS.name}`}
        description={`${product.name} from Hafiz Lifelong Interior. Request a quotation for your ${category.toLowerCase()} requirement.`}
        path={`${base}/${product.slug}`}
      />

      {/* BREADCRUMB */}
      <section className="bg-paper pt-28 sm:pt-32">
        <div className="container-shell">
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500">
            <Link
              to={base}
              className="transition hover:text-navy"
            >
              {category}
            </Link>

            <span>/</span>

            <span className="text-navy">
              {product.name}
            </span>
          </div>
        </div>
      </section>

      {/* PRODUCT HERO */}
      <section className="bg-paper pb-16 pt-7 sm:pb-20 sm:pt-8 lg:pb-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1.12fr_.88fr] lg:items-start lg:gap-10">
            {/* IMAGE */}
            <Reveal>
              <div className="group relative overflow-hidden rounded-[2rem] bg-white shadow-soft">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute left-5 top-5 rounded-full bg-navy px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-lg">
                  {category}
                </div>
              </div>
            </Reveal>

            {/* CONTENT */}
            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:p-9">
                <div className="eyebrow">
                  {category}
                </div>

                <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl">
                  {product.name}
                </h1>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  {product.details}
                </p>

                {/* FEATURES */}
                {product.features.length > 0 && (
                  <div className="mt-8 border-t border-slate-100 pt-7">
                    <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-navy">
                      Key Features
                    </h2>

                    <div className="mt-4 space-y-3">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                            <Check size={13} strokeWidth={3} />
                          </span>

                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* APPLICATIONS */}
                {product.applications.length > 0 && (
                  <div className="mt-8 border-t border-slate-100 pt-7">
                    <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-navy">
                      Suitable For
                    </h2>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.applications.map((application) => (
                        <span
                          key={application}
                          className="rounded-full bg-paper px-3.5 py-2 text-xs font-bold text-navy"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-8 border-t border-slate-100 pt-7">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <Link
                      to={quoteUrl}
                      className="btn-primary"
                    >
                      Get Quote
                      <ArrowRight size={16} />
                    </Link>

                    <a
                      href={whatsappUrl(
                        productWhatsappMessage(product.name)
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#20bd5a]"
                    >
                      <MessageCircle size={17} />
                      WhatsApp
                    </a>

                    <a
                      href={`tel:${BUSINESS.phone.replace(
                        /\s/g,
                        ""
                      )}`}
                      className="btn-ghost"
                    >
                      <Phone size={16} />
                      Call
                    </a>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-slate-500">
                    Share your quantity, location and project
                    requirement to discuss the right configuration.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REQUIREMENT CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-navy">
              <div className="grid lg:grid-cols-[1fr_.7fr]">
                <div className="p-7 sm:p-10 lg:p-14">
                  <div className="eyebrow">
                    Planning a project?
                  </div>

                  <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                    Tell us how many you need and where it is
                    required.
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                    A clear requirement helps start a more useful
                    project conversation. Share the product,
                    approximate quantity and location.
                  </p>

                  <Link
                    to={quoteUrl}
                    className="btn-primary mt-7"
                  >
                    Request a Quote
                    <ArrowRight size={17} />
                  </Link>
                </div>

                <div className="relative min-h-[280px]">
                  <img
                    src={product.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/30 to-transparent" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-paper py-16 sm:py-20 lg:py-24">
          <div className="container-shell">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="eyebrow">
                    Related solutions
                  </div>

                  <h2 className="section-title mt-3">
                    Explore more from this range.
                  </h2>
                </div>

                <Link
                  to={base}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-navy transition hover:text-lime"
                >
                  View all
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {related.map((item, index) => (
                <Reveal
                  key={item.slug}
                  delay={index * 0.05}
                >
                  <ProductCard product={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BACK */}
      <section className="bg-white py-10">
        <div className="container-shell">
          <Link
            to={base}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-navy transition hover:text-lime"
          >
            <ArrowLeft size={16} />
            Back to {category}
          </Link>
        </div>
      </section>
    </>
  );
}

function NotFoundProduct() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-paper px-5 py-32">
      <div className="text-center">
        <div className="eyebrow">
          Product
        </div>

        <h1 className="mt-4 font-display text-4xl font-extrabold text-navy sm:text-5xl">
          Solution not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-600">
          The product you are looking for could not be found.
        </p>

        <Link
          to="/"
          className="btn-primary mt-7"
        >
          Back to Home
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}