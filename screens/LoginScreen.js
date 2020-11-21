import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import {Layout, Button} from '@ui-kitten/components';
import globalStyles from '../styles/global';

const LoginScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={globalStyles.image}
      source={require('../assets/bg_wave.png')}>
      <Image source={require('../assets/logo.png')} style={globalStyles.logo} />
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('phone')
      }}>
        <Text style={styles.btnText}>Phone Number Or Email</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center',paddingHorizontal:10}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center',color:'#d6000d', fontFamily:'Nunito-Bold'}}>Or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    //position: 'absolute',
    //bottom: 250,
    height: 65,
    borderColor: 'black',
    borderWidth: 0.1,
    backgroundColor: '#FFFF',
    marginTop:200,
    marginBottom:10
  },
  btnText: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#8A8A8E',
    fontFamily:'Nunito-Bold'
  },
});
