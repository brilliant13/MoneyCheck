// src/components/CustomHeader.js
import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/CustomHeaderStyles";

const CustomHeader = ({ title, showProfile, showBack = false }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, Platform.OS === "android" && styles.androidHeader]}>
        {showProfile ? (
          <View style={styles.profileContainer}>
            <Image source={require("../../assets/profile_icon.png")} style={styles.profileIcon} />
            <Text style={styles.title}>머니췍 님</Text>
          </View>
        ) : (
          <View style={styles.titleContainer}>
            {showBack && (
              <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={styles.backButton}
              >
                <Ionicons name="arrow-back" size={24} color="#3A3A3A" />
              </TouchableOpacity>
            )}
            <Text style={[styles.title, showBack && styles.titleWithBack]}>{title}</Text>
          </View>
        )}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => alert("알림")}>
            <Image source={require("../assets/bell.png")} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("메뉴")} style={styles.menuIcon}>
            <Image source={require("../assets/menu.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
