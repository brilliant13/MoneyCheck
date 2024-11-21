import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GoalCard from '../../components/HomeTab/GoalCard';
import SavingItem from '../../components/HomeTab/SavingGoal'; // SavingItem 컴포넌트 가져오기

const { width: screenWidth } = Dimensions.get('window');

const GoalDetailScreen = ({ navigation, route }) => {
  const { goal } = route.params; // 클릭한 목표 데이터 받아오기

  const savingsHistory = [
    { id: '1', month: '9월', date: '09.24', amount: 70000 },
    { id: '2', month: '8월', date: '08.24', amount: 70000 },
    { id: '3', month: '7월', date: '07.24', amount: 70000 },
    { id: '4', month: '6월', date: '06.24', amount: 70000 },
    { id: '5', month: '5월', date: '05.24', amount: 70000 },
  ];

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={[styles.header, Platform.OS === 'android' && styles.androidHeader]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>목표 물건 상세</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 목표 상세 정보 */}
      <View style={styles.goalContainer}>
        <GoalCard
          title={goal.title}
          level={goal.level}
          progress={goal.progress}
          status={goal.status}
          image={goal.image}
        />
      </View>

      {/* 저축 내역 */}
      <View style={styles.savingsContainer}>
        <View style={styles.savingsHeader}>
          <Text style={styles.savingsTitle}>저축 내역</Text>
          <Text style={styles.totalSavings}>2,500,000 / 36개월</Text>
        </View>
        <FlatList
          data={savingsHistory}
          renderItem={({ item }) => (
            <SavingItem
              month={item.month}
              date={item.date}
              amount={item.amount}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    height: 60,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  androidHeader: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    height: Platform.OS === 'android' ? 60 + StatusBar.currentHeight : 60,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  goalContainer: {
    padding: 16,
    alignItems: 'center',
  },
  savingsContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  savingsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  savingsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalSavings: {
    fontSize: 14,
    color: '#666',
  },
});

export default GoalDetailScreen;
