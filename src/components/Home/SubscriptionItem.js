import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SubscriptionItem = ({ icon, title, nextPayment, monthlyFee }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topContainer}>
        <Image source={icon} style={styles.icon} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.paymentCycle}>매달 15일 결제</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.bottomContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.nextDay}>
            {'다음 결제일 '}
            <Text style={styles.nextPayment}>{nextPayment}</Text>
          </Text>
        </View>
        <Text style={styles.monthlyFee}>{monthlyFee}</Text>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    height : 150,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  paymentCycle: {
    fontSize: 12,
    color: '#00796b',
    backgroundColor: '#e0f7fa', // 배경 색상
    paddingHorizontal: 8, // 좌우 여백
    paddingVertical: 4, // 상하 여백
    borderRadius: 5, // 모서리 둥글게
    textAlign: 'center', // 텍스트 중앙 정렬
    alignSelf: 'flex-end', // 부모의 오른쪽 위로 정렬
    marginBottom : 20,
  },

  divider: {
    height: 2,
    backgroundColor: '#E8E8E8',
    marginVertical: 8,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextDay: { //다음 결제 일
    fontSize: 14,
    color: '#6C6C6C',
    fontWeight: 'semibold',
    marginTop : 10,
  },
  nextPayment: { //다음 결제 일자
    fontSize: 14,
    color: '#3A3A3A',
    fontWeight: 'bold',
  },
  monthlyFee: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009984',
    marginTop : 10,

  },
});

export default SubscriptionItem;
