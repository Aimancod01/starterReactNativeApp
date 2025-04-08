import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Paragraph from './Paragraph';

const NoDataFound = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/noDataFound.png')}
      />
      <Paragraph fontFamily="Lato-Bold" textAlign="center">
        No Data Found
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default NoDataFound;
