import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

const { width: screenWidth } = Dimensions.get('window');

const GoalCard = ({ title, progress, status, image }) => {
  const progressBarWidth = screenWidth * 0.79; // Progress Bar의 전체 길이
  const progressPosition = progressBarWidth * (progress / 100); // 현재 진행된 위치 계산

  // 나무 상태를 progress 값에 따라 설정
  const getTreeImage = () => {
    if (progress < 20) {
      return require('../../assets/tree1.png');
    } else if (progress < 40) {
      return require('../../assets/tree2.png');
    }else if (progress < 60) {
      return require('../../assets/tree3.png');
    }else {
      return require('../../assets/tree4.png');
    }
  };


  // 레벨을 progress 값에 따라 설정
  const getLevel = () => {
    if (progress < 25) {
      return 1;
    } else if (progress < 50) {
      return 2;
    } else if (progress < 75) {
      return 3;
    } else {
      return 4;
    }
  };

  const level = getLevel();


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
        <Image
          source={getTreeImage()}
          style={[
            styles.tree,
            level === 2 && styles.treeLevel2, // level2일 때만 스타일 추가
          ]}
        />
        <Text style={styles.status}>{status}</Text>
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
          {/* <Image
            source={require('../../assets/progress_marker.png')}
            style={[
              styles.progressMarker,
              { left: progressPosition - 48 }, // 진행 위치에 따라 이미지 위치 설정
            ]}
          /> */}
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
    borderRadius: 10,
    padding: 15,
    marginBottom: 16,
    width: screenWidth * 0.89,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  levelContainer: {
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
  },
  level: {
    fontSize: 12,
    fontWeight: '600',
    color: '#00796b',
  },
  treeContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  tree: {
    width: 80,
    height: 80,
  },
  treeLevel2: {
    width: 60, // level2일 때 너비 조정
    height: 60, // level2일 때 높이 조정
  },
  status: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  progressBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  progressBarContainer: {
    position: 'relative',
    flex: 1,
  },
  progressMarker: {
    position: 'absolute',
    bottom: 15,
    width: 90,
    height: 30,
  },
  goalFlag: {
    width: 45,
    height: 50,
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 12,
  },
});

export default GoalCard;
