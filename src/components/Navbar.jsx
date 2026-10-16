import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getDirectChatUrl } from '../utils/whatsapp'
import { useTheme } from '../context/ThemeContext'
import daraLogo from '../assets/Dara.svg'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <circle cx="12" cy="12" r="5" /><path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path strokeLinecap="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const links = [
    { label: 'Collection', href: '/collection', internal: true },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: getDirectChatUrl(), external: true },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'backdrop-blur-md border-b border-divider' : 'bg-transparent'
    }`} style={scrolled ? { backgroundColor: 'var(--navbar-scroll-bg)' } : {}}>
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={daraLogo} alt="Wunmi Dara Wears" className="h-10 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l =>
            l.external ? (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="text-[10px] font-semibold tracking-[0.22em] uppercase text-muted hover:text-primary transition-colors duration-200">
                {l.label}
              </a>
            ) : l.internal ? (
              <Link key={l.label} to={l.href}
                className="text-[10px] font-semibold tracking-[0.22em] uppercase text-muted hover:text-primary transition-colors duration-200">
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href}
                className="text-[10px] font-semibold tracking-[0.22em] uppercase text-muted hover:text-primary transition-colors duration-200">
                {l.label}
              </a>
            )
          )}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="text-muted hover:text-primary transition-colors duration-200"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a href={getDirectChatUrl()} target="_blank" rel="noopener noreferrer"
            className="bg-gold text-black text-[10px] font-bold px-5 py-2.5 tracking-[0.18em] uppercase hover:bg-gold-dark transition-colors duration-200">
            Shop Now
          </a>
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme" className="text-muted hover:text-primary transition-colors">
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button onClick={() => setMenuOpen(v => !v)} className="p-2 -mr-2" aria-label="Menu">
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-px bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block h-px bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-px bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 bg-page border-t border-divider flex flex-col px-6 pt-10 pb-8 gap-1"
          >
            {links.map((l, i) =>
              l.external ? (
                <motion.a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                  className="text-3xl font-black uppercase tracking-tight text-primary border-b border-divider py-5 hover:text-gold transition-colors"
                  onClick={() => setMenuOpen(false)}>
                  {l.label}
                </motion.a>
              ) : l.internal ? (
                <motion.div key={l.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link to={l.href}
                    className="block text-3xl font-black uppercase tracking-tight text-primary border-b border-divider py-5 hover:text-gold transition-colors"
                    onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.a key={l.label} href={l.href}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                  className="text-3xl font-black uppercase tracking-tight text-primary border-b border-divider py-5 hover:text-gold transition-colors"
                  onClick={() => setMenuOpen(false)}>
                  {l.label}
                </motion.a>
              )
            )}
            <motion.a href={getDirectChatUrl()} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }}
              className="mt-6 bg-gold text-black text-sm font-bold py-4 uppercase tracking-widest text-center hover:bg-gold-dark transition-colors">
              Shop Now on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
