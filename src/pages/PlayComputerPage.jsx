import React from 'react'
import PlayerCountDesign from '../components/play-with-computer/PlayerCountDesign'
import ColorSelectDesign from '../components/play-with-computer/ColorSelectDesign'
import { useSelector } from 'react-redux'
import { useSocketErrorHandler } from '../custom-hooks/useSocketErrorHandler'

const PlayComputerPage = () => {
  const {step} = useSelector((store) => store.computerMode);
  useSocketErrorHandler();

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