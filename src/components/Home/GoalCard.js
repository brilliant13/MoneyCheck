import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Progress from 'react-native-progress';

const GoalCard = ({ title, level, progress, status, image }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.level}>Lv.{level}</Text>
        </View>
      </View>
      <View style={styles.goalContainer}>
        <Image source={require('../../assets/tree.png')} style={styles.tree} />
        <Text style={styles.status}>{status}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <Progress.Bar
          progress={progress / 100}
          width={null}
          height={10}
          borderRadius={5}
          color="#32CD32"
          unfilledColor="#e0e0e0"
          borderWidth={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  level: {
    fontSize: 14,
    color: '#666',
  },
  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tree: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
  progressBarContainer: {
    marginTop: 8,
  },
});

export default GoalCard;
