import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import userReducer from './slices/userSlice'
import computerModeReducer from './slices/playComputerSlice'
import onlineModeReducer from './slices/playOnlineSlice'
import friendsModeReducer from './slices/playFriendsSlice'
import userPersistConfig from './persist-config/userPersistConfig'
import computerModePersistConfig from './persist-config/computerModePersistConfig'
import onlineModePersistConfig from './persist-config/onlineModePersistConfig'
import friendsModePersistConfig from './persist-config/FriendsModePersistConfig'

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  computerMode: persistReducer(computerModePersistConfig, computerModeReducer),
  onlineMode: persistReducer(onlineModePersistConfig, onlineModeReducer),
  friendsMode: persistReducer(friendsModePersistConfig, friendsModeReducer),
})

export default rootReducer