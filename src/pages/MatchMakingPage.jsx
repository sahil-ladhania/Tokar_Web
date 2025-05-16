import React from 'react'
import { motion } from 'framer-motion'
import PrivateRoomFormComponent from '../components/match-making-page/PrivateRoomFormComponent'

const MatchMakingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        className="bg-slate-800 rounded-2xl shadow-xl w-full max-w-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Choose Your Match
        </h2>

        <div className="space-y-6">
          {/* Private Room Card */}
          <div className="bg-slate-700 p-6 rounded-xl">
            <PrivateRoomFormComponent
              onCreate={() => console.log('create room logic')}
              onJoin={(code) => console.log('join room', code)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MatchMakingPage