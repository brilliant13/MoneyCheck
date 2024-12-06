import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ProgressBar from '../atoms/ProgressBar';

const GoalStatus = ({ progress }) => (
  <View style={styles.container}>
    <View style={styles.progressBarContainer}>
      <Image 
        source={require('../../../../assets/Jiyoon/Group/mokPyo.png')}
        style={[
          styles.mokPyoIcon, 
          { 
            left: `${progress * 100}%`,
            bottom: -15  // 위로 이동
          }
        ]}
      />
      <ProgressBar progress={progress} />
      <Image 
        source={require('../../../../assets/Jiyoon/Group/goal.png')}
        style={styles.goalIcon}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  mokPyoIcon: {
    position: 'absolute',
    width: 100,
    height: 100,
    resizeMode: 'contain',
    transform: [{ translateX: -55 }],
    zIndex: 1,  // 이미지가 프로그레스바 위에 표시되도록
    bottom: -20  // -15에서 -5로 수정하여 프로그레스바와 더 가깝게 설정
  },
  goalIcon: {
    width: 41,
    height: 48,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    bottom: 0,  // 프로그레스바와 맞닿게 설정
  }
});

export default GoalStatus;