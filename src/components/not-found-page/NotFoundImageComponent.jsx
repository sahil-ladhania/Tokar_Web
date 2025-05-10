import React from 'react'
import { motion } from 'framer-motion'
import notFoundImg from '../../assets/404-img.png'

const NotFoundImageComponent = () => {
  return (
    <motion.div
      className="flex justify-center mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={notFoundImg}
        alt="Page not found"
        className="w-full max-w-sm rounded-2xl"
      />
    </motion.div>
  )
}

export default NotFoundImageComponent