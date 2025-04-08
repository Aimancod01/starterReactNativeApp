import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Paragraph = ({
  children,
  style,
  color = '#252525',
  fontSize = 16,
  lineHeight = 24,
  textAlign = 'left',
  fontFamily,
}) => {
  return (
    <Text
      style={[
        styles.paragraph,
        {color, fontSize, lineHeight, textAlign, fontFamily},
        style,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: 'Lato-Regular',
  },
});

export default Paragraph;
