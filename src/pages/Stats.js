import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import YearMonthPicker from "../components/StatisticsTab/YearMonthPicker";
import ExpenseBarChart from "../components/StatisticsTab/ExpenseBarChart";
import EmotionStatistics from "../components/StatisticsTab/EmotionStatistics";
import FeedbackConclusionSection from "../components/StatisticsTab/FeedbackConclusionSection";

const Statistics = () => {
  const [selectedYear, setSelectedYear] = useState(2024); // 기본 연도
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(11); // 기본 월 (12월)

  // 새로운 랜덤 데이터를 생성하는 함수
  const generateRandomData = () => {
    const getRandomAmount1 = () => Math.floor(300000 +Math.random() * 10000); //식비
    const getRandomAmount2 = () => Math.floor(500000 +Math.random() * 30000); //주거비
    const getRandomAmount3 = () => Math.floor(50000 +Math.random() * 10000); //교통비
    const getRandomAmount4 = () => Math.floor(1000 +Math.random() * 20000); //의료/건강
    const getRandomAmount5 = () => Math.floor(100000 +Math.random() * 10000); //쇼핑
    const getRandomAmount6 = () => Math.floor(100000 +Math.random() * 10000); //문화/여기
    const getRandomAmount7 = () => Math.floor(100000 +Math.random() * 10000); //반려동물
    const getRandomAmount8 = () => Math.floor(50000 +Math.random() * 10000); //기타

    

    return [
      { category: "식비", amount: getRandomAmount1() },
      { category: "주거비", amount: getRandomAmount2() },
      { category: "교통비", amount: getRandomAmount3() },
      { category: "의료/건강", amount: getRandomAmount4() },
      { category: "쇼핑", amount: getRandomAmount5() },
      { category: "문화/여가", amount: getRandomAmount6() },
      { category: "반려동물", amount: getRandomAmount7() },
      { category: "기타", amount: getRandomAmount8() },
    ];
  };

  const [expenseData, setExpenseData] = useState(generateRandomData());

  // 날짜 변경 시 새로운 데이터를 생성
  const handleDateChange = (year, monthIndex) => {
    setSelectedYear(year);
    setSelectedMonthIndex(monthIndex);
    setExpenseData(generateRandomData());
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false} // 스크롤바 비활성화
    >
      {/* 연도 및 월 선택 */}
      <YearMonthPicker
        selectedYear={selectedYear}
        setSelectedYear={(year) => handleDateChange(year, selectedMonthIndex)}
        selectedMonthIndex={selectedMonthIndex}
        setSelectedMonthIndex={(monthIndex) =>
          handleDateChange(selectedYear, monthIndex)
        }
      />

      {/* 데이터 시각화 */}
      <ExpenseBarChart expenseData={expenseData} />

      {/* 감정 통계 섹션 */}
      <EmotionStatistics />

      {/* 피드백 및 결론 섹션 */}
      <FeedbackConclusionSection
        selectedYear={selectedYear}
        selectedMonthIndex={selectedMonthIndex}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  divider: {
    height: 8, // 높이 8pt
    backgroundColor: "#F9F9F9", // 배경색상
  },
});

export default Statistics;
