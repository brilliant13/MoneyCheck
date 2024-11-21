import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  section: {
    marginVertical: 13,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  barContainer: {
    marginBottom: 16, // Bar와 다음 항목 간의 간격을 조금 더 늘림
    flexDirection: "column", // 세로 방향 배치
  },
  barLabelContainer: {
    flexDirection: "row", // 이름과 금액을 가로 방향으로 배치
    justifyContent: "space-between", // 좌우로 떨어뜨림
    marginBottom: 4, // Label과 ProgressBar 간 간격
  },
  barLabel: {
    fontSize: 14,
  },
  barAmount: {
    fontSize: 14,
    fontWeight: "bold", // 금액을 Bold 처리
  },
  progressBarBackground: {
    height: 24, // Bar의 두께를 24pt로 설정
    backgroundColor: "#E0E0E0", // 배경 색상
    borderRadius: 8, // 둥근 모서리
    overflow: "hidden", // Bar가 배경을 넘치지 않도록 설정
  },
  progressBarFill: {
    height: "100%", // Bar의 높이를 배경과 동일하게 설정
    backgroundColor: "#00C4B4", // 프로그래스 바 색상
  },
});

export default styles;
