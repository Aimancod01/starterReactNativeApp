import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Layout from '../../Layout/AuthLayout';
import Logo from '../../assets/icons/logo.svg';
import Styles from '../../config/Styles';
import Input from '../../components/Input';
import {useNavigation} from '@react-navigation/native';
import GradientButton from '../../components/Buttons/GradientButton';
import CustomPhoneInput from '../../components/PhoneInput';
import Paragraph from '../../components/Paragraph';

function SignUp() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const handlePhoneNumber = phone => {
    setPhone(phone);
  };
  return (
    <Layout>
      <View style={[Styles.items_center, Styles.mt_3]}>
        <Logo />
        <Text style={styles.heading}>Get Started Now</Text>
        <Text style={styles.subHeading}>
          Create an account or log in to explore about our app
        </Text>
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.tabBox}>
            <Text>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabBox, Styles.bg_white]}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.my_2}>
        <View style={[Styles.flex_row, Styles.gap_2]}>
          <View style={Styles.flex_1}>
            <Input label="First Name" placeholder="John" />
          </View>
          <View style={Styles.flex_1}>
            <Input label="Last Name" placeholder="Doe" />
          </View>
        </View>
        <Input label="Email" placeholder="Loisbecket@gmail.com" />
        <Paragraph color="#6C7278" fontSize={14}>
          Phone Number
        </Paragraph>
        <CustomPhoneInput onChangePhoneNumber={handlePhoneNumber} />
        <Input
          label="Set Password"
          placeholder="********"
          icon="eye-off-outline"
          password={true}
        />
        <Input
          label="Confirm Password"
          placeholder="********"
          icon="eye-off-outline"
          password={true}
        />
      </View>
      <GradientButton title="Register" />
    </Layout>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: '500',
  },
  subHeading: {
    width: '80%',
    textAlign: 'center',
    color: '#6C7278',
    marginTop: 5,
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 5,
    backgroundColor: '#F5F6F9',
    padding: 5,
    borderRadius: 10,
  },
  tabBox: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
});
