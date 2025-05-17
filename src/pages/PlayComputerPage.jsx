import React from 'react'
import PlayerCountDesign from '../components/play-with-computer/PlayerCountDesign'
import ColorSelectDesign from '../components/play-with-computer/ColorSelectDesign'
import { useSelector } from 'react-redux'

const PlayComputerPage = () => {
  const {step} = useSelector((store) => store.computerMode);

  return (
    <>
      {
        step === 1 ?
        <>
          <PlayerCountDesign />
        </>
        :
        <>
          <ColorSelectDesign />
        </>
      }
    </>
  )
}

export default PlayComputerPage