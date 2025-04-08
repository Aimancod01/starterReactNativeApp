import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {OtpInput} from 'react-native-otp-entry';
import BackIcon from 'react-native-vector-icons/Ionicons';
import Styles from '../../../config/Styles';
import GradientButton from '../../../components/Buttons/GradientButton';

function Otp({res, setRes, setNext}) {
  const [isLoading, setIsLoading] = useState(false);
  const id = res?.payload?.id;
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();
  async function onSubmit(data) {
    try {
      setIsLoading(true);
      //   const params = {
      //     otp: data.otp,
      //   };
      //   const response = await postRequest(`auth/verify/${id}`, params);
      //   console.log(response);
      //   setRes(response);
      setNext(2);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    const backAction = () => {
      setNext(0);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={Styles.px_2}>
      <TouchableOpacity style={[Styles.mt_1]} onPress={() => setNext(0)}>
        <BackIcon name="chevron-back" size={22} color="#292D32" />
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.heading}>OTP Verification</Text>
        <Text style={styles.descriptionText}>
          Enter the verification code we just sent on your email address.
        </Text>
      </View>

      <View>
        <Controller
          name="otp"
          rules={{
            required: 'OTP is required',
          }}
          control={control}
          render={({field: {onChange, value}}) => (
            <OtpInput
              numberOfDigits={4}
              focusColor="#1D61E7"
              focusStickBlinkingDuration={500}
              onTextChange={text => {
                onChange(text);
              }}
              onFilled={text => {
                onChange(text);
              }}
              value={value}
              textInputProps={{
                accessibilityLabel: 'One-Time Password',
              }}
              theme={{
                containerStyle: styles.container,
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                focusedPinCodeContainerStyle: styles.activePinCodeContainer,
              }}
            />
          )}
        />
        {errors.otp && (
          <Text style={styles.errorMsg}>{errors.otp?.message}</Text>
        )}
      </View>

      <View style={styles.bottomSection}>
        <GradientButton
          isLoading={isLoading}
          title="Submit"
          onPress={onSubmit}
        />
      </View>
    </View>
  );
}

export default Otp;

const styles = StyleSheet.create({
  img: {
    width: 149,
    height: 40,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '500',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#d4d8da',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#d4d8da',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: 'gray',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 40,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 8,
    resizeMode: 'contain',
  },
  txt: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Lato-Black',
  },
  back: {width: 25, height: 25},
  skip: {color: 'black', fontFamily: 'Lato-Regular'},
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  pinCodeContainer: {
    width: 60,
    height: 55,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8ECF4',
    backgroundColor: '#F7F8F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  pinCodeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D61E7',
  },
  activePinCodeContainer: {
    borderColor: '#1D61E7',
    backgroundColor: 'white',
  },
  bottomSection: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMsg: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  upperSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    marginTop: 10,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    fontFamily: 'Lato-Regular',
  },
  section: {
    marginTop: 50,
    marginBottom: 10,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#1D61E7',
  },
});
