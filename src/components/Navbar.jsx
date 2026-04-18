import { motion } from 'framer-motion'
import mylogo from "../assets/finalLogo.png"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5"
      style={{ background: 'rgba(10, 6, 18, 0.7)', backdropFilter: 'blur(12px)' }}
    >
      {/* Logo */}
      <div style={{width : '50px'}} className="ml-15 p-0 text-white font-bold tracking-widest">
        <img src={mylogo} alt="" />
      </div>

      {/* Links */}
      <div className="flex items-center gap-15 mr-15">
        {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-s text-white transition-colors duration-200 hover:text-gray-300 tracking-wide"
          >
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
