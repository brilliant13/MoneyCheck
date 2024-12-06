// src/styles/AccountBookTabStyles/CalendarStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // marginVertical: 10,
    // paddingHorizontal: 10,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },
  todayButton: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  todayText: {
    color: '#009984',
    fontWeight: 'bold',
    fontSize: 12,
  },
  calendarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    // height: '68%', // Matches Figma height
    height: 280, // Matches Figma height
    // width: '96%', // Matches Figma width
    backgroundColor: '#F9F9F9', // Variables.GrayColorGray50
    // paddingVertical: 6, // Matches Figma's .padding(top = 12.dp, bottom = 12.dp)
    padding : 10,
    borderRadius: 12, // Matches Figma's RoundedCornerShape(size = 12.dp)
    borderWidth: 1, // Matches Figma's .border(width = 1.dp)
    borderColor: 'rgba(0, 0, 0, 0.05)', // Variables.BorderColorBorder1 (0x0D000000 in RGBA)
  },
  dayHeader: {
    width: '13%',
    textAlign: 'center',
    fontSize: 16, // Variables.fontSizeM (16.sp)
    fontWeight: '600', // Variables.fontWeightSemibold (600)
    color: '#1A1A1A', // Variables.GrayColorGray900
    marginBottom: 8, // Matches Figma's spacing for day labels
  },
  dateContainer: {
    width: '13%',
    alignItems: 'center',
    padding: 5, // Matches current padding
    height: 47, // 적절한 높이 설정
    justifyContent: 'center', // 날짜 버튼의 텍스트 수직 정렬
  },
  dateText: {
    fontSize: 14, // Variables.fontSizeS (14.sp)
    fontWeight: '400', // Variables.fontWeightRegular (400)
    color: '#1A1A1A', // Variables.GrayColorGray900
  },
  selectedDate: {
    color: '#009984',
    fontWeight: 'bold',
  },


  selectedDay: {
    // backgroundColor: '#E3F2FD', // Matches Figma's highlight color for selected day
    // color: '#009984', // Text color for the selected day
    // fontWeight: 'bold',
    // borderRadius: 20, // Rounded corners for the selected day
    // textAlign: 'center',
    // width: 30,

    backgroundColor: '#00B9A5', // 초록색 배경
    color: '#FFFFFF', // 흰색 텍스트
    // fontWeight: 'bold',
    borderRadius: 20, // 동그랗게 처리
    textAlign: 'center',
    width: 40, // 넓이
    height: 40, // 높이
    lineHeight: 40, // 텍스트를 가운데 정렬
    overflow: 'hidden', // 내용 넘침 방지
    alignItems: 'center', // 수평 가운데 정렬
    justifyContent: 'center', // 수직 가운데 정렬


  },

  
});
