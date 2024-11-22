// 가계부 지출 탭
// src/components/ExpenseList.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import styles from '../../styles/AccountBookTabStyles/ExpenseListStyles';

// const ExpenseList = () => {
//   const expenseData = [
//     { id: 1, name: '용돈', date: '10.24', amount: '- 70,000원' },
//     { id: 2, name: '주식', date: '10.24', amount: '- 50,000원' },
//     { id: 3, name: '앱테크', date: '10.24', amount: '- 16,000원' },
//     { id: 4, name: '캐시백', date: '10.24', amount: '- 48,000원' },
//     { id: 5, name: '적금 이자', date: '10.24', amount: '- 9,000원' },
//   ];

//   return (
//     <View style={styles.container}>
//       {expenseData.map((item) => (
//         <View key={item.id} style={styles.itemContainer}>
//           <Text style={styles.itemName}>{item.name}</Text>
//           <Text style={styles.itemDate}>{item.date}</Text>
//           <Text style={styles.itemAmount}>{item.amount}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default ExpenseList;

// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import styles from '../../styles/AccountBookTabStyles/ExpenseListStyles';
// import HeaderWithModal from './HeaderWithModal'; // HeaderWithModal의 실제 컴포넌트 경로


// const ExpenseList = () => {
//   const expenseData = [
//     { id: 1, name: '용돈', date: '10.24', amount: '- 70,000원', icon: require('../../assets/money.png') },
//     { id: 2, name: '주식', date: '10.24', amount: '- 50,000원', icon: require('../../assets/stock.png') },
//     { id: 3, name: '앱테크', date: '10.24', amount: '- 16,000원', icon: require('../../assets/app.png') },
//     { id: 4, name: '캐시백', date: '10.24', amount: '- 48,000원', icon: require('../../assets/cashback.png') },
//     { id: 5, name: '적금 이자', date: '10.24', amount: '- 9,000원', icon: require('../../assets/interest.png') },
//   ];

//   return (
//     <View style={{ flex: 1 }}>
//       {/* HeaderWithModal을 추가하여 월 및 날짜 선택 가능 */}
//       {/* <HeaderWithModal /> */}
//     <View style={styles.container}>
//       {expenseData.map((item) => (
//         <View key={item.id} style={styles.card}>
//           <Image source={item.icon} style={styles.icon} />
//           <View style={styles.textContainer}>
//             <Text style={styles.itemName}>{item.name}</Text>
//             <Text style={styles.itemDate}>{item.date}</Text>
//           </View>
//           <Text style={styles.itemAmount}>{item.amount}</Text>
//         </View>
//       ))}
//     </View>
//     </View>
//   );
// };

// export default ExpenseList;

import React from 'react';
import { View, Text, Image } from 'react-native';
import HeaderWithModal from './HeaderWithModal'; // 수정된 HeaderWithModal 경로
import styles from '../../styles/AccountBookTabStyles/ExpenseListStyles';

const ExpenseList = () => {
  const expenseData = [
    { id: 1, name: '용돈', date: '10.24', amount: '- 70,000원', icon: require('../../assets/money.png') },
    { id: 2, name: '주식', date: '10.24', amount: '- 50,000원', icon: require('../../assets/stock.png') },
    { id: 3, name: '앱테크', date: '10.24', amount: '- 16,000원', icon: require('../../assets/app.png') },
    { id: 4, name: '캐시백', date: '10.24', amount: '- 48,000원', icon: require('../../assets/cashback.png') },
    { id: 5, name: '적금 이자', date: '10.24', amount: '- 9,000원', icon: require('../../assets/interest.png') },
  ];

  const handleMonthSelect = (month) => {
    console.log(`${month}월 선택됨`); // 선택된 월에 따른 로직 처리
  };

  return (
    <View style={{ flex: 1 }}>
      {/* HeaderWithModal에 월 선택 이벤트 전달 */}
      <HeaderWithModal onMonthSelect={handleMonthSelect} />

      <View style={styles.container}>
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
      </View>
    </View>
  );
};

export default ExpenseList;

