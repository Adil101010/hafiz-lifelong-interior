import { BUSINESS } from '../data/site'

export function whatsappUrl(message?: string) {
  const text = message || "Hello, I am interested in Hafiz Lifelong Interior's products and services. Please share more details."
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`
}

export function productWhatsappMessage(product: string) {
  return `Hello, I am interested in ${product} from Hafiz Lifelong Interior. Please share details and quotation.`
}
