import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {dark} from '../config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
const Input = ({
  icon,
  label,
  placeholder,
  value,
  onChangeText,
  labelFont,
  secureTextEntry = false,
  keyboardType = 'default',
  style,
  lineHeight,
  disable,
  multiline = false,
  numberOfLines = 1,
  textAlignVertical = 'top',
  labelColor,
  password,
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <View style={[styles.container]}>
      {label && (
        <Text
          style={[
            styles.label,
            {
              fontFamily: 'Lato-Bold',
              lineHeight: lineHeight
                ? labelFont && labelFont * lineHeight
                : 14 * 1.4,
              fontSize: labelFont ? labelFont : 14,
              marginBottom: 8,
              color: labelColor ? labelColor : '#6C7278',
            },
          ]}>
          {label}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          multiline && styles.multilineInput,
          disable && {backgroundColor: '#F5F5F5'},
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password ? !passwordVisible : false}
        keyboardType={keyboardType}
        placeholderTextColor="#929292"
        editable={disable && false}
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical={textAlignVertical}
        {...rest}
      />
      {icon && (
        <TouchableOpacity
          onPress={() => {
            if (password) {
              setPasswordVisible(!passwordVisible);
            }
          }}
          style={{position: 'absolute', right: 20, bottom: 16}}>
          <Icon
            name={passwordVisible && password ? 'eye-outline' : icon}
            size={16}
            color="#C0C0C0"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    position: 'relative',
  },
  label: {
    marginBottom: 8,
    color: dark,
    marginLeft: 5,
  },
  input: {
    paddingVertical: 14,
    borderColor: '#EDF1F3',
    borderWidth: 2,
    borderRadius: 10,
    color: '#333',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    fontFamily: 'Lato-Regular',
  },
  multilineInput: {
    minHeight: 150,
    textAlignVertical: 'top',
    borderRadius: 20,
  },
});

export default Input;
