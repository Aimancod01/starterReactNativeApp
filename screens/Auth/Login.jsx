import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Paragraph from '../../components/Paragraph';
import Layout from '../../Layout/AuthLayout';
import Logo from '../../assets/icons/logo.svg';
import Styles from '../../config/Styles';
import Input from '../../components/Input';
import CustomCheckBox from '../../components/Checkbox';
import {useNavigation} from '@react-navigation/native';
import GradientButton from '../../components/Buttons/GradientButton';
import FacebookIcon from '../../assets/icons/facebook.svg';
import GoogleIcon from '../../assets/icons/google.svg';
import AppleIcon from '../../assets/icons/apple.svg';
import {AuthContext} from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login() {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  const {setUserInfo, setUserToken} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  function onSubmit() {
    setIsLoading(true);
    setTimeout(() => {
      const dummyInfo = {name: 'John Doe'};
      setUserToken('token');
      setUserInfo(dummyInfo);
      AsyncStorage.setItem('userToken', 'token');
      AsyncStorage.setItem('userInfo', JSON.stringify(dummyInfo));
      setIsLoading(false);
      navigation.navigate('Main');
    }, 500);
  }

  return (
    <Layout>
      <View style={[Styles.items_center, Styles.mt_3]}>
        <Logo />
        <Text style={styles.heading}>Get Started Now</Text>
        <Text style={styles.subHeading}>
          Create an account or log in to explore about our app
        </Text>
        <View style={styles.tabs}>
          <TouchableOpacity style={[styles.tabBox, Styles.bg_white]}>
            <Text>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={styles.tabBox}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.mt_2}>
        <Input label="Email" placeholder="Loisbecket@gmail.com" />
        <Input
          label="Password"
          placeholder="********"
          icon="eye-off-outline"
          password={true}
        />
        <View style={styles.forgetPassword}>
          <View style={styles.rememberMe}>
            <CustomCheckBox value={isChecked} onValueChange={setIsChecked} />
            <Paragraph fontSize={14}>Remember Me</Paragraph>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.forgetPasswordText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <GradientButton
        title="Log In"
        onPress={() => onSubmit()}
        isLoading={isLoading}
      />
      <View style={[Styles.mt_3, Styles.flex_row, Styles.items_center]}>
        <View style={styles.line}></View>
        <Text style={styles.separatorText}>Or login with</Text>
        <View style={styles.line}></View>
      </View>
      <View
        style={[
          Styles.mt_3,
          Styles.flex_row,
          Styles.items_center,
          Styles.justify_center,
          Styles.gap_3,
        ]}>
        <TouchableOpacity style={styles.socialIcon}>
          <FacebookIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <GoogleIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <AppleIcon />
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

export default Login;

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

  forgetPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: 5,
  },
  forgetPasswordText: {fontSize: 14, color: '#4D81E7', fontWeight: '600'},
  line: {
    height: 1,
    backgroundColor: '#ccc',
    flex: 1,
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#6C7278',
  },
  socialIcon: {
    borderColor: '#EFF0F6',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
