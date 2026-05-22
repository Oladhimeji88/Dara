// Replace this with the actual business WhatsApp number (country code + number, no +)
export const WHATSAPP_NUMBER = '2349042670997'

export const BUSINESS_NAME = 'Wunmi Dara Wears'

export function buildWhatsAppUrl(product) {
  const message =
    `Hello ${BUSINESS_NAME}! 👋\n\n` +
    `I'm interested in ordering this item:\n\n` +
    `👗 *Product:* ${product.name}\n` +
    `📝 *Description:* ${product.description}` +
    `\n\nCould you please provide more details on availability and how to place an order? Thank you! 🙏`

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function openProductWhatsApp(product) {
  const url = buildWhatsAppUrl(product)
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function getDirectChatUrl() {
  const message = `Hello ${BUSINESS_NAME}! I'd like to enquire about your fashion items. 👗`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
