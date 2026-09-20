import { ArrowUpRight, Phone, MessageCircle } from 'lucide-react'
import { BUSINESS } from '../data/site'
import { whatsappUrl } from '../lib/whatsapp'

export function CallButton({ label = 'Call Now', className = '' }: { label?: string; className?: string }) {
  return <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className={className}><Phone size={17} />{label}</a>
}

export function WhatsAppButton({ label = 'WhatsApp Us', message, className = '' }: { label?: string; message?: string; className?: string }) {
  return <a href={whatsappUrl(message)} target="_blank" rel="noreferrer" className={className}><MessageCircle size={17} />{label}</a>
}

export function QuoteButton({ label = 'Get a Quote', className = '' }: { label?: string; className?: string }) {
  return <a href="/get-quote" className={className}><ArrowUpRight size={17} />{label}</a>
}
