import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GradientButton from '../../../components/Buttons/GradientButton';
import Layout from '../../../Layout/AuthLayout';
import SuccessIcon from '../../../assets/icons/Successmark.svg';

function Success() {
  const navigation = useNavigation();

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Password Changed!</Text>
          <Text style={styles.subHeaderText}>
            Your password has been changed successfully.
          </Text>
          <SuccessIcon />
        </View>

        <View style={styles.buttonContainer}>
          <GradientButton
            title="Back to Login"
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </Layout>
  );
}

export default Success;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 8},
  headerContainer: {marginTop: 50, marginBottom: 10, alignItems: 'center'},
  subHeaderText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    marginBottom: 20,
    width: '70%',
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
