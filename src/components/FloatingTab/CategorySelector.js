import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategorySelector = () => {
  const categories = [
    { emoji: '💰', name: '월급' },
    { emoji: '💸', name: '용돈' },
    { emoji: '📈', name: '투자' },
    { emoji: '📝', name: '기타' },
  ];

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <View key={index} style={styles.categoryItem}>
          <Text style={styles.emoji}>{category.emoji}</Text>
          <Text style={styles.categoryName}>{category.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  categoryItem: {
    width: 70,
    height: 70,
    backgroundColor: '#F2F2F2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  emoji: {
    fontSize: 26,
    color: '#6C6C6C',
    fontFamily: 'SF Pro',
    fontWeight: '500',
  },
  categoryName: {
    fontSize: 11,
    color: '#949494',
    fontFamily: 'Pretendard',
    fontWeight: '400',
    marginTop: 8,
  },
});

export default CategorySelector; 