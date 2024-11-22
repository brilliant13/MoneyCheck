//src/components/AccountBookTab/HeaderWithModal.js
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { Ionicons } from '@expo/vector-icons';

// import styles from '../../styles/AccountBookTabStyles/HeaderWithModalStyles';
// const HeaderWithModal = ({
//   onMonthSelect,
//   defaultYear = new Date().getFullYear(), // 기본값: 현재 연도
//   defaultMonth = new Date().getMonth() + 1, // 기본값: 현재 월
// }) => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedYear, setSelectedYear] = useState(defaultYear); // 기본값으로 초기화
//   const [selectedMonth, setSelectedMonth] = useState(defaultMonth); // 기본값으로 초기화

//   const toggleModal = () => setModalVisible(!isModalVisible);

//   const handleMonthSelect = (month) => {
//     setSelectedMonth(month);
//     toggleModal();
//     if (onMonthSelect) {
//       onMonthSelect(month); // 부모 컴포넌트로 선택된 월 전달
//     }
//   };

//   const handleTodayPress = () => {
//     const today = new Date();
//     setSelectedYear(today.getFullYear());
//     setSelectedMonth(today.getMonth() + 1); // 월은 0부터 시작하므로 +1
//     if (onMonthSelect) {
//       onMonthSelect(today.getMonth() + 1);
//     }
//   };

//   return (
//     <View style={styles.headerContainer}>
//       {/* 선택된 연도와 월 표시 */}
//       <TouchableOpacity style={styles.monthSelector} onPress={toggleModal}>
//         <Text style={styles.monthText}>{`${selectedYear}년 ${selectedMonth}월`}</Text>
//         <Ionicons name="chevron-down-outline" size={20} color="#009984" />
//       </TouchableOpacity>

//       {/* 모달 */}
//       <Modal visible={isModalVisible} transparent animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.pickerContainer}>
//             <Text style={styles.pickerLabel}>연도 선택</Text>
//             <Picker
//               selectedValue={selectedYear}
//               onValueChange={(itemValue) => setSelectedYear(itemValue)}
//               style={styles.picker}
//             >
//               {Array.from({ length: 10 }, (_, i) => (
//                 <Picker.Item key={i} label={`${2020 + i}년`} value={2020 + i} />
//               ))}
//             </Picker>

//             <Text style={styles.pickerLabel}>달 선택</Text>
//             <Picker
//               selectedValue={selectedMonth}
//               onValueChange={(itemValue) => handleMonthSelect(itemValue)}
//               style={styles.picker}
//             >
//               {Array.from({ length: 12 }, (_, i) => (
//                 <Picker.Item key={i} label={`${i + 1}월`} value={i + 1} />
//               ))}
//             </Picker>
//           </View>

//           {/* 오늘 버튼 */}
//           <TouchableOpacity style={styles.todayButton} onPress={handleTodayPress}>
//             <Text style={styles.todayText}>오늘</Text>
//           </TouchableOpacity>

//           {/* 닫기 버튼 */}
//           <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
//             <Text style={styles.closeButtonText}>닫기</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default HeaderWithModal;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { Ionicons } from '@expo/vector-icons';

// import styles from '../../styles/AccountBookTabStyles/HeaderWithModalStyles';

// const HeaderWithModal = ({
//   onMonthSelect,
//   defaultYear = new Date().getFullYear(), // 기본값: 현재 연도
//   defaultMonth = new Date().getMonth() + 1, // 기본값: 현재 월
// }) => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedYear, setSelectedYear] = useState(defaultYear); // 기본값으로 초기화
//   const [selectedMonth, setSelectedMonth] = useState(defaultMonth); // 기본값으로 초기화

//   // 부모에서 전달된 defaultYear, defaultMonth가 변경될 때마다 상태 업데이트
//   useEffect(() => {
//     setSelectedYear(defaultYear);
//     setSelectedMonth(defaultMonth);
//   }, [defaultYear, defaultMonth]);

//   const toggleModal = () => setModalVisible(!isModalVisible);

//   const handleMonthSelect = (month) => {
//     setSelectedMonth(month);
//     toggleModal();
//     if (onMonthSelect) {
//       onMonthSelect(month); // 부모 컴포넌트로 선택된 월 전달
//     }
//   };

//   return (
//     <View style={styles.headerContainer}>
//       {/* 선택된 연도와 월 표시 */}
//       <TouchableOpacity style={styles.monthSelector} onPress={toggleModal}>
//         <Text style={styles.monthText}>{`${selectedYear}년 ${selectedMonth}월`}</Text>
//         <Ionicons name="chevron-down-outline" size={20} color="#009984" />
//       </TouchableOpacity>

//       {/* 모달 */}
//       <Modal visible={isModalVisible} transparent animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.pickerContainer}>
//             <Text style={styles.pickerLabel}>연도 선택</Text>
//             <Picker
//               selectedValue={selectedYear}
//               onValueChange={(itemValue) => setSelectedYear(itemValue)}
//               style={styles.picker}
//             >
//               {Array.from({ length: 10 }, (_, i) => (
//                 <Picker.Item key={i} label={`${2020 + i}년`} value={2020 + i} />
//               ))}
//             </Picker>

