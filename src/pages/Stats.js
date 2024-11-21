//통계 탭 화면
// src/pages/Statistics.js
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import YearMonthPicker from "../components/StatisticsTab/YearMonthPicker";
import ExpenseBarChart from "../components/StatisticsTab/ExpenseBarChart";
import EmotionStatistics from "../components/StatisticsTab/EmotionStatistics";
import FeedbackSection from "../components/StatisticsTab/FeedbackSection";
import ConclusionSection from "../components/StatisticsTab/ConclusionSection";

const Statistics = () => {
  const [selectedYear, setSelectedYear] = useState(2024); // 기본 연도
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(10); // 기본 월 (11월)

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false} // 스크롤바 비활성화
    >
      {/* 연도 및 월 선택 */}
      <YearMonthPicker
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedMonthIndex={selectedMonthIndex}
        setSelectedMonthIndex={setSelectedMonthIndex}
      />

      {/* 데이터 시각화 */}
      <ExpenseBarChart
        selectedYear={selectedYear}
        selectedMonth={selectedMonthIndex}
      />

      {/* 구분선 */}
      <View style={styles.divider} />

      <EmotionStatistics />
      <FeedbackSection />
      <ConclusionSection />
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
