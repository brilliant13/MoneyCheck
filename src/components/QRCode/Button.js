// components/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Button = ({ icon, label, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <MaterialIcons name={icon} size={24} color={disabled ? '#ccc' : '#000'} />
      <Text style={[styles.label, disabled && styles.labelDisabled]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  labelDisabled: {
    color: '#ccc',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
