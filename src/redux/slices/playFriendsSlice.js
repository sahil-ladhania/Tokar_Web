import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step : 0,
    numberOfPlayers : null,
    choseTokenColor : "",
    roomCode : null,
    gameSessionId : null,
    hostParticipant : null,
    myParticipant : null,
    remainingParticipants : [],
    loading: false,         
    error: null
}

const playFriendsSlice = createSlice({
    name : 'friendsMode',
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
        setHostParticipant : (state , action) => {
            state.hostParticipant = action.payload;
        },
        setMyParticipant : (state , action) => {
            state.myParticipant = action.payload;
        },
        setRemainingParticipants : (state , action) => {
            state.remainingParticipants = [...state.remainingParticipants , action.payload];
        },
    }
});

export const {
    setIsLoading,
    setError,
    setNumberOfPlayers,
    setStep,
    setChosenTokenColor,
    setRoomCode,
    setGameSessionId,
    setHostParticipant,
    setMyParticipant,
    setRemainingParticipants
} = playFriendsSlice.actions;

export default playFriendsSlice.reducer;
