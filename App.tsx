import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './src/HomeNavigator';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeNavigator">
        <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
