import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export type LightboxItem = { image: string; title: string; category: string }

export default function Lightbox({ items, index, onClose, onChange }: { items: LightboxItem[]; index: number; onClose: () => void; onChange: (i: number) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length)
      if (e.key === 'ArrowRight') onChange((index + 1) % items.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [index, items.length, onChange, onClose])

  const item = items[index]
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Image preview" onClick={onClose}>
      <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><X /></button>
      <button onClick={(e) => { e.stopPropagation(); onChange((index - 1 + items.length) % items.length) }} aria-label="Previous" className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6"><ChevronLeft /></button>
      <div className="max-h-[90vh] max-w-6xl" onClick={e => e.stopPropagation()}>
        <img src={item.image} alt={item.title} className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-strong" />
        <div className="mt-4 text-center"><div className="text-xs font-extrabold uppercase tracking-[0.16em] text-lime">{item.category}</div><div className="mt-1 text-lg font-bold text-white">{item.title}</div></div>
      </div>
      <button onClick={(e) => { e.stopPropagation(); onChange((index + 1) % items.length) }} aria-label="Next" className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6"><ChevronRight /></button>
    </div>
  )
}
