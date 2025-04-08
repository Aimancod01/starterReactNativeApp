import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from '../context/AuthContext';
import {ActivityIndicator, View} from 'react-native';
import Styles from '../config/Styles';
import {primary} from '../config/Colors';

function Screen() {
  const {splashLoading, userToken} = useContext(AuthContext);

  if (splashLoading) {
    return (
      <View
        style={[
          Styles.flex_1,
          Styles.justify_center,
          Styles.items_center,
          Styles.bg_white,
        ]}>
        <ActivityIndicator size="large" color={primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Screen;
