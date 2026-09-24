import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  action?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-9 flex flex-col gap-5 sm:mb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0">
        <div className="eyebrow">
          <span
            aria-hidden="true"
            className="h-px w-7 shrink-0 bg-lime"
          />
          <span>{eyebrow}</span>
        </div>

        <h2 className="section-title max-w-4xl">
          {title}
        </h2>

        {copy && (
          <p className="section-copy max-w-2xl">
            {copy}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0 lg:pb-1">
          {action}
        </div>
      )}
    </div>
  );
}