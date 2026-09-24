import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useForm } from "react-hook-form";

import { inquiryOptions } from "../data/site";
import {
  sendInquiry,
  type InquiryPayload,
} from "../services/emailService";
import { whatsappUrl } from "../lib/whatsapp";

type Props = {
  defaultRequirement?: string;
  compact?: boolean;
};

const PHONE_1 = "+916397163814";
const PHONE_2 = "+919759343623";

function phoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

function buildWhatsAppMessage(data: InquiryPayload) {
  return [
    "Hello Hafiz Lifelong Interior,",
    "",
    "I would like to discuss a requirement.",
    "",
    `Name: ${data.name || "-"}`,
    `Mobile: ${data.phone || "-"}`,
    `Email: ${data.email || "-"}`,
    `Company / School: ${data.company || "-"}`,
    `City: ${data.city || "-"}`,
    `Interested In: ${data.requirement || "-"}`,
    `Quantity: ${data.quantity || "-"}`,
    `Message: ${data.message || "-"}`,
    "",
    "Sent from Hafiz Lifelong Interior website.",
  ].join("\n");
}

export default function InquiryForm({
  defaultRequirement = "",
  compact = false,
}: Props) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<InquiryPayload>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      city: "",
      requirement: defaultRequirement,
      quantity: "",
      message: "",
    },
  });

  // ==========================================================
  // EMAIL SUBMIT
  // ==========================================================

  const submit = async (data: InquiryPayload) => {
    setStatus("sending");
    setError("");

    try {
      await sendInquiry({
        ...data,
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email?.trim(),
        company: data.company?.trim(),
        city: data.city?.trim(),
        requirement: data.requirement.trim(),
        quantity: data.quantity?.trim(),
        message: data.message?.trim(),
      });

      setStatus("success");

      reset({
        name: "",
        phone: "",
        email: "",
        company: "",
        city: "",
        requirement: defaultRequirement,
        quantity: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or contact us by phone or WhatsApp."
      );
    }
  };

  // ==========================================================
  // WHATSAPP
  // ==========================================================

  const openWhatsApp = () => {
    const data = getValues();

    const message = buildWhatsAppMessage(data);

    const url = whatsappUrl(message);

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ==========================================================
  // STYLES
  // ==========================================================

  const inputClass = (hasError = false) =>
    `
      mt-2
      w-full
      rounded-xl
      border
      ${
        hasError
          ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-100"
          : "border-slate-200 bg-slate-50 focus:border-lime focus:bg-white focus:ring-lime/10"
      }
      px-4
      py-3.5
      text-sm
      text-navy
      outline-none
      transition
      placeholder:text-slate-400
      focus:ring-4
    `;

  const labelClass =
    "text-xs font-extrabold uppercase tracking-[0.12em] text-navy";

  // ==========================================================
  // SUCCESS STATE
  // ==========================================================

  if (status === "success") {
    return (
      <div
        className={`
          flex
          min-h-[360px]
          flex-col
          items-center
          justify-center
          rounded-3xl
          bg-lime/10
          p-6
          text-center
          sm:p-8
          ${
            compact
              ? ""
              : "border border-lime/20"
          }
        `}
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-lime
            text-navy
            shadow-sm
          "
        >
          <CheckCircle2 size={32} />
        </div>

        <h3
          className="
            mt-5
            font-display
            text-2xl
            font-extrabold
            text-navy
          "
        >
          Inquiry sent successfully.
        </h3>

        <p
          className="
            mt-2
            max-w-md
            text-sm
            leading-6
            text-slate-600
          "
        >
          Thank you! Our team will contact you soon.
          You can also reach us directly on WhatsApp.
        </p>

        <div
          className="
            mt-6
            flex
            w-full
            flex-col
            gap-3
            sm:w-auto
            sm:flex-row
          "
        >
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setError("");
            }}
            className="btn-dark w-full sm:w-auto"
          >
            Send another inquiry
          </button>

          <a
            href={whatsappUrl(
              "Hello Hafiz Lifelong Interior, I have just submitted an inquiry through your website."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              min-h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#25D366]
              px-5
              py-3
              text-sm
              font-bold
              text-white
              transition
              hover:opacity-90
              sm:w-auto
            "
          >
            <MessageCircle
              size={18}
              aria-hidden="true"
            />
            WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  // ==========================================================
  // FORM
  // ==========================================================

  return (
    <form
      onSubmit={handleSubmit(submit)}
      noValidate
      className={`
        space-y-5
        ${
          compact
            ? ""
            : "rounded-3xl border border-slate-200 bg-white p-5 shadow-soft sm:p-7 lg:p-8"
        }
      `}
    >
      {/* ====================================================
          FORM FIELDS
      ===================================================== */}

      <div className="grid gap-5 sm:grid-cols-2">
        {/* --------------------------------------------------
            NAME
        --------------------------------------------------- */}

        <label className={labelClass}>
          <span>
            Full Name <span className="text-red-500">*</span>
          </span>

          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Enter your full name",
              },
            })}
            className={inputClass(Boolean(errors.name))}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />

          {errors.name && (
            <span
              className="mt-1 block text-xs font-semibold text-red-600"
              role="alert"
            >
              {errors.name.message}
            </span>
          )}
        </label>

        {/* --------------------------------------------------
            PHONE
        --------------------------------------------------- */}

        <label className={labelClass}>
          <span>
            Mobile Number <span className="text-red-500">*</span>
          </span>

          <input
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message:
                  "Enter a valid 10-digit Indian mobile number",
              },
            })}
            className={inputClass(Boolean(errors.phone))}
            placeholder="10-digit mobile number"
            inputMode="numeric"
            autoComplete="tel"
            maxLength={10}
            aria-invalid={Boolean(errors.phone)}
          />

          {errors.phone && (
            <span
              className="mt-1 block text-xs font-semibold text-red-600"
              role="alert"
            >
              {errors.phone.message}
            </span>
          )}
        </label>

        {/* --------------------------------------------------
            EMAIL
        --------------------------------------------------- */}

        <label className={labelClass}>
          <span>Email Address</span>

          <input
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            className={inputClass(Boolean(errors.email))}
            placeholder="you@example.com"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />

          {errors.email && (
            <span
              className="mt-1 block text-xs font-semibold text-red-600"
              role="alert"
            >
              {errors.email.message}
            </span>
          )}
        </label>

        {/* --------------------------------------------------
            COMPANY / SCHOOL
        --------------------------------------------------- */}

        <label className={labelClass}>
          <span>Company / School Name</span>

          <input
            {...register("company")}
            className={inputClass()}
            placeholder="School, college, office..."
            autoComplete="organization"
          />
        </label>

        {/* --------------------------------------------------
            CITY
        --------------------------------------------------- */}

        <label className={labelClass}>
          <span>City</span>

          <input
            {...register("city")}
            className={inputClass()}
            placeholder="Meerut / Delhi NCR..."
            autoComplete="address-level2"
          />
        </label>

        {/* --------------------------------------------------
            REQUIREMENT
        --------------------------------------------------- */}

        <label className={labelClass}>
          <span>
            Interested In <span className="text-red-500">*</span>
          </span>

          <select
            {...register("requirement", {
              required: "Please choose a requirement",
            })}
            className={inputClass(Boolean(errors.requirement))}
            aria-invalid={Boolean(errors.requirement)}
          >
            <option value="">
              Select a requirement
            </option>

            {inquiryOptions.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          {errors.requirement && (
            <span
              className="mt-1 block text-xs font-semibold text-red-600"
              role="alert"
            >
              {errors.requirement.message}
            </span>
          )}
        </label>

        {/* --------------------------------------------------
            QUANTITY
        --------------------------------------------------- */}

        <label className={labelClass}>
          <span>Quantity / Approx Requirement</span>

          <input
            {...register("quantity")}
            className={inputClass()}
            placeholder="e.g. 50 desks / 1 turf setup"
          />
        </label>

        {/* --------------------------------------------------
            MESSAGE
        --------------------------------------------------- */}

        <label className={`${labelClass} sm:col-span-2`}>
          <span>Message</span>

          <textarea
            {...register("message")}
            rows={5}
            className={inputClass()}
            placeholder="Tell us about your project..."
          />
        </label>
      </div>

      {/* ====================================================
          ERROR
      ===================================================== */}

      {status === "error" && (
        <div
          role="alert"
          className="
            rounded-xl
            border border-red-200
            bg-red-50
            p-3
            text-sm
            font-semibold
            leading-6
            text-red-700
          "
        >
          {error}
        </div>
      )}

      {/* ====================================================
          ACTIONS
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          gap-3
          sm:flex-row
          sm:flex-wrap
        "
      >
        {/* EMAIL */}

        <button
          type="submit"
          disabled={status === "sending"}
          className="
            btn-primary
            min-h-12
            w-full
            justify-center
            sm:w-auto
          "
        >
          {status === "sending" ? (
            <>
              <Loader2
                size={18}
                className="animate-spin"
                aria-hidden="true"
              />

              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send
                size={17}
                aria-hidden="true"
              />

              <span>Send Inquiry</span>
            </>
          )}
        </button>

        {/* WHATSAPP */}

        <button
          type="button"
          onClick={openWhatsApp}
          disabled={status === "sending"}
          className="
            inline-flex
            min-h-12
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#25D366]
            px-5
            py-3
            text-sm
            font-bold
            text-white
            transition
            hover:bg-[#20bd5a]
            disabled:cursor-not-allowed
            disabled:opacity-60
            sm:w-auto
          "
        >
          <MessageCircle
            size={18}
            aria-hidden="true"
          />

          <span>Send on WhatsApp</span>
        </button>
      </div>

      {/* ====================================================
          DIRECT CONTACT
      ===================================================== */}

      <div className="border-t border-slate-100 pt-5">
        <p
          className="
            text-xs
            font-extrabold
            uppercase
            tracking-[0.12em]
            text-slate-500
          "
        >
          Prefer to talk directly?
        </p>

        <div
          className="
            mt-3
            flex
            flex-col
            gap-2.5
            sm:flex-row
            sm:flex-wrap
            sm:items-center
            sm:gap-x-4
          "
        >
          <a
            href={phoneHref(PHONE_1)}
            className="
              inline-flex
              min-h-10
              items-center
              gap-2
              text-sm
              font-bold
              text-navy
              transition
              hover:text-lime
            "
          >
            <Phone
              size={16}
              aria-hidden="true"
            />

            <span>+91 6397163814</span>
          </a>

          <span
            aria-hidden="true"
            className="hidden text-slate-300 sm:block"
          >
            |
          </span>

          <a
            href={phoneHref(PHONE_2)}
            className="
              inline-flex
              min-h-10
              items-center
              gap-2
              text-sm
              font-bold
              text-navy
              transition
              hover:text-lime
            "
          >
            <Phone
              size={16}
              aria-hidden="true"
            />

            <span>+91 9759343623</span>
          </a>
        </div>
      </div>

      {/* ====================================================
          EMAILJS NOTE
      ===================================================== */}

      <p className="text-xs leading-5 text-slate-500">
        Your inquiry is sent through the email service configured
        by the site owner. You can also send the same requirement
        directly through WhatsApp.
      </p>
    </form>
  );
}