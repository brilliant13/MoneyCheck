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

      // 데이터 필터링
      const filteredData = parsedData.filter((item) => {

           // 날짜 파싱
      const [month, day] = item.date.split('.').map(Number);


        const itemDate = new Date(item.date);

        // UTC 시간을 로컬 시간으로 변환
        const localYear = itemDate.getUTCFullYear(); // UTC 연도 가져오기
        const localMonth = itemDate.getUTCMonth() + 1; // UTC 월 가져오기 (0부터 시작하므로 +1)

        // console.log(
        //   '원본 item.date:',
        //   item.date,
        //   '변환된 itemDate:',
        //   itemDate.toLocaleString(),
        //   '비교:',
        //   localYear,
        //   selectedYear,
        //   localMonth,
        //   selectedMonth
        // );

        console.log(
          '원본 item.date:',
          item.date,
          '파싱된 월:',
          month,
          '파싱된 연도:',
          today.getFullYear(),
          '비교:',
          month === selectedMonth,
          selectedYear === today.getFullYear()
        );

return month === selectedMonth && selectedYear === today.getFullYear();
        // return localYear === selectedYear && localMonth === selectedMonth;
      });

      console.log('필터링된 데이터:', filteredData);
      setExpenseData(filteredData);
    } catch (error) {
      console.error('Failed to load expense data:', error);
    }
  };



  // useEffect(() => {
    // const loadExpenses = async () => {
    //   try {
    //     const storedData = await AsyncStorage.getItem('expenses');
    //     const expenses = storedData ? JSON.parse(storedData) : [];
    //     const filteredExpenses = expenses.filter((item) => {
    //       // const itemDate = new Date(item.date);
    //       const [month, day] = item.date.split('.').map(Number);


    //       return (
    //         // itemDate.getFullYear() === selectedYear &&
    //         // itemDate.getMonth() + 1 === selectedMonth
    //         month === selectedMonth && selectedYear === today.getFullYear()
    //       );
    //     });
    //     setExpenseData(filteredExpenses);
    //   } catch (error) {
    //     console.error('데이터 로드 실패:', error);
    //   }
    // };

  //   loadExpenses();
  // }, [selectedYear, selectedMonth]);

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
        {expenseData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
            <Text style={styles.itemAmount}>{item.amount}</Text>
          </View>
        ))}
      </View> */}
      <View style={styles.container}>
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
      </View>
    </View>
  );
};

export default ExpenseList;
