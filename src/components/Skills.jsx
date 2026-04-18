import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Logo from "../assets/Me.svg"
import React from '../assets/React.png'
import mongodb from '../assets/MongoDB.png'
import mysql from '../assets/MySQL.png'
import nextjs from '../assets/Nextjs.png'
import numpy from '../assets/NumPy.png'
import nodejs from '../assets/Nodejs.png'
import java from '../assets/Java.png'
import javascript from '../assets/JavaScript.png'
import express from '../assets/Express.png'
import cpp from '../assets/cpp.png'
import python from '../assets/Python.png'
import git from '../assets/Git.png'
const skills = [
  { icon:  React},
  { icon:  mongodb},
  { icon: mysql },
  { icon: nextjs },
  { icon: nodejs },
  { icon: express },
  { icon: python },
  { icon: java },
  { icon: javascript },
  { icon: numpy },
  { icon: cpp },
  { icon: git },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="px-8 md:px-10 py-24 -mt-20" ref={ref}>
      {/* Center text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-white text-6xl max-w-250 mx-auto">
          <p className='text-3xl mt-3'>A collection of tools, technologies, and concepts I’ve explored across my computer science journey.</p>
        </p>
      </motion.div>

      {/* Skills grid */}
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
            className="flex items-center gap-2 px-5 py-5 rounded-full border border-purple-900/50 bg-purple-950/30 text-sm text-gray-300 cursor-default hover:border-purple-500/70 hover:text-white transition-colors"
          >
            <img className='w-12' src={skill.icon} alt="" />
          </motion.div>
        ))}
      </div>

    </section>
  )
}
