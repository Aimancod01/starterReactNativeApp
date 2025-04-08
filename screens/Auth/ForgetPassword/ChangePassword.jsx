import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
import Input from '../../../components/Input';
import GradientButton from '../../../components/Buttons/GradientButton';

function Reset({res, setNext}) {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const id = res?.payload?.id;
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
    watch,
  } = useForm();
  const password = watch('password');

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      //   const params = {password: data.password};
      //   const headers = {Authorization: `Bearer ${res.payload.resetToken}`};
      //   await postRequest(`auth/reset/${id}`, params, headers);
      //   setIsLoading(false);
      //   Toast.show({
      //     type: 'success',
      //     text1: 'Password Updated Successfully',
      //     position: 'top',
      //   });
      //   setTimeout(() => {
      //     navigation.navigate('Login');
      //     reset();
      //   }, 500);
      //   setNext(0);
      navigation.navigate('Success');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Create new password</Text>
        <Text style={styles.subHeaderText}>
          Your new password must be unique from those previously used.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          render={({field: {onChange, value}}) => (
            <Input
              label="New Password"
              placeholder="*********"
              secureTextEntry={!passwordVisible}
              onChangeText={onChange}
              value={value}
              error={!!errors.password}
            />
          )}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeIcon}>
          <Icon
            color="gray"
            name={passwordVisible ? 'eye' : 'eye-off'}
            size={16}
          />
        </TouchableOpacity>
      </View>
      {errors.password && (
        <Text style={styles.errorText}>{errors.password?.message}</Text>
      )}

      <View style={styles.inputContainer}>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: 'Confirm password is required',
            validate: value => value === password || 'Passwords do not match',
          }}
          render={({field: {onChange, value}}) => (
            <Input
              label="Confirm Password"
              placeholder="*********"
              secureTextEntry={!confirmPasswordVisible}
              onChangeText={onChange}
              value={value}
              error={!!errors.confirmPassword}
            />
          )}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          style={styles.eyeIcon}>
          <Icon
            color="gray"
            name={confirmPasswordVisible ? 'eye' : 'eye-off'}
            size={16}
          />
        </TouchableOpacity>
      </View>
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword?.message}</Text>
      )}

      <View style={styles.buttonContainer}>
        <GradientButton
          isLoading={isLoading}
          title="Reset Password"
          style={styles.button}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
}

export default Reset;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 8},
  headerContainer: {marginTop: 50, marginBottom: 10},
  subHeaderText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    fontFamily: 'Lato-Regular',
  },
  iconContainer: {justifyContent: 'center', alignItems: 'center', width: 320},
  inputContainer: {position: 'relative'},
  eyeIcon: {position: 'absolute', bottom: 25, right: 20},
  errorText: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {width: 180},
  heading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '500',
  },
});
