import { useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo'
import InquiryForm from '../components/InquiryForm'
import Reveal from '../components/Reveal'
import { CheckCircle2, Clock3, FileText, MessageCircle } from 'lucide-react'

export default function Quote() {
  const [params] = useSearchParams()
  const requirement = params.get('requirement') || ''
  return <>
    <Seo title="Get a Quote | Hafiz Lifelong Interior" description="Send an inquiry to Hafiz Lifelong Interior for school furniture, artificial grass, sports nets, box cricket and sports infrastructure requirements." path="/get-quote"/>
    <section className="bg-paper pb-16 pt-36 sm:pb-20 sm:pt-40"><div className="container-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start"><Reveal><div className="eyebrow">Get a quote</div><h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-navy sm:text-6xl">Tell us what you’re planning.</h1><p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">Share the requirement, approximate quantity and location. The business team can follow up directly.</p><div className="mt-8 space-y-3">{[['Clear requirement',FileText],['Direct consultation',MessageCircle],['Next-step support',CheckCircle2],['Project conversation',Clock3]].map(([x,I])=>{const Icon=I as typeof FileText;return <div key={String(x)} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-navy shadow-sm"><Icon size={19} className="text-lime"/>{String(x)}</div>})}</div></Reveal><Reveal delay={.08}><InquiryForm defaultRequirement={requirement}/></Reveal></div></section>
  </>
}
