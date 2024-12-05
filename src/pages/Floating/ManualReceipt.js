import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from '../../components/FloatingTab/DatePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ManualReceipt = ({ navigation, route }) => {
  const ocrData = route.params?.ocrData || {};
  
  const [businessNumber, setBusinessNumber] = useState(ocrData.businessNumber || '');
  const [storeName, setStoreName] = useState(ocrData.storeName || '');
  const [amount, setAmount] = useState(ocrData.amount?.toString() || '');
  const [paymentMethod, setPaymentMethod] = useState(ocrData.paymentMethod || '신용카드');
  const [selectedDate, setSelectedDate] = useState(ocrData.date ? new Date(ocrData.date) : new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);

  const paymentMethods = [
    '신용카드', 
    '체크카드', 
    '현금', 
    '계좌이체',
    '간편결제',
    '기타'
  ];

  const moods = ['🤩', '😊', '😑', '🥲', '😭'];

  const formatDate = (date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const handleAmountChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setAmount(formattedValue);
  };

  const handleSave = async () => {
    try {
      if (!storeName || !amount || !selectedDate || !paymentMethod) {
        alert('상호, 금액, 발행일, 결제수단은 필수 입력 항목입니다.');
        return;
      }

      const newReceipt = {
        id: Date.now(),
        businessNumber,
        storeName,
        amount: parseInt(amount.replace(/,/g, '')),
        paymentMethod,
        date: selectedDate,
        mood: selectedMood !== null ? moods[selectedMood] : null,
        createdAt: new Date()
      };

      const existingData = await AsyncStorage.getItem('receipts');
      const receipts = existingData ? JSON.parse(existingData) : [];
      receipts.push(newReceipt);
      await AsyncStorage.setItem('receipts', JSON.stringify(receipts));
      
      alert('영수증이 저장되었습니다.');
      
      navigation.goBack();
      navigation.goBack();
    } catch (error) {
      console.error('저장 실패:', error);
      alert('저장에 실패했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      {/* 입력 필드들 */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>사업자 번호</Text>
        <TextInput
          style={styles.input}
          placeholder="사업자 번호 10자리를 입력해 주세요"
          value={businessNumber}
          onChangeText={setBusinessNumber}
          keyboardType="numeric"
          placeholderTextColor="#949494"
        />

        <Text style={styles.label}>상호</Text>
        <TextInput
          style={styles.input}
          placeholder="상호를 입력해 주세요"
          value={storeName}
          onChangeText={setStoreName}
        />

        <Text style={styles.label}>금액</Text>
        <TextInput
          style={styles.input}
          placeholder="금액을 입력해 주세요"
          value={amount}
          onChangeText={handleAmountChange}
          keyboardType="numeric"
          placeholderTextColor="#949494"
        />

        <Text style={styles.label}>결제수단</Text>
        <View style={styles.paymentMethodContainer}>
          {paymentMethods.map((method) => (
            <TouchableOpacity
              key={method}
              style={[
                styles.paymentMethodButton,
                paymentMethod === method && styles.selectedPaymentMethod
              ]}
              onPress={() => setPaymentMethod(method)}
            >
              <Text style={[
                styles.paymentMethodText,
                paymentMethod === method && styles.selectedPaymentMethodText
              ]}>
                {method}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>발행일</Text>
        <TouchableOpacity 
          activeOpacity={0.7}
          onPress={() => setDatePickerVisible(true)}
        >
          <View style={styles.input}>
            <Text style={[styles.dateText]}>
              {formatDate(selectedDate)}
            </Text>
          </View>
        </TouchableOpacity>
        
        <DatePicker
          isVisible={isDatePickerVisible}
          onClose={() => setDatePickerVisible(false)}
          onSelect={setSelectedDate}
          selectedDate={selectedDate}
        />

        <Text style={styles.label}>오늘 기분 어떠세요?</Text>
        <View style={styles.moodContainer}>
          {moods.map((mood, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.moodButton,
                selectedMood === index && styles.selectedMood
              ]}
              onPress={() => setSelectedMood(index)}
            >
              <Text style={styles.moodEmoji}>{mood}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 저장 버튼 */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>저장하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'Pretendard',
    fontWeight: '600',
    color: '#1A1A1A',
    textAlign: 'center',
  },
  inputContainer: {
    padding: 24,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Pretendard',
    fontWeight: '600',
    color: '#222222',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 6,
    padding: 12,
    marginBottom: 20,
    fontSize: 14,
    fontFamily: 'Pretendard',
    color: '#949494',
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'Pretendard',
    color: '#222222',
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
    marginTop: 12,
  },
  moodButton: {
    width: 70,
    height: 70,
    backgroundColor: '#F2F2F2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  selectedMood: {
    backgroundColor: '#73E0D6',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
  },
  moodEmoji: {
    fontSize: 26,
    color: '#6C6C6C',
    fontFamily: 'Pretendard',
    fontWeight: '500',
  },
  saveButton: {
    position: 'absolute',
    bottom: 34,
    left: 24,
    right: 24,
    backgroundColor: '#00B9A5',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Pretendard',
    fontWeight: '600',
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
    marginBottom: 20,
  },
  paymentMethodButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#FFFFFF',
  },
  selectedPaymentMethod: {
    backgroundColor: '#00B9A5',
    borderColor: '#00B9A5',
  },
  paymentMethodText: {
    color: '#666666',
    fontSize: 14,
    fontFamily: 'Pretendard',
  },
  selectedPaymentMethodText: {
    color: '#FFFFFF',
  },
});

export default ManualReceipt; 