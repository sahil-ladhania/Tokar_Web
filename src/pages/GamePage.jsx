import React from 'react'
import BoardComponent from '../components/game-page/BoardComponent'

const GamePage = () => {
  return (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center p-4">
      <BoardComponent />
    </div>
  )
}

export default GamePage