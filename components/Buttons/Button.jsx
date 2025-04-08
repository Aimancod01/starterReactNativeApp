import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {primary} from '../../config/Colors';

const CustomButton = ({
  title,
  onPress,
  isLoading = false,
  disabled = false,
  style = {},
  textStyle = {},
  icon = null,
  loaderColor = '#ffffff',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabledButton : {}, style]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || isLoading}>
      {isLoading ? (
        <ActivityIndicator size="small" color={loaderColor} />
      ) : (
        <>
          {icon && icon}
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primary,
    height: 45,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#d3d3d3',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
    marginLeft: 8,
  },
});

export default CustomButton;
