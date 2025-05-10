import React from 'react'
import { motion } from 'framer-motion'
import phoneImg from "../../assets/tokar-app-screen.png"

const FeatureImageComponent = () => {
  return (
    <motion.div
      className="flex-1 flex justify-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={phoneImg}
        alt="Tokar on iPhone 16"
        className="w-full max-w-sm rounded-xl shadow-2xl"
      />
    </motion.div>
  )
}

export default FeatureImageComponent