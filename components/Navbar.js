import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import GlobalStyles from '../styles/global';
const Navbar = () => {
  return (
    <View style={styles.navContainer}>
      <Image source={require('../assets/logo.png')} style={styles.logoImg} />
      <Image source={require('../assets/img.png')} style={styles.avatarImg} />
    </View>
  );
};

export default Navbar;

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
    marginLeft: 10,
    marginTop: 5,
  },
  avatarImg: {
    marginRight: 10,
    marginTop: 5,
  },
});