//             <Text style={styles.pickerLabel}>달 선택</Text>
//             <Picker
//               selectedValue={selectedMonth}
//               onValueChange={(itemValue) => handleMonthSelect(itemValue)}
//               style={styles.picker}
//             >
//               {Array.from({ length: 12 }, (_, i) => (
//                 <Picker.Item key={i} label={`${i + 1}월`} value={i + 1} />
//               ))}
//             </Picker>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default HeaderWithModal;




//src/components/AccountBookTab/HeaderWithModal.js
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { Ionicons } from '@expo/vector-icons';

// import styles from '../../styles/AccountBookTabStyles/HeaderWithModalStyles';

// // const HeaderWithModal = ({
// //   onMonthSelect,
// //   defaultYear = new Date().getFullYear(), // 기본값: 현재 연도
// //   defaultMonth = new Date().getMonth() + 1, // 기본값: 현재 월
// // }) => {
// //   const [isModalVisible, setModalVisible] = useState(false);
// //   const [selectedYear, setSelectedYear] = useState(defaultYear); // 기본값으로 초기화
// //   const [selectedMonth, setSelectedMonth] = useState(defaultMonth); // 기본값으로 초기화

// //   // 부모에서 전달된 defaultYear, defaultMonth가 변경될 때마다 상태 업데이트
// //   useEffect(() => {
// //     setSelectedYear(defaultYear);
// //     setSelectedMonth(defaultMonth);
// //   }, [defaultYear, defaultMonth]);

// //   const toggleModal = () => setModalVisible(!isModalVisible);

// //   const handleMonthSelect = (month) => {
// //     setSelectedMonth(month);
// //     toggleModal();
// //     if (onMonthSelect) {
// //       onMonthSelect(month); // 부모 컴포넌트로 선택된 월 전달
// //     }
// //   };

// //   return (
// //     <View style={styles.headerContainer}>
// //       {/* 선택된 연도와 월 표시 */}
// //       <TouchableOpacity style={styles.monthSelector} onPress={toggleModal}>
// //         <Text style={styles.monthText}>{`${selectedYear}년 ${selectedMonth}월`}</Text>
// //         <Ionicons name="chevron-down-outline" size={20} color="#009984" />
// //       </TouchableOpacity>

// //       {/* 모달 */}
// //       <Modal visible={isModalVisible} transparent animationType="slide">
// //         <View style={styles.modalContainer}>
// //           <View style={styles.pickerContainer}>
// //             <Text style={styles.pickerLabel}>연도 선택</Text>
// //             <Picker
// //               selectedValue={selectedYear}
// //               onValueChange={(itemValue) => setSelectedYear(itemValue)}
// //               style={styles.picker}
// //             >
// //               {Array.from({ length: 10 }, (_, i) => (
// //                 <Picker.Item key={i} label={`${2020 + i}년`} value={2020 + i} />
// //               ))}
// //             </Picker>

// //             <Text style={styles.pickerLabel}>달 선택</Text>
// //             <Picker
// //               selectedValue={selectedMonth}
// //               onValueChange={(itemValue) => handleMonthSelect(itemValue)}
// //               style={styles.picker}
// //             >
// //               {Array.from({ length: 12 }, (_, i) => (
// //                 <Picker.Item key={i} label={`${i + 1}월`} value={i + 1} />
// //               ))}
// //             </Picker>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };
// const HeaderWithModal = ({
//   onMonthSelect,
//   defaultYear = new Date().getFullYear(), // 기본값: 현재 연도
//   defaultMonth = new Date().getMonth() + 1, // 기본값: 현재 월
// }) => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedYear, setSelectedYear] = useState(defaultYear); // 기본값으로 초기화
//   const [selectedMonth, setSelectedMonth] = useState(defaultMonth); // 기본값으로 초기화

//   // 부모에서 전달된 defaultYear, defaultMonth가 변경될 때마다 상태 업데이트
//   useEffect(() => {
//     setSelectedYear(defaultYear);
//     setSelectedMonth(defaultMonth);
//   }, [defaultYear, defaultMonth]);

//   const toggleModal = () => setModalVisible(!isModalVisible);

//   // const handleMonthSelect = (month) => {
//   //   setSelectedMonth(month);
//   //   toggleModal();
//   //   if (onMonthSelect) {
//   //     onMonthSelect(month); // 부모 컴포넌트로 선택된 월 전달
//   //   }
//   // };
//   const handleMonthSelect = (month) => {
//     setSelectedMonth(month);
//     toggleModal();
//     if (onMonthSelect) {
//       onMonthSelect({ month, year: selectedYear }); // 연도와 월을 객체로 전달
//     }
//   };
  

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//     // 선택된 연도와 월을 모두 부모로 전달
//     if (onMonthSelect) {
//       onMonthSelect(selectedMonth, year); // 연도와 월 전달
//     }
//   };

