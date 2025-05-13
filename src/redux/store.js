import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistConfig from './persist'
import { combineReducers } from 'redux'
import userReducer from './slices/userSlice.js';
import userPersistConfig from './persist-config/userPersistConfig.js';

const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig , userReducer)
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})