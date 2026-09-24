import {
  ArrowLeft,
  ArrowRight,
  Home,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

import Seo from "../components/Seo";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Hafiz Lifelong Interior"
        description="The requested page could not be found."
        path="/404"
      />

      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-navy px-5 py-24 text-center text-white sm:px-6">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-lime/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        />

        <div className="container-shell relative">
          <Reveal>
            <div className="mx-auto max-w-2xl">
              {/* 404 */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-lime/20 bg-lime/10">
                <Search
                  size={30}
                  className="text-lime"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-7 text-sm font-extrabold uppercase tracking-[0.2em] text-lime">
                Error 404
              </div>

              <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1] tracking-tight sm:text-6xl lg:text-7xl">
                That page is{" "}
                <span className="text-lime">not here.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                The page you are looking for may have been moved, removed or
                the address may be incorrect.
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-col justify-center gap-3 min-[400px]:flex-row">
                <Link
                  to="/"
                  className="btn-primary w-full min-[400px]:w-auto"
                >
                  <Home size={17} aria-hidden="true" />
                  Back to Home
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 focus:ring-offset-navy min-[400px]:w-auto"
                >
                  Contact Us
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>

              {/* Quick links */}
              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/35">
                  Explore
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-bold text-white/60">
                  <Link
                    to="/school-furniture"
                    className="transition hover:text-lime"
                  >
                    School Furniture
                  </Link>

                  <Link
                    to="/sports-solutions"
                    className="transition hover:text-lime"
                  >
                    Sports Solutions
                  </Link>

                  <Link
                    to="/gallery"
                    className="transition hover:text-lime"
                  >
                    Projects
                  </Link>

                  <Link
                    to="/about"
                    className="transition hover:text-lime"
                  >
                    About
                  </Link>
                </div>
              </div>

              {/* Back */}
              <button
                type="button"
                onClick={() => window.history.back()}
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-white/40 transition hover:text-white"
              >
                <ArrowLeft size={14} aria-hidden="true" />
                Go back to previous page
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}