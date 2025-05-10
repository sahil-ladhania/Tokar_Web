import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const LoginFormComponent = () => {
  return (
    <motion.form
      className="bg-slate-800 p-8 rounded-lg shadow-xl space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-1 text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block mb-1 text-white">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full">
        Log In
      </Button>
    </motion.form>
  )
}

export default LoginFormComponent