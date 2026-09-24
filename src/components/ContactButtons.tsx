import {
  ArrowUpRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import { BUSINESS } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";

const PHONE_1 = BUSINESS.phone;
const PHONE_2 = BUSINESS.alternatePhone;

function phoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

interface ButtonProps {
  label?: string;
  className?: string;
}

interface WhatsAppButtonProps extends ButtonProps {
  message?: string;
}


// ============================================================
// CALL BUTTON
// ============================================================

export function CallButton({
  label = "Call Now",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={phoneHref(PHONE_1)}
      aria-label={`${label} - ${PHONE_1}`}
      className={className}
    >
      <Phone size={17} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}


// ============================================================
// WHATSAPP BUTTON
// ============================================================

export function WhatsAppButton({
  label = "WhatsApp Us",
  message,
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} on WhatsApp`}
      className={className}
    >
      <MessageCircle size={17} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}


// ============================================================
// QUOTE BUTTON
// ============================================================

export function QuoteButton({
  label = "Get a Quote",
  className = "",
}: ButtonProps) {
  return (
    <Link
      to="/get-quote"
      aria-label={label}
      className={className}
    >
      <ArrowUpRight size={17} aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}


// ============================================================
// SECONDARY CALL BUTTON
// ============================================================

export function AlternateCallButton({
  label = "Call",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={phoneHref(PHONE_2)}
      aria-label={`${label} - ${PHONE_2}`}
      className={className}
    >
      <Phone size={17} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}