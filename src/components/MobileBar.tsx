import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BUSINESS } from '../data/site'
import { whatsappUrl } from '../lib/whatsapp'

export default function MobileBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 flex rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-strong backdrop-blur-xl sm:hidden">
      <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="flex flex-1 flex-col items-center justify-center rounded-xl py-2 text-[10px] font-extrabold text-navy">
        <Phone size={17} className="mb-0.5" /> CALL
      </a>
      <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex flex-1 flex-col items-center justify-center rounded-xl py-2 text-[10px] font-extrabold text-navy">
        <MessageCircle size={17} className="mb-0.5" /> WHATSAPP
      </a>
      <Link to="/get-quote" className="flex flex-1 flex-col items-center justify-center rounded-xl bg-lime py-2 text-[10px] font-extrabold text-navy">
        <ArrowUpRight size={17} className="mb-0.5" /> GET QUOTE
      </Link>
    </div>
  )
}
