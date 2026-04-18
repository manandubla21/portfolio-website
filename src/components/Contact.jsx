import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="px-8 md:px-20 py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <h2
          className="text-3xl font-bold text-white mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Let's Connect
        </h2>

        <p className="text-gray-300 text-base leading-relaxed mb-8">
          Open to internships, placements, and freelance projects. My inbox is always open.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
          >
            Instagram
          </a>
          <a
            href="https://github.com/manandubla21"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manan-dubla/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
              href="https://mail.google.com/mail/?view=cm&to=manansworkspace@gmail.com" target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            manansworkspace@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  )
}
