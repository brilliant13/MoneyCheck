import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native'; // React Navigation 사용
import CustomHeader from '../components/CustomHeader';
import GoalCard from '../components/Home/GoalCard';
import SubscriptionCard from '../components/Home/SubscriptionCard';

const { width: screenWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태
  const navigation = useNavigation(); // Navigation 객체

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
    {
      id: '3',
      title: '아이패드',
      level: 4,
      progress: 87,
      status: '목표를 위해 가는 중',
      image: require('../assets/ipad.png'),
    },
  ];

  // 구독 데이터
  const subscriptions = [
    { id: '1', title: 'Netflix', price: 12000 },
    { id: '2', title: 'Spotify', price: 8000 },
  ];

  return (
    <View style={styles.container}>
      {/* 상단 커스텀 헤더 */}
      <CustomHeader title="Home" />

      {/* 목표 목록 (뷰페이저) */}
      <Text style={styles.sectionTitle}>목표 목록</Text>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)} // 페이지 변경 시 업데이트
      >
        {goals.map((goal, index) => (
          <TouchableOpacity
            key={index}
            style={styles.page}
            onPress={() =>
              navigation.navigate('GoalScreen', { goal }) // GoalScreen으로 전환
            }
          >
            <GoalCard
              title={goal.title}
              level={goal.level}
              progress={goal.progress}
              status={goal.status}
              image={goal.image}
            />
          </TouchableOpacity>
        ))}
      </PagerView>

      {/* 인디케이터 */}
      <View style={styles.indicatorContainer}>
        {goals.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentPage === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>

      {/* 구독 목록 */}
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
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#222',
  },
  pagerView: {
    height: 210, // 높이 조정
    marginBottom: 5,
    width: screenWidth * 0.9, // 너비를 화면 너비의 90%로 조정
    alignSelf: 'center', // 뷰페이저 중앙 정렬
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.9,
    alignSelf: 'center',
  },
  list: {
    marginBottom: 16,
    width: screenWidth * 0.9,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#32CD32',
  },
});

export default HomeScreen;
