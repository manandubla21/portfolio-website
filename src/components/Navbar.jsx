import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import mylogo from "../assets/finalLogo.png"
import { a } from 'framer-motion/client'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4"
        style={{ background: 'rgba(10, 6, 18, 0.7)', backdropFilter: 'blur(12px)' }}
      >
        {/* Logo */}
        <div className="w-10 md:w-12">
          <img src={mylogo} alt="Logo" className="w-full" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white hover:text-violet-400 transition-colors duration-200 tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] left-0 right-0 z-40 flex flex-col items-center gap-6 py-8 md:hidden"
            style={{ background: 'rgba(10, 6, 18, 0.95)', backdropFilter: 'blur(12px)' }}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white hover:text-violet-400 transition-colors duration-200 tracking-widest uppercase"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}