import React from 'react'
import BackButtonComponent from './BackButtonComponent'
import PlayerLabelComponent from './PlayerLabelComponent'
import DiceControlComponent from './DiceControlComponent'

export const BoardCanvasComponent = ({ diceValues, onRoll, goBack }) => (
    <div className="relative w-full max-w-[800px] mx-auto aspect-square">
    {/* 1. Perfect board art */}
    <img
    //   src={boardImg}
        src='https://static.vecteezy.com/system/resources/thumbnails/048/467/153/small_2x/ludo-indoor-fun-board-game-illustration-vector.jpg'
        alt="Ludo Board"
        className="w-full h-full rounded-lg shadow-xl"
    />

    {/* 2. Back button */}
    <BackButtonComponent onClick={goBack} />

    {/* 3. Four dice controls */}
    <DiceControlComponent
      color="red"
      value={diceValues.red}
      onRoll={() => onRoll('red')}
      className="top-4 left-4"
    />
    <DiceControlComponent
      color="green"
      value={diceValues.green}
      onRoll={() => onRoll('green')}
      className="top-4 right-4"
    />
    <DiceControlComponent
      color="yellow"
      value={diceValues.yellow}
      onRoll={() => onRoll('yellow')}
      className="bottom-4 right-4"
    />
    <DiceControlComponent
      color="blue"
      value={diceValues.blue}
      onRoll={() => onRoll('blue')}
      className="bottom-4 left-4"
    />

    {/* 4. Player labels */}
    <PlayerLabelComponent label="Bot1" className="top-24 left-6" />
    <PlayerLabelComponent label="Bot2" className="top-24 right-6" />
    <PlayerLabelComponent label="Bot3" className="bottom-24 right-6" />
    <PlayerLabelComponent label="You"  className="bottom-24 left-6" />
  </div>
)