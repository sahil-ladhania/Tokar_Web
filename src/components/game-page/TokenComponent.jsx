import React from 'react'
import { motion } from 'framer-motion'

const colorMap = {
  red:    'bg-red-600',
  blue:   'bg-blue-600',
  yellow: 'bg-yellow-600',
  green:  'bg-green-600',
}

const TokenComponent = ({ color, style }) => (
  <motion.div
    className={`h-8 w-8 ${colorMap[color]} rounded-full border-2 border-white`}
    style={style}
    layout
    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
  />
)

export default TokenComponent