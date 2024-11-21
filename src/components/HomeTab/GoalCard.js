import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

const { width: screenWidth } = Dimensions.get('window');

const GoalCard = ({ title, level, progress, status, image }) => {
  const progressBarWidth = screenWidth * 0.79; // Progress Bar의 전체 길이
  const progressPosition = progressBarWidth * (progress / 100); // 현재 진행된 위치 계산

  return (
    <View style={styles.card}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <Image source={image} style={styles.image} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.levelContainer}>
            <Text style={styles.level}>Lv.{level}</Text>
          </View>
        </View>
      </View>

      {/* 나무 및 상태 */}
      <View style={styles.treeContainer}>
        <Image source={require('../../assets/tree.png')} style={styles.tree} />
      </View>

      {/* 진행 상태 바 */}
      <View style={styles.progressBarWrapper}>
        <View style={styles.progressBarContainer}>
          <Progress.Bar
            progress={progress / 100}
            width={progressBarWidth}
            height={8} // 진행 바 높이 줄임
            borderRadius={4}
            color="#32CD32"
            unfilledColor="#e0e0e0"
            borderWidth={0}
          />
          {/* 현재 진행 상태 이미지 */}
          <Image
            source={require('../../assets/progress_marker.png')}
            style={[
              styles.progressMarker,
              { left: progressPosition - 48 }, // 진행 위치에 따라 이미지 위치 설정
            ]}
          />
        </View>
        {/* Goal 이미지 */}
        <Image
          source={require('../../assets/goal_flag.png')}
          style={styles.goalFlag}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10, // 둥근 모서리 반경 줄임
    padding: 15, // 내부 여백 줄임
    marginBottom: 16, // 카드 간 여백 줄임
    shadowColor: '#000',
    //shadowOpacity: 0.05, // 그림자 투명도 줄임
    //shadowRadius: 3, // 그림자 반경 줄임
    //elevation: 2,
    width: screenWidth * 0.89,
    alignSelf: 'center',
    borderWidth: 1, // 테두리 두께
    borderColor: '#E0E0E0', // 테두리 색상
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12, // 제목과 레벨 아래 간격 줄임
  },
  image: {
    width: 40, // 이미지 크기 줄임
    height: 40,
    marginRight: 12,
  },
  headerTextContainer: {
    flexDirection: 'row', // 제목과 레벨을 가로로 배치
    alignItems: 'center',
  },
  title: {
    fontSize: 18, // 제목 글씨 크기 줄임
    fontWeight: 'bold',
    color: '#333',
  },
  levelContainer: {
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8, // 제목과 레벨 사이 간격 줄임
  },
  level: {
    fontSize: 12, // 레벨 글씨 크기 줄임
    fontWeight: '600',
    color: '#00796b',
  },
  treeContainer: {
    alignItems: 'center',
    marginBottom: 15, // 나무와 진행 바 사이 간격 줄임
  },
  tree: {
    width: 80, // 나무 이미지 크기 줄임
    height: 80,
  },
  progressBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12, // 진행 바와 나무 간 간격 줄임
  },
  progressBarContainer: {
    position: 'relative',
    flex: 1,
  },
  progressMarker: {
    position: 'absolute',
    bottom: 15, // 진행 바 위 이미지 위치 조정
    width: 90,
    height: 30,
  },
  goalFlag: {
    width: 45, // 기존보다 크기를 키움
    height: 50, // 플래그 크기 조정
    position: 'absolute', // Goal을 Progress Bar와 맞닿게
    right: 0, // 오른쪽 끝에 위치
    bottom: 0, // Progress Bar 바로 위 맞춤
    marginRight: 12, // 약간 겹치도록 조정
  },
});

export default GoalCard;
