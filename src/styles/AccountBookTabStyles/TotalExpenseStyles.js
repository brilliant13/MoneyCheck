// src/styles/AccountBookTabStyles/TotalExpenseStyles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // backgroundColor: '#009984', // 첫 번째 사진의 초록색 배경
    backgroundColor: '#00AB96', // 첫 번째 사진의 초록색 배경
    justifyContent: 'center', // 가운데 정렬
    // width: '100%', // 전체 너비
    width: '96%', // 전체 너비
    // height: '65%', // 높이 100
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 12,
    borderRadius: 8, // 모서리 둥글게
  },
  totalExpenseText: {
    // fontSize: 20,
    // fontWeight: 'bold',
    // color: '#FFFFFF', // 텍스트는 흰색
    // textAlign: 'left',
  },
  monthText: {
    fontSize: 14, // '10월 소비' 폰트 크기
    fontWeight: '500', // '10월 소비' 폰트 굵기
    color: '#AEEBE6', // 흰색 텍스트
    marginBottom: 5, // '10월 소비'와 '330,000원' 사이 간격
  },
  expenseText: {
    fontSize: 18, // '330,000원' 폰트 크기
    fontWeight: 'bold', // '330,000원'은 굵게
    color: '#FFFFFF', // 흰색 텍스트
  },
});