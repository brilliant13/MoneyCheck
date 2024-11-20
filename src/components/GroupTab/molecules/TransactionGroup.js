import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TransactionIcon from '../atoms/TransactionIcon';

const TransactionGroup = ({ type, items }) => {
  return (
    <View style={styles.container}>
      <TransactionIcon type={type} />
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={[
            styles.amount,
            { color: type === 'income' ? '#FF5252' : '#2196F3' }
          ]}>
            {type === 'income' ? '+' : '-'} {item.amount}원
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  name: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default TransactionGroup;