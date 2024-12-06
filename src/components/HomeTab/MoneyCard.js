import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const MoneyCard = ({ income, expense, style }) => {
  return (
    <View style={[styles.card, { width: screenWidth * 0.9 }, style]}>
      <View style={styles.section}>
        <Image source={require('../../assets/moneyin.png')} style={styles.icon} />
        <View style={styles.info}>
          <Text style={styles.label}>수입</Text>
          <Text style={[styles.amount, styles.income]}>+ {income}원</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Image source={require('../../assets/moneyout.png')} style={styles.icon} />
        <View style={styles.info}>
          <Text style={styles.label}>지출</Text>
          <Text style={[styles.amount, styles.expense]}>- {expense}원</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    height: 120,
  },
  section: {
    flex: 1,
    flexDirection: 'column', // 세로 정렬
    alignItems: 'flex-start', // 왼쪽 정렬
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8, // 텍스트와 간격 추가
  },
  info: {
    alignItems: 'flex-start', // 텍스트를 왼쪽 정렬
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  income: {
    color: '#ff6b6b',
  },
  expense: {
    color: '#4d89ff',
  },
  divider: {
    width: 1,
    height: '80%',
    backgroundColor: '#ccc',
    marginHorizontal: 16,
  },
});

export default MoneyCard;
