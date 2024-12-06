// src/components/Calendar.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/AccountBookTabStyles/CalendarStyles';
import HeaderWithModal from './HeaderWithModal';

const Calendar = ({ onDateClick,onMonthChange }) => {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(null);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getStartDayOfMonth = (year, month) =>
    new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(selectedYear, selectedMonthIndex);
  const startDay = getStartDayOfMonth(selectedYear, selectedMonthIndex);

  const allDays = Array.from({ length: startDay }).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, index) => index + 1)
  );

  const trailingEmptyDays = Array.from(
    { length: 7 - (allDays.length % 7) },
    () => null
  );
  const calendarDays = allDays.concat(trailingEmptyDays);

  const handleDatePress = (day) => {
    if (day) {
      setSelectedDay(day);
      onDateClick(day);
    }
  };

  const handleMonthChange = ({ year, month }) => {
    setSelectedYear(year);
    setSelectedMonthIndex(month - 1);
    if (onMonthChange) {
      onMonthChange(year, month);
    }
  };

  const handleTodayPress = () => {
    const today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonthIndex(today.getMonth());
    setSelectedDay(today.getDate());
    onDateClick(today.getDate());
  };

  return (

    <View style={styles.container}>
      
      <View style={styles.headerContainer}>

        <HeaderWithModal
          selectedYear={selectedYear}
          selectedMonth={selectedMonthIndex + 1}
          onMonthSelect={handleMonthChange}
        />

        <TouchableOpacity style={styles.todayButton} onPress={handleTodayPress}>
          <Text style={styles.todayText}>오늘</Text>
        </TouchableOpacity>
        
      </View>

      <View style={styles.calendarContainer}>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <Text key={day} style={styles.dayHeader}>
            {day}
          </Text>
        ))}
        {calendarDays.map((day, index) => {
          const today = new Date();
          const isToday =
            day === today.getDate() &&
            selectedMonthIndex === today.getMonth() &&
            selectedYear === today.getFullYear();

          const isSelected = day === selectedDay;

          return (
            
            <TouchableOpacity
              key={index}
              style={styles.dateContainer}
              onPress={() => handleDatePress(day)}
              disabled={!day}
            >
              <Text
                style={[
                  styles.dateText,
                  day && isToday && styles.selectedDate,
                  day && isSelected && styles.selectedDay,
                ]}
              >
                {day || ''}
              </Text>
            </TouchableOpacity>

          );
        })}
      </View>
    </View>

  );
};

export default Calendar;
