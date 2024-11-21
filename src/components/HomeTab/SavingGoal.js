// src/components/SavingGoal.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SavingGoal = ({ month, date, amount }) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Text style={styles.savingMonth}>{month} 저축</Text>
        <Text style={styles.savingDate}>{date}</Text>
      </View>
      <Text style={styles.savingAmount}>+ {amount.toLocaleString()}원</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1, // 테두리 두께
    borderColor: '#e0e0e0', // 테두리 색상
  },
  leftContainer: {
    flexDirection: 'column',
  },
  savingMonth: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  savingDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  savingAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff5c5c',
  },
});

export default SavingGoal;
