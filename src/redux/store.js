import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistConfig from './persist'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    // add reducers 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})