import { motion } from 'framer-motion'
import avatar from "../assets/Me.png"
import gradient from "../assets/gradient.png"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Purple glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: 'clamp(300px, 60vw, 600px)',
            height: 'clamp(300px, 60vw, 600px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(120,60,220,0.35) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 max-w-5xl w-full mx-auto">

        {/* ── Avatar side ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center flex-shrink-0"
        >
          {/* Speech bubble */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:-top-8 md:-left-4 text-sm md:text-base text-gray-300 bg-[#1a1030] border border-purple-900/50 px-4 py-2 rounded-full whitespace-nowrap z-20"
          >
            Hello! I Am{' '}
            <span className="text-purple-400 font-semibold">Manan Dubla</span>
          </motion.div>

          {/* Avatar container */}
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 flex items-center justify-center mt-10 md:mt-0">
            <img
              src={gradient}
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />
            <img
              src={avatar}
              alt="Manan Dubla"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* ── Text side ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center md:text-left max-w-xl"
        >
          <p className="text-gray-400 text-sm mb-2 tracking-wide">A Developer who</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Builds things
            <br />
            for the{' '}
            <span className="text-purple-400">web...</span>
          </h1>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Turning ideas into interfaces people remember.
          </p>
        </motion.div>

      </div>
    </section>
  )
}