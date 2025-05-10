import React from 'react'
import { motion } from 'framer-motion'
import signupImg from "../../assets/signup-img.png"

const SignupImageComponent = () => {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={signupImg}
        alt="Sign Up Illustration"
        className="w-full max-w-md rounded-lg shadow-2xl"
      />
    </motion.div>
  )
}

export default SignupImageComponent