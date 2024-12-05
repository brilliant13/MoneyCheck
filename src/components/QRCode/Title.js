// components/Title.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#00a99d', // 초록색
    fontWeight: '600',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
});

export default Title;
