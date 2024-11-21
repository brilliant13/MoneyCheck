// src/components/Home/SubscriptionCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubscriptionCard = ({ title, price }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>가격: {price}원</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#555',
  },
});

export default SubscriptionCard;
