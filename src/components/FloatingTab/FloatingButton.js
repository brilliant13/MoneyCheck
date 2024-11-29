// src/components/FloatingButton.js
import React, { useState } from 'react';
import { TouchableOpacity, Image, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/FloatingTabStyles/FloatingStyles';

const FloatingButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Image source={require('../../../assets/Jiyoon/Floating/icon.png')} style={styles.icon} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleModalClose}
      >
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={() => {
                navigation.navigate('AddIncome');
                handleModalClose();
              }}>
                <Image 
                  source={require('../../../assets/Jiyoon/Floating/addSuip.png')} 
                  style={styles.modalButton}
                />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => {
                // 지출 추가 로직
                handleModalClose();
              }}>
                <Image 
                  source={require('../../../assets/Jiyoon/Floating/addJichul.png')} 
                  style={styles.modalButton}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default FloatingButton;
