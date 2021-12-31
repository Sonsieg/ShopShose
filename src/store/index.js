import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron, {sagaMiddleware} from '../helpers/ReactotronConfig';

import rootReducer from './reducers';
import {logger} from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store;

if (__DEV__) {
  store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, thunk, logger),
      Reactotron.createEnhancer(),
    ),
  );
} else {
  store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, thunk, logger)),
  );
}

const persistor = persistStore(store);

export {store, persistor};

export default store;
