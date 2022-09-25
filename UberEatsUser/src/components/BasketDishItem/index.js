import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>

      <Text style={styles.dishName}>{basketDish.name}</Text>
      <Text style={styles.price}>$ {basketDish.price}</Text>
    </View>
  );
};

export default BasketDishItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  quantityContainer: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    marginRight: 10,
    paddingVertical: 2,
    borderRadius: 3,
  },
  dishName: {
    fontWeight: '600',
  },
  price: {
    marginLeft: 'auto',
  },
});
