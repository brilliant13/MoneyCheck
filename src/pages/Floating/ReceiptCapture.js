import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Platform, StatusBar, Image, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { processReceiptImage } from '../../utils/ocr';
import styles from '../../styles/FloatingTabStyles/ReceiptCaptureStyles';

const ReceiptCapture = ({ navigation, route }) => {
  const camera = useRef(null);
  const [facing, setFacing] = useState('back')
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const processImage = async (imageUri) => {
    setIsProcessing(true);
    try {
      const ocrResult = await processReceiptImage(imageUri);
      navigation.navigate('ManualReceipt', {
        ocrData: ocrResult,
        previousScreen: route.params?.previousScreen || 'AccountBook'
      });
    } catch (error) {
      Alert.alert("처리 실패", "이미지 처리 중 문제가 발생했습니다.");
      navigation.navigate('ManualReceipt', {
        previousScreen: route.params?.previousScreen || 'AccountBook'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const takePicture = async () => {
    console.log('카메라 상태:', isCameraOn ? '켜짐' : '꺼짐');
    
    if (!isCameraOn) {
      console.log('카메라 켜기 시도');
      setIsCameraOn(true);
      return;
    }

    try {
      console.log('사진 촬영 시도');
      const photo = await camera.current.takePictureAsync();
      setIsCameraOn(false);
      setSelectedImage(photo.uri);
      await processImage(photo.uri);
    } catch (error) {
      console.error('사진 촬영 오류:', error);
      Alert.alert("촬영 오류", "사진 촬영 중 문제가 발생했습니다.");
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      alert('앨범 접근 권한이 필요합니다.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      await processImage(result.assets[0].uri);
    }
  };

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          카메라 권한이 필요합니다.
        </Text>
        <TouchableOpacity 
          style={styles.permissionButton} 
          onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}>
            권한 요청하기
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* 카메라 프레임 영역 */}
      <View style={styles.cameraFrame}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        ) : isCameraOn ? (
          <CameraView
            ref={camera}
            style={styles.camera}
            facing={facing}
          />
        ) : (
          <View style={styles.cameraPlaceholder}>
            <Text style={styles.placeholderText}>카메라가 꺼져 있습니다</Text>
          </View>
        )}
      </View>

      {/* 버튼 영역 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.albumButton} onPress={pickImage}>
          <Ionicons name="images-outline" size={16} color="#00AB96" />
          <Text style={styles.albumButtonText}>앨범</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.manualButton} 
          onPress={() => navigation.navigate('ManualReceipt', {
            previousScreen: route.params?.previousScreen || 'AccountBook'
          })}
        >
          <Text style={styles.manualButtonText}>수기입력</Text>
        </TouchableOpacity>
      </View>

      {/* 안내 텍스트 */}
      <Text style={styles.guideText}>
        소유하고 계신 영수증을 프레임에 맞게 촬영해 주세요
      </Text>

      {/* 촬영 버튼 */}
      <View style={styles.captureButtonContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <Ionicons name="camera-outline" size={32} color="#009984" />
        </TouchableOpacity>
        <Text style={styles.captureButtonText}>
          {isCameraOn ? '촬영하기' : '카메라 켜기'}
        </Text>
      </View>

      {/* 로딩 오버레이 추가 */}
      {isProcessing && (
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#00AB96" />
            <Text style={styles.loadingText}>영수증을 분석중입니다...</Text>
            <Text style={styles.loadingSubText}>잠시만 기다려주세요</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ReceiptCapture; 