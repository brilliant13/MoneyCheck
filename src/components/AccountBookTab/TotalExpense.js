// src/components/AccountBookTab/TotalExpense.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/AccountBookTabStyles/TotalExpenseStyles';
const TotalExpense = ({ month, expense }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.totalExpenseText}>

        {/* {`${month} 소비 ${expense.toLocaleString()} 원`} */}

        <Text style={styles.monthText}>{`${month} 소비 `}</Text>

        <Text style={styles.expenseText}>{` ${expense.toLocaleString()}`}</Text>
        <Text style={styles.monthText}>{' 원'}</Text>



      </Text>
    </View>
  );
};

export default TotalExpense;
