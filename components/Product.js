import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Product = ({action}) => {
  return (
    <TouchableOpacity style={styles.productContainer} onPress={action}>
      <View style={styles.image} />
      <Text style={styles.productName}>Hello Product</Text>
      <Text style={styles.productPrice}>0000,000 DHS</Text>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 5,
    width: 150,
    height: 170,
    borderRadius: 25,
    padding: 10,
    alignSelf: 'flex-start',
    //marginLeft: 10,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    height: 160,
    width: '100%',
    backgroundColor: '#EEDCDD',
    borderRadius: 25,
  },
  productName: {
    textAlign: 'justify',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 17,
    marginLeft: 5,
  },
  productPrice: {
    textAlign: 'justify',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 17,
    marginLeft: 5,
    color: '#d6000d',
  },
});
