import React, { useState, useEffect } from 'react';
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
import GoalCard from '../../components/HomeTab/GoalCard';
import MoneyCard from '../../components/HomeTab/MoneyCard';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width: screenWidth } = Dimensions.get('window');

const HomeScreen = ({ route }) => {
  const [goals, setGoals] = useState([
    {
      id: '1',
      title: '맥북',
      level: 1,
      progress: 50,
      status: '목표를 위해 가는 중',
      image: require('../../assets/macbook.png'),
      targetAmount: 2000000, // 목표 금액
      targetMonths: 12, // 목표 개월수
      paymentDay: 15, // 월 결제일
    },
    {
      id: '2',
      title: '애플워치',
      level: 1,
      progress: 30,
      status: '목표를 위해 가는 중',
      image: require('../../assets/applewatch.png'),
      targetAmount: 500000, // 목표 금액
      targetMonths: 6, // 목표 개월수
      paymentDay: 5, // 월 결제일
    },
    {
      id: '3',
      title: '아이패드',
      level: 1,
      progress: 87,
      status: '목표를 위해 가는 중',
      image: require('../../assets/ipad.png'),
      targetAmount: 800000, // 목표 금액
      targetMonths: 10, // 목표 개월수
      paymentDay: 10, // 월 결제일
    },
    {
      id: '4',
      title: '아이패드 미니',
      level: 4,
      progress: 34,
      status: '목표를 위해 가는 중',
      image: require('../../assets/ipad.png'),
      targetAmount: 700000, // 목표 금액
      targetMonths: 8, // 목표 개월수
      paymentDay: 20, // 월 결제일
    },
  ]);

  const [subscriptions, setSubscriptions] = useState([
    { id: '1', title: 'TVING', icon: require('../../assets/tving.png') },
    { id: '2', title: 'Netflix', icon: require('../../assets/netflix.png') },
    { id: '3', title: 'Disney+', icon: require('../../assets/disney.png') },
  ]);

  const [currentPage, setCurrentPage] = useState(0); // currentPage 상태 추가
  const [totalIncome, setTotalIncome] = useState(2500000); // 기본 고정 수입
  const navigation = useNavigation();


  // useFocusEffect 사용하여 화면에 포커스될 때마다 수입 데이터 로드
  useFocusEffect(
    React.useCallback(() => {
      const loadIncomes = async () => {
        try {
          const existingData = await AsyncStorage.getItem('incomes');
          if (existingData) {
            const incomes = JSON.parse(existingData);
            const newTotalIncome = incomes.reduce((total, income) => {
              return total + income.amount;
            }, 2500000); // 기존 고정 수입에 새로운 수입 추가
            
            setTotalIncome(newTotalIncome);
          }
        } catch (error) {
          console.error('수입 데이터 로드 실패:', error);
        }
      };

      loadIncomes();
    }, [])
  );
  


  // 새로운 목표 추가 처리
  useEffect(() => {
    if (route.params?.newGoal) {
      setGoals((prevGoals) => [...prevGoals, route.params.newGoal]);
    }
  }, [route.params?.newGoal]);

  // 새로운 구독 추가 처리
  useEffect(() => {
    if (route.params?.newSubscription) {
      setSubscriptions((prev) => [...prev, route.params.newSubscription]);
    }
  }, [route.params?.newSubscription]);

  return (
    <View style={styles.container}>

      {/* MoneyCard 컴포넌트에 totalIncome 전달 */}
      <MoneyCard 
        income={totalIncome.toString()} 
        expense="400000" 
        style={styles.moneyPager}
      />
      

      {/* 목표 목록 */}
      <Text style={styles.sectionTitle}>목표 목록</Text>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)} // currentPage 업데이트
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
        <Text style={styles.subscriptionSubtitle}>{subscriptions.length}개 구독 중</Text>
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
    backgroundColor: '#ffffff',
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    marginBottom: -5,
    color: '#222',
    marginLeft: screenWidth * 0.05, // pagerView의 왼쪽과 동일한 비율로 설정
  },
  moneyPager:{
    alignSelf: 'center',


  },
  pagerView: {
    height: 220,
    marginBottom: 5,
    width: screenWidth * 0.9,
    alignSelf: 'center',
    marginTop: 20,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.9,
    alignSelf: 'center',
    height: 230,
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
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.0,
    shadowRadius: 0,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#ECECEC',
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
