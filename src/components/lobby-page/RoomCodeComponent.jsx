import React from 'react'
import { motion } from 'framer-motion'

const RoomCodeComponent = ({ code }) => {
  return (
    <motion.div
      className="bg-slate-800 text-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <span className="font-medium">Room Code:</span>
      <span className="font-bold tracking-widest">{code}</span>
    </motion.div>
  )
}

export default RoomCodeComponent