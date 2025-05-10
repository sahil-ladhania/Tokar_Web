import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const ForgotPasswordFormComponent = () => {
  return (
    <motion.form
      className="bg-slate-800 p-8 rounded-lg shadow-xl space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block mb-1 text-white">
          Registered Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          required
          className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full">
        Send Reset Link
      </Button>
    </motion.form>
  )
}

export default ForgotPasswordFormComponent