import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/StatisticsTabStyles/ExpenseBarChartStyle";

const ExpenseBarChart = () => {
  // 0원 ~ 1,000,000원 사이의 랜덤 값을 생성하는 함수
  const getRandomAmount = () => Math.floor(Math.random() * 1000001);

  // 랜덤 값을 각 카테고리에 적용
  const expenseData = [
    { category: "식비", amount: getRandomAmount() },
    { category: "주거비", amount: getRandomAmount() },
    { category: "교통비", amount: getRandomAmount() },
    { category: "의료/건강", amount: getRandomAmount() },
    { category: "쇼핑", amount: getRandomAmount() },
    { category: "문화/여가", amount: getRandomAmount() },
    { category: "반려동물", amount: getRandomAmount() },
    { category: "기타", amount: getRandomAmount() },
  ];

  const MAX_AMOUNT = 1000000; // 최대 금액

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>지출 카테고리</Text>
      {expenseData.map((item, index) => {
        const progress = item.amount / MAX_AMOUNT; // 프로그래스 비율 계산
        return (
          <View key={index} style={styles.barContainer}>
            {/* 카테고리 이름과 금액 */}
            <View style={styles.barLabelContainer}>
              <Text style={styles.barLabel}>{item.category}</Text>
              <Text style={styles.barAmount}>
                {item.amount.toLocaleString()}원
              </Text>
            </View>
            {/* 프로그래스 바 */}
            <View style={styles.progressBarBackground}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: `${progress * 100}%` }, // 비율에 따라 너비 설정
                ]}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ExpenseBarChart;
