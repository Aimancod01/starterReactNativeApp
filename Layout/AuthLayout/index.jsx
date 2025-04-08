import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Toast from 'react-native-toast-message';
import toastConfig from '../../components/Toast';

const Layout = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.toastStyle}>
        <Toast config={toastConfig} />
      </View>
      <ImageBackground
        source={require('../../assets/images/backgroundImage.png')}
        style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 60,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  toastStyle: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    zIndex: 99999,
  },
});

export default Layout;
