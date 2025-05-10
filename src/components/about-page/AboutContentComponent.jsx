import React from 'react'
import { motion } from 'framer-motion'

const AboutContentComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-6 text-white"
    >
      <h2 className="text-4xl font-bold">About Tokar</h2>
      <p className="text-lg leading-relaxed">
        Tokar is a real-time multiplayer Ludo experience built for players of all ages.
        Whether you’re challenging friends across the globe or honing your skills
        against our AI, Tokar delivers smooth animations, fair play, and a vibrant
        dark-themed interface that keeps you immersed.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li><strong>Real-Time Play:</strong> Instant updates via WebSockets.</li>
        <li><strong>Multiple Modes:</strong> Play vs Computer, Online & With Friends.</li>
        <li><strong>Custom Rooms:</strong> Create private lobbies with unique codes.</li>
        <li><strong>Scalable Architecture:</strong> Designed to handle thousands of players.</li>
      </ul>
    </motion.div>
  )
}

export default AboutContentComponent