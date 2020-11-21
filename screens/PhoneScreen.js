import React, {useState} from 'react';

import {
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Layout, Button, Icon} from '@ui-kitten/components';

import globalStyles from '../styles/global';
const PhoneScreen = ({navigation}) => {
  const [value, setValue] = useState('');
  return (
    <ImageBackground
      style={globalStyles.image}
      source={require('../assets/bg_wave.png')}>
      <Image source={require('../assets/logo.png')} style={globalStyles.logo} />
      <Text style={styles.label}> Continue using </Text>

      <View style={styles.hint}>
        <Icon
          name="smartphone-outline"
          fill="#8A8A8E"
          style={{
            height: 22,
            width: 22,
            color: 'black',
            alignSelf: 'flex-start',
          }}
        />
        <Text style={styles.hintLabel}> Phone Number </Text>
      </View>
      <TextInput
        placeholder="+999999999999"
        style={{
          height: 50,
          width: '90%',
          backgroundColor: '#FFFF',
          marginBottom: 20,
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('verif')
      }}>
        <Text style={styles.btnText}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelBtn} onPress={() => {}}>
        <Text style={styles.cancelTxt}>Cancel</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default PhoneScreen;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    //position: 'absolute',
    //bottom: 250,
    height: 50,
    borderColor: 'black',
    borderWidth: 0.1,
    backgroundColor: '#d6000d',
    //   marginTop:200,
    //   marginBottom:10
  },
  cancelBtn:{
    marginTop:5,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    //position: 'absolute',
    //bottom: 250,
    height: 50,
    borderColor: 'black',
    borderWidth: 0.1,
    backgroundColor: 'transparent',
  },
  btnText: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#FFFF',
    fontFamily: 'Nunito-Bold',
  },
  cancelTxt:{
    color:'#d6000d', 
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
    alignSelf: 'center',
    justifyContent: 'center',

  },
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
    marginVertical: 35,
  },
  hint: {
    alignSelf: 'flex-start',
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
    marginVertical: 8,
    flexDirection: 'row',
    marginLeft: 18,
  },
  hintLabel: {
    fontFamily: 'Nunito-Regular',
    color: '#8A8A8E',
    fontSize: 17,
  },
});
