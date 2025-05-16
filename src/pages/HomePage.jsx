// src/pages/HomePage.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSectionComponent from '../components/home-page/HeroSectionComponent'
import ActionButtonComponent from '../components/home-page/ActionButtonComponent'
import vsComputerImg from '../assets/You-Vs-Computer.png'
import playOnlineImg from '../assets/play-online.png'
import playWithFriendsImg from '../assets/play-with-friends.png'

const HomePage = () => {
  const navigate = useNavigate()

  const handlePlayVsComputer = () => {
    navigate('/play/computer');
  }
  const handlePlayOnline = () => {
    navigate('/play/online');
  }
  const handlePlayWithFriends = () => {
    navigate('/matchmaking')
  }

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Left: Big Board */}
        <div className="flex-1">
          <HeroSectionComponent />
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-col space-y-6 w-full lg:w-80">
          <ActionButtonComponent
            imgSrc={vsComputerImg}
            label="Play vs Computer"
            onClick={handlePlayVsComputer}
          />
          <ActionButtonComponent
            imgSrc={playOnlineImg}
            label="Play Online"
            onClick={handlePlayOnline}
          />
          <ActionButtonComponent
            imgSrc={playWithFriendsImg}
            label="Play With Friends"
            onClick={handlePlayWithFriends}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage