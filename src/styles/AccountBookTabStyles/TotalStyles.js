// src/styles/AccountBookTabStyles/TotalStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      marginVertical: 20,
      padding: 15,
      backgroundColor: '#E0F7FA',
      borderRadius: 10,
    },
    totalExpenseText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#00796B',
      textAlign: 'center',
    },
    summaryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
    summaryItem: {
      alignItems: 'center',
    },
    incomeLabel: {
      color: '#FF5252',
      fontWeight: 'bold',
    },
    expenseLabel: {
      color: '#2196F3',
      fontWeight: 'bold',
    },
    incomeAmount: {
      color: '#FF5252',
      fontSize: 16,
    },
    expenseAmount: {
      color: '#2196F3',
      fontSize: 16,
    },
  });
