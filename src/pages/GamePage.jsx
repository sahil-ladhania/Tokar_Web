import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BoardCanvasComponent } from '../components/game-page/BoardCanvasComponent'

const GamePage = () => {
  const navigate = useNavigate()
  const [diceValues, setDiceValues] = useState({
    red: null,
    green: null,
    yellow: null,
    blue: null,
  })

  const handleRoll = (color) => {
    const val = Math.ceil(Math.random() * 6)
    setDiceValues(prev => ({ ...prev, [color]: val }))
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <BoardCanvasComponent
        diceValues={diceValues}
        onRoll={handleRoll}
        goBack={() => navigate(-1)}
      />
    </div>
  )
}

export default GamePage