import React from 'react'
import { User } from 'lucide-react'
import { motion } from 'framer-motion'
import onlineIllustration from '../../assets/two_or_four.png'
import { useDispatch } from 'react-redux'
import { setError, setIsLoading, setNumberOfPlayers, setStep } from '../../redux/slices/playOnlineSlice'

const OnlinePlayerCountDesign = () => {
  const dispatch = useDispatch();

  // Handler Functions
  const handleChooseNumberOfPlayers = (count) => {
    dispatch(setIsLoading(true));
    dispatch(setNumberOfPlayers(count));
    dispatch(setStep(2));
    dispatch(setIsLoading(false));
    dispatch(setError(null));
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-center pt-16 px-4">
      {/* Illustration */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={onlineIllustration}
          alt="Play Online Illustration"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Headings + Buttons */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 lg:pl-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Play Online
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Choose number of players
        </motion.p>

        <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-slate-800 hover:bg-slate-700 transition rounded-lg py-6 text-xl font-semibold flex flex-col items-center space-y-2"
          >
            <div onClick={() => handleChooseNumberOfPlayers(2)} className="flex space-x-4">
              <User size={24} className="text-white" />
              <User size={24} className="text-white" />
            </div>
            <span>2 Players</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-slate-800 hover:bg-slate-700 transition rounded-lg py-6 text-xl font-semibold flex flex-col items-center space-y-2"
          >
            <div onClick={() => handleChooseNumberOfPlayers(4)} className="grid grid-cols-2 gap-4">
              <User size={24} className="text-white" />
              <User size={24} className="text-white" />
              <User size={24} className="text-white" />
              <User size={24} className="text-white" />
            </div>
            <span>4 Players</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default OnlinePlayerCountDesign