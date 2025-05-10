// src/components/common/HeroSectionComponent.jsx
import React from 'react'
import { motion } from 'framer-motion'
import boardImg from '../../assets/Ludo-Board.png'

const HeroSectionComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center mb-12"
    >
      <img
        src={boardImg}
        alt="Ludo Board"
        className="w-full max-w-3xl rounded-lg shadow-2xl"
      />
    </motion.div>
  )
}

export default HeroSectionComponent