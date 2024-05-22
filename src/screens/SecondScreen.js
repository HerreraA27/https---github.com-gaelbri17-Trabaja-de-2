import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';

const favoriteDrinks = [
  {
    id: 1,
    name: 'Pilsener',
    description: 'Bebida alcoholica',
    image: require('c:\Users\Tatiana Herrera\Downloads\Pilsener.jpg'),
  },
  {
    id: 2,
    name: 'Suprema Roja',
    description: 'Bebida alcoholica',
    image: require('c:\Users\Tatiana Herrera\Downloads\Suprema Roja.jpg'),
  },
  {
    id: 3,
    name: 'Regia',
    description: 'Bebida alcoholica',
    image: require('c:\Users\Tatiana Herrera\Downloads\Regia.jpg'),
  },
  {
    id: 4,
    name: 'Suprema verde',
    description: 'Bebida alcoholica',
    image: require('c:\Users\Tatiana Herrera\Downloads\Suprema verde.jpg'),
  },
  {
    id: 5,
    name: 'Corona',
    description: 'Bebida alcoholica',
    image: require('c:\Users\Tatiana Herrera\Downloads\Corona.jpg'),
  },
  {
    id: 6,
    name: 'Modelo',
    description: 'Bebida alcoholica',
    image: require('c:\Users\Tatiana Herrera\Downloads\Modelo.jpeg'),
  },
];
const statusBarHeight = Constants.statusBarHeight || StatusBar.currentHeight || 0;

const FavoriteFoodsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {favoriteDrinks.map(food => (
        <View key={Drinks.id} style={styles.DrinksContainer}>
          <Image source={Drinks.image} style={styles.DrinksImage} />
          <Text style={styles.DrinksName}>{Drinks.name}</Text>
          <Text style={styles.DrinksDescription}>{Drinks.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:statusBarHeight,
    paddingHorizontal:10,
    backgroundColor: '#fff',
  },
  DrinksContainer: {
    marginBottom: 20,
  },
  DrinksImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  DrinksName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  DrinksDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default FavoriteDrinksScreen;
