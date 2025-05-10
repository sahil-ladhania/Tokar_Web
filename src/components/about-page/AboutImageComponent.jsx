import React from 'react'
import { motion } from 'framer-motion'
import aboutImg from "../../assets/about-tokar.png"

const AboutImageComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <img
        src={aboutImg}
        alt="About Tokar"
        className="w-full max-w-md rounded-lg shadow-2xl"
      />
    </motion.div>
  )
}

export default AboutImageComponent