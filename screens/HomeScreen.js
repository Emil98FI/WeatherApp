import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FormButton from '../components/FormButton';
import Header from '../components/header';
import {TextInput, Button, Card, Title} from 'react-native-paper';
import {AuthContext} from '../navigation/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = (props) => {
  const [info, setInfo] = useState({
    name: 'loading !!',
    temp: 'loading',
    humidity: 'loading',
    desc: 'loading',
    icon: 'loading',
  });

  useEffect(() => {
    getWeather();
  });
  const getWeather = async () => {
    let MyCity = await AsyncStorage.getItem('newcity');
    if (!MyCity) {
      const {city} = props.route.params;
      MyCity = city;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&APPID=ff4737bbcdcd513fde17a3ee6fccdf40&units=metric`,
    )
      .then((data) => data.json())
      .then((results) => {
        console.log(results);
        setInfo({
          name: results.name,
          temp: results.main.temp,
          humidity: results.main.humidity,
          desc: results.weather[0].description,
          icon: results.weather[0].icon,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  if (props.route.params.city != 'london') {
    getWeather();
  }
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <Header name="Weather Home" />
      <View style={{alignItems: 'center'}}>
        <Title
          style={{
            color: '#00aaff',
            marginTop: 30,
            fontSize: 30,
          }}>
          {info.name}
        </Title>
        <Image
          style={{
            width: 120,
            height: 120,
          }}
          source={{
            uri: 'https://openweathermap.org/img/w/' + info.icon + '.png',
          }}
        />
      </View>

      <Card
        style={{
          margin: 5,
          padding: 12,
        }}>
        <Title style={{color: '#00aaff'}}>Temperature - {info.temp}°C</Title>
      </Card>
      <Card
        style={{
          margin: 5,
          padding: 12,
        }}>
        <Title style={{color: '#00aaff'}}>Humidity - {info.humidity}%</Title>
      </Card>
      <Card
        style={{
          margin: 5,
          padding: 12,
        }}>
        <Title style={{color: '#00aaff'}}>
          Description- "{info.desc.toUpperCase()}"
        </Title>
      </Card>

      <FormButton buttonTitle="Log Out" onPress={() => logout()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
