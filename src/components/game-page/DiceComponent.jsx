import React, { useState } from 'react'
import { motion } from 'framer-motion'

const faces = [1,2,3,4,5,6]

const DiceComponent = ({ onRoll, result }) => {
  const [rolling, setRolling] = useState(false)

  const handleClick = () => {
    setRolling(true)
    onRoll()
    setTimeout(() => setRolling(false), 600)
  }

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      className="bg-slate-800 text-white p-4 rounded-lg shadow-lg"
    >
      {rolling
        ? <span className="animate-spin block w-6 h-6 border-4 border-t-emerald-400 border-gray-600 rounded-full mx-auto" />
        : <span className="text-2xl font-bold block text-center">{result || '–'}</span>
      }
      <p className="text-center mt-1 text-sm">Roll</p>
    </motion.button>
  )
}

export default DiceComponent