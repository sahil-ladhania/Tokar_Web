import storage from 'redux-persist/lib/storage'

const friendsModePersistConfig = {
  key: 'friendsMode',
  storage,
  whitelist: ['numberOfPlayers', 'choseTokenColor' , 'step']
}

export default friendsModePersistConfig;