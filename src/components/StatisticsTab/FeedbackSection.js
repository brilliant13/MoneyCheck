// import React, { useEffect, useState } from "react";
// import { View, Text } from "react-native";
// import styles from "../../styles/StatisticsTabStyles/FeedbackSectionStyle";

// const FeedbackSection = ({ selectedYear, selectedMonthIndex }) => {
//   // 텍스트 데이터 배열
//   const feedbackTexts = ["1111", "2222", "3333", "4444"];

//   // 현재 표시할 텍스트 상태
//   const [currentFeedback, setCurrentFeedback] = useState("");

//   // 날짜 변경 시 텍스트를 랜덤으로 변경
//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * feedbackTexts.length);
//     setCurrentFeedback(feedbackTexts[randomIndex]);
//   }, [selectedYear, selectedMonthIndex]);

//   return (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>소비 습관 피드백</Text>
//       <Text style={styles.text}>{currentFeedback}</Text>
//     </View>
//   );
// };

// export default FeedbackSection;
