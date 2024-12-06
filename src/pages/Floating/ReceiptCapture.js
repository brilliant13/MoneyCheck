import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, Image, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';
import { processReceiptImage } from '../../utils/ocr';

const ReceiptCapture = ({ navigation, route }) => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const cameraRef = useRef(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === 'granted');
      if (status !== 'granted') {
        Alert.alert(
          "카메라 권한 필요",
          "앱 설정에서 카메라 권한을 활성화해주세요.",
          [{ text: "확인", onPress: () => {} }]
        );
      }
    };

    requestCameraPermission();
  }, []);

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
    if (!isCameraOn) {
      setIsCameraOn(true);
      return;
    }

    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setSelectedImage(photo.uri);
        setIsCameraOn(false);
        await processImage(photo.uri);
      } catch (error) {
        Alert.alert("촬영 오류", "사진 촬영 중 문제가 발생했습니다.");
      }
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

  if (!cameraPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          카메라 권한이 필요합니다.
        </Text>
        <TouchableOpacity 
          style={styles.permissionButton} 
          onPress={() => {} }
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
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            ref={cameraRef}
            onMountError={(error) => {
              console.error('카메라 마운트 오류:', error);
              Alert.alert('오류', '카메라를 시작할 수 없습니다.');
            }}
          >
            <View style={styles.cameraContent}>
              {/* 카메라 오버레이 내용 */}
            </View>
          </Camera>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    height: 60,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  androidHeader: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    height: Platform.OS === 'android' ? 60 + StatusBar.currentHeight : 60,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cameraFrame: {
    height: 450,
    backgroundColor: '#D9D9D9',
    marginTop: 50,
    overflow: 'hidden',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 450,
    width: '100%',
  },
  albumButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 8,
    position: 'absolute',
    left: '57%',
    transform: [{ translateX: -50 }],
  },
  albumButtonText: {
    color: '#00AB96',
    fontSize: 14,
    fontFamily: 'Pretendard',
    fontWeight: '600',
  },
  manualButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.20)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    position: 'absolute',
    right: 20,
  },
  manualButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Pretendard',
    fontWeight: '600',
  },
  guideText: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: '#949494',
    fontSize: 14,
    fontFamily: 'Pretendard',
    top: 550,
  },
  captureButtonContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: 600,
  },
  captureButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    borderWidth: 12,
    borderColor: '#02D2C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonText: {
    color: '#009984',
    fontSize: 16,
    fontFamily: 'Pretendard',
    fontWeight: '600',
    marginTop: 10,
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loadingBox: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    width: '80%',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
    fontFamily: 'Pretendard',
  },
  loadingSubText: {
    marginTop: 8,
    fontSize: 14,
    color: '#666666',
    fontFamily: 'Pretendard',
  },
  permissionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666666',
  },
  permissionButton: {
    backgroundColor: '#00AB96',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  permissionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  cameraContent: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  cameraPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
  },
  placeholderText: {
    color: '#666666',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Pretendard',
  }
});

export default ReceiptCapture; 