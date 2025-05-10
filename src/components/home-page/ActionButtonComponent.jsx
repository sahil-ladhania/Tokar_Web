import React from 'react'
import { motion } from 'framer-motion'

const ActionButtonComponent = ({ imgSrc, label, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex flex-col items-center bg-slate-800 p-6 rounded-xl shadow-lg hover:bg-slate-700 focus:outline-none cursor-pointer"
    >
      <img src={imgSrc} alt={label} className="h-24 w-24 mb-3" />
      <span className="text-lg font-bold">{label}</span>
    </motion.button>
  )
}

export default ActionButtonComponent