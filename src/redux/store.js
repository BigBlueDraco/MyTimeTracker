import storage from 'reduxjs-toolkit-persist/lib/storage';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import { persistReducer, persistStore } from 'reduxjs-toolkit-persist';

const { configureStore, combineReducers } = require('@reduxjs/toolkit');
const { treckersReducer } = require('./treckersSlice');

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
  treckers: treckersReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
});

export const persistor = persistStore(store);
