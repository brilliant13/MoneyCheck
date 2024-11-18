// src/pages/GoalScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GoalCard from '../components/Home/GoalCard';

const { width: screenWidth } = Dimensions.get('window');

const GoalScreen = ({ navigation }) => {
  const goals = [
    {
      id: '1',
      title: '맥북',
      level: 1,
      progress: 50,
      status: '목표를 위해 가는 중',
      image: require('../assets/macbook.png'),
    },
    {
      id: '2',
      title: '애플워치',
      level: 1,
      progress: 30,
      status: '목표를 위해 가는 중',
      image: require('../assets/applewatch.png'),
    },
    {
      id: '3',
      title: '아이패드',
      level: 1,
      progress: 87,
      status: '목표를 위해 가는 중',
      image: require('../assets/ipad.png'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={[styles.header, Platform.OS === 'android' && styles.androidHeader]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>목표 물건</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 제목 및 설명 */}
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>목표 물건</Text>
        <Text style={styles.description}>현재 {goals.length}개의 목표를 설정했어요</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => alert('목표 추가하기')}
        >
          <Text style={styles.addButtonText}>+ 목표 추가</Text>
        </TouchableOpacity>
      </View>

      {/* 목표 카드 목록 */}
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <GoalCard
              title={item.title}
              level={item.level}
              progress={item.progress}
              status={item.status}
              image={item.image}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    height: 60, // 기본 헤더 높이
    backgroundColor: '#ffffff',
    elevation: 3, // Android 그림자 효과
    shadowColor: '#000', // iOS 그림자 색상
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  androidHeader: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // 안드로이드 상태바 높이
    height: Platform.OS === 'android' ? 60 + StatusBar.currentHeight : 60, // 전체 헤더 높이
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00796b',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#00796b',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  cardWrapper: {
    marginBottom: 16,
  },
});

export default GoalScreen;
