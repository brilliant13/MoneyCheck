// src/styles/AccountBookTabStyles/IncomeListStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center', // 수직 정렬 개선
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 5,
    borderRadius: 10,
  },
  itemName: { 
    flex: 1, // 너비 비율 조정
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  itemDate: { 
    flex: 1, // 너비 비율 조정
    fontSize: 14, 
    color: '#888', 
    textAlign: 'center',
  },
  itemAmount: { 
    flex: 1, // 너비 비율 조정
    fontSize: 16, 
    color: 'red', 
    fontWeight: 'bold', 
    textAlign: 'right',
  },
});
