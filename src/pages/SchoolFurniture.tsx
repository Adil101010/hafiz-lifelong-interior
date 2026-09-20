import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { products } from '../data/site'
import schoolPoster from '../assets/images/school-furniture-reference.jpg'

export default function SchoolFurniture() {
  const items = products.filter(p => p.category === 'School Furniture')
  return <>
    <Seo title="School Furniture Manufacturer & Supplier | Hafiz Lifelong Interior" description="Explore school desks, classroom tables, school chairs, teacher tables, library furniture and office furniture from Hafiz Lifelong Interior." path="/school-furniture" />
    <PageHero title="Furniture for better learning spaces." copy="Student desks, classroom tables, school chairs and practical furniture categories for educational and office environments." image={schoolPoster} />
    <section className="bg-white py-16 sm:py-20">
      <div className="container-shell"><SectionHeading eyebrow="Furniture range" title={<>Built around <span className="text-lime">real classroom needs.</span></>} copy="The product categories below are based on the supplied business reference material. Exact configurations and requirements are confirmed during consultation." /><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{items.map((p,i)=><ProductCard key={p.slug} product={p} index={i}/>)}</div></div>
    </section>
    <section className="bg-paper py-16 sm:py-20"><div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center"><Reveal><img src={schoolPoster} alt="Hafiz school furniture reference" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"/></Reveal><Reveal delay={.1}><div className="eyebrow">For education & office</div><h2 className="section-title">One furniture conversation, multiple spaces.</h2><p className="section-copy">The supplied reference positions the business around schools, colleges, institutes, libraries, coaching centres and office furniture.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{['Schools','Colleges','Coaching Centres','Institutes','Libraries','Offices'].map(x=><div key={x} className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm font-bold text-navy"><Check size={17} className="text-lime"/>{x}</div>)}</div><Link to="/get-quote" className="btn-primary mt-7">Request a furniture quote <ArrowRight size={17}/></Link></Reveal></div></div></section>
  </>
}
function PageHero({title,copy,image}:{title:string;copy:string;image:string}) {
  return <section className="relative overflow-hidden bg-navy pb-16 pt-36 text-white sm:pb-20 sm:pt-40"><img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20"/><div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55"/><div className="container-shell relative"><div className="eyebrow">School furniture</div><h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{copy}</p></div></section>
}
