import React, {useEffect, useContext, Component} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Appbar, Title} from 'react-native-paper';
import {View, Text, FormButton, StyleSheet} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
const Footer = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View>
      <Text style={styles.text}>Welcome {user.uid}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()} />;
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});

export default Footer;
