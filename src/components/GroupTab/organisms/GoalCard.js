// 목표 카드 (호텔 뷔페, 미국여행 등)

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Badge from '../atoms/Badge';
import ProgressBar from '../atoms/ProgressBar';

const GoalCard = ({ title, emoji, level, progress }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Badge level={level} backgroundColor="#00BFA5" />
    </View>
    <View style={styles.progressContainer}>
      <Text style={styles.progressText}>목표를 위해 가는 중</Text>
      <ProgressBar progress={progress} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressContainer: {
    gap: 8,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  }
});

export default GoalCard;