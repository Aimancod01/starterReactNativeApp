import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {primary} from '../config/Colors';

const commonStyles = {
  container: {
    borderRadius: 100,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  text1: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    paddingBottom: 10,
  },
};

const toastConfig = {
  success: ({text1, text2}) => (
    <View
      style={[
        commonStyles.container,
        styles.successContainer,
        {height: text1 && text2 ? 'auto' : 40},
      ]}>
      {text1 && (
        <Text style={[commonStyles.text1, styles.successText1]}>{text1}</Text>
      )}
      {text2 && <Text style={styles.successText2}>{text2}</Text>}
    </View>
  ),

  error: ({text1, text2}) => (
    <View
      style={[
        commonStyles.container,
        styles.errorContainer,
        {height: text1 && text2 ? 'auto' : 40},
      ]}>
      {text1 && (
        <Text style={[commonStyles.text1, styles.errorText1]}>{text1}</Text>
      )}
      {text2 && (
        <Text style={[commonStyles.text2, styles.errorText2]}>{text2}</Text>
      )}
    </View>
  ),
};

const styles = StyleSheet.create({
  successContainer: {
    backgroundColor: primary,
  },
  successText1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
  },
  successText2: {
    color: 'white',
    fontFamily: 'Lato-Regular',
  },
  errorContainer: {
    backgroundColor: '#9e1b32',
    paddingHorizontal: 40,
  },
  errorText1: {
    color: 'white',
    fontFamily: 'Lato-Regular',
  },
  errorText2: {
    color: 'white',
    fontFamily: 'Lato-Regular',
  },
});

export default toastConfig;
