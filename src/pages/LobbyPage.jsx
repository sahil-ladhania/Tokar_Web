import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import RoomCodeComponent from '../components/lobby-page/RoomCodeComponent'
import PlayerListComponent from '../components/lobby-page/PlayerListComponent'
import StartGameComponent from '../components/lobby-page/StartGameComponent'

const LobbyPage = () => {
  const { roomCode } = useParams()
  const navigate = useNavigate()

  // Dummy players—replace with real data from server
  const [players, setPlayers] = useState([
    { name: 'Alice', isHost: true },
    { name: 'Bob', isHost: false },
    { name: 'Charlie', isHost: false },
  ])

  const isHost = players.find(p => p.isHost)?.name === 'Alice' // adapt logic
  const handleStart = () => {
    // TODO: emit start event via socket, then navigate
    navigate(`/game/${roomCode}`)
  }

  // Example effect: simulate Bob joining after 3s
  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayers(p => [...p, { name: 'David', isHost: false }])
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="px-4 py-12 max-w-4xl mx-auto">
      <RoomCodeComponent code={roomCode} />

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Players in Room</h2>
      <PlayerListComponent players={players} />

      <StartGameComponent onStart={handleStart} disabled={!isHost || players.length < 2} />
    </div>
  )
}

export default LobbyPage