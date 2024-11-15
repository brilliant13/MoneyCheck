// 가계부 탭 화면 (전체, 수입, 지출 포함)
// src/pages/AccountBook.js
import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import Calendar from '../components/AccountBookTab/Calendar';
import FloatingButton from '../components/FloatingTab/FloatingButton';
import IncomeList from '../components/AccountBookTab/IncomeList';
import ExpenseList from '../components/AccountBookTab/ExpenseList';
import Total from '../components/AccountBookTab/Total';
import styles from '../styles/AccountBookTabStyles/AccountBookStyles';

const AccountBook = () => {
  const [selectedTab, setSelectedTab] = useState('전체');

  return (
    <View style={styles.container}>
      {/* 세부 탭 */}
      <View style={styles.tabContainer}>
        {['전체', '수입', '지출'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.selectedTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 탭에 따른 콘텐츠 렌더링 */}
      <ScrollView>
        {selectedTab === '전체' && (
          <>
            <Calendar />
            <Total />
          </>
        )}
        {selectedTab === '수입' && <IncomeList />}
        {selectedTab === '지출' && <ExpenseList />}
      </ScrollView>

    </View>
  );
};

export default AccountBook;
