import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BUSINESS } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-navy pb-24 pt-16 text-white sm:pb-10">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_.8fr_1fr_1fr]">
          <div>
            <div className="font-display text-3xl font-extrabold tracking-tight">HAFIZ</div>
            <div className="mt-0.5 text-sm font-bold tracking-[0.18em] text-lime">LIFELONG INTERIOR</div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">School furniture, artificial grass, sports nets and complete sports infrastructure solutions from Pabla, Incholi, Meerut.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-3 py-2 text-xs font-bold text-lime"><span className="h-2 w-2 rounded-full bg-lime" /> Furniture + Sports Solutions</div>
          </div>
          <FooterCol title="Quick Links" links={[['Home','/'],['About','/about'],['School Furniture','/school-furniture'],['Sports Solutions','/sports-solutions'],['Gallery','/gallery'],['Contact','/contact']]} />
          <FooterCol title="Our Solutions" links={[['School Furniture','/school-furniture'],['Artificial Grass','/sports-solutions/artificial-grass'],['Sports Nets','/sports-solutions/cricket-nets'],['Box Cricket','/sports-solutions/box-cricket'],['Football Turf','/sports-solutions/football-turf'],['Tennis Court','/sports-solutions/tennis-court-nets']]} />
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-lime">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-white/75">
              <a className="flex gap-3 hover:text-white" href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}><Phone size={17} className="mt-0.5 shrink-0 text-lime" />{BUSINESS.phone}</a>
              <div className="flex gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-lime" /><span>{BUSINESS.location}</span></div>
              {BUSINESS.email && <a className="flex gap-3 break-all hover:text-white" href={`mailto:${BUSINESS.email}`}><Mail size={17} className="mt-0.5 shrink-0 text-lime" />{BUSINESS.email}</a>}
            </div>
            <Link to="/get-quote" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-white hover:text-lime">Start an inquiry <ArrowUpRight size={16}/></Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <span>© 2026 Hafiz Lifelong Interior. All Rights Reserved.</span>
          <div className="flex gap-5"><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link><Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></div>
        </div>
      </div>
    </footer>
  )
}
function FooterCol({ title, links }: { title: string; links: string[][] }) {
  return <div><h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-lime">{title}</h3><div className="mt-5 space-y-3">{links.map(([label,to]) => <Link key={to} to={to} className="block text-sm font-semibold text-white/65 hover:text-white">{label}</Link>)}</div></div>
}
