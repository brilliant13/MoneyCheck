import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DatePicker = ({ isVisible, onClose, onSelect, selectedDate }) => {
  const [tempYear, setTempYear] = useState(selectedDate.getFullYear());
  const [tempMonth, setTempMonth] = useState(selectedDate.getMonth() + 1);
  const [tempDay, setTempDay] = useState(selectedDate.getDate());

  const handleConfirm = () => {
    onSelect(new Date(tempYear, tempMonth - 1, tempDay));
    onClose();
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.pickerContainer}>
          <View style={styles.pickersRow}>
            <View style={styles.pickerWrapper}>
              <Text style={styles.pickerLabel}>연도</Text>
              <Picker
                selectedValue={tempYear}
                style={styles.picker}
                onValueChange={(itemValue) => setTempYear(itemValue)}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <Picker.Item
                    key={i}
                    label={`${2020 + i}`}
                    value={2020 + i}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.pickerWrapper}>
              <Text style={styles.pickerLabel}>월</Text>
              <Picker
                selectedValue={tempMonth}
                style={styles.picker}
                onValueChange={(itemValue) => setTempMonth(itemValue)}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <Picker.Item
                    key={i}
                    label={`${i + 1}`}
                    value={i + 1}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.pickerWrapper}>
              <Text style={styles.pickerLabel}>일</Text>
              <Picker
                selectedValue={tempDay}
                style={styles.picker}
                onValueChange={(itemValue) => setTempDay(itemValue)}
              >
                {Array.from({ length: getDaysInMonth(tempYear, tempMonth) }, (_, i) => (
                  <Picker.Item
                    key={i}
                    label={`${i + 1}`}
                    value={i + 1}
                  />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>닫기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
              <Text style={styles.confirmButtonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    paddingBottom: 24,
  },
  pickersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  pickerWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 8,
  },
  picker: {
    width: '100%',
    height: 150,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButton: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFCDD2',
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  confirmButton: {
    flex: 1,
    padding: 15,
    backgroundColor: '#C8E6C9',
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#388E3C',
    fontSize: 16,
    fontWeight: '600',
  },
  closeButtonText: {
    color: '#D32F2F',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DatePicker; 