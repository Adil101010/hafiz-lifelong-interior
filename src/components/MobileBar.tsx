import {
  ArrowUpRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import { BUSINESS } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";

function phoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export default function MobileBar() {
  return (
    <div
      className="fixed inset-x-3 bottom-3 z-50 sm:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 gap-1.5 rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-strong backdrop-blur-xl">
        {/* CALL */}
        <a
          href={phoneHref(BUSINESS.phone)}
          aria-label={`Call ${BUSINESS.name}`}
          className="flex min-h-12 flex-col items-center justify-center rounded-xl text-[10px] font-extrabold tracking-wide text-navy transition active:scale-[0.98] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-lime"
        >
          <Phone
            size={17}
            className="mb-0.5"
            aria-hidden="true"
          />
          CALL
        </a>

        {/* WHATSAPP */}
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${BUSINESS.name} on WhatsApp`}
          className="flex min-h-12 flex-col items-center justify-center rounded-xl text-[10px] font-extrabold tracking-wide text-navy transition active:scale-[0.98] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-lime"
        >
          <MessageCircle
            size={17}
            className="mb-0.5"
            aria-hidden="true"
          />
          WHATSAPP
        </a>

        {/* GET QUOTE */}
        <Link
          to="/get-quote"
          aria-label="Get a quote"
          className="flex min-h-12 flex-col items-center justify-center rounded-xl bg-lime text-[10px] font-extrabold tracking-wide text-navy transition active:scale-[0.98] hover:bg-lime/90 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2"
        >
          <ArrowUpRight
            size={17}
            className="mb-0.5"
            aria-hidden="true"
          />
          GET QUOTE
        </Link>
      </div>
    </div>
  );
}