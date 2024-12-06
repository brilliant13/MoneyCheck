// src/styles/AccountBookTabStyles/HeaderWithModalStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    // borderBottomWidth: 1,
    // borderBottomColor: '#E0E0E0',
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#333333',
  // },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009984',
    marginRight: 5,
  },
  todayButton: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  todayText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  modalContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1, // 모달이 화면 전체를 차지하도록 설정
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경을 반투명 검정으로 설정
    justifyContent: "center", // 모달 내용을 세로 방향 가운데 정렬
    alignItems: "center", // 모달 내용을 가로 방향 가운데 정렬
  },
  pickerContainer: {
    // width: '80%',
    // backgroundColor: '#FFFFFF',
    // borderRadius: 10,
    // padding: 20,
    // alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 5,

    width: "80%", // 컨테이너 너비를 화면의 80%로 설정
    backgroundColor: "#FFF", // 컨테이너 배경색을 흰색으로 설정
    borderRadius: 10, // 테두리를 둥글게 설정
    padding: 20, // 내부 여백 설정
    alignItems: "center", // 내부 요소를 가로 방향 가운데 정렬


  },
  pickerLabel: {
    fontSize: 16, // 텍스트 크기 설정
    fontWeight: "bold", // 텍스트 굵게 설정
    color: "#009984", // 텍스트 색상을 초록색으로 설정
    marginBottom: 10, // 텍스트 아래쪽 간격 설정
  },
  picker: {
    width: '100%',
    color: '#333333',
    fontSize: 16,
  },

  // buttonContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginTop: 20,
  // },
  buttonContainer: {
    flexDirection: "row", // 버튼들을 가로 방향으로 배치
    justifyContent: "space-between", // 버튼들을 양 끝으로 정렬
    marginTop: 20, // 위쪽 간격 설정
    width: "100%", // 버튼 컨테이너 너비를 전체로 설정
  },


  // confirmButton: {
  //   backgroundColor: '#009984',
  //   padding: 10,
  //   borderRadius: 5,
  //   marginRight: 10,
  //   width: '40%',
  //   alignItems: 'center',
  // },
  // confirmButtonText: {
  //   color: '#FFFFFF',
  //   fontWeight: 'bold',
  // },
  // closeButton: {
  //   backgroundColor: '#FFCDD2',
  //   padding: 10,
  //   borderRadius: 5,
  //   width: '40%',
  //   alignItems: 'center',
  // },
  // closeButtonText: {
  //   color: '#D32F2F',
  //   fontWeight: 'bold',
  // },
  
  closeButton: {
    flex: 1, // 버튼이 동일한 너비를 가지도록 설정
    marginRight: 8, // 오른쪽 간격 설정
    paddingVertical: 10, // 세로 여백 설정
    backgroundColor: "#FFCDD2", // 버튼 배경색을 연한 빨간색으로 설정
    borderRadius: 8, // 버튼 테두리를 둥글게 설정
    alignItems: "center", // 텍스트를 가운데 정렬
  },
  closeButtonText: {
    color: "#D32F2F", // 텍스트 색상을 짙은 빨간색으로 설정
    fontWeight: "bold", // 텍스트 굵게 설정
    fontSize: 16, // 텍스트 크기 설정
  },
  confirmButton: {
    flex: 1, // 버튼이 동일한 너비를 가지도록 설정
    marginLeft: 8, // 왼쪽 간격 설정
    paddingVertical: 10, // 세로 여백 설정
    backgroundColor: "#C8E6C9", // 버튼 배경색을 연한 초록색으로 설정
    borderRadius: 8, // 버튼 테두리를 둥글게 설정
    alignItems: "center", // 텍스트를 가운데 정렬
  },
  confirmButtonText: {
    color: "#388E3C", // 텍스트 색상을 짙은 초록색으로 설정
    fontWeight: "bold", // 텍스트 굵게 설정
    fontSize: 16, // 텍스트 크기 설정
  },


  // closeButton: {
  //   marginTop: 20,
  //   backgroundColor: '#FFCDD2',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 5,
  // },
  // closeButtonText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#D32F2F',
  // },
  icon: {
    marginLeft: 5,
    fontSize: 18,
    color: '#4CAF50',
  },





});
