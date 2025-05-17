import storage from 'redux-persist/lib/storage'

const computerModePersistConfig = {
  key: 'computerMode',
  storage,
  whitelist: ['numberOfPlayers', 'choseTokenColor' , 'step']
}

export default computerModePersistConfig