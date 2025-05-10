import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const PrivateRoomFormComponent = ({ onCreate, onJoin }) => {
  const [roomCode, setRoomCode] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-800 p-6 rounded-lg shadow-lg space-y-4"
    >
      <Button variant="default" className="w-full" onClick={onCreate}>
        Create Private Room
      </Button>

      <div className="space-y-2">
        <label htmlFor="roomCode" className="text-white font-medium">Join Room</label>
        <Input
          id="roomCode"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
          placeholder="Enter room code"
          className="bg-slate-700 text-white"
        />
        <Button
          variant="default"
          className="w-full bg-black"
          disabled={!roomCode}
          onClick={() => onJoin(roomCode)}
        >
          Join
        </Button>
      </div>
    </motion.div>
  )
}

export default PrivateRoomFormComponent