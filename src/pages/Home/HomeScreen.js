// src/pages/HomeScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader';
import GoalCard from '../../components/Home/GoalCard';

const { width: screenWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigation = useNavigation();

  const goals = [
    {
      id: '1',
      title: '맥북',
      level: 1,
      progress: 50,
      status: '목표를 위해 가는 중',
      image: require('../../assets/applewatch.png'),
    },
    {
      id: '2',
      title: '애플워치',
      level: 1,
      progress: 30,
      status: '목표를 위해 가는 중',
      image: require('../../assets/applewatch.png'),
    },
  ];

  const subscriptions = [
    { id: '1', title: 'TVING', icon: require('../../assets/tving.png') },
    { id: '2', title: 'Netflix', icon: require('../../assets/netflix.png') },
    { id: '3', title: 'Disney+', icon: require('../../assets/disney.png') },
    { id: '4', title: 'Goopang', icon: require('../../assets/coopang.png') },
    { id: '5', title: 'Watcha', icon: require('../../assets/watcha.png') },
  ];

  return (
    <View style={styles.container}>
      {/* 목표 목록 */}
      <Text style={styles.sectionTitle}>목표 목록</Text>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        {goals.map((goal, index) => (
          <View key={index} style={styles.page}>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('GoalScreen', { goal })
              }
            >
              <View>
                <GoalCard
                  title={goal.title}
                  level={goal.level}
                  progress={goal.progress}
                  status={goal.status}
                  image={goal.image}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
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

      {/* 구독 관리 */}
      <View style={styles.subscriptionContainer}>
        <View style={styles.subscriptionHeader}>
          <Text style={styles.subscriptionTitle}>구독 관리</Text>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('SubscriptionScreen')}>
            <Text style={styles.moreText}>더보기{`>`} </Text>
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.subscriptionSubtitle}>5개 구독 중</Text>
        <FlatList
          data={subscriptions}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.subscriptionIconWrapper}>
              <Image source={item.icon} style={styles.subscriptionIcon} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.subscriptionList}
          showsHorizontalScrollIndicator={false}
        />
      </View>
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
    height: 210,
    marginBottom: 5,
    width: screenWidth * 0.9,
    alignSelf: 'center',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.9,
    alignSelf: 'center',
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
  subscriptionContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  subscriptionTitle: {
    fontSize: 14,
    color: '#333',
  },
  subscriptionSubtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
    fontWeight: 'bold',

  },
  moreText: {
    fontSize: 12,
    color: '#B4B4B4',
    textAlign: 'right',
  },
  subscriptionList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscriptionIconWrapper: {
    marginRight: 12,
    alignItems: 'center',
  },
  subscriptionIcon: {
    width: 58,
    height: 58,
    borderRadius: 12,
  },
});

export default HomeScreen;
