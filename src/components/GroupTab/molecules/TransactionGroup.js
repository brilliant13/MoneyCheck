import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TransactionIcon from '../atoms/TransactionIcon';
import TransactionItem from '../atoms/TransactionItem';

const TransactionGroup = ({ type, items }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <TransactionIcon type={type} />
        <Text style={styles.typeText}>{type === 'income' ? '수입' : '지출'}</Text>
      </View>
      {items.map((item, index) => (
        <TransactionItem key={index} name={item.name} amount={item.amount} type={type} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 16
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  typeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6C6C6C',
    marginLeft: 8
  }
});

export default TransactionGroup;