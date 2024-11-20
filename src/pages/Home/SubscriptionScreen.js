import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SubscriptionItem from '../../components/Home/SubscriptionItem';

const subscriptions = [
  { id: '1', title: 'TVING', icon: require('../../assets/tving.png'), nextPayment: '11월 15일', monthlyFee: '월 9,500원 결제' },
  { id: '2', title: 'Netflix', icon: require('../../assets/netflix.png'), nextPayment: '11월 21일', monthlyFee: '월 13,500원 결제' },
  { id: '3', title: 'Disney+', icon: require('../../assets/disney.png'), nextPayment: '11월 21일', monthlyFee: '월 9,500원 결제' },
  { id: '4', title: 'Coupang Play', icon: require('../../assets/coopang.png'), nextPayment: '11월 8일', monthlyFee: '월 9,500원 결제' },
  { id: '5', title: 'Watcha', icon: require('../../assets/watcha.png'), nextPayment: '11월 17일', monthlyFee: '월 12,900원 결제' },
];

const SubscriptionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={[styles.header, Platform.OS === 'android' && styles.androidHeader]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>구독 관리</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 제목 및 설명 */}
      <View style={styles.titleContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.subTitle}>구독 관리</Text>
          {/* 구독 추가 버튼 */}
          <TouchableOpacity 
            style={styles.addButton} 
            onPress={() => navigation.navigate('SubscriptionListScreen')} // 화면 전환
          >
            <Text style={styles.addButtonText}>구독 추가</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>현재 {subscriptions.length}개를 구독하고 있어요</Text>
      </View>


      {/* 구독 리스트 */}
      <FlatList
        data={subscriptions}
        renderItem={({ item }) => (
          <SubscriptionItem
            icon={item.icon}
            title={item.title}
            nextPayment={item.nextPayment}
            monthlyFee={item.monthlyFee}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
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
  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingRight: 16, // 오른쪽 여백 추가
  },
  addButton: {
    backgroundColor: '#009984',
    borderRadius: 8,
    paddingHorizontal: 12, 
    maxWidth: '30%', 
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center', 
  },
  subTitle: { //구독관리 텍스트
    marginTop: 13, // 여기 쉼표 추가
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009984',
    marginLeft: 5,
    flex: 1,
  },

  description: { //현재 n개의 구독하고있어요 
    fontSize: 22,
    color: '#1A1A1A',
    marginTop: 4,
    fontWeight: 'bold',  
    marginLeft :5,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingLeft : 20,
    paddingRight : 20,
  },
});

export default SubscriptionScreen;
