import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import HomeTwo from './HomeTwo';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="HomeTwo" component={HomeTwo} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
