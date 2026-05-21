import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductById, products } from '../data/products'
import { openProductWhatsApp } from '../utils/whatsapp'
import ProductCard from '../components/ProductCard'
import SEO from '../components/SEO'

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const [imgLoaded, setImgLoaded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 text-center bg-[#080808]">
        <p className="text-[9px] tracking-[0.35em] uppercase text-muted mb-4">Error 404</p>
        <p className="text-4xl font-black text-white uppercase tracking-tight">Not Found</p>
        <div className="w-12 h-px bg-gold mt-5 mb-6 mx-auto" />
        <Link
          to="/"
          className="bg-white text-black text-[10px] font-bold px-8 py-3.5 uppercase tracking-[0.2em] hover:bg-gold transition-colors"
        >
          Back to Collection
        </Link>
      </div>
    )
  }

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'NGN',
      price: product.price.replace(/[^0-9]/g, ''),
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Wunmi Dara Wears' },
    },
    category: product.category,
    brand: { '@type': 'Brand', name: 'Wunmi Dara Wears' },
  }

  return (
    <>
    <SEO
      title={product.name}
      description={`${product.name} — ${product.description.slice(0, 140)}…`}
      canonical={`/product/${product.id}`}
      ogImage={product.image}
      structuredData={productSchema}
    />
    <div className="min-h-screen bg-[#080808] pt-16">

      {/* Breadcrumb */}
      <div className="border-b border-divider">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-[10px] text-muted uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#333]">/</span>
            <Link to="/#collection" className="hover:text-white transition-colors">Collection</Link>
            <span className="text-[#333]">/</span>
            <span className="text-white truncate max-w-40">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-3/4 overflow-hidden bg-surface"
          >
            {!imgLoaded && <div className="absolute inset-0 bg-surface2 animate-pulse" />}
            <img
              src={product.image}
              alt={product.name}
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            {/* Category label */}
            <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white text-[9px] font-bold px-3 py-1.5 uppercase tracking-[0.25em] border border-white/10">
              {product.category}
            </span>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {/* Back */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] text-muted hover:text-white transition-colors mb-8 self-start"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                <path d="M19 12H5M5 12l7 7M5 12l7-7" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
              Back
            </button>

            {/* Name & price */}
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-gold mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="text-3xl font-black text-gold mt-3">{product.price}</p>

            <div className="w-10 h-px bg-divider my-6" />

            <p className="text-sm text-muted leading-relaxed">{product.description}</p>

            {/* Feature checklist */}
            <ul className="mt-6 space-y-3">
              {[
                'Handmade with premium fabric',
                'Custom sizing available on request',
                'Quality-checked before dispatch',
                'Delivery across Nigeria & worldwide',
              ].map(feat => (
                <li key={feat} className="flex items-center gap-3 text-xs text-muted">
                  <span className="w-4 h-4 bg-surface2 border border-divider flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" className="w-2.5 h-2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="square" strokeLinejoin="miter" />
                    </svg>
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            {/* Message preview */}
            <div className="mt-7 bg-surface border border-divider">
              <div className="px-4 py-3 border-b border-divider">
                <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-gold">
                  WhatsApp Message Preview
                </p>
              </div>
              <p className="px-4 py-3 text-[11px] text-muted leading-relaxed whitespace-pre-line font-light">
                {`Hello Wunmi Dara Wears! 👋\n\nI'm interested in ordering:\n👗 *${product.name}* — ${product.price}\n\nPlease share availability & how to order. Thank you! 🙏`}
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => openProductWhatsApp(product)}
              className="mt-5 flex items-center justify-center gap-3 bg-whatsapp text-white text-[11px] font-bold py-4 uppercase tracking-[0.18em] hover:bg-whatsapp-dark active:scale-[0.98] transition-all duration-150"
            >
              {WA_ICON}
              Request on WhatsApp
            </button>
            <p className="text-center text-[9px] text-[#333] uppercase tracking-widest mt-3">
              Opens WhatsApp with a pre-filled message
            </p>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-divider pt-12">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.35em] uppercase text-muted mb-1">
                  More from this category
                </p>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                  You May Also Like
                </h2>
              </div>
              <Link
                to="/"
                className="text-[9px] uppercase tracking-[0.2em] text-muted hover:text-white transition-colors hidden sm:block"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-divider border border-divider">
              {related.map(p => (
                <div key={p.id} className="bg-[#080808]">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  )
}
