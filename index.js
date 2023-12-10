import 'react-native-gesture-handler';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {MainNavigation} from './src/screen/navigation/Navigation';

AppRegistry.registerComponent(appName, () => MainNavigation);
