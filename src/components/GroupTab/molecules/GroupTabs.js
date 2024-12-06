// 태그 리스트

import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GroupTag from '../atoms/GroupTag';

const GroupTabs = ({ onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState('우리가족');
  const navigation = useNavigation();
  const tabs = ['우리가족', '대학동창', '여자친구', '새로운 공동관리 추가'];

  const handleTabPress = (tab) => {
    if (tab === '새로운 공동관리 추가') {
      navigation.navigate('QrMatching');
      return;
    }
    setSelectedTab(tab);
    onTabChange(tab);
  };

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {tabs.map((tab) => (
        <GroupTag
          key={tab}
          label={tab}
          isSelected={selectedTab === tab}
          onPress={() => handleTabPress(tab)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
  }
});

export default GroupTabs;