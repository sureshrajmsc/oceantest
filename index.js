/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
// import App from './src_todo1/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
