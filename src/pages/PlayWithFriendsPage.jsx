import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import JoinInviteComponent from '../components/play-friends/JoinInviteComponent'
import CreateInviteComponent from '../components/play-friends/CreateInviteComponent'
import socket from '../socket.js'
import { useDispatch } from 'react-redux'
import { setChosenTokenColor, setGameSessionId, setHostParticipant, setMyParticipant, setNumberOfPlayers, setRemainingParticipants, setRoomCode, setStep } from '../redux/slices/playFriendsSlice'
import { useSocketErrorHandler } from '../custom-hooks/useSocketErrorHandler.js'
import { toast } from 'sonner'


const PlayWithFriendsPage = () => {
  const dispatch = useDispatch();
  useSocketErrorHandler();

  useEffect(() => {
    socket.on("created-game-session" , (data) => {
      dispatch(setRoomCode(data.roomCode));
      dispatch(setGameSessionId(data.gameSessionId));
      dispatch(setHostParticipant(data.hostParticipant));
      toast.success("Successfully Created a Private Game Session !!!");
      setTimeout(() => {
        dispatch(setStep(0));
        dispatch(setChosenTokenColor(""));
        dispatch(setNumberOfPlayers(null));
        dispatch(setRoomCode(null));
      }, 3000);
    });

    socket.on("joined-friends-room" , (data) => {
      console.log(data.participant);
      dispatch(setMyParticipant(data.participant));
      dispatch(setRemainingParticipants(data.participant));
      toast.success("Successfully Joined a Private Game Session !!!");
    });

    return () => {
      socket.off("created-game-session");
      socket.off("joined-friends-room");
    }
  }, []);


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