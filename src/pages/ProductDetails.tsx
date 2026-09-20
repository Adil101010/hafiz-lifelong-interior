import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { BUSINESS, products, type Product } from '../data/site'
import { productWhatsappMessage, whatsappUrl } from '../lib/whatsapp'

export default function ProductDetails({ category }: { category: Product['category'] }) {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug && p.category === category)
  if (!product) return <NotFoundProduct />
  const related = products.filter(p => p.category === category && p.slug !== slug).slice(0,3)
  const base = category === 'School Furniture' ? '/school-furniture' : '/sports-solutions'

  return <>
    <Seo title={`${product.name} | ${BUSINESS.name}`} description={`${product.name} from Hafiz Lifelong Interior. Request a quotation for your ${category.toLowerCase()} requirement.`} path={`${base}/${product.slug}`} />
    <section className="bg-paper pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="container-shell">
        <div className="mb-7 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500"><Link to={base} className="hover:text-navy">{category}</Link><span>/</span><span className="text-navy">{product.name}</span></div>
        <div className="grid gap-9 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <Reveal><div className="overflow-hidden rounded-[2rem] bg-white shadow-soft"><img src={product.image} alt={product.name} className="aspect-[4/3] h-full w-full object-cover"/></div></Reveal>
          <Reveal delay={.1}><div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft sm:p-9"><div className="eyebrow">{category}</div><h1 className="font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">{product.name}</h1><p className="mt-5 text-base leading-7 text-slate-600">{product.details}</p><div className="mt-7"><h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-navy">Features</h2><div className="mt-4 space-y-3">{product.features.map(x=><div key={x} className="flex gap-3 text-sm font-semibold text-slate-700"><Check size={18} className="shrink-0 text-lime"/>{x}</div>)}</div></div><div className="mt-7"><h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-navy">Applications</h2><div className="mt-3 flex flex-wrap gap-2">{product.applications.map(x=><span key={x} className="rounded-full bg-paper px-3 py-2 text-xs font-bold text-navy">{x}</span>)}</div></div><div className="mt-8 grid gap-3 sm:grid-cols-3"><Link to={`/get-quote?requirement=${encodeURIComponent(product.name)}`} className="btn-primary">Get Quote <ArrowRight size={16}/></Link><a href={whatsappUrl(productWhatsappMessage(product.name))} target="_blank" rel="noreferrer" className="btn-ghost"><MessageCircle size={16}/> WhatsApp</a><a href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`} className="btn-ghost"><Phone size={16}/> Call</a></div></div></Reveal>
        </div>
      </div>
    </section>
    {related.length > 0 && <section className="bg-white py-16 sm:py-20"><div className="container-shell"><div className="eyebrow">Related solutions</div><h2 className="section-title">Explore more from this range.</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{related.map(p=><ProductCard key={p.slug} product={p}/>)}</div></div></section>}
  </>
}
function NotFoundProduct(){return <section className="min-h-[70vh] bg-paper pt-40 text-center"><h1 className="font-display text-4xl font-extrabold text-navy">Solution not found</h1><Link to="/" className="btn-primary mt-7">Back to home</Link></section>}
