import React from 'react'
import { motion } from 'framer-motion'

const FeatureCardComponent = ({ icon, title }) => (
  <motion.div
    className="flex items-center space-x-4 bg-slate-800 p-4 rounded-lg shadow-md cursor-pointer"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="p-2 bg-slate-700 rounded-full">
      {icon}
    </div>
    <p className="text-white font-medium">{title}</p>
  </motion.div>
)

export default FeatureCardComponent