// 진행 상태 바

import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => (
  <View style={styles.container}>
    <View style={[styles.progress, { width: `${progress * 100}%` }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: '#E8E8E8',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#00BFA5',
  }
});

export default ProgressBar;