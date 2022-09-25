import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('Order', { id: order.id })}
      style={styles.container}
    >
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.price}>3 items &#8226; $38.45</Text>
        <Text> 2 days ago &#8226; {order.status} </Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 5,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  price: {
    marginVertical: 5,
  },
});
