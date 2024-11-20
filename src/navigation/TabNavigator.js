// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../pages/HomeScreen';
import AccountBookScreen from '../pages/AccountBook';
import GroupManagement from '../pages/GroupManagement';
import Statistics from '../pages/Stats';
import FloatingButton from '../components/FloatingTab/FloatingButton';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from '../components/CustomHeader';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: () => {
            if (route.name === 'Home') {
              return <CustomHeader title="Home" showProfile={true} />;  
            } else if (route.name === 'Account Book') {
              return <CustomHeader title="가계부" />;
            } else if (route.name === 'Group Management') {
              return <CustomHeader title="공동관리" />;
            } else if (route.name === 'Statistics') {
              return <CustomHeader title="통계" />;
            }
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Account Book') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            } else if (route.name === 'Group Management') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Statistics') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account Book" component={AccountBookScreen} />
        <Tab.Screen name="Group Management" component={GroupManagement} />
        <Tab.Screen name="Statistics" component={Statistics} />
      </Tab.Navigator>

      {/* 공통 플로팅 버튼 */}
      <FloatingButton />
      </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TabNavigator;
