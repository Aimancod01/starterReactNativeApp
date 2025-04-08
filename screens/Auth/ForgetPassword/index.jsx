import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import Layout from '../../../Layout/AuthLayout';
import Styles from '../../../config/Styles';
import Paragraph from '../../../components/Paragraph';
import {primary} from '../../../config/Colors';
import Input from '../../../components/Input';
import GradientButton from '../../../components/Buttons/GradientButton';
import Otp from './Otp';
import Reset from './ChangePassword';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

function ForgetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const [next, setNext] = useState(0);
  const [forgetResponse, setForgetResponse] = useState();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  async function onSubmit(data) {
    try {
      setIsLoading(true);
      //   const params = {
      //     email: data.email,
      //   };
      //   const response = await postRequest('auth/forgot', params);
      //   console.log(response);
      //   setForgetResponse(response);
      setNext(1);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Layout>
      {next === 0 && (
        <View style={Styles.px_2}>
          <TouchableOpacity
            style={[Styles.mt_1]}
            onPress={() => navigation.navigate('Login')}>
            <BackIcon name="chevron-back" size={22} color="#292D32" />
          </TouchableOpacity>
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Forget Password?</Text>
            <Text style={styles.subText}>
              Don't worry! It occurs. Please enter the email address linked with
              your account.
            </Text>
          </View>

          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email',
              },
            }}
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Enter your email"
                onChangeText={value => onChange(value)}
                value={value}
                error={errors.email && true}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email?.message}</Text>
          )}

          <View style={styles.buttonContainer}>
            <GradientButton title="Recover Password" onPress={onSubmit} />
          </View>
        </View>
      )}
      {next === 1 && (
        <Otp
          res={forgetResponse}
          setRes={setForgetResponse}
          setNext={setNext}
        />
      )}
      {next === 2 && <Reset setNext={setNext} res={forgetResponse} />}
    </Layout>
  );
}

export default ForgetPassword;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 50,
    marginBottom: 10,
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '500',
  },
  subText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#666',
    marginTop: 5,
    fontFamily: 'Lato-Regular',
    lineHeight: 21,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    marginLeft: 8,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
