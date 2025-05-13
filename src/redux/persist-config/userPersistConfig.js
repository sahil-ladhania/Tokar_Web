import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user', 
  storage,
  whitelist: ['user', 'token', 'isAuthenticated'] 
};

export default userPersistConfig;