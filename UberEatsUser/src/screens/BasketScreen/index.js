import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import restaurants from '../../../assets/data/restaurants.json';
import BasketDishItem from '../../components/BasketDishItem';
const restaurant = restaurants[0];

const BasketScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>Your items</Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create order</Text>
      </View>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    padding: 10,
    paddingVertical: 30, //temp fix
  },
  name: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 19,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
});
