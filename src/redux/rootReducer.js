import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import userReducer from './slices/userSlice'
import computerModeReducer from './slices/playComputerSlice'
import userPersistConfig from './persist-config/userPersistConfig'
import computerModePersistConfig from './persist-config/computerModePersistConfig'

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  computerMode: persistReducer(computerModePersistConfig, computerModeReducer),
})

export default rootReducer