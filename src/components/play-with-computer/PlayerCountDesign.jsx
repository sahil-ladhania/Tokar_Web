import React from 'react'
import { User } from 'lucide-react'
import { motion } from 'framer-motion'
import twoOrFour from '../../assets/two_or_four.png'

const PlayerCountDesign = () => (
  <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-center pt-16 px-4">
    {/* Left: Illustration */}
    <motion.div
      className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={twoOrFour}
        alt="Choose number of players"
        className="w-full max-w-sm rounded-lg shadow-lg"
      />
    </motion.div>

    {/* Right: Headings + Buttons */}
    <motion.div
      className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 lg:pl-12"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold">Play vs Computer</h2>
      <p className="text-lg">Choose number of players</p>

      <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
        {/* 2 Players */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-slate-800 hover:bg-slate-700 transition rounded-lg py-6 text-xl font-semibold flex flex-col justify-center items-center space-y-2 cursor-pointer"
        >
          <div className="flex space-x-4">
            <User size={24} className="text-white" />
            <User size={24} className="text-white" />
          </div>
          <span>2 Players</span>
        </motion.button>

        {/* 4 Players */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-slate-800 hover:bg-slate-700 transition rounded-lg py-6 text-xl font-semibold flex flex-col justify-center items-center space-y-2 cursor-pointer"
        >
          <div className="grid grid-cols-2 gap-4">
            <User size={24} className="text-white" />
            <User size={24} className="text-white" />
            <User size={24} className="text-white" />
            <User size={24} className="text-white" />
          </div>
          <span>4 Players</span>
        </motion.button>
      </div>
    </motion.div>
  </div>
)

export default PlayerCountDesign