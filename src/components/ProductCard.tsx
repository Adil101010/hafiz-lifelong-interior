import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/site'
import { productWhatsappMessage, whatsappUrl } from '../lib/whatsapp'
import Reveal from './Reveal'

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Reveal delay={index * 0.04} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-strong">
        <Link to={`${product.category === 'School Furniture' ? '/school-furniture' : '/sports-solutions'}/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
          <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-lime backdrop-blur">{product.category}</span>
        </Link>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-xl font-extrabold text-navy">{product.name}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{product.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link to={`${product.category === 'School Furniture' ? '/school-furniture' : '/sports-solutions'}/${product.slug}`} className="inline-flex items-center gap-1.5 text-sm font-extrabold text-navy hover:text-lime">View Details <ArrowRight size={15} /></Link>
            <a href={whatsappUrl(productWhatsappMessage(product.name))} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-2 text-xs font-extrabold text-navy hover:border-lime"><MessageCircle size={14} /> Quote</a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
