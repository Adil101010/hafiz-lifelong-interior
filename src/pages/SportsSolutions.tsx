import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import SportsCard from '../components/SportsCard'
import Reveal from '../components/Reveal'
import VideoCard from '../components/VideoCard'
import { products, videos } from '../data/site'
import boxCricket from '../assets/images/box-cricket-night.jpg'

export default function SportsSolutions() {
  const items = products.filter(p => p.category === 'Sports Infrastructure')
  return <>
    <Seo title="Sports Infrastructure, Turf & Sports Nets | Hafiz Lifelong Interior" description="Explore box cricket, football turf, artificial grass, cricket nets, football nets, tennis court nets, safety nets and boundary nets." path="/sports-solutions" />
    <section className="relative overflow-hidden bg-navy pb-16 pt-36 text-white sm:pb-20 sm:pt-40"><img src={boxCricket} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30"/><div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40"/><div className="container-shell relative"><div className="eyebrow">Sports infrastructure</div><h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">Build the playing space around your requirement.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">Artificial grass, sports nets, box cricket and football-focused turf solutions represented in the supplied project references.</p></div></section>
    <section className="bg-navy py-16 text-white sm:py-20"><div className="container-shell"><SectionHeading eyebrow="Sports range" title={<>Complete sports <span className="text-lime">infrastructure solutions.</span></>} copy="Explore the categories available in the supplied business material."/><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{items.map(p=><SportsCard key={p.slug} product={p}/>)}</div></div></section>
    <section className="bg-paper py-16 sm:py-20"><div className="container-shell grid gap-6 lg:grid-cols-2"><Reveal className="aspect-video"><VideoCard src={videos.project.src} poster={videos.project.poster} title="Box cricket setup in progress" className="h-full"/></Reveal><Reveal delay={.1} className="flex flex-col justify-center rounded-3xl bg-white p-7 shadow-soft sm:p-9"><div className="eyebrow">Box cricket</div><h2 className="section-title">From turf to enclosed netting.</h2><p className="section-copy">The supplied images and videos show turf installation and enclosed sports setups with netting and lighting.</p><div className="mt-6 grid gap-3">{['Artificial grass application','Sports netting','Boundary netting','Customized setup planning'].map(x=><div key={x} className="flex items-center gap-3 text-sm font-bold text-navy"><Check size={18} className="text-lime"/>{x}</div>)}</div><Link to="/sports-solutions/box-cricket" className="btn-primary mt-7">Explore box cricket <ArrowRight size={17}/></Link></Reveal></div></div></section>
  </>
}
