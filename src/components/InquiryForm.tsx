import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { inquiryOptions } from '../data/site'
import { sendInquiry, type InquiryPayload } from '../services/emailService'

type Props = { defaultRequirement?: string; compact?: boolean }

export default function InquiryForm({ defaultRequirement = '', compact = false }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InquiryPayload>({
    defaultValues: { requirement: defaultRequirement },
  })

  const submit = async (data: InquiryPayload) => {
    setStatus('sending')
    setError('')
    try {
      await sendInquiry(data)
      setStatus('success')
      reset({ requirement: defaultRequirement })
    } catch (e) {
      setStatus('error')
      setError(e instanceof Error ? e.message : 'Something went wrong. Please try again or contact us by phone/WhatsApp.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex min-h-[360px] flex-col items-center justify-center rounded-3xl bg-lime/10 p-8 text-center ${compact ? '' : 'border border-lime/20'}`}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime text-navy"><CheckCircle2 size={32} /></div>
        <h3 className="mt-5 font-display text-2xl font-extrabold text-navy">Inquiry sent successfully.</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">Thank you! Our team will contact you soon.</p>
        <button onClick={() => setStatus('idle')} className="btn-dark mt-6">Send another inquiry</button>
      </div>
    )
  }

  const input = "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-lime focus:bg-white focus:ring-4 focus:ring-lime/10"
  const label = "text-xs font-extrabold uppercase tracking-[0.12em] text-navy"

  return (
    <form onSubmit={handleSubmit(submit)} className={`space-y-5 ${compact ? '' : 'rounded-3xl border border-slate-200 bg-white p-5 shadow-soft sm:p-7 lg:p-8'}`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>Full Name *<input {...register('name', { required: 'Name is required' })} className={input} placeholder="Your name" />{errors.name && <span className="mt-1 block text-xs font-semibold text-red-600">{errors.name.message}</span>}</label>
        <label className={label}>Mobile Number *<input {...register('phone', { required: 'Phone is required', pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit Indian mobile number' } })} className={input} placeholder="10-digit mobile number" inputMode="numeric" />{errors.phone && <span className="mt-1 block text-xs font-semibold text-red-600">{errors.phone.message}</span>}</label>
        <label className={label}>Email Address<input {...register('email', { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' } })} className={input} placeholder="you@example.com" type="email" />{errors.email && <span className="mt-1 block text-xs font-semibold text-red-600">{errors.email.message}</span>}</label>
        <label className={label}>Company / School Name<input {...register('company')} className={input} placeholder="School, college, office..." /></label>
        <label className={label}>City<input {...register('city')} className={input} placeholder="Meerut / Delhi NCR..." /></label>
        <label className={label}>Interested In *<select {...register('requirement', { required: 'Please choose a requirement' })} className={input}><option value="">Select a requirement</option>{inquiryOptions.map(item => <option key={item}>{item}</option>)}</select>{errors.requirement && <span className="mt-1 block text-xs font-semibold text-red-600">{errors.requirement.message}</span>}</label>
        <label className={label}>Quantity / Approx Requirement<input {...register('quantity')} className={input} placeholder="e.g. 50 desks / 1 turf setup" /></label>
        <label className={label}>Message<textarea {...register('message')} rows={4} className={input} placeholder="Tell us about your project..." /></label>
      </div>

      {status === 'error' && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</div>}

      <button disabled={status === 'sending'} type="submit" className="btn-primary w-full sm:w-auto">
        {status === 'sending' ? <><Loader2 className="animate-spin" size={18} /> Sending...</> : <><Send size={17} /> Send Inquiry</>}
      </button>
      <p className="text-xs leading-5 text-slate-500">Your inquiry is sent through EmailJS using the email service configured by the site owner.</p>
    </form>
  )
}
