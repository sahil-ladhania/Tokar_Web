import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { motion } from 'framer-motion'

const PlayerListComponent = ({ players }) => {
  return (
    <motion.ul
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {players.map((p, i) => (
        <li key={i} className="flex items-center space-x-3 bg-slate-800 p-3 rounded-lg shadow-sm">
          <Avatar className="h-10 w-10 text-black size-10 font-bold">
            <AvatarFallback>{p.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="text-white font-medium">{p.name}</span>
          {p.isHost && (
            <span className="ml-auto text-emerald-400 text-sm font-semibold">Host</span>
          )}
        </li>
      ))}
    </motion.ul>
  )
}

export default PlayerListComponent