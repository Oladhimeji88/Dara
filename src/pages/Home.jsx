import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductGrid from '../components/ProductGrid'
import WhatsAppModal from '../components/WhatsAppModal'
import SEO from '../components/SEO'
import { getDirectChatUrl } from '../utils/whatsapp'
import daraLogo from '../assets/Dara.svg'

const TICKER_TEXT = 'ANKARA · ASO-EBI · LACE · COUTURE · BESPOKE · HANDMADE · NIGERIAN FASHION · PREMIUM WEAR · WUNMI DARA · '

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ClothingStore',
        '@id': 'https://wunmidarawears.com/#organization',
        name: 'Wunmi Dara Wears',
        url: 'https://wunmidarawears.com',
        description: 'Premium Nigerian fashion. Handcrafted Ankara, Lace, Aso-Ebi and contemporary African couture.',
        address: { '@type': 'PostalAddress', addressCountry: 'NG', addressLocality: 'Lagos' },
        contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', availableLanguage: 'English' },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://wunmidarawears.com/#website',
        url: 'https://wunmidarawears.com',
        name: 'Wunmi Dara Wears',
        publisher: { '@id': 'https://wunmidarawears.com/#organization' },
      },
    ],
  }

  return (
    <>
      <SEO structuredData={homeStructuredData} />
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col bg-page pt-16 overflow-hidden">

        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold opacity-[0.04] blur-[140px]" />

        {/* Editorial corner labels */}
        <div className="absolute top-20 left-5 sm:left-10 hidden sm:block">
          <p className="text-[9px] tracking-[0.35em] uppercase text-subtle"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Lagos · Nigeria · Est. 2020
          </p>
        </div>
        <div className="absolute top-20 right-5 sm:right-10 hidden sm:block">
          <p className="text-[9px] tracking-[0.35em] uppercase text-subtle"
            style={{ writingMode: 'vertical-rl' }}>
            Premium Collection
          </p>
        </div>

        {/* Centre content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">

          <motion.img
            src={daraLogo}
            alt="Wunmi Dara Wears"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-56 sm:w-72 lg:w-88 mx-auto select-none"
            style={{ maxWidth: '360px' }}
            draggable={false}
          />

          {/* Diamond divider */}
          <motion.div {...fadeUp(0.25)} className="flex items-center gap-4 mt-10 w-full max-w-xs">
            <div className="flex-1 h-px bg-divider" />
            <div className="w-2 h-2 bg-gold rotate-45 flex-shrink-0" />
            <div className="flex-1 h-px bg-divider" />
          </motion.div>

          {/* Tag + subtitle */}
          <motion.p {...fadeUp(0.35)}
            className="mt-6 text-[9px] font-semibold tracking-[0.45em] uppercase text-muted text-center">
            Premium Nigerian Fashion
          </motion.p>
          <motion.p {...fadeUp(0.42)}
            className="mt-3 text-sm text-muted text-center max-w-xs leading-relaxed">
            Handcrafted Ankara, Lace, Aso-Ebi &amp; contemporary African couture.
            Each piece tells a story of culture and craft.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.52)} className="flex flex-col sm:flex-row gap-3 mt-9">
            <Link to="/collection"
              className="bg-primary text-page text-[10px] font-bold px-8 py-4 tracking-[0.22em] uppercase hover:bg-gold hover:text-black transition-colors duration-200 text-center">
              Explore Collection
            </Link>
            <a href={getDirectChatUrl()} target="_blank" rel="noopener noreferrer"
              className="border border-subtle text-primary text-[10px] font-bold px-8 py-4 tracking-[0.22em] uppercase hover:border-primary transition-colors duration-200 flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-whatsapp" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Order on WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.62)}
            className="flex gap-10 mt-12 pt-8 border-t border-divider w-full max-w-xs justify-center">
            {[
              { value: '500+', label: 'Customers' },
              { value: '100%', label: 'Handmade' },
              { value: '5★', label: 'Rated' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-lg font-bold text-gold">{s.value}</p>
                <p className="text-[9px] text-muted uppercase tracking-[0.2em] mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── SCROLLING TICKER ── */}
        <div className="border-t border-divider overflow-hidden">
          <div className="flex whitespace-nowrap py-3" style={{ animation: 'marquee 28s linear infinite' }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="text-[9px] font-semibold tracking-[0.38em] uppercase text-subtle mx-2">
                {TICKER_TEXT}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTION GRID ── */}
      <ProductGrid onSelect={setSelectedProduct} />

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="bg-surface border border-divider">

          <div className="border-b border-divider px-8 py-4 flex items-center justify-between">
            <span className="text-[9px] font-semibold tracking-[0.35em] uppercase text-muted">03 — Our Story</span>
            <div className="w-4 h-px bg-divider" />
          </div>

          <div className="grid md:grid-cols-2 items-stretch">

            {/* Text side */}
            <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-divider">
              <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight tracking-tight uppercase">
                Fashion Rooted<br />
                in <span className="text-gold">African Culture</span>
              </h2>
              <p className="text-sm text-muted mt-5 leading-relaxed">
                Wunmi Dara Wears was born from a deep love for Nigerian fashion and
                the desire to bring premium, handcrafted African couture to every
                occasion. We blend traditional craftsmanship with contemporary
                silhouettes — creating pieces that are both timeless and modern.
              </p>
              <p className="text-sm text-muted mt-3 leading-relaxed">
                Every fabric is carefully sourced, every stitch placed with intention.
                When you wear Wunmi Dara, you carry a piece of our heritage with you.
              </p>
              <a
                href={getDirectChatUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-gold text-black text-[10px] font-bold px-6 py-3.5 uppercase tracking-[0.2em] hover:bg-gold-dark transition-colors"
              >
                Make an Enquiry
              </a>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-2">
              {[
                { icon: '✂️', title: 'Handmade', desc: 'Every piece crafted with precision by skilled artisans.' },
                { icon: '🌿', title: 'Premium Fabric', desc: 'Carefully sourced for quality and comfort.' },
                { icon: '📐', title: 'Custom Orders', desc: 'Tailored exactly to your measurements and style.' },
                { icon: '⚡', title: 'Fast Delivery', desc: 'Across Nigeria and worldwide.' },
              ].map((f, i) => (
                <div
                  key={f.title}
                  className={`p-6 sm:p-8 border-divider ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''}`}
                >
                  <span className="text-xl">{f.icon}</span>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-widest mt-4">{f.title}</h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <WhatsAppModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  )
}
