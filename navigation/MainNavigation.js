import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import PhoneScreen from '../screens/PhoneScreen';
import VerifScreen from '../screens/VerifScreen';
import RegiterScreen from '../screens/RegiterScreen';
import FirstAccountScreen from '../screens/FirstAccountScreen';
import AdressLocationScreen from '../screens/AdresseLocationScreen';
import HomeScreen from '../screens/HomeScreen';
import TabNavigation from './TabNavigation';

const MainNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="phone" component={PhoneScreen} />
      <Stack.Screen name="verif" component={VerifScreen} />
      <Stack.Screen name="register" component={RegiterScreen} />
      <Stack.Screen name="first" component={FirstAccountScreen} />
      <Stack.Screen name="location" component={AdressLocationScreen} />
      <Stack.Screen name="main" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
