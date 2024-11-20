import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ShowMoreButton = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>모두 보기</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  text: {
    color: '#666',
    fontSize: 12,
  }
});

export default ShowMoreButton;