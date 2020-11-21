import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {TextInput, Button, Card} from 'react-native-paper';
import FormButton from '../components/FormButton';
import Header from '../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../navigation/AuthProvider';
const HomeScreen = ({navigation}) => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const fetchCities = (text) => {
    setCity(text);
    fetch(
      'https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query=' +
        text +
        '&locationType=city&format=json',
    )
      .then((res) => res.json())
      .then((cityData) => {
        setCities(cityData.location.address.slice(0, 9));
      });
  };

  const btnClick = async () => {
    await AsyncStorage.setItem('newcity', city);
    navigation.navigate('home', {city: city});
  };
  const listClick = async (cityname) => {
    setCity(cityname);
    await AsyncStorage.setItem('newcity', cityname);
    navigation.navigate('home', {city: cityname});
  };
  return (
    <View style={styles.container}>
      <Header name="Search for a location" />
      <TextInput
        label="City name"
        theme={{colors: {primary: '#00aaff'}}}
        value={city}
        onChangeText={(text) => fetchCities(text)}
      />

      <FlatList
        data={cities}
        renderItem={({item}) => {
          return (
            <Card
              style={{margin: 2, padding: 12}}
              onPress={() => listClick(item)}>
              <Text>{item}</Text>
            </Card>
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
