import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ product, onSelect }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    if (onSelect) onSelect(product)
    else navigate(`/product/${product.id}`)
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${product.name}`}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      className="group relative bg-surface border border-divider hover:border-gold transition-colors duration-300 cursor-pointer overflow-hidden"
    >
      {/* Catalog number */}
      <span className="absolute top-3 right-3 z-10 text-[10px] font-light text-subtle tabular-nums select-none">
        {String(product.id).padStart(2, '0')}
      </span>

      {/* Image */}
      <div className="relative aspect-3/4 overflow-hidden bg-surface2">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-surface2 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info strip */}
      <div className="px-3 pt-3 pb-2 border-t border-divider">
        <p className="text-[9px] tracking-[0.2em] uppercase text-muted mb-1.5 font-medium">
          {product.category}
        </p>
        <h3 className="text-[11px] font-semibold text-primary uppercase tracking-wide leading-snug truncate">
          {product.name}
        </h3>
      </div>

      {/* Slide-up CTA on hover */}
      <div className="overflow-hidden max-h-0 group-hover:max-h-11 transition-all duration-300 ease-out">
        <div className="px-3 pb-3">
          <div className="bg-gold text-black text-[9px] font-bold py-2 text-center tracking-[0.2em] uppercase">
            View &amp; Order
          </div>
        </div>
      </div>
    </motion.article>
  )
}
