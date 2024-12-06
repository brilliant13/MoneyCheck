// src/styles/FloatingTabStyles/FloatingStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
      position: 'absolute',
      right: 24,
      bottom: 110,
      backgroundColor: '#00BFA5',
      width: 64,
      height: 64,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    icon: {
      width: 30,
      height: 30,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
      paddingBottom: 100,
    },
    modalContent: {
      alignItems: 'center',
      gap: 8,
      position: 'absolute',
      bottom: 190,
      right: 0,
    },
    modalButton: {
      width: 151,
      height: 43,
      right: 24,
      resizeMode: 'contain',
    }
});
