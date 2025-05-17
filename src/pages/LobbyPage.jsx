import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import RoomCodeComponent from '../components/lobby-page/RoomCodeComponent'
import PlayerListComponent from '../components/lobby-page/PlayerListComponent'
import StartGameComponent from '../components/lobby-page/StartGameComponent'
import { useSelector } from 'react-redux'

const LobbyPage = () => {
  const { roomCode } = useParams();
  const navigate = useNavigate();
  const { participants } = useSelector((store) => store.computerMode);

  const [players, setPlayers] = useState(participants || []);

  const handleStart = () => {
    navigate(`/game/${roomCode}`);
  }

  return (
    <div className="px-4 py-12 max-w-4xl mx-auto">
      <RoomCodeComponent code={roomCode} />

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Players in Room</h2>
      <PlayerListComponent players={players} />

      <StartGameComponent onStart={handleStart}/>
    </div>
  )
}

export default LobbyPage