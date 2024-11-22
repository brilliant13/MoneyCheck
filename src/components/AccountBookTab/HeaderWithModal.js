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

// const HeaderWithModal = ({ onMonthSelect }) => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

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
//       {/* 터치하면 모달을 열도록 설정 */}
//       <TouchableOpacity style={styles.monthSelector} onPress={toggleModal}>
//         <Text style={styles.monthText}>{`${selectedYear}년 ${selectedMonth}월`}</Text>
//         <Ionicons name="chevron-down-outline" size={20} color="#4CAF50" />
//       </TouchableOpacity>

//       {/* 모달 */}
//       <Modal visible={isModalVisible} transparent animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.pickerContainer}>
//             <Text style={styles.pickerLabel}>연도 선택</Text>
//             <Picker
//               selectedValue={selectedYear}
//               onValueChange={(itemValue) => setSelectedYear(itemValue)}
//             >
//               {Array.from({ length: 10 }, (_, i) => (
//                 <Picker.Item key={i} label={`${2020 + i}년`} value={2020 + i} />
//               ))}
//             </Picker>

//             <Text style={styles.pickerLabel}>달 선택</Text>
//             <Picker
//               selectedValue={selectedMonth}
//               onValueChange={(itemValue) => handleMonthSelect(itemValue)}
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

//src/components/AccountBookTab/HeaderWithModal.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

import styles from '../../styles/AccountBookTabStyles/HeaderWithModalStyles';

const HeaderWithModal = ({ onMonthSelect }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // 월은 0부터 시작하므로 +1

  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    toggleModal();
    if (onMonthSelect) {
      onMonthSelect(month); // 부모 컴포넌트로 선택된 월 전달
    }
  };

  return (
    <View style={styles.headerContainer}>
      {/* 터치하면 모달을 열도록 설정 */}
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
              onValueChange={(itemValue) => setSelectedYear(itemValue)}
              style={styles.picker}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <Picker.Item key={i} label={`${2020 + i}년`} value={2020 + i} />
              ))}
            </Picker>

            <Text style={styles.pickerLabel}>달 선택</Text>
            <Picker
              selectedValue={selectedMonth}
              onValueChange={(itemValue) => handleMonthSelect(itemValue)}
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
