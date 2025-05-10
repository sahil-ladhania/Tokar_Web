// src/components/signup/SignupFormComponent.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const SignupFormComponent = () => {
  return (
    <motion.form
      className="bg-slate-800 p-8 rounded-lg shadow-xl space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block mb-1 text-white">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-1 text-white">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div>
        <label htmlFor="email" className="block mb-1 text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-1 text-white">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+1234567890"
          className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
        />
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </motion.form>
  )
}

export default SignupFormComponent