//Emil Brummer 1800720

import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useState, useEffect} from 'react';
import AuthStack from './AuthStack';
import {AuthContext} from './AuthProvider';

import auth from '@react-native-firebase/auth';

import AppStack from './AppStack';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  if (initializing) return null;

  //Conditionally returning Home screen if user is signed in

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
