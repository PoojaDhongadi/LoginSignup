import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';


const rootReducer = combineReducers({ userReducer });

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

let persistedReducer = persistReducer(persistConfig,rootReducer);

export const Store = createStore(persistedReducer, applyMiddleware(thunk));