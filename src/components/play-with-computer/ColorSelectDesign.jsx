import React from 'react'
import { motion } from 'framer-motion'
import picktokencolor from '../../assets/pick-token-color.png'
import { useDispatch, useSelector } from 'react-redux';
import { setChosenTokenColor, setError, setGameSessionId, setIsLoading, setParticipants, setRoomCode } from '../../redux/slices/playComputerSlice';
import { useNavigate } from 'react-router-dom';
import { createGameSession } from '../../services/computerModeServices';

const colors = [
  { name: 'Red',    value: 'red',    bg: 'bg-red-500' },
  { name: 'Green',  value: 'green',  bg: 'bg-green-500' },
  { name: 'Yellow', value: 'yellow', bg: 'bg-yellow-500' },
  { name: 'Blue',   value: 'blue',   bg: 'bg-blue-500' },
]

const ColorSelectDesign = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {numberOfPlayers} = useSelector((store) => store.computerMode);

  // Handler Functions
  const handleChooseTokenColor = async (color) => {
    try {
      dispatch(setIsLoading(true));
      dispatch(setChosenTokenColor(color));
      dispatch(setError(null));

      const response = await createGameSession({
        numberOfPlayers,
        choseTokenColor: color
      });
      if(response.data){
        dispatch(setRoomCode(response.data.gameSessionData.roomCode));
        dispatch(setGameSessionId(response.data.gameSessionData.gameSessionId));
        dispatch(setParticipants(response.data.gameSessionData.participants));
        setTimeout(() => {
          navigate(`/lobby/${response.data.gameSessionData.roomCode}`);
        }, 1000);
      }
      dispatch(setIsLoading(false));
    }
    catch (error) {
      console.log(error);
      dispatch(setError(error.message));
      dispatch(setIsLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-center pt-16 px-4">
      {/* Left: Illustration */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={picktokencolor}
          alt="Pick your color"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Heading + Color Options */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 lg:pl-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold">Pick Your Color</h2>

        <div className="grid grid-cols-4 gap-6 w-full max-w-lg">
          {colors.map((c) => (
            <motion.label
              key={c.value}
              htmlFor={c.value}
              className="flex flex-col items-center space-y-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Color circle */}
              <div className={`${c.bg} w-12 h-12 rounded-full border-4 border-white`} />
              
              {/* Radio button */}
              <input
                id={c.value}
                type="radio"
                name="player-color"
                value={c.value}
                onChange={() => handleChooseTokenColor(c.value)}
                className="appearance-none w-5 h-5 border-2 border-white rounded-sm checked:bg-white checked:border-0 transition"
              />

              <span className="text-white font-medium">{c.name}</span>
            </motion.label>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ColorSelectDesign;