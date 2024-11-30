import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';

const ReceiptCapture = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (!isCameraOn) {
      setIsCameraOn(true);
      return;
    }

    if (cameraRef.current && cameraReady) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setSelectedImage(photo.uri);
        setIsCameraOn(false);
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  const onCameraReady = () => {
    setCameraReady(true);
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
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>카메라 접근 권한이 필요합니다.</Text>;
  }

  return (
    <View style={styles.container}>
      {/* 카메라 프레임 영역 */}
      <View style={styles.cameraFrame}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        ) : isCameraOn && hasPermission ? (
          <Camera 
            style={styles.camera} 
            ref={cameraRef}
            type={CameraType.back}
            onCameraReady={onCameraReady}
          />
        ) : (
          <View style={styles.cameraPlaceholder}>
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
            previousScreen: navigation.getState().routes[0].name
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
});

export default ReceiptCapture; 