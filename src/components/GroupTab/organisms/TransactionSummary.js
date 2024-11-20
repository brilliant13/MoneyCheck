// 거래 내역 요약

import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionGroup from '../molecules/TransactionGroup';
import ShowMoreButton from '../atoms/ShowMoreButton';

const TransactionSummary = () => {
  const incomeItems = [
    { name: '경민', amount: '10,000' },
    { name: '차민', amount: '20,000' }
  ];

  const expenseItems = [
    { name: '경민', amount: '10,000' },
    { name: '차민', amount: '20,000' }
  ];

  return (
    <View style={styles.container}>
      <TransactionGroup type="income" items={incomeItems} />
      <TransactionGroup type="expense" items={expenseItems} />
      <ShowMoreButton onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  }
});

export default TransactionSummary;