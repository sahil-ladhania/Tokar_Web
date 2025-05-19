import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import socket from "../socket";
import { setGameSessionId, setParticipants, setRoomCode } from "../redux/slices/playOnlineSlice";

export const useMatchmakingSocketListener = (step) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      if(step !== 2){
        return;
      }
      const handleMatchFound = ({roomCode, gameSessionId, participants}) => {
          dispatch(setRoomCode(roomCode));
          dispatch(setGameSessionId(gameSessionId));
          dispatch(setParticipants(participants));
          navigate(`/lobby/${roomCode}`);
      }

        socket.on("match-found" , handleMatchFound);
      return () => {
        socket.off("match-found" , handleMatchFound);
      }
    }, [step]);
};