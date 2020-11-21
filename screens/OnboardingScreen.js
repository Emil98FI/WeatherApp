import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onDone={() => navigation.replace('login')}
      onSkip={() => navigation.navigate('login')}
      pages={[
        {
          backgroundColor: '#68afed',
          image: <Image source={require('../assets/mainpicc1.png')} />,
          title: 'Weather Home',
          subtitle: 'Welcome to Home-Weather!',
        },
        {
          backgroundColor: '#f7ef00',
          image: <Image source={require('../assets/weather-3.png')} />,
          title: 'The Best Weather App!',
          subtitle: 'Login/Register and start using right away!',
        },
        {
          backgroundColor: '#a9c6f5',
          image: <Image source={require('../assets/snowww.png')} />,
          title: 'Simle and fun!',
          subtitle: 'Choose your homecity and change it whenever you want!',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
