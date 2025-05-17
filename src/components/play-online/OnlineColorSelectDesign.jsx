import React from 'react'
import { motion } from 'framer-motion'
import pickColorOnline from '../../assets/pick-token-color.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setChosenTokenColor, setError, setGameSessionId, setIsLoading, setParticipants, setRoomCode } from '../../redux/slices/playOnlineSlice'

const colors = [
  { name: 'Red',    bg: 'bg-red-500'    },
  { name: 'Green',  bg: 'bg-green-500'  },
  { name: 'Yellow', bg: 'bg-yellow-500' },
  { name: 'Blue',   bg: 'bg-blue-500'   },
]

const OnlineColorSelectDesign = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {numberOfPlayers} = useSelector((store) => store.onlineMode);

  // Handler Functions 
  const handleChooseTokenColor = async(color) => {
    try {
      dispatch(setIsLoading(true));
      dispatch(setChosenTokenColor(color));
      dispatch(setError(null));

      const response = await createGameSession({ // earlier in computer mode i created this a rest api using axios , post req
        numberOfPlayers,
        choseTokenColor: color
      });
      if(response){
        dispatch(setRoomCode());
        dispatch(setGameSessionId());
        dispatch(setParticipants());
        setTimeout(() => {
          navigate(`/lobby/1`); // change with dynamic roomcode
        }, 1000);
      }
      dispatch(setIsLoading(false));
    }
    catch (error) {
      console.log(error);
      dispatch(setError(error.message));
      dispatch(setIsLoading(false));
    }
  }

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
          src={pickColorOnline}
          alt="Pick Color Illustration"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Heading + Color Options */}
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
          Pick Your Color
        </motion.h2>

        <div className="grid grid-cols-4 gap-6 w-full max-w-lg">
          {colors.map((c) => (
            <motion.label
              key={c.name}
              className="flex flex-col items-center space-y-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className={`${c.bg} w-12 h-12 rounded-full border-4 border-white`} />
              <input
                type="radio"
                onChange={() => handleChooseTokenColor(c.name)}
                value={c.name}
                name="player-color"
                className="appearance-none w-5 h-5 border-2 border-white rounded-sm checked:bg-white checked:border-0 transition"
              />
              <span className="text-white font-medium">{c.name}</span>
            </motion.label>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default OnlineColorSelectDesign