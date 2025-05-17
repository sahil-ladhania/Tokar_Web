import storage from 'redux-persist/lib/storage'

const onlineModePersistConfig = {
  key: 'onlineMode',
  storage,
  whitelist: ['numberOfPlayers', 'choseTokenColor' , 'step']
}

export default onlineModePersistConfig;