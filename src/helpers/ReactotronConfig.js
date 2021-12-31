import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import createSagaMiddleware from 'redux-saga';
import {NativeModules} from 'react-native';

let reactotron;
let sagaMiddleware;
let scriptHostname;

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
  reactotron = Reactotron.configure({name: 'BASE_SOURCE', host: scriptHostname})
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  const sagaMonitor = Reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({sagaMonitor});

  // Clear Reactotron logs
  Reactotron.clear();

  console.tron = Reactotron;
} else {
  reactotron = {
    log: (...args) => {},
    createEnhancer: () => {},
  };
  sagaMiddleware = createSagaMiddleware();
}

export {sagaMiddleware};

export default reactotron;
