import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import toastConfig from '../../components/Toast';
import LinearGradient from 'react-native-linear-gradient';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import NotificationIcon from 'react-native-vector-icons/Ionicons';
import UserIcon from 'react-native-vector-icons/EvilIcons';

const Layout = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <LinearGradient
        colors={['#617eb7', '#7098e8']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.statusBarGradient}
      />

      <View style={styles.toastStyle}>
        <Toast config={toastConfig} />
      </View>

      <LinearGradient
        colors={['#617eb7', '#7098e8']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          height: 110,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <UserIcon name="user" size={50} />
            <View>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
                Welcome!
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 11,
                }}>
                Jaydon Philips
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity
              style={{backgroundColor: 'white', padding: 5, borderRadius: 20}}>
              <SearchIcon name="search-outline" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'white', padding: 5, borderRadius: 20}}>
              <NotificationIcon name="notifications-outline" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  statusBarGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    zIndex: 0,
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
