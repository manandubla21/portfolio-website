import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import project1_image from '../assets/project1.png'

const projects = [
  {
    tag: 'Featured Project',
    title: 'Ecommerce Website',
    desc: 'A full-stack MERN website with JWT authentication, Cloudinary profile photos, Indian phone validation, and role-based protected routes. Deployed on Vercel.',
    tech: ['React', 'Express.js', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/manandubla21/ecommerce-website',
    align: 'left',
    image: project1_image
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="flex flex-col items-center justify-center px-8 md:px-20 py-24 space-y-32" ref={ref}>
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.2, duration: 0.7 }}
          className={`relative flex flex-col md:flex-row items-center gap-10 max-w-300 ${
            project.align === 'right' ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Text side */}
          <div className={`flex-1 ${project.align === 'right' ? 'text-right' : ''}`}>
            <p className="text-purple-500 text-xs tracking-widest uppercase mb-2">
              {project.tag}
            </p>
            <h3
              className="text-purple-100 text-3xl font-bold mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {project.title}
            </h3>

            {/* Description card */}
            <div
              className="rounded-xl p-6 mb-6 border border-purple-900/40"
              style={{ background: 'rgba(88,28,235,0.08)' }}
            >
              <p className="text-gray-200 text-sm leading-relaxed">{project.desc}</p>
            </div>

            {/* Tech tags */}
            <div className={`flex flex-wrap gap-2 ${project.align === 'right' ? 'justify-end' : ''}`}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-purple-400 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            <div className={`mt-4 flex gap-3 ${project.align === 'right' ? 'justify-end' : ''}`}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-s"
                title="GitHub"
              >
                View Source Code
              </a>
            </div>
          </div>

          {/* Image/preview side */}
          <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="flex-1 relative rounded-2xl overflow-hidden border border-purple-900/40"
            style={{
              background: 'linear-gradient(135deg, rgba(88,28,235,0.2), rgba(30,10,60,0.8))',
              minHeight: '260px',
            }}
          >
            {/* Placeholder preview */}
            <div className="w-full h-64 flex items-center justify-center text-gray-600 text-sm">
              <div className="text-center">
                <img className='cursor-pointer' src={project1_image} alt="" />
                <a href=""></a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  )
}
