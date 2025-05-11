import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react'

const DICE_ICONS = {
  1: <Dice1 size={24} />,
  2: <Dice2 size={24} />,
  3: <Dice3 size={24} />,
  4: <Dice4 size={24} />,
  5: <Dice5 size={24} />,
  6: <Dice6 size={24} />,
}

const COLOR_MAP = {
  red:    '#dc2626',
  green:  '#16a34a',
  yellow: '#eab308',
  blue:   '#2563eb',
}

const DiceControlComponent = ({ color, value, onRoll, className }) => (
  <motion.div
    className={`absolute ${className} flex items-center bg-slate-800 p-2 rounded-lg shadow-2xl space-x-2`}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <MapPin size={24} style={{ color: COLOR_MAP[color] }} />
    <button
      onClick={onRoll}
      className="bg-white p-2 rounded-md shadow-inner focus:outline-none"
    >
      {value ? DICE_ICONS[value] : <span className="text-xl font-bold">?</span>}
    </button>
  </motion.div>
)

export default DiceControlComponent;