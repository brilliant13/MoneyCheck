import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionIcon = ({ type }) => {
  const isIncome = type === 'income';
  
  return (
    <View style={[
      styles.container, 
      { backgroundColor: isIncome ? '#FFE8E8' : '#E8F4FF' }
    ]}>
      <Text style={[
        styles.icon, 
        { color: isIncome ? '#FF5252' : '#2196F3' }
      ]}>
        {isIncome ? '수입' : '지출'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 14,
    fontWeight: '600',
  }
});

export default TransactionIcon;