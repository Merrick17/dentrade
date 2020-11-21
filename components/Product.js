import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Product = () => {
  return (
    <View style={styles.productContainer}>
      <Text></Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 5,
    width: '40%',
    height: 170,
    borderRadius: 25,
    backgroundColor: '#EEDCDD',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
});
