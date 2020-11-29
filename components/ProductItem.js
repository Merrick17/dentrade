import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Icon, Button} from '@ui-kitten/components';
const ProductItem = ({action}) => {
  const [fav, setFav] = useState(false);
  return (
    <TouchableOpacity style={styles.productContainer} onPress={action}>
      <TouchableWithoutFeedback
        style={{alignSelf: 'flex-end'}}
        onPress={() => {
          setFav(!fav);
        }}>
        <Icon
          style={styles.icon}
          fill="#d6000d"
          name={!fav ? 'heart-outline' : 'heart'}
        />
      </TouchableWithoutFeedback>

      <Image source={require('../assets/product.png')} style={styles.image} />
      <Text style={styles.productName}>Hello Product</Text>
      <Text style={styles.productPrice}>0000,000 DHS</Text>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 5,
    width: 180,
    height: 230,
    borderRadius: 25,
    padding: 10,
    alignSelf: 'flex-start',
    borderColor: '#EDEDED',
    borderWidth: 0.5,
    marginLeft: 10,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    alignSelf: 'center',
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
  icon: {
    width: 32,
    height: 32,
    alignSelf: 'flex-end',
  },
});
