import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import socket from '../../socket.js'
import { setError, setIsLoading } from '../../redux/slices/playFriendsSlice'
import {toast} from 'sonner';

const JoinInviteComponent = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((store) => store.user);

  // State Variables
  const [code, setCode] = useState('');

  // Handler Functions
  const handleRoomCodeChange = (e) => {
    const value = e.target.value;
    setCode(value);
  }

  const handleJoinFriendsRoom = async() => {
    try {
      dispatch(setIsLoading(true));

      socket.emit("join-friends-room" , {
        roomCode : code,
        token : token
      });
      toast.success("Successfully Joined the Private Game Session !!!");
      setCode("");

      dispatch(setIsLoading(false));
    }
    catch (error) {
      console.log(error);
      toast.error(error.message);
      dispatch(setError(error.message));
      dispatch(setIsLoading(false));  
    }
  };

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
        onChange={handleRoomCodeChange}
        className="bg-slate-700 text-white"
      />
      <Button
        variant="default"
        className="w-full"
        onClick={handleJoinFriendsRoom}
      >
        Join Game
      </Button>
    </motion.div>
  )
}

export default JoinInviteComponent