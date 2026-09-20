import { ArrowRight, Check, Factory, GraduationCap, Layers3, MapPin, Ruler, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import Seo from '../components/Seo'
import VideoHero from '../components/VideoHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import SportsCard from '../components/SportsCard'
import VideoCard from '../components/VideoCard'
import { BUSINESS, capabilityItems, products, videos } from '../data/site'
import { WhatsAppButton } from '../components/ContactButtons'

export default function Home() {
  const furniture = products.filter(p => p.category === 'School Furniture').slice(0, 6)
  const sports = products.filter(p => p.category === 'Sports Infrastructure').slice(0, 8)

  return (
    <>
      <Seo title="School Furniture & Sports Infrastructure Solutions | Hafiz Lifelong Interior" description="Hafiz Lifelong Interior provides school furniture, artificial grass, sports nets, box cricket and sports infrastructure solutions for schools, colleges, institutes and sports facilities." />
      <VideoHero />

      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="What we do" title={<>One partner for <span className="text-lime">better spaces</span> and better play.</>} copy="A practical business offering across educational furniture and sports infrastructure, with project conversations centered around your space and requirement." />
          <div className="grid gap-5 lg:grid-cols-3">
            <CategoryCard icon={<GraduationCap />} title="School Furniture" copy="Smart, durable and student-friendly furniture for modern educational spaces." image={products[0].image} href="/school-furniture" />
            <CategoryCard icon={<Layers3 />} title="Sports Infrastructure" copy="Turf, net and sports facility solutions for professional and recreational use." image={products.find(p => p.slug === 'box-cricket')!.image} href="/sports-solutions" />
            <CategoryCard icon={<Ruler />} title="Customized Solutions" copy="Solutions discussed around your space, requirement and project needs." image={products.find(p => p.slug === 'artificial-grass')!.image} href="/get-quote" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="School furniture" title={<>Furniture built for <span className="text-lime">better learning.</span></>} copy="Durable, comfortable and practical furniture solutions for schools, colleges, institutes, libraries and offices." action={<Link to="/school-furniture" className="btn-ghost">View all furniture <ArrowRight size={16}/></Link>} />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{furniture.map((p,i) => <ProductCard key={p.slug} product={p} index={i} />)}</div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="Sports solutions" title={<>Complete sports infrastructure <span className="text-lime">solutions.</span></>} copy="From sports nets to artificial grass and complete box cricket setups, explore the categories represented in the supplied project references." action={<Link to="/sports-solutions" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-extrabold text-white hover:bg-white/10">Explore sports <ArrowRight size={16}/></Link>} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{sports.map(p => <SportsCard key={p.slug} product={p} />)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#edf6e2] py-16 sm:py-20 lg:py-24">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-lime/20 blur-3xl" />
        <div className="container-shell relative grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal>
            <div className="eyebrow text-navy"><span className="h-px w-7 bg-navy" /> Box cricket focus</div>
            <h2 className="section-title">Complete box cricket solutions.</h2>
            <p className="section-copy">Use the supplied project media to show the kind of enclosed turf environment the business references communicate.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {['Artificial grass application','Sports netting','Boundary netting','Customized setup planning'].map(item => <div key={item} className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white/70 p-4 text-sm font-bold text-navy"><Check size={18} className="shrink-0 text-lime" />{item}</div>)}
            </div>
            <Link to="/sports-solutions/box-cricket" className="btn-dark mt-7">Plan Your Box Cricket Setup <ArrowRight size={17}/></Link>
          </Reveal>
          <Reveal delay={.1} className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-strong">
            <VideoCard src={videos.project.src} poster={videos.project.poster} title={videos.project.title} className="h-full" />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="overflow-hidden rounded-[2rem] bg-slate-100">
            <img src={products.find(p => p.slug === 'artificial-grass')!.image} alt="Artificial grass sports surface" loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={.1}>
            <div className="eyebrow"><span className="h-px w-7 bg-lime" /> Artificial grass</div>
            <h2 className="section-title">Premium artificial grass solutions.</h2>
            <p className="section-copy">Artificial grass solutions represented in the supplied sports imagery, with project selection and installation discussed around the application.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {['Durable-use focus','Low-maintenance appearance','Suitable for sports applications','Customized installation discussion'].map(x => <div key={x} className="flex items-center gap-3 rounded-xl bg-paper p-3.5 text-sm font-bold text-navy"><ShieldCheck size={18} className="text-lime"/>{x}</div>)}
            </div>
            <Link to="/sports-solutions/artificial-grass" className="btn-ghost mt-7">Explore artificial grass <ArrowRight size={16}/></Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="Why Hafiz" title={<>Built around <span className="text-lime">practical service.</span></>} copy="The supplied references emphasize quality, durability, customized solutions, delivery and support rather than unsupported numerical claims." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Premium Quality', ShieldCheck, 'Quality-focused material and project presentation.'],
              ['Strong & Durable', Factory, 'Durability is part of the brand positioning in the supplied references.'],
              ['Customized Solutions', Ruler, 'Discuss the solution around the actual requirement.'],
              ['Expert Support', Users, 'Direct communication for product and project questions.'],
              ['On-Time Delivery', MapPin, 'Delivery is highlighted as a business promise in the reference.'],
              ['Customer-Focused Service', Sparkles, 'A consultation-led approach from requirement to support.'],
            ].map(([title, Icon, copy],i) => {
              const I = Icon as typeof ShieldCheck
              return <Reveal key={String(title)} delay={i*.03}><div className="card h-full p-6"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime/15 text-navy"><I size={21}/></div><h3 className="mt-5 font-display text-lg font-extrabold text-navy">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{String(copy)}</p></div></Reveal>
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Our work in action" title={<>Real project media, <span className="text-lime">not stock imagery.</span></>} copy="Selected from the supplied videos: turf installation for the hero, a box-cricket build for project work, and a night-play clip for showcase." action={<Link to="/gallery" className="btn-ghost">View gallery <ArrowRight size={16}/></Link>} />
          <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <Reveal className="aspect-video"><VideoCard src={videos.showcase.src} poster={videos.showcase.poster} title={videos.showcase.title} className="h-full" /></Reveal>
            <Reveal delay={.1} className="flex flex-col justify-between rounded-3xl bg-navy p-7 text-white sm:p-8">
              <div><div className="eyebrow">Capability snapshot</div><h3 className="font-display text-2xl font-extrabold">Furniture + sports infrastructure under one business.</h3><p className="mt-4 text-sm leading-6 text-white/65">Serving the categories named in the supplied business references.</p></div>
              <div className="mt-8 grid grid-cols-2 gap-3">{capabilityItems.map(x => <div key={x} className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-bold text-white/80">{x}</div>)}</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <Reveal><div className="eyebrow">How it works</div><h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">A clear path from requirement to delivery.</h2><p className="mt-4 max-w-xl text-base leading-7 text-white/65">A simple five-step conversation keeps the project focused.</p></Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Understand Your Requirement','Discuss & Plan','Design / Quotation','Manufacturing / Installation','Delivery & Support'].map((x,i) => <Reveal key={x} delay={i*.04}><div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"><span className="font-display text-2xl font-extrabold text-lime">{String(i+1).padStart(2,'0')}</span><span className="pt-1 text-sm font-bold">{x}</span></div></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lime py-12 sm:py-16">
        <div className="container-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div><div className="text-xs font-extrabold uppercase tracking-[0.18em] text-navy/60">Ready to discuss your requirement?</div><h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Get a practical quote for your next space.</h2></div>
          <div className="flex flex-col gap-3 sm:flex-row"><Link to="/get-quote" className="btn-dark">Get a Quote <ArrowRight size={17}/></Link><WhatsAppButton className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-extrabold text-navy" /></div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal><div className="eyebrow">Business details</div><h2 className="section-title">Direct consultation from Meerut.</h2><p className="section-copy">For school furniture or sports infrastructure requirements, connect directly by phone, WhatsApp or the inquiry form.</p><div className="mt-6 space-y-2 text-sm font-bold text-navy"><div>{BUSINESS.phone}</div><div>{BUSINESS.location}</div><div>Udyam Registration: {BUSINESS.udyam}</div></div></Reveal>
          <Reveal delay={.1}><div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8"><h3 className="font-display text-2xl font-extrabold text-navy">Tell us what you need.</h3><p className="mt-2 text-sm leading-6 text-slate-600">Use the full inquiry form and the configured EmailJS service will send the details to the business inbox.</p><Link to="/get-quote" className="btn-primary mt-6">Open inquiry form <ArrowRight size={17}/></Link></div></Reveal>
        </div>
      </section>
    </>
  )
}

function CategoryCard({ icon, title, copy, image, href }: { icon: ReactNode; title: string; copy: string; image: string; href: string }) {
  return <Reveal><Link to={href} className="group relative block min-h-[350px] overflow-hidden rounded-3xl bg-navy"><img src={image} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-105 group-hover:opacity-75"/><div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-7"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime text-navy">{icon}</div><h3 className="mt-5 font-display text-2xl font-extrabold text-white">{title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/72">{copy}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-lime">Explore <ArrowRight size={16}/></span></div></Link></Reveal>
}
