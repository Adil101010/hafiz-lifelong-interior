import { useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

export type LightboxItem = {
  image: string;
  title: string;
  category: string;
};

interface LightboxProps {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function Lightbox({
  items,
  index,
  onClose,
  onChange,
}: LightboxProps) {
  const hasItems = items.length > 0;
  const safeIndex = hasItems
    ? Math.min(Math.max(index, 0), items.length - 1)
    : 0;

  const item = items[safeIndex];

  useEffect(() => {
    if (!hasItems) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        onChange(
          (safeIndex - 1 + items.length) % items.length
        );
        return;
      }

      if (event.key === "ArrowRight") {
        onChange((safeIndex + 1) % items.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [hasItems, items.length, onChange, onClose, safeIndex]);

  if (!hasItems || !item) {
    return null;
  }

  const previousIndex =
    (safeIndex - 1 + items.length) % items.length;

  const nextIndex = (safeIndex + 1) % items.length;

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-navy/95
        p-3
        backdrop-blur-md
        sm:p-5
      "
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} image preview`}
      onClick={onClose}
    >
      {/* ==================================================
          CLOSE
      ================================================== */}

      <button
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
        className="
          absolute right-3 top-3 z-20
          inline-flex min-h-11 min-w-11
          items-center justify-center
          rounded-full
          bg-white/10
          text-white
          transition
          hover:bg-white/20
          focus:outline-none
          focus:ring-2
          focus:ring-lime
          sm:right-5 sm:top-5
        "
      >
        <X size={22} />
      </button>

      {/* ==================================================
          PREVIOUS
      ================================================== */}

      {items.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onChange(previousIndex);
          }}
          aria-label="Previous image"
          className="
            absolute left-2 top-1/2 z-20
            inline-flex min-h-11 min-w-11
            -translate-y-1/2
            items-center justify-center
            rounded-full
            bg-white/10
            text-white
            transition
            hover:bg-white/20
            focus:outline-none
            focus:ring-2
            focus:ring-lime
            sm:left-5
          "
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div
        className="
          flex
          max-h-[92vh]
          max-w-[calc(100vw-5.5rem)]
          flex-col
          items-center
          sm:max-w-6xl
        "
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="
            max-h-[72vh]
            w-auto
            max-w-full
            rounded-2xl
            object-contain
            shadow-strong
            sm:max-h-[78vh]
          "
        />

        <div className="mt-4 max-w-xl text-center">
          <div
            className="
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.16em]
              text-lime
              sm:text-xs
            "
          >
            {item.category}
          </div>

          <div className="mt-1 text-base font-bold text-white sm:text-lg">
            {item.title}
          </div>

          {items.length > 1 && (
            <div className="mt-2 text-xs font-medium text-white/45">
              {safeIndex + 1} / {items.length}
            </div>
          )}
        </div>
      </div>

      {/* ==================================================
          NEXT
      ================================================== */}

      {items.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onChange(nextIndex);
          }}
          aria-label="Next image"
          className="
            absolute right-2 top-1/2 z-20
            inline-flex min-h-11 min-w-11
            -translate-y-1/2
            items-center justify-center
            rounded-full
            bg-white/10
            text-white
            transition
            hover:bg-white/20
            focus:outline-none
            focus:ring-2
            focus:ring-lime
            sm:right-5
          "
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}