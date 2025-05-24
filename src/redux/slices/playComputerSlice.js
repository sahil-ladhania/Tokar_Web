import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    step : 1,
    numberOfPlayers : null,
    choseTokenColor : "",
    roomCode : null,
    gameSessionId : null,
    participants : null,
    loading: false,         
    error: null
};

export const playComputerSlice = createSlice({
    name : 'computerMode',
    initialState,
    reducers : {
        setIsLoading : (state , action) => {
            state.loading = action.payload;
        },
        setError : (state , action) => {
            state.error = action.payload;
        },
        setNumberOfPlayers : (state , action) => {
            state.numberOfPlayers = action.payload;
        },
        setStep : (state , action) => {
            state.step =  action.payload;
        },
        setChosenTokenColor : (state , action) => {
            state.choseTokenColor = action.payload;
        },
        setRoomCode : (state , action) => {
            state.roomCode = action.payload;
        },
        setGameSessionId : (state , action) => {
            state.gameSessionId = action.payload;
        },
        setParticipants : (state , action) => {
            state.participants = action.payload;
        },
    }
})

export const {
    setIsLoading,
    setError,
    setNumberOfPlayers,
    setStep,
    setChosenTokenColor,
    setRoomCode,
    setGameSessionId,
    setParticipants
} = playComputerSlice.actions;

export default playComputerSlice.reducer;