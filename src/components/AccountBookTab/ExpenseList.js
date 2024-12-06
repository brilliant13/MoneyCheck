// 가계부 지출 탭
// src/components/ExpenseList.js
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderWithModal from './HeaderWithModal';
import styles from '../../styles/AccountBookTabStyles/ExpenseListStyles';
import { useFocusEffect } from '@react-navigation/native';

const ExpenseList = () => {
  const today = new Date();
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [expenseData, setExpenseData] = useState([]);

  const handleMonthSelect = ({ year, month }) => {
    setSelectedYear(year);
    setSelectedMonth(month);
    console.log(`${year}년 ${month}월 선택됨`);
  };


  // const expenseData = [
  //   { id: 1, name: '용돈', date: '10.24', amount: '- 70,000원', icon: require('../../assets/money.png') },
  //   { id: 2, name: '주식', date: '10.24', amount: '- 50,000원', icon: require('../../assets/stock.png') },
  //   { id: 3, name: '앱테크', date: '10.24', amount: '- 16,000원', icon: require('../../assets/app.png') },
  //   { id: 4, name: '캐시백', date: '10.24', amount: '- 48,000원', icon: require('../../assets/cashback.png') },
  //   { id: 5, name: '적금 이자', date: '10.24', amount: '- 9,000원', icon: require('../../assets/interest.png') },
  // ];

  const loadExpenseData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('receipts');
      const parsedData = storedData ? JSON.parse(storedData) : [];
      console.log('전체 데이터:', parsedData);

      const categoryIcons = {
        meal: require('../../assets/meal.png'),
        housing: require('../../assets/housing.png'),
        transportation: require('../../assets/transportation.png'),
        health: require('../../assets/health.png'),
        culture: require('../../assets/culture.png'),
        pet: require('../../assets/pets.png'),
        others: require('../../assets/others.png'),
        communication: require('../../assets/communication.png'),
        shopping: require('../../assets/shopping.png'),
      };


      // 데이터 필터링
      //     const filteredData = parsedData
      //     .filter((item) => {
      //       const itemDate = new Date(item.date);
      //       const localYear = itemDate.getUTCFullYear();
      //       const localMonth = itemDate.getUTCMonth() + 1;

      //       return localYear === selectedYear && localMonth === selectedMonth;
      //     })
      //     .map((item) => ({
      //       ...item,
      //       icon: categoryIcons[item.category], // 카테고리에 맞는 아이콘 추가
      //     }));

      //   console.log('필터링된 데이터:', filteredData);
      //   setExpenseData(filteredData);
      // } catch (error) {
      //   console.error('Failed to load expense data:', error);
      // }
      // };
      const filteredData = parsedData
        .filter((item) => {
          const itemDate = new Date(item.date);
          const localYear = itemDate.getUTCFullYear();
          const localMonth = itemDate.getUTCMonth() + 1;

          return localYear === selectedYear && localMonth === selectedMonth;
        })
        .map((item) => ({
          ...item,
          icon: categoryIcons[item.category], // 카테고리에 맞는 아이콘 매핑
          formattedDate: new Date(item.date).toLocaleDateString('ko-KR', {
            month: '2-digit',
            day: '2-digit',
          }).replace(/\./g, ''), // 'MM.DD' 형식
          formattedAmount: `- ${item.amount.toLocaleString()}원`, // 금액 앞에 '-' 추가
        }));

      console.log('필터링된 데이터:', filteredData);
      setExpenseData(filteredData);
    } catch (error) {
      console.error('Failed to load expense data:', error);
    }
  };


  // 데이터 로드 및 상태 업데이트
  useEffect(() => {
    loadExpenseData();
  }, [selectedYear, selectedMonth]);

  useFocusEffect(
    React.useCallback(() => {
      loadExpenseData();
    }, [selectedYear, selectedMonth])
  );



  return (
    <View style={{ flex: 1 }}>
      <HeaderWithModal
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        onMonthSelect={handleMonthSelect}
      />

      {/* <View style={styles.container}>
        {expenseData.length > 0 ? (
          expenseData.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.icon} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDate}>{item.date}</Text>
              </View>
              <Text style={styles.itemAmount}>{item.amount}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>해당 월에는 데이터가 없습니다.</Text>
        )}
      </View> */}
      <View style={styles.container}>
        {expenseData.length > 0 ? (
          expenseData.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.icon} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.storeName}</Text> {/* 상호명 */}
                <Text style={styles.itemDate}>{item.formattedDate}</Text> {/* 날짜 */}
              </View>
              <Text style={styles.itemAmount}>{item.formattedAmount}</Text> {/* 금액 */}
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>해당 월에는 데이터가 없습니다.</Text>
        )}
      </View>
    </View>
  );
};

export default ExpenseList;
