// 홈 탭 화면
// src/pages/HomeScreen.js
// src/pages/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import GoalCard from '../components/Home/GoalCard';
import SubscriptionCard from '../components/Home/SubscriptionCard';

const HomeScreen = () => {
  // 목표 데이터
  const goals = [
    {
      id: '1',
      title: '맥북',
      level: 1,
      progress: 50,
      status: '목표를 위해 가는 중',
      image: require('../assets/applewatch.png'),
    },
    {
      id: '2',
      title: '애플워치',
      level: 1,
      progress: 30,
      status: '목표를 위해 가는 중',
      image: require('../assets/applewatch.png'),
    },
  ];

  // 구독 데이터
  const subscriptions = [
    { id: '1', title: 'Netflix', price: 12000 },
    { id: '2', title: 'Spotify', price: 8000 },
  ];

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <CustomHeader title="Home" />

      {/* 목표 목록 섹션 */}
      <Text style={styles.sectionTitle}>목표 목록</Text>
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <GoalCard
            title={item.title}
            level={item.level}
            progress={item.progress}
            status={item.status}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      {/* 구독 목록 섹션 */}
      <Text style={styles.sectionTitle}>구독 목록</Text>
      <FlatList
        data={subscriptions}
        renderItem={({ item }) => (
          <SubscriptionCard title={item.title} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#222',
  },
  list: {
    marginBottom: 16,
  },
});

export default HomeScreen;
