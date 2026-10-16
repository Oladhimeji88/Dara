import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { openProductWhatsApp } from '../utils/whatsapp'

export default function WhatsAppModal({ product, onClose }) {
  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => document.body.classList.remove('modal-open')
  }, [])

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6"
        aria-modal="true"
        role="dialog"
        aria-label={product.name}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/75" onClick={onClose} />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 48 }}
          transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
          className="relative w-full sm:max-w-lg bg-modal border border-divider max-h-[94svh] overflow-y-auto"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-divider">
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-muted">
              Product Enquiry
            </span>
            <button
              onClick={onClose}
              className="w-7 h-7 border border-divider flex items-center justify-center text-muted hover:text-primary hover:border-subtle transition-colors"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="square" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="sm:flex">
            {/* Image */}
            <div className="sm:w-48 shrink-0 bg-surface2 aspect-3/4 sm:aspect-auto overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* Details */}
            <div className="flex-1 p-5 sm:p-6 flex flex-col">
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-gold">
                {product.category}
              </span>
              <h2 className="text-lg font-black text-primary uppercase tracking-tight mt-1 leading-tight">
                {product.name}
              </h2>
              <p className="text-xs text-muted mt-3 leading-relaxed flex-1">
                {product.description}
              </p>

              {/* Message preview */}
              <div className="mt-4 bg-surface border border-divider p-4">
                <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-gold mb-2">
                  WhatsApp Message
                </p>
                <p className="text-[11px] text-muted leading-relaxed whitespace-pre-line font-light">
                  {`Hello Wunmi Dara Wears! 👋\n\n👗 *${product.name}*\n\nCould you share availability? 🙏`}
                </p>
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div className="flex border-t border-divider">
            <button
              onClick={() => openProductWhatsApp(product)}
              className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-white text-[10px] font-bold py-4 uppercase tracking-[0.18em] hover:bg-whatsapp-dark transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Request on WhatsApp
            </button>
            <button
              onClick={onClose}
              className="border-l border-divider px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-muted hover:text-primary hover:bg-surface transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
