import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Purple glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(120,60,220,0.35) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Speech bubble + Memoji */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center mb-6"
        >
          {/* Speech bubble */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -top-8 -left-45 text-xl text-gray-300 bg-[#1a1030] border border-purple-900/50 px-3 py-1.5 rounded-full whitespace-nowrap"
            style={{ transform: 'translateX(-20%)' }}
          >
            Hello! I Am{' '}
            <span className="text-purple-400 font-semibold">Manan Dubla</span>
          </motion.div>

          {/* Memoji image - replace src with your actual image */}
          <div className="relative w-66 h-66 flex items-center justify-center">
            {/* Gradient blob behind memoji */}
            <img
              src="./src/assets/gradient.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />
            {/* Memoji on top */}
            <img
              src="./src/assets/Me.png"
              alt="Manan Dubla"
              className="relative z-10 w-70 h-70 object-contain"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-left max-w-xl"
        >
          <p className="text-gray-300 text-s mb-1">A Developer who</p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Builds things
            <br />
            for the{' '}
            <span
              className="relative inline-block"
              style={{
                color: '#a855f7',
              }}
            >
              web...
            </span>
          </h1>
          <p className="text-gray-300 text-s mt-3">
            Turning ideas into interfaces people remember.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
