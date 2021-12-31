/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {LoginScreen} from './src/containers';

AppRegistry.registerComponent(appName, () => LoginScreen);
