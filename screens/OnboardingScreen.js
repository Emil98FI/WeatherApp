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
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#f7ef00',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#f72a9b',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
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
