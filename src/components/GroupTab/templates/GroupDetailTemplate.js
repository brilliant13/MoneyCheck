// 공동관리 페이지 템플릿

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import GroupTabs from '../molecules/GroupTabs';
import TransactionSummary from '../organisms/TransactionSummary';
import GoalCard from '../organisms/GoalCard';

const GroupDetailTemplate = () => (
  <ScrollView style={styles.container}>
    <GroupTabs />
    <TransactionSummary />
    <View style={styles.goalContainer}>
      <GoalCard 
        title="호텔 뷔페"
        emoji="🍽️"
        level={1}
        progress={0.4}
      />
      <GoalCard 
        title="미국여행"
        emoji="🇺🇸"
        level={1}
        progress={0.4}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  goalContainer: {
    padding: 16,
  }
});

export default GroupDetailTemplate;