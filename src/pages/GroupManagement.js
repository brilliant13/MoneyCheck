//공동 관리 탭 화면
// src/pages/GroupManagement.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GroupManagement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Group Management Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default GroupManagement;
