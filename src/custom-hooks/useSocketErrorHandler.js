import { useEffect } from "react";
import socket from "../socket";
import {toast} from 'sonner';

export const useSocketErrorHandler = () => {
    useEffect(() => {
      const handlerSocketError = (data) => {
        toast.error(`Socket Error : ${data.message}`);
      }
      
      socket.on("error" , handlerSocketError);

      return () => {
        socket.off("error" , handlerSocketError);
      }
    }, []);   
}