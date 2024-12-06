// src/components/ExpenseList.js
// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import HeaderWithModal from './HeaderWithModal';
import styles from '../../styles/AccountBookTabStyles/IncomeListStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


const IncomeList = () => {
  const today = new Date();
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [incomeData, setIncomeData] = useState([]);
  
  // const loadIncomeData = async () => {
  //   try {
  //     const storedData = await AsyncStorage.getItem('incomes');
  //     const parsedData = storedData ? JSON.parse(storedData) : [];
  //     console.log('전체 데이터:', parsedData);

  //     const filteredData = parsedData.filter((item) => {
  //       const itemDate = new Date(item.date);
  //       return (
  //         itemDate.getFullYear() === selectedYear &&
  //         itemDate.getMonth() + 1 === selectedMonth
  //       );
  //     });

      
  //     console.log('필터링된 데이터:', filteredData);
  //     setIncomeData(filteredData);
  //   } catch (error) {
  //     console.error('Failed to load income data:', error);
  //   }
  // };
  const loadIncomeData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('incomes');
      const parsedData = storedData ? JSON.parse(storedData) : [];
      console.log('전체 데이터:', parsedData);
  
      // 데이터 필터링
      const filteredData = parsedData.filter((item) => {
        const itemDate = new Date(item.date);
  
        // UTC 시간을 로컬 시간으로 변환
        const localYear = itemDate.getUTCFullYear(); // UTC 연도 가져오기
        const localMonth = itemDate.getUTCMonth() + 1; // UTC 월 가져오기 (0부터 시작하므로 +1)
  
        console.log(
          '원본 item.date:',
          item.date,
          '변환된 itemDate:',
          itemDate.toLocaleString(),
          '비교:',
          localYear,
          selectedYear,
          localMonth,
          selectedMonth
        );
  
        return localYear === selectedYear && localMonth === selectedMonth;
      });
  
      console.log('필터링된 데이터:', filteredData);
      setIncomeData(filteredData);
    } catch (error) {
      console.error('Failed to load income data:', error);
    }
  };

  useEffect(() => {
    loadIncomeData();
  }, [selectedYear, selectedMonth]);

  
  useFocusEffect(
    React.useCallback(() => {
      loadIncomeData();
    }, [selectedYear, selectedMonth])
  );

  const handleMonthSelect = ({ year, month }) => {
    console.log('handleMonthSelect called with:', year, month);
    setSelectedYear(year);
    setSelectedMonth(month);
    console.log(`${year}년 ${month}월 선택됨`);
  };

  return (
   
    <View style={{ flex: 1 }}>
    <HeaderWithModal
      selectedYear={selectedYear}
      selectedMonth={selectedMonth}
      onMonthSelect={handleMonthSelect}
    />

    <View style={styles.container}>
      {incomeData.length > 0 ? (
        incomeData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={
              item.category.icon} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item.source}</Text>
              <Text style={styles.itemDate}>
                {`${new Date(item.date).getMonth() + 1}.${
                  new Date(item.date).getDate()
                }`}
              </Text>
            </View>
            <Text style={styles.itemAmount}>
              {item.amount.toLocaleString()}원
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.noDataText}>해당 월에는 데이터가 없습니다.</Text>
      )}
    </View>
  </View>
  );
};

export default IncomeList;
