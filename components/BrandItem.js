import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const BrandItem = ({brandTitle}) => {
  const [focused, setFocused] = useState(false);
  return (
    <TouchableOpacity
      style={!focused ? styles.container : styles.focused}
      onFocus={() => {
        setFocused(true);
      }}>
      <Text style={styles.title}>{brandTitle}</Text>
    </TouchableOpacity>
  );
};

export default BrandItem;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EDEDED',
    borderWidth: 0.6,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 3,
  },
  focused: {
    width: 350,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EDEDED',
    borderWidth: 0.6,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 3,
    backgroundColor: 'red',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
  },
});
