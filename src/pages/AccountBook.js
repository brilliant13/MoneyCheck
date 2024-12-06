// 가계부 탭 화면 (전체, 수입, 지출 포함)
// src/pages/AccountBook.js
import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import Calendar from '../components/AccountBookTab/Calendar';
import IncomeList from '../components/AccountBookTab/IncomeList';
import ExpenseList from '../components/AccountBookTab/ExpenseList';
import TotalExpense from '../components/AccountBookTab/TotalExpense';
import MoneyCard from '../components/HomeTab/MoneyCard';
import styles from '../styles/AccountBookTabStyles/AccountBookStyles';

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountBook = () => {
  const [selectedTab, setSelectedTab] = useState('전체');
  
  
  const [dailyIncome, setDailyIncome] = useState(10000);
  const [dailyExpense, setDailyExpense] = useState(10000);
  // const [selectedDay, setSelectedDay] = useState(null);
  const [monthlyExpense, setMonthlyExpense] = useState(0); // 더미 데이터. 월별 지출
  
  
  // const [selectedMonth, setSelectedMonth] = useState('12월'); // 선택된 월
  const [selectedMonth, setSelectedMonth] = useState(
    `${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월`
  ); // 선택된 월
  const [selectedDay, setSelectedDay] = useState(new Date()); // 현재 선택된 날짜

  // const formatDate = (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };
  

  const handleMonthChange = (year, month) => {
    setSelectedMonth(`${year}년 ${month}월`);
    const randomExpense = Math.floor(
      Math.random() * (2000000 - 100000 + 1) + 100000
    ); // 100,000 ~ 2,000,000 사이 값 생성
    const expenseInThousands = Math.floor(randomExpense / 1000) * 1000; // 천 원 단위로 끊음
    setMonthlyExpense(expenseInThousands);
  };

    const syncDailyData = async () => {
      try {
        // 지출 데이터 로드
        const expenseData = await AsyncStorage.getItem('receipts');
        const expenses = expenseData ? JSON.parse(expenseData) : [];
        
        // 선택된 날짜와 동일한 날짜의 지출만 필터링
        const expenseForDate = expenses
          .filter((expense) => {
            const expenseDate = new Date(expense.date);
            return (
              expenseDate.getFullYear() === selectedDay.getFullYear() &&
              expenseDate.getMonth() === selectedDay.getMonth() &&
              expenseDate.getDate() === selectedDay.getDate()
            );
          })
          .reduce((total, expense) => total + expense.amount, 0);

        setDailyExpense(expenseForDate);

        // 수입 데이터도 같은 방식으로 처리
        const incomeData = await AsyncStorage.getItem('incomes');
        const incomes = incomeData ? JSON.parse(incomeData) : [];
        
        const incomeForDate = incomes
          .filter((income) => {
            const incomeDate = new Date(income.date);
            return (
              incomeDate.getFullYear() === selectedDay.getFullYear() &&
              incomeDate.getMonth() === selectedDay.getMonth() &&
              incomeDate.getDate() === selectedDay.getDate()
            );
          })
          .reduce((total, income) => total + income.amount, 0);

        setDailyIncome(incomeForDate);
      } catch (error) {
        console.error('데이터 동기화 실패:', error);
      }
    };


  // useFocusEffect 사용하여 화면에 포커스될 때마다 수입 데이터 로드
  useFocusEffect(
    React.useCallback(() => {
      const loadIncomes = async () => {

        try {
          const existingData = await AsyncStorage.getItem('incomes');
          if (existingData) {
            const incomes = JSON.parse(existingData);
            const newDailyIncome = incomes.reduce((total, income) => {
              return total + income.amount;
            }, 10000); // 기존 고정 수입에 새로운 수입 추가

            setDailyIncome(newDailyIncome);
          }
        } catch (error) {
          console.error('수입 데이터 로드 실패:', error);
        }

      };

      const loadExpenses = async () => {
        try {
          const existingData = await AsyncStorage.getItem('receipts');
          if (existingData) {
            const expenses = JSON.parse(existingData);
            const newDailyExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
            setDailyExpense(newDailyExpense);
          }
        } catch (error) {
          console.error('지출 데이터 로드 실패:', error);
        }
      };

      loadIncomes();
      loadExpenses();
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      syncDailyData();
    }, [selectedDay])
  );

  // 날짜 클릭 시 데이터를 업데이트
  const handleDateClick = (day) => {
    if (day) {
      const newDate = new Date(
        selectedDay.getFullYear(),
        selectedDay.getMonth(),
        day
      );
      setSelectedDay(newDate);
    }
  };


  // 초기화 버튼 핸들러
  const handleResetData = async () => {
    try {
      await AsyncStorage.clear();
      setDailyIncome(0);
      setDailyExpense(0);
      console.log('AsyncStorage 초기화 완료');
      alert('데이터가 초기화되었습니다.');
    } catch (error) {
      console.error('초기화 실패:', error);
    }
  };


  // 랜덤 소비액 생성 (예시 데이터)
  const randomMonthlyExpense = (month) => {
    // 월에 따라 랜덤 소비액 생성
    const randomExpense = Math.floor(Math.random() * 500000 + 100000); // 10만 ~ 50만 사이
    setMonthlyExpense(randomExpense);
    setSelectedMonth(month);
  };


  
  return (
    <View style={styles.container}>

      {/* 세부 탭 */}
      <View style={styles.tabContainer}>
        {['전체', '수입', '지출'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.selectedTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 탭에 따른 콘텐츠 렌더링 */}

      {selectedTab === '전체' && (
        <>
          <Calendar onDateClick={handleDateClick} onMonthChange={handleMonthChange} />

          <View style={styles.MonthsummaryContainer}>
            <TotalExpense month={selectedMonth} expense={monthlyExpense} />
          </View>

          <View style={styles.summaryContainer}>
            <MoneyCard income={dailyIncome.toString()} expense={dailyExpense.toLocaleString()} style={styles.moneyPager} />
          </View>
        </>
      )}
      {selectedTab === '수입' && <IncomeList />}
      {selectedTab === '지출' && <ExpenseList />}

 {/* 디버깅용 초기화 버튼 */}
      {/* 디버깅이 끝나면 아래 TouchableOpacity를 주석 처리하세요 */}
      <TouchableOpacity style={styles.resetButton} onPress={handleResetData}>
        <Text style={styles.resetButtonText}>초기화</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountBook;
