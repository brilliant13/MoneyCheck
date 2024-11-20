import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const subscriptionsList = [
  { id: '1', name: '멜론', icon: require('../../assets/melon.png') },
  { id: '2', name: 'GPT', icon: require('../../assets/gpt.png') },
  { id: '3', name: '밀리의 서재', icon: require('../../assets/millie.png') },
  { id: '4', name: '유튜브 프리미엄', icon: require('../../assets/youtube.png') },
  { id: '5', name: '쏘카', icon: require('../../assets/socar.png') },
  { id: '6', name: '지니', icon: require('../../assets/genie.png') },
  { id: '7', name: '티빙', icon: require('../../assets/tving.png') },
  { id: '8', name: '쿠팡 플레이', icon: require('../../assets/coopang.png') },
  { id: '9', name: '왓챠', icon: require('../../assets/watcha.png') },
  { id: '10', name: 'FLO', icon: require('../../assets/flo.png') },
];

const SubscriptionListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={[styles.header, Platform.OS === 'android' && styles.androidHeader]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>구독 추가</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 제목 */}
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>구독추가</Text>
        <Text style={styles.description}>구독을 추가하세요</Text>
      </View>

      {/* 구독 리스트 */}
      <FlatList
        data={subscriptionsList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate('SubscriptionAddScreen', { icon: item.icon, name: item.name })}
          >
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    height: 60,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  androidHeader: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    height: Platform.OS === 'android' ? 60 + StatusBar.currentHeight : 60,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009984',
    marginBottom: 8,
  },
  description: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingLeft :30,
    paddingRight: 30,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    color: '#1A1A1A',
    fontWeight: '600',   // Semi Bold
  },
});

export default SubscriptionListScreen;
