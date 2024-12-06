// 거래 내역 요약

import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionGroup from '../molecules/TransactionGroup';
import ShowMoreButton from '../atoms/ShowMoreButton';

const TransactionSummary = ({ transactions }) => {
  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <View style={styles.groupContainer}>
          <TransactionGroup type="income" items={transactions.income} />
          <ShowMoreButton onPress={() => {}} />
        </View>
        <View style={styles.divider} />
        <View style={styles.groupContainer}>
          <TransactionGroup type="expense" items={transactions.expense} />
          <ShowMoreButton onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 16,
  },
  groupContainer: {
    flex: 1,
  },
  divider: {
    width: 1,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 8,
  },
});

export default TransactionSummary;