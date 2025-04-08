import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {secondary} from '../config/Colors';

const CustomPhoneInput = ({onChangePhoneNumber}) => {
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = text => {
    setPhoneNumber(text);
    onChangePhoneNumber(`+${callingCode}${text}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.countryContainer}>
        <CountryPicker
          withCallingCode
          withFlag
          withFilter
          withModal
          countryCode={countryCode}
          onSelect={country => {
            setCountryCode(country.cca2);
            setCallingCode(country.callingCode[0]);
          }}
        />
        <Text style={styles.callingCode}>(+{callingCode})</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={handlePhoneChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    alignSelf: 'center',
    marginTop: 2,
    backgroundColor: '#fff',
    borderColor: '#EDF1F3',
    borderWidth: 2,
    borderRadius: 10,
    color: '#333',
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    paddingHorizontal: 5,
    paddingVertical: 6,
    borderRadius: 10,
    borderColor: '#EDF1F3',
    borderWidth: 1,
  },
  callingCode: {
    fontSize: 16,
    fontWeight: '600',
    color: secondary,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default CustomPhoneInput;
