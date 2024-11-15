// src/components/Calendar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/AccountBookTabStyles/CalendarStyles';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.monthText}>2024년 10월</Text>
      <View style={styles.calendarContainer}>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <Text key={day} style={styles.dayHeader}>
            {day}
          </Text>
        ))}
        {Array.from({ length: 31 }).map((_, index) => (
          <View key={index} style={styles.dateContainer}>
            <Text style={[styles.dateText, index === 19 && styles.selectedDate]}>
              {index + 1}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};


export default Calendar;
