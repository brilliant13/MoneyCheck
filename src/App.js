// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './navigation/TabNavigator';
import GroupStackNavigator from './navigation/GroupStackNavigator';
import GoalScreen from './pages/Home/GoalScreen';
import GoalDetailScreen from './pages/Home/GoalDetailScreen';
import SubscriptionScreen from './pages/Home/SubscriptionScreen';
import SubscriptionListScreen from './pages/Home/SubscriptionListScreen';
import SubscriptionAddScreen from './pages/Home/SubscriptionAddScreen';
import GoalAddScreen from './pages/Home/GoalAddScreen';

import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';

import GroupDetail from './pages/Group/GroupDetail';
import QrMatching from './pages/Group/QrMatching';
import AddIncome from './pages/Floating/AddIncome';
import ReceiptCapture from './pages/Floating/ReceiptCapture';
import ManualReceipt from './pages/Floating/ManualReceipt';
import FloatingStackNavigator from './navigation/FloatingStackNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Authentication */}
        {/* Uncomment these lines if Login and SignUp are needed */}
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} /> */}

        {/* Main Tab Navigation */}
        <Stack.Screen name="Main" component={TabNavigator} />

        {/* Group Management Navigation */}
        <Stack.Screen name="GroupStack" component={GroupStackNavigator} options={{ headerShown: false }}/>

        {/* Goal Management Screens */}
        <Stack.Screen name="GoalScreen" component={GoalScreen} />
        <Stack.Screen name="GoalDetail" component={GoalDetailScreen} />
        <Stack.Screen name="GoalAddScreen" component={GoalAddScreen} />

        {/* Subscription Management Screens */}
        <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
        <Stack.Screen name="SubscriptionListScreen" component={SubscriptionListScreen} />
        <Stack.Screen name="SubscriptionAddScreen" component={SubscriptionAddScreen} />

        {/* Floating Features */}
        <Stack.Screen name="FloatingStack" component={FloatingStackNavigator} />

        {/* QrMatching Screen */}
        <Stack.Screen name="QrMatching" component={QrMatching} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
