import React, { useState } from 'react'
import ProfileHeaderComponent from '../components/profile-page/ProfileHeaderComponent'
import ProfileStatsComponent from '../components/profile-page/ProfileStatsComponent'
import { motion } from 'framer-motion'

const ProfilePage = () => {
  const [about, setAbout] = useState(
    "Hi! I'm a Ludo enthusiast. I love playing real-time matches with friends and competing in global leaderboards."
  )

  return (
    <div className="px-4 py-12 max-w-4xl mx-auto">
      {/* Header */}
      <ProfileHeaderComponent username="PlayerOne" />

      {/* About Me */}
      <motion.div
        className="bg-slate-800 p-6 rounded-lg shadow-lg mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-white mb-2">About Me</h2>
        <p className="text-gray-300 leading-relaxed">{about}</p>
      </motion.div>

      {/* Stats */}
      <ProfileStatsComponent />
    </div>
  )
}

export default ProfilePage