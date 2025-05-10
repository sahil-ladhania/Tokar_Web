import React from 'react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Edit2 } from 'lucide-react'

const ProfileHeaderComponent = ({ username }) => {
  return (
    <motion.div
      className="flex items-center justify-between bg-slate-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center space-x-4">
        <Avatar className="h-16 w-16 text-black font-bold">
          <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold text-white">{username}</h1>
          <p className="text-gray-400">@{username.toLowerCase()}</p>
        </div>
      </div>
      <Button variant="outline" className="flex items-center space-x-2 text-black cursor-pointer">
        <Edit2 size={16} />
        <span>Edit Profile</span>
      </Button>
    </motion.div>
  )
}

export default ProfileHeaderComponent