import React from 'react'
import OnlinePlayerCountDesign from '../components/play-online/OnlinePlayerCountDesign'
import OnlineColorSelectDesign from '../components/play-online/OnlineColorSelectDesign'
import { useSelector } from 'react-redux'
import {useMatchmakingSocketListener} from '../custom-hooks/useMatchmakingSocketListener.js';
import { useSocketErrorHandler } from '../custom-hooks/useSocketErrorHandler.js';

const PlayOnlinePage = () => {
  const {step} = useSelector((store) => store.onlineMode);
  useSocketErrorHandler();
  useMatchmakingSocketListener(step);

  return (
    <>
      {
        step === 1 ?
          <>
            <OnlinePlayerCountDesign />
          </>
          :
          <>
            <OnlineColorSelectDesign />
          </>
      }
    </>
  )
}

export default PlayOnlinePage