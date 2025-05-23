import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { setChosenTokenColor, setError, setIsLoading, setNumberOfPlayers, setStep } from '../../redux/slices/playFriendsSlice'
import socket from '../../socket.js'

const colors = [
  { name: 'red',    value: 'red',    bg: 'bg-red-500' },
  { name: 'green',  value: 'green',  bg: 'bg-green-500' },
  { name: 'yellow', value: 'yellow', bg: 'bg-yellow-500' },
  { name: 'blue',   value: 'blue',   bg: 'bg-blue-500' },
]

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const CreateInviteComponent = () => {
  const dispatch = useDispatch();
  const {step , numberOfPlayers , choseTokenColor , roomCode} = useSelector((store) => store.friendsMode);
  const {token} = useSelector((store) => store.user);

  // State Variables
  const [copied , setCopied] = useState(false);

  // Handler Functions
  const copyRoomCode = (roomCode) => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  };

  const handleCreateRoom = () => {
    dispatch(setStep(1));
  }

  const handleChooseNumberOfPlayers = (playersCount) => {
    dispatch(setStep(2));
    dispatch(setNumberOfPlayers(playersCount));
  }

  const handleChooseTokenColor = (tokenColor) => {
    dispatch(setChosenTokenColor(tokenColor));
  }
  
  const handleGenerateInviteCode = async() => {
    try {
      dispatch(setStep(3));
      dispatch(setIsLoading(true));

      socket.emit("create-friends-room" , {
        totalPlayers : Number(numberOfPlayers),
        preferredColor : choseTokenColor,
        token
      });
      console.log("Game Session Event Triggered ..."); 
      
      dispatch(setIsLoading(false));
    }
    catch (error) {
      console.log(error);
      dispatch(setError(error.message));
      dispatch(setIsLoading(false));
    }
  };

  return (
    <motion.div
      className="bg-slate-800 p-8 rounded-2xl shadow-xl max-w-md mx-auto space-y-6"
      initial="hidden"
      animate="visible"
      variants={stepVariants}
      transition={{ duration: 0.6 }}
    >
      {/* STEP 0: Initial “Create Room” */}
      <AnimatePresence exitBeforeEnter>
        {step === 0 && (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-between flex-col"
          >
            <h1 className='text-2xl font-bold text-white mb-10'>Create a Room</h1>
            <Button
              variant="default"
              className="bg-emerald-500 hover:bg-emerald-600"
              onClick={handleCreateRoom}
            >
              Create Room
            </Button>
          </motion.div>
        )}

        {/* STEP 1: select player count */}
        {step === 1 && (
          <motion.div
            key="step1"
            variants={stepVariants}
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">
              Select Number of Players
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[2, 4].map((n) => (
                <motion.button
                  key={n}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleChooseNumberOfPlayers(n)}
                  className={`flex items-center justify-center space-x-2 
                    py-3 rounded-lg text-white font-semibold
                    ${numberOfPlayers === n ? 'bg-emerald-500' : 'bg-slate-700 hover:bg-slate-600'}`}
                >
                  <div className="flex space-x-2">
                    {Array(n).fill(0).map((_, i) => (
                      <User key={i} size={18} className="text-white" />
                    ))}
                  </div>
                  <span>{n} Players</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* STEP 2: pick color */}
        {step === 2 && (
          <motion.div
            key="step2"
            variants={stepVariants}
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">
              Pick Your Token Color
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {colors.map((c) => (
                <motion.div
                  key={c.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleChooseTokenColor(c.value)}
                  className={`flex flex-col items-center space-y-2 p-4 rounded-lg cursor-pointer
                    ${choseTokenColor === c.value ? 'bg-emerald-500' : 'bg-slate-700 hover:bg-slate-600'}`}
                >
                  <div className={`${c.bg} w-10 h-10 rounded-full border-2 border-white`} />
                  <span className="text-white font-medium">{c.name}</span>
                </motion.div>
              ))}
            </div>
            <Button
              variant="default"
              className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600"
              onClick={handleGenerateInviteCode}
              disabled={!choseTokenColor}
            >
              Generate Invite Code
            </Button>
          </motion.div>
        )}

        {/* STEP 3: show code & copy */}
        {step === 3 && (
          <motion.div
            key="step3"
            variants={stepVariants}
            className="relative bg-slate-700 p-6 rounded-lg flex items-center justify-between"
          >
            <span className="text-lg font-mono text-white px-4">{roomCode}</span>
            <button
              onClick={() => copyRoomCode(roomCode)}
              className="p-2 rounded bg-slate-600 hover:bg-slate-500"
            >
              <Copy size={20} className="text-white" />
            </button>

            {copied && (
              <div className="absolute bottom-0 right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
                Copied!
              </div>
            )}
          </motion.div>
        )}
        <div>
          <h1 className='text-emerald-400'>Copy and Paste the above Code to Join Friends Room !!!</h1>
        </div>
      </AnimatePresence>
    </motion.div>
  )
}

export default CreateInviteComponent