import React from 'react'
import { motion } from 'framer-motion'
import JoinInviteComponent from '../components/play-friends/JoinInviteComponent'
import CreateInviteComponent from '../components/play-friends/CreateInviteComponent'


const PlayWithFriendsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <JoinInviteComponent />
        <CreateInviteComponent/>
      </motion.div>
    </div>
  )
}

export default PlayWithFriendsPage