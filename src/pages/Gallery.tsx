import { useMemo, useState } from 'react'
import { Play, X } from 'lucide-react'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import VideoCard from '../components/VideoCard'
import { galleryItems, videos } from '../data/site'

const filters = ['All','School Furniture','Box Cricket','Football Turf','Artificial Grass','Sports Nets','Completed Projects']

export default function Gallery() {
  const [filter,setFilter]=useState('All')
  const [selected,setSelected]=useState<number|null>(null)
  const filtered=useMemo(()=>filter==='All'?galleryItems:galleryItems.filter(x=>x.category===filter),[filter])
  return <>
    <Seo title="Project Gallery | Hafiz Lifelong Interior" description="Browse supplied real project and product imagery for school furniture, artificial grass, box cricket, football turf and sports nets." path="/gallery"/>
    <section className="bg-paper pb-14 pt-36 sm:pb-18 sm:pt-40"><div className="container-shell"><div className="eyebrow">Real media</div><h1 className="max-w-4xl font-display text-5xl font-extrabold tracking-tight text-navy sm:text-6xl lg:text-7xl">A visual record of furniture and sports work.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">The gallery uses the supplied business images rather than replacing them with generic stock photography.</p></div></section>
    <section className="bg-white py-10 sm:py-16"><div className="container-shell"><div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-2">{filters.map(x=><button key={x} onClick={()=>setFilter(x)} className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-extrabold transition ${filter===x?'bg-navy text-white':'border border-slate-200 bg-white text-slate-600 hover:border-lime hover:text-navy'}`}>{x}</button>)}</div><div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filtered.map((item,i)=><Reveal key={`${item.title}-${i}`} delay={(i%4)*.03}><button onClick={()=>setSelected(galleryItems.indexOf(item))} className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 text-left"><img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"/><div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><div className="text-[10px] font-extrabold uppercase tracking-wider text-lime">{item.category}</div><div className="mt-1 text-sm font-bold text-white">{item.title}</div></div></button></Reveal>)}</div></div></section>
    <section className="bg-navy py-16 text-white sm:py-20"><div className="container-shell"><SectionHeading eyebrow="Video showcase" title={<>Our work <span className="text-lime">in action.</span></>} copy="Three selected clips are used across the site: a landscape turf installation for the hero, a box-cricket installation clip and a night-play showcase."/><div className="grid gap-5 lg:grid-cols-2"><Reveal className="aspect-video"><VideoCard src={videos.project.src} poster={videos.project.poster} title={videos.project.title} className="h-full"/></Reveal><Reveal delay={.08} className="aspect-video"><VideoCard src={videos.showcase.src} poster={videos.showcase.poster} title={videos.showcase.title} className="h-full"/></Reveal></div><div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/65"><Play size={17} className="mt-0.5 shrink-0 text-lime"/> The other supplied videos are vertical promotional reels; they were reviewed but are not used as core hero/work media because their composition is better suited to social formats.</div></div></section>
    {selected !== null && <Lightbox items={galleryItems} index={selected} onClose={()=>setSelected(null)} onChange={setSelected}/>}
  </>
}
