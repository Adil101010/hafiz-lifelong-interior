import emailjs from '@emailjs/browser'

export type InquiryPayload = {
  name: string
  phone: string
  email?: string
  company?: string
  city?: string
  requirement: string
  quantity?: string
  message?: string
}

export async function sendInquiry(payload: InquiryPayload) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS is not configured. Add the VITE_EMAILJS_* values to your .env file.')
  }

  return emailjs.send(serviceId, templateId, {
    ...payload,
    subject: 'New Website Inquiry - Hafiz Lifelong Interior',
    source: 'Hafiz Lifelong Interior Website',
  }, { publicKey })
}
