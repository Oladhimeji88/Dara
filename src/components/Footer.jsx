import { Link } from 'react-router-dom'
import { getDirectChatUrl } from '../utils/whatsapp'
import daraLogo from '../assets/Dara.svg'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#050505] border-t border-divider">

      {/* Main row */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Top — logo + nav + cta */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-divider border-b border-divider">

          {/* Logo cell */}
          <div className="py-10 sm:pr-8 flex items-center">
            <img src={daraLogo} alt="Wunmi Dara Wears" className="h-10 w-auto" />
          </div>

          {/* Links cell */}
          <div className="py-10 sm:px-8">
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-muted mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'Collection', href: '/#collection' },
                { label: 'About Us', href: '/#about' },
              ].map(item => (
                <li key={item.label}>
                  {item.to
                    ? <Link to={item.to} className="text-xs text-muted hover:text-white transition-colors uppercase tracking-widest">{item.label}</Link>
                    : <a href={item.href} className="text-xs text-muted hover:text-white transition-colors uppercase tracking-widest">{item.label}</a>
                  }
                </li>
              ))}
            </ul>
          </div>

          {/* Contact cell */}
          <div className="py-10 sm:pl-8">
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-muted mb-4">Order &amp; Enquiries</p>
            <p className="text-xs text-muted mb-4 leading-relaxed">
              All orders and enquiries are handled directly via WhatsApp for a fast, personal experience.
            </p>
            <a
              href="mailto:ogundareolawunmi3@gmial.com"
              className="block text-xs text-muted hover:text-white transition-colors mb-5 truncate"
            >
              ogundareolawunmi3@gmial.com
            </a>
            <a
              href={getDirectChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white text-[10px] font-bold px-5 py-3 uppercase tracking-[0.18em] hover:bg-whatsapp-dark transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <p className="text-[10px] text-[#2a2a2a] uppercase tracking-widest">
            © {year} Wunmi Dara Wears — All rights reserved
          </p>
          <p className="text-[10px] text-[#222] uppercase tracking-widest">
            Made with love in Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  )
}
