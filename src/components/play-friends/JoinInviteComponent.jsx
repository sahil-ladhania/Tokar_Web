// src/components/play-with-friends/JoinInviteComponent.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const JoinInviteComponent = ({ onJoin }) => {
  const [code, setCode] = useState('')

  return (
    <motion.div
      className="bg-slate-800 p-6 rounded-xl shadow-lg flex flex-col space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-white">Join a Room</h3>
      <Input
        placeholder="Enter invite code"
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        className="bg-slate-700 text-white"
      />
      <Button
        variant="default"
        className="w-full"
        disabled={!code}
        onClick={() => onJoin(code)}
      >
        Join Game
      </Button>
    </motion.div>
  )
}

export default JoinInviteComponent