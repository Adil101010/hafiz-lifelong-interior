import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import Logo from "./Logo";
import { whatsappUrl } from "../lib/whatsapp";

const PHONE_1 = "+916397163814";
const PHONE_2 = "+919759343623";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["School Furniture", "/school-furniture"],
  ["Sports Solutions", "/sports-solutions"],
  ["Projects", "/gallery"],
  ["Contact", "/contact"],
] as const;

const whatsappLink = whatsappUrl(
  "Hello Hafiz Lifelong Interior, I would like to know more about your services."
);

function navLinkClass(isActive: boolean) {
  return [
    "relative rounded-xl px-3 py-2.5",
    "text-[13px] font-bold",
    "transition-all duration-200",
    isActive
      ? "bg-white/10 !text-white"
      : "!text-white/90 hover:bg-white/10 hover:!text-white",
  ].join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // ----------------------------------------------------------
  // HEADER SCROLL STATE
  // ----------------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ----------------------------------------------------------
  // LOCK PAGE SCROLL WHEN MOBILE MENU IS OPEN
  // ----------------------------------------------------------

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ----------------------------------------------------------
  // CLOSE MENU ON ESCAPE
  // ----------------------------------------------------------

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // ----------------------------------------------------------
  // CLOSE MENU
  // ----------------------------------------------------------

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-300",
        scrolled ? "py-2" : "py-3 sm:py-4",
      ].join(" ")}
    >
      <div className="container-shell">
        <nav
          aria-label="Main navigation"
          className={[
            "flex min-h-[62px] items-center justify-between",
            "rounded-2xl border",
            "px-3 sm:px-4",
            "transition-all duration-300",
            scrolled
              ? "border-white/10 bg-navy/95 shadow-strong backdrop-blur-xl"
              : "border-white/15 bg-navy/90 backdrop-blur-lg",
          ].join(" ")}
        >
          {/* ==================================================
              LOGO
          ================================================== */}

 <Link
  to="/"
  onClick={closeMenu}
  className="flex h-11 w-[190px] shrink-0 items-center overflow-hidden"
  aria-label="Hafiz Lifelong Interior home"
>
  <Logo compact />
</Link>
          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

         <div className="hidden items-center gap-1 lg:flex">
            {links.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  navLinkClass(isActive)
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* ==================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-2 lg:flex">
            {/* CALL */}

            <a
              href={`tel:${PHONE_1}`}
              aria-label={`Call Hafiz Lifelong Interior at ${PHONE_1}`}
             className="
  inline-flex items-center gap-2
  rounded-xl
  border border-white/10
  px-3 py-2.5
  text-sm font-bold !text-white
  transition
  hover:border-white/20
  hover:bg-white/10
"
            >
              <Phone size={16} />
              <span>Call</span>
            </a>

            {/* WHATSAPP */}

            <a
  href={whatsappUrl()}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contact us on WhatsApp"
  className="
    inline-flex items-center justify-center gap-2
    rounded-xl
    border border-[#25D366]/40
    bg-[#25D366]/10
    px-3 py-2.5
    text-sm font-bold
    !text-white
    transition
    hover:border-[#25D366]
    hover:bg-[#25D366]
    hover:!text-white
  "
>
  <MessageCircle
    size={17}
    className="shrink-0 !text-[#25D366]"
    aria-hidden="true"
  />
  <span className="!text-white">WhatsApp</span>
</a>

            {/* QUOTE */}

            <Link
              to="/get-quote"
              className="btn-primary !px-4 !py-2.5"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className="
              inline-flex
              min-h-11 min-w-11
              items-center justify-center
              rounded-xl
              text-white
              transition
              hover:bg-white/10
              lg:hidden
            "
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* ==================================================
            MOBILE NAVIGATION
        ================================================== */}

        {open && (
          <div
            id="mobile-navigation"
            className="
              mt-2
              max-h-[calc(100vh-90px)]
              overflow-y-auto
              rounded-2xl
              border border-white/10
              bg-navy/98
              shadow-strong
              backdrop-blur-xl
              lg:hidden
            "
          >
            <div className="p-3">
              {/* LINKS */}

              <div className="space-y-1">
                {links.map(([label, to]) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={closeMenu}
                    className={({ isActive }) => `
                      flex min-h-11
                      items-center
                      rounded-xl
                      px-4 py-3
                      text-sm font-bold
                      transition
                      ${
                        isActive
                          ? "bg-white/10 text-lime"
                          : "text-white/85 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>

              {/* MOBILE CONTACT ACTIONS */}

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                <a
                  href={`tel:${PHONE_1}`}
                  onClick={closeMenu}
                  className="
                    flex min-h-11
                    items-center justify-center gap-2
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    text-sm font-bold text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  <Phone size={16} />
                  Call
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="
                    flex min-h-11
                    items-center justify-center gap-2
                    rounded-xl
                    bg-lime
                    text-sm font-extrabold text-navy
                    transition
                    hover:brightness-105
                  "
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>

              {/* GET QUOTE */}

              <Link
                to="/get-quote"
                onClick={closeMenu}
                className="btn-primary mt-2 w-full"
              >
                Get a Free Quote
                <ArrowUpRight size={17} />
              </Link>

              {/* BOTH CONTACT NUMBERS */}

              <div className="mt-4 rounded-xl bg-white/5 p-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                  Contact Numbers
                </p>

                <div className="mt-2 space-y-1.5">
                  <a
                    href={`tel:${PHONE_1}`}
                    className="
                      block
                      text-sm font-semibold
                      text-white/75
                      transition
                      hover:text-white
                    "
                  >
                    +91 6397163814
                  </a>

                  <a
                    href={`tel:${PHONE_2}`}
                    className="
                      block
                      text-sm font-semibold
                      text-white/75
                      transition
                      hover:text-white
                    "
                  >
                    +91 9759343623
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}