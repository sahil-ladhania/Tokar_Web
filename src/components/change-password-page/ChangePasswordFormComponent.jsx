import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ChangePasswordFormComponent = () => {
  return (
    <motion.form
      className="bg-slate-800 p-8 rounded-lg shadow-xl space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Current Password */}
      <div>
        <label htmlFor="currentPassword" className="block mb-1 text-white">
          Current Password
        </label>
        <input
          id="currentPassword"
          type="password"
          placeholder="••••••••"
          required
          className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* New Password */}
      <div>
        <label htmlFor="newPassword" className="block mb-1 text-white">
          New Password
        </label>
        <input
          id="newPassword"
          type="password"
          placeholder="••••••••"
          required
          className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword" className="block mb-1 text-white">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          required
          className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full">
        Change Password
      </Button>

      {/* Extra Auth Links */}
      <div className="pt-4 border-t border-slate-600 text-center space-y-2">
        <p className="text-sm text-slate-300">
          Remembered your password?{' '}
          <a href="/login" className="text-emerald-400 hover:underline">
            Log In
          </a>
        </p>
        <p className="text-sm text-slate-300">
          Need a new account?{' '}
          <a href="/signup" className="text-emerald-400 hover:underline">
            Sign Up
          </a>
        </p>
        <p className="text-sm text-slate-300">
          Forgot your password?{' '}
          <a href="/forgot-password" className="text-emerald-400 hover:underline">
            Reset Here
          </a>
        </p>
      </div>
    </motion.form>
  );
};

export default ChangePasswordFormComponent;