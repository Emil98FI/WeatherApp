//Emil Brummer 1800720

import React, {useEffect, Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

import SplashScreen from 'react-native-splash-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';

const tabs = createBottomTabNavigator();
const AppStack = () => {
  return (
    //Tab navigator for the main app
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />

      <tabs.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName;
            if (route.name === 'home') {
              iconName = 'home-city-outline';
            } else if (route.name === 'search') {
              iconName = 'city';
            }
            return (
              <MaterialCommunityIcons name={iconName} size={25} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#00aaff',
          inactiveBackgroundColor: '#00aaff',
        }}>
        <tabs.Screen
          name="home"
          component={HomeScreen}
          initialParams={{city: 'london'}}
        />
        <tabs.Screen name="search" component={SearchScreen} />
      </tabs.Navigator>
    </>
  );
};

export default AppStack;
