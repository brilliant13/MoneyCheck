import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const baseHeight = 844; // 기준 디자인 높이
const scale = height / baseHeight;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cameraFrame: {
    height: 450 * scale,
    backgroundColor: '#D9D9D9',
    overflow: 'hidden',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20 * scale,
    position: 'absolute',
    top: 400 * scale,
    width: '100%',
  },
  albumButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12 * scale,
    paddingHorizontal: 20 * scale,
    borderRadius: 12,
    gap: 8,
    position: 'absolute',
    left: '57%',
    transform: [{ translateX: -50 }],
  },
  albumButtonText: {
    color: '#00AB96',
    fontSize: 14 * scale,
    fontFamily: 'Pretendard',
    fontWeight: '600',
  },
  manualButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.20)',
    paddingVertical: 8 * scale,
    paddingHorizontal: 16 * scale,
    borderRadius: 6,
    position: 'absolute',
    right: 20 * scale,
  },
  manualButtonText: {
    color: 'white',
    fontSize: 14 * scale,
    fontFamily: 'Pretendard',
    fontWeight: '600',
  },
  guideText: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: '#949494',
    fontSize: 14 * scale,
    fontFamily: 'Pretendard',
    top: 480 * scale,
  },
  captureButtonContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: 530 * scale,
  },
  captureButton: {
    width: 120 * scale,
    height: 120 * scale,
    borderRadius: 60 * scale,
    backgroundColor: 'white',
    borderWidth: 12 * scale,
    borderColor: '#02D2C4',
    justifyContent: 'center',
    alignItems: 'center',
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
    padding: 24 * scale,
    borderRadius: 16,
    alignItems: 'center',
    width: '80%',
    maxWidth: 300 * scale,
  },
  loadingText: {
    marginTop: 16 * scale,
    fontSize: 16 * scale,
    fontWeight: '600',
    color: '#222222',
    fontFamily: 'Pretendard',
  },
  loadingSubText: {
    marginTop: 8 * scale,
    fontSize: 14 * scale,
    color: '#666666',
    fontFamily: 'Pretendard',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  selectedImage: {
    flex: 1,
    width: '100%',
  },
  cameraPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666666',
    fontSize: 14 * scale,
    fontFamily: 'Pretendard',
  },
  captureButtonText: {
    marginTop: 10 * scale,
    fontSize: 14 * scale,
    color: '#00AB96',
    fontFamily: 'Pretendard',
  },
  // ... 나머지 스타일은 동일하게 scale 적용
}); 