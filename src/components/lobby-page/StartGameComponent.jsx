import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const StartGameComponent = ({ onStart, disabled }) => {
  return (
    <motion.div
      className="mt-6 flex justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        variant="default"
        disabled={disabled}
        onClick={onStart}
        className="px-10 py-6 text-lg font-semibold bg-white text-black hover:bg-white cursor-pointer"
      >
        Start Game
      </Button>
    </motion.div>
  )
}

export default StartGameComponent