import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="px-8 md:px-20 py-24 max-w-5xl mx-auto" ref={ref}>
      {/* Typing headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          I'm a Full Stack MERN Developer.
          <span className="text-purple-400 animate-pulse">|</span>
        </h2>
        <p className="text-gray-300 text-base mb-8">
          Intern at
          <a className="text-purple-400 font-medium" target='_blank' rel="noreferrer" href="https://www.bluestock.in/"> @BlueStock</a>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="space-y-4 text-gray-300 text-base leading-relaxed"
      >
        <p>
          I’m a CS sophomore and a MERN stack developer who loves building full-stack web applications that are both functional and user-friendly.
        </p>
        <p>
          With a strong grasp of Data Structures and Algorithms, I focus on writing clean, efficient code. I primarily work with Java and Python, and I’m experienced in handling data using tools like Pandas, NumPy, and Matplotlib. On the backend, I work with MySQL and MongoDB to design and manage scalable databases.
        </p>
        <p>
          Currently open to opportunities where I can apply my skills, learn from experienced teams, and build impactful products.
        </p>
      </motion.div>
    </section>
  )
}
