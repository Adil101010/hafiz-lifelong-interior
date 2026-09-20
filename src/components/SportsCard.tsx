import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Product } from '../data/site'

export default function SportsCard({ product }: { product: Product }) {
  return (
    <Link to={`/sports-solutions/${product.slug}`} className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-navy">
      <img src={product.image} alt={product.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="mb-2 text-xs font-extrabold uppercase tracking-[0.15em] text-lime">{product.category}</div>
        <h3 className="font-display text-2xl font-extrabold text-white">{product.name}</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-white/72">{product.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-white">View solution <ArrowUpRight size={16} /></span>
      </div>
    </Link>
  )
}
