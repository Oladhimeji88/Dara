import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CATEGORIES, getProductsByCategory } from '../data/products'
import ProductCard from '../components/ProductCard'
import SEO from '../components/SEO'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Collection — Wunmi Dara Wears',
  description: 'Browse the full Wunmi Dara Wears collection: Ankara dresses, Lace gowns, Co-ord sets, Blouses, and Jumpsuits.',
  url: 'https://wunmidarawears.com/collection',
  provider: {
    '@type': 'ClothingStore',
    name: 'Wunmi Dara Wears',
    url: 'https://wunmidarawears.com',
  },
}

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(
    () => getProductsByCategory(activeCategory),
    [activeCategory]
  )

  return (
    <>
      <SEO
        title="Collection"
        description="Browse the full Wunmi Dara Wears collection: Ankara dresses, Lace gowns, Co-ord sets, Aso-Ebi blouses, and contemporary Jumpsuits."
        canonical="/collection"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-page pt-16">

        {/* Page header */}
        <div className="border-b border-divider">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[10px] text-muted uppercase tracking-widest pt-4 pb-3 border-b border-divider">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-subtle">/</span>
              <span className="text-primary">Collection</span>
            </nav>

            {/* Heading row */}
            <div className="py-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.35em] uppercase text-muted mb-2">
                  02 — The Edit
                </p>
                <h1 className="text-4xl sm:text-5xl font-black text-primary uppercase tracking-tight leading-none">
                  The Collection
                </h1>
              </div>
              <p className="text-xs text-muted max-w-xs leading-relaxed">
                Premium handcrafted Nigerian fashion. Each piece is made to order — contact us on WhatsApp to place your request.
              </p>
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-0 overflow-x-auto pb-px scrollbar-hide">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative shrink-0 px-5 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-200 border-b-2 -mb-px ${
                    activeCategory === cat
                      ? 'text-primary border-gold'
                      : 'text-muted border-transparent hover:text-primary hover:border-divider'
                  }`}
                >
                  {cat}
                </button>
              ))}
              <div className="ml-auto shrink-0 pl-4 pb-px self-end">
                <span className="text-[10px] text-subtle tabular-nums">
                  {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-divider border border-divider"
            >
              {filtered.map(p => (
                <div key={p.id} className="bg-page">
                  <ProductCard product={p} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-[9px] tracking-[0.35em] uppercase text-muted mb-3">No items</p>
              <p className="text-2xl font-black text-primary uppercase tracking-tight">Nothing here yet</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-6 text-[10px] font-semibold tracking-[0.2em] uppercase text-gold hover:text-gold-dark transition-colors"
              >
                View All →
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA strip */}
        <div className="border-t border-divider mt-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[9px] font-semibold tracking-[0.35em] uppercase text-muted mb-1">Don't see what you're looking for?</p>
              <p className="text-lg font-black text-primary uppercase tracking-tight">Custom Orders Available</p>
            </div>
            <a
              href="https://wa.me/2349042670997?text=Hello%20Wunmi%20Dara%20Wears!%20I'd%20like%20to%20enquire%20about%20a%20custom%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black text-[10px] font-bold px-8 py-3.5 uppercase tracking-[0.2em] hover:bg-gold-dark transition-colors whitespace-nowrap"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
