// src/pages/MatchMakingPage.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, Globe } from 'lucide-react'
import OptionCardComponent from '../components/match-making-page/OptionCardComponent'
import PrivateRoomFormComponent from '../components/match-making-page/PrivateRoomFormComponent'

const MatchMakingPage = () => {
  const navigate = useNavigate()

  const handleQuickPlay = () => navigate('/game/public')
  const handleCreateRoom = () => console.log('create room logic')
  const handleJoinRoom = (code) => navigate(`/lobby/${code}`)

  return (
    <div className="px-4 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Choose Your Match
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quick Play */}
        <OptionCardComponent
          Icon={Users}
          label="Quick Play (Public Match)"
          onClick={handleQuickPlay}
        />

        {/* Private Room */}
        <PrivateRoomFormComponent
          onCreate={handleCreateRoom}
          onJoin={handleJoinRoom}
        />
      </div>

      {/* Optional: Global Matchmaking (if needed) */}
      <div className="mt-8 flex justify-center">
        <OptionCardComponent
          Icon={Globe}
          label="Global Matchmaking"
          onClick={() => navigate('/game/global')}
        />
      </div>
    </div>
  )
}

export default MatchMakingPage