import { ReactNode } from 'react'

export default function SectionHeading({ eyebrow, title, copy, action }: { eyebrow: string; title: ReactNode; copy?: string; action?: ReactNode }) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-5 lg:mb-12 lg:flex-row lg:items-end">
      <div>
        <div className="eyebrow"><span className="h-px w-7 bg-lime" />{eyebrow}</div>
        <h2 className="section-title max-w-4xl">{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
