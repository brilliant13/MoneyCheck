// src/components/IncomeList.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/AccountBookTabStyles/IncomeListStyles';

const incomeData = [
  { id: 1, name: '용돈', date: '10.24', amount: '+ 70,000원' },
  { id: 2, name: '주식', date: '10.24', amount: '+ 50,000원' },
  { id: 3, name: '앱테크', date: '10.24', amount: '+ 16,000원' },
  { id: 4, name: '캐시백', date: '10.24', amount: '+ 48,000원' },
  { id: 5, name: '적금 이자', date: '10.24', amount: '+ 9,000원' },
];

const IncomeList = () => {
  return (
    <View style={styles.container}>
      



      {incomeData.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDate}>{item.date}</Text>
          <Text style={styles.itemAmount}>{item.amount}</Text>
        </View>
      ))}
    </View>
  );
};



export default IncomeList;
