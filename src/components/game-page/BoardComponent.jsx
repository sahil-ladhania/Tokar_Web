// src/components/game/BoardComponent.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import boardImg from '../../assets/Ludo-Board.png'
import TokenComponent from './TokenComponent'
import DiceComponent from './DiceComponent'

const initialTokens = [
  { id: 'r1', color: 'red',  row: 1,  col: 1  },
  { id: 'r2', color: 'red',  row: 1,  col: 6  },
  { id: 'r3', color: 'red',  row: 6,  col: 1  },
  { id: 'r4', color: 'red',  row: 6,  col: 6  },
  // …and same for blue, yellow, green…
]

const CELL_SIZE = 32    // must match your token/block sizing
const OFFSET = { top: 120, left: 120 } // adjust to align grid positions over board image

const BoardComponent = () => {
  const [dice, setDice] = useState(null)
  const handleRoll = () => {
    const value = Math.floor(Math.random() * 6) + 1
    setDice(value)
  }

  return (
    <div className="relative flex flex-col items-center">
      {/* 1. Perfect Board Art */}
      <img src={boardImg} alt="Ludo Board" className="max-w-full h-auto" />

      {/* 2. Tokens Overlay */}
      {initialTokens.map((t) => (
        <TokenComponent
          key={t.id}
          color={t.color}
          // Compute absolute top/left from row/col, OFFSET should line up your grid
          style={{
            position: 'absolute',
            top: OFFSET.top + (t.row - 1) * CELL_SIZE,
            left: OFFSET.left + (t.col - 1) * CELL_SIZE,
          }}
        />
      ))}

      {/* 3. Dice Overlay */}
      <div
        className="absolute"
        style={{
          bottom: -80,    // place beneath board
        }}
      >
        <DiceComponent onRoll={handleRoll} result={dice} />
      </div>
    </div>
  )
}

export default BoardComponent