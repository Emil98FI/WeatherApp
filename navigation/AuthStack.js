import React, {useEffect, useState} from 'react';
import {} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import SignUp from '../screens/signUpScreen';
import OnBoardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {GoogleSignin} from '@react-native-community/google-signin';
const AppStack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routename;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
        console.log(value);
      }
    });
    GoogleSignin.configure({
      webClientId:
        '385486621103-k3bqiag7neh652sdlrhfgsn1k9df26ft.apps.googleusercontent.com',
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch === true) {
    routename = 'Onboarding';
  } else {
    routename = 'login';
  }
  return (
    <AppStack.Navigator initialRouteName={routename} headerMode="none">
      <AppStack.Screen name="Onboarding" component={OnBoardingScreen} />
      <AppStack.Screen name="login" component={LoginScreen} />
      <AppStack.Screen name="SignUp" component={SignUp} />
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
    </AppStack.Navigator>
  );
};

export default AuthStack;
