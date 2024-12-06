// src/styles/AccountBookTabStyles/IncomeListStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 2, // 가로 여백 조정
    paddingTop: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '97%', // 카드의 가로 크기 설정
    alignSelf: 'center', // 중앙 정렬
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDate: {
    fontSize: 12,
    color: '#999',
  },
  itemAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
});
