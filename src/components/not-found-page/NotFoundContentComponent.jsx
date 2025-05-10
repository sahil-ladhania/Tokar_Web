import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const NotFoundContentComponent = () => {
  const navigate = useNavigate()
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h1 className="text-5xl font-bold text-white mb-4">404</h1>
      <p className="text-gray-400 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Button onClick={() => navigate('/')} className="px-6 py-2 bg-white text-black hover:bg-white font-bold cursor-pointer">
        Go Home
      </Button>
    </motion.div>
  )
}

export default NotFoundContentComponent