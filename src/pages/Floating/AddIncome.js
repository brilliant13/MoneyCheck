import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from '../../components/FloatingTab/DatePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddIncome = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, emoji: '💰', name: '월급' },
    { id: 2, emoji: '💸', name: '용돈' },
    { id: 3, emoji: '📈', name: '투자' },
    { id: 4, emoji: '📝', name: '기타' },
  ];

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
      if (!amount || !source || !selectedCategory) {
        alert('모든 항목을 입력해주세요.');
        return;
      }

      const numericAmount = parseInt(amount.replace(/,/g, ''));

      const selectedCategoryInfo = categories.find(
        (cat) => cat.id === selectedCategory
      );

      const newIncome = {
        id: Date.now(),
        amount: numericAmount,
        source,
        date: selectedDate,
        category: {
          id: selectedCategoryInfo.id,
          emoji: selectedCategoryInfo.emoji,
          name: selectedCategoryInfo.name,
        },
        createdAt: new Date()
      };

      const existingData = await AsyncStorage.getItem('incomes');
      const incomes = existingData ? JSON.parse(existingData) : [];
      incomes.push(newIncome);
      await AsyncStorage.setItem('incomes', JSON.stringify(incomes));
      
      console.log('저장된 데이터:', newIncome);
      navigation.goBack();
    } catch (error) {
      console.error('저장 실패:', error);
      alert('저장에 실패했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      {/* 입력 필드들 */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>수입금액</Text>
        <TextInput
          style={styles.input}
          placeholder="금액을 입력해주세요"
          value={amount}
          onChangeText={handleAmountChange}
          keyboardType="numeric"
          placeholderTextColor="#949494"
        />
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>수입처</Text>
        <TextInput
          style={styles.input}
          placeholder="예: 회사명, 은행명 등"
          value={source}
          onChangeText={setSource}
          placeholderTextColor="#949494"
        />
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>수입일자</Text>
        <TouchableOpacity 
          activeOpacity={0.7}
          onPress={() => setDatePickerVisible(true)}
        >
          <View style={styles.dateInputContainer}>
            <Text style={styles.dateText}>
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
      </View>

      {/* 카테고리 선택 */}
      <View style={styles.categorySection}>
        <Text style={styles.label}>카테고리</Text>
        <View style={styles.categoryContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryItem,
                selectedCategory === category.id && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text style={styles.categoryEmoji}>{category.emoji}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
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
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Pretendard',
    fontWeight: '600',
    color: '#1A1A1A',
  },
  inputSection: {
    marginHorizontal: 24,
    marginTop: 20,
  },
  label: {
    color: '#222222',
    fontSize: 18,
    fontFamily: 'Pretendard',
    fontWeight: '600',
    marginBottom: 12,
  },
  input: {
    padding: 12,
    backgroundColor: '#F9F9F9',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    fontSize: 14,
    fontFamily: 'Pretendard',
  },
  categorySection: {
    marginHorizontal: 24,
    marginTop: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryItem: {
    width: 70,
    height: 70,
    backgroundColor: '#F2F2F2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  selectedCategory: {
    backgroundColor: '#DFF7F6',
    borderWidth: 1,
    borderColor: '#00B9A5',
  },
  categoryEmoji: {
    fontSize: 26,
    color: '#6C6C6C',
  },
  categoryName: {
    fontSize: 11,
    color: '#949494',
    fontFamily: 'Pretendard',
    marginTop: 8,
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
  dateInputContainer: {
    padding: 12,
    backgroundColor: '#F9F9F9',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  dateText: {
    fontSize: 14,
    color: '#222222',
    fontFamily: 'Pretendard',
  },
});

export default AddIncome; 