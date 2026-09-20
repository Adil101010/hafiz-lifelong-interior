import { useEffect, useState } from 'react'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { BUSINESS } from '../data/site'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['School Furniture', '/school-furniture'],
  ['Sports Solutions', '/sports-solutions'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className={`container-shell`}>
        <nav className={`flex items-center justify-between rounded-2xl border px-3 sm:px-4 ${scrolled ? 'border-white/10 bg-navy/95 shadow-strong backdrop-blur-xl' : 'border-white/15 bg-navy/88 backdrop-blur-md'}`}>
          <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
            <Logo compact />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map(([label, to]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `rounded-xl px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-white/10 text-lime' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}>
                {label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:text-white"><Phone size={16} /> <span>{BUSINESS.phone}</span></a>
            <Link to="/get-quote" className="btn-primary !px-4 !py-2.5">Get a Quote <ArrowUpRight size={16} /></Link>
          </div>

          <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(v => !v)} className="rounded-xl p-2.5 text-white hover:bg-white/10 lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-navy/98 p-3 shadow-strong backdrop-blur-xl lg:hidden">
            {links.map(([label, to]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 hover:text-lime">
                {label}
              </NavLink>
            ))}
            <Link to="/get-quote" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">Get a Quote <ArrowUpRight size={16} /></Link>
          </div>
        )}
      </div>
    </header>
  )
}
