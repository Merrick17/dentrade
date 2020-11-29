import React,{useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
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
      <Image source={require('../assets/logo.png')} style={styles.logoImg} />
      <TouchableWithoutFeedback
        style={styles.avatarImg}
        onPress={() => {
          setFav(!fav);
        }}>
        <Icon
          style={styles.icon}
          fill="#d6000d"
          name={!fav ? 'heart-outline' : 'heart'}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ProductNav;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
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
    marginRight:10
    //alignSelf: 'flex-end',
  },
});
