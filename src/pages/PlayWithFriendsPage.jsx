import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import JoinInviteComponent from '../components/play-friends/JoinInviteComponent'
import CreateInviteComponent from '../components/play-friends/CreateInviteComponent'
import socket from '../socket.js'
import { useDispatch } from 'react-redux'
import { setGameSessionId, setHostParticipant, setMyParticipant, setRemainingParticipants, setRoomCode } from '../redux/slices/playFriendsSlice'


const PlayWithFriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("created-game-session" , (data) => {
      dispatch(setRoomCode(data.roomCode));
      dispatch(setGameSessionId(data.gameSessionId));
      dispatch(setHostParticipant(data.hostParticipant));
    });

    socket.on("joined-friends-room" , (data) => {
      console.log(data.participant);
      dispatch(setMyParticipant(data.participant));
      dispatch(setRemainingParticipants(data.participant));
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