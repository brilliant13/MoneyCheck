import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg'; // QRCode 컴포넌트 추가
import Title from '../../components/QRCode/Title';
import Button from '../../components/QRCode/Button';

const QrMatchingPage = () => {
  const navigation = useNavigation();
  const [qrValue, setQrValue] = useState(''); // QR 코드 데이터 상태

  const handleScan = () => {
    console.log('QR 코드 스캔 실행');
    navigation.navigate('GroupDetail'); // GroupDetail 페이지로 이동
  };

  const handleCreateQr = () => {
    const newQrValue = `group-${Math.random().toString(36).substr(2, 9)}`; // 랜덤 문자열 생성
    setQrValue(newQrValue); // QR 코드 데이터 업데이트
    console.log('QR 코드 생성:', newQrValue);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Image
          source={require('../../assets/back.png')}
          style={styles.backImage}
        />
      </TouchableOpacity>

      {/* Title */}
      <Title title="QR 코드를 스캔해 주세요" subtitle="공동 관리 매칭" />

      {/* QR Placeholder */}
      <View style={styles.qrPlaceholder}>
        {qrValue ? (
          <QRCode value={qrValue} size={200} /> // QR 코드 표시
        ) : (
          <Text style={styles.placeholderText}>QR 코드가 없습니다</Text>
        )}
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button icon="qr-code-scanner" label="QR코드 스캔" onPress={handleScan} />
        <Button icon="qr-code" label="QR코드 만들기" onPress={handleCreateQr} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backImage: {
    width: 24,
    height: 24,
  },
  qrPlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
  },
});

export default QrMatchingPage;