//   return (
//     <View style={styles.headerContainer}>
//       {/* 선택된 연도와 월 표시 */}
//       <TouchableOpacity style={styles.monthSelector} onPress={toggleModal}>
//         <Text style={styles.monthText}>{`${selectedYear}년 ${selectedMonth}월`}</Text>
//         <Ionicons name="chevron-down-outline" size={20} color="#009984" />
//       </TouchableOpacity>

//       {/* 모달 */}
//       <Modal visible={isModalVisible} transparent animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.pickerContainer}>
//             <Text style={styles.pickerLabel}>연도 선택</Text>
//             <Picker
//               selectedValue={selectedYear}
//               onValueChange={(itemValue) => handleYearSelect(itemValue)} // 연도 변경 처리
//               style={styles.picker}
//             >
//               {Array.from({ length: 10 }, (_, i) => (
//                 <Picker.Item key={i} label={`${2020 + i}년`} value={2020 + i} />
//               ))}
//             </Picker>

//             <Text style={styles.pickerLabel}>달 선택</Text>
//             <Picker
//               selectedValue={selectedMonth}
//               onValueChange={(itemValue) => handleMonthSelect(itemValue)}
//               style={styles.picker}
//             >
//               {Array.from({ length: 12 }, (_, i) => (
//                 <Picker.Item key={i} label={`${i + 1}월`} value={i + 1} />
//               ))}
//             </Picker>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default HeaderWithModal;


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Modal } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { Ionicons } from '@expo/vector-icons';
// import styles from '../../styles/AccountBookTabStyles/HeaderWithModalStyles';

// const HeaderWithModal = ({ selectedYear, selectedMonth, onMonthSelect }) => {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => setModalVisible(!isModalVisible);

//   const handleMonthSelect = (month) => {
//     toggleModal();
//     if (onMonthSelect) {
//       onMonthSelect({ year: selectedYear, month }); // 연도와 월을 객체로 전달
//     }
//   };

//   return (
//     <View style={styles.headerContainer}>
//       {/* 현재 연도와 월 표시 */}
//       <TouchableOpacity style={styles.monthSelector} onPress={toggleModal}>
//         <Text style={styles.monthText}>{`${selectedYear}년 ${selectedMonth}월`}</Text>
//         <Ionicons name="chevron-down-outline" size={20} color="#009984" />
//       </TouchableOpacity>

//       {/* 모달 */}
//       <Modal visible={isModalVisible} transparent animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.pickerContainer}>
//             <Text style={styles.pickerLabel}>연도 선택</Text>
//             <Picker
//               selectedValue={selectedYear}
//               onValueChange={(itemValue) =>
//                 onMonthSelect({ year: itemValue, month: selectedMonth })
//               }
//               style={styles.picker}
//             >
//               {Array.from({ length: 10 }, (_, i) => (
//                 <Picker.Item key={i} label={`${2020 + i}년`} value={2020 + i} />
//               ))}
//             </Picker>

//             <Text style={styles.pickerLabel}>달 선택</Text>
//             <Picker
//               selectedValue={selectedMonth}
//               onValueChange={(itemValue) => handleMonthSelect(itemValue)}
//               style={styles.picker}
//             >
//               {Array.from({ length: 12 }, (_, i) => (
//                 <Picker.Item key={i} label={`${i + 1}월`} value={i + 1} />
//               ))}
//             </Picker>
//           </View>

//           <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
//             <Text style={styles.closeButtonText}>닫기</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default HeaderWithModal;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/AccountBookTabStyles/HeaderWithModalStyles';

const HeaderWithModal = ({ selectedYear, selectedMonth, onMonthSelect }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleYearChange = (year) => {
    if (onMonthSelect) {
      onMonthSelect({ year, month: selectedMonth }); // 부모로 연도와 월 전달
    }
  };

  const handleMonthChange = (month) => {
    if (onMonthSelect) {
      onMonthSelect({ year: selectedYear, month }); // 부모로 연도와 월 전달
    }
    toggleModal(); // 모달 닫기
  };

  return (
    <View style={styles.headerContainer}>
      {/* 연도 및 월 표시 */}
      <TouchableOpacity style={styles.monthSelector} onPress={toggleModal}>
        <Text style={styles.monthText}>{`${selectedYear}년 ${selectedMonth}월`}</Text>
        <Ionicons name="chevron-down-outline" size={20} color="#009984" />
      </TouchableOpacity>

      {/* 모달 */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>연도 선택</Text>
            <Picker
              selectedValue={selectedYear}
              onValueChange={(itemValue) => handleYearChange(itemValue)}
              style={styles.picker}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <Picker.Item key={i} label={`${2020 + i}년`} value={2020 + i} />
              ))}
            </Picker>

            <Text style={styles.pickerLabel}>달 선택</Text>
            <Picker
              selectedValue={selectedMonth}
              onValueChange={(itemValue) => handleMonthChange(itemValue)}
              style={styles.picker}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <Picker.Item key={i} label={`${i + 1}월`} value={i + 1} />
              ))}
            </Picker>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default HeaderWithModal;

