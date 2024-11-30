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
import GoalCard from '../../components/HomeTab/GoalCard';

const { width: screenWidth } = Dimensions.get('window');

const GoalScreen = ({ navigation }) => {
  const goals = [
    {
      id: '1',
      title: '맥북',
      progress: 50,
      status: '목표를 위해 가는 중',
      image: require('../../assets/macbook.png'),
    },
    {
      id: '2',
      title: '애플워치',
      progress: 30,
      status: '목표를 위해 가는 중',
      image: require('../../assets/applewatch.png'),
    },
    {
      id: '3',
      title: '아이패드',
      progress: 87,
      status: '목표를 위해 가는 중',
      image: require('../../assets/ipad.png'),
    },
    {
      id: '4',
      title: '아이패드 미니',
      progress: 34,
      status: '목표를 위해 가는 중',
      image: require('../../assets/ipad.png'),
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
        <View style={styles.titleRow}>
          <Text style={styles.subTitle}>목표 물건</Text>
          {/* 목표 추가 버튼 */}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('GoalAddScreen')} // 화면 전환
          >
            <Text style={styles.addButtonText}>+ 목표 추가</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>현재 {goals.length}개의 목표를 설정했어요</Text>
      </View>

      {/* 목표 카드 목록 */}
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardWrapper}
            onPress={() =>
              navigation.navigate('GoalDetail', { goal: item }) // 'GoalDetail'로 전환하며 클릭한 목표 데이터 전달
            }
          >
            <GoalCard
              title={item.title}
              level={item.level}
              progress={item.progress}
              status={item.status}
              image={item.image}
            />
          </TouchableOpacity>
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
    backgroundColor: '#ffffff',
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
    marginBottom: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: -5,
    paddingRight: 16, // 오른쪽 여백 추가
  },
  addButton: {
    backgroundColor: '#00AB96',
    borderRadius: 8,
    paddingHorizontal: 12,
    maxWidth: '30%',
    height: 30,
    justifyContent: 'center', // 세로 방향 가운데 정렬
    alignItems: 'center', // 가로 방향 가운데 정렬
    marginTop: 26, // 버튼의 상단 간격 추가
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 13, // 여기 쉼표 추가
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009984',
    marginLeft: 5,
    flex: 1,
  },
  description: {
    fontSize: 20,
    color: '#1A1A1A',
    marginTop: 4,
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 15,
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
