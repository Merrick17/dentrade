import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SupplierItem = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default SupplierItem;
const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
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
