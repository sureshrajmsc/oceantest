// React Native Tab
// https://aboutreact.com/react-native-tab/
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RequestsScreen from '../screens/RequestsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import NavHeader from '../component/NavHeader';
import Login from '../screens/Account/Login.js'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RequestsScreenStack"
        screenOptions={{ header: NavHeader }}
        >
        <Stack.Screen
          name="RequestsScreenStack"
          component={Login}
          options={{
            // headerTitle: (props) => <Header />,
            // headerRight: () => ()
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
 
