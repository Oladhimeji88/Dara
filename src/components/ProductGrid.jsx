import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard'
import { CATEGORIES, getProductsByCategory } from '../data/products'

const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export default function ProductGrid({ onSelect }) {
  const [active, setActive] = useState('All')
  const items = getProductsByCategory(active)

  return (
    <section id="collection" className="py-16 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">

      {/* Section header */}
      <div className="flex items-end justify-between border-b border-divider pb-5 mb-8">
        <div>
          <p className="text-[9px] font-semibold tracking-[0.35em] uppercase text-muted mb-1">
            02 — Collection
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            The Edit
          </h2>
        </div>
        <p className="text-[10px] text-muted hidden sm:block">{items.length} pieces</p>
      </div>

      {/* Category filter — text tabs, no pills */}
      <div className="flex gap-0 overflow-x-auto mb-10 border-b border-divider">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-[9px] font-bold tracking-[0.22em] uppercase px-4 py-3 whitespace-nowrap transition-colors duration-200 border-b-2 -mb-px ${
              active === cat
                ? 'text-white border-gold'
                : 'text-muted border-transparent hover:text-white hover:border-[#333]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={grid}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-divider border border-divider"
        >
          {items.map(product => (
            <div key={product.id} className="bg-[#080808]">
              <ProductCard product={product} onSelect={onSelect} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {items.length === 0 && (
        <p className="text-center py-20 text-[10px] tracking-widest uppercase text-muted">
          No pieces in this category yet.
        </p>
      )}
    </section>
  )
}
