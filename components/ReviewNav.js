import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon} from '@ui-kitten/components';
import GlobalStyles from '../styles/global';
const ProductNav = ({action}) => {
  const [fav, setFav] = useState(false);
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={action}>
        <Icon
          name="arrow-back"
          fill="black"
          style={{
            width: 32,
            height: 32,
            marginRight: 10,
            marginLeft: 7,
          }}
        />
      </TouchableOpacity>
      <View
        style={{alignSelf: 'center', justifyContent: 'center', marginLeft: 40}}>
        <Text style={styles.title}>Customers Reviews </Text>
        <Text style={styles.title}>(33)</Text>
      </View>
      
    </View>
  );
};

export default ProductNav;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  logoImg: {
    width: 170,
    //width: 100,
    resizeMode: 'contain',
    //alignSelf: 'flex-start',
    //marginLeft: 10,
    marginTop: 5,
    marginRight: 120,
  },
  avatarImg: {
    alignSelf: 'center',
    marginRight: 10,
    width: 32,
    height: 32,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 20,
    //alignSelf: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    alignSelf: 'center',
    paddingLeft: 10,
    textAlign: 'center',
    marginRight: 15,
  },
});
