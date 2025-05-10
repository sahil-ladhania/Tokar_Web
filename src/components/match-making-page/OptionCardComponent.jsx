import React from 'react'
import { motion } from 'framer-motion'

const OptionCardComponent = ({ Icon, label, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-3 focus:outline-none"
    >
      <Icon size={48} className="text-emerald-400" />
      <span className="text-white text-lg font-semibold">{label}</span>
    </motion.button>
  )
}

export default OptionCardComponent