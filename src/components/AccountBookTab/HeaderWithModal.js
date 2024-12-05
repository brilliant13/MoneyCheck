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

const HeaderWithModal = ({
  selectedYear,
  selectedMonth,
  onMonthSelect,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [tempYear, setTempYear] = useState(selectedYear); // 임시로 선택한 연도
  const [tempMonth, setTempMonth] = useState(selectedMonth); // 임시로 선택한 월

  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleConfirm = () => {
    if (onMonthSelect) {
      onMonthSelect({ year: tempYear, month: tempMonth }); // 부모 컴포넌트로 선택한 연도와 월 전달
    }
    toggleModal(); // 모달 닫기
  };

  return (
    <View style={styles.headerContainer}>
      {/* 선택된 연도와 월 표시 */}
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
              selectedValue={tempYear}
              onValueChange={(itemValue) => setTempYear(itemValue)}
              style={styles.picker}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <Picker.Item key={i} label={`${2020 + i}년`} value={2020 + i} />
              ))}
            </Picker>

            <Text style={styles.pickerLabel}>달 선택</Text>
            <Picker
              selectedValue={tempMonth}
              onValueChange={(itemValue) => setTempMonth(itemValue)}
              style={styles.picker}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <Picker.Item key={i} label={`${i + 1}월`} value={i + 1} />
              ))}
            </Picker>


            {/* 버튼들 */}
            <View style={styles.buttonContainer}>
              {/* 닫기 버튼 */}
              <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                <Text style={styles.closeButtonText}>닫기</Text>
              </TouchableOpacity>
              {/* 확인 버튼 */}
              <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                <Text style={styles.confirmButtonText}>확인</Text>
              </TouchableOpacity>
            </View>







          </View>








        </View>
      </Modal>
    </View>
  );
};

export default HeaderWithModal;
