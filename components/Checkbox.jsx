import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const CustomCheckBox = ({value, onValueChange}) => {
  const [isChecked, setIsChecked] = useState(value);

  const handlePress = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={[styles.box, isChecked && styles.checked]}>
        {isChecked && (
          <Text style={styles.tick}>
            <Icon name="check" size={14} />
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderColor: 'green',
    backgroundColor: 'green',
  },
  tick: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
