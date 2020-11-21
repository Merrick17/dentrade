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

const VerifScreen = ({navigation}) => {
  const [value, setValue] = useState('');
  return (
    <ImageBackground
      style={globalStyles.image}
      source={require('../assets/bg_wave.png')}>
      <Text style={styles.mainLabel}>Check Your Phone </Text>
      <Image source={require('../assets/mail.png')} style={styles.mainLogo} />

      <View style={styles.hint}>
        <Text style={styles.hintLabel}>
          To confirm your account enter the 4 digit code sent to +99999999
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginTop: 5,
        }}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
      <View
        style={{
          flex: 1,
          witdh: '90%',
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginTop: 10,
        }}>
        <Text style={styles.label}> Didn't get the code ? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('first');
          }}>
          <Text style={styles.cancelTxt}> Resend here </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.btnText}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelBtn} onPress={() => {}}>
        <Text style={styles.cancelTxt}>Cancel</Text>
      </TouchableOpacity> */}
    </ImageBackground>
  );
};

export default VerifScreen;

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
  cancelBtn: {
    marginTop: 5,
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
  cancelTxt: {
    color: '#d6000d',
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
  },
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 17,

    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  mainLabel: {
    fontFamily: 'Nunito-Regular',
    fontSize: 25,
    marginVertical: 15,
  },
  hint: {
    alignSelf: 'flex-start',
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
    marginVertical: 8,
    //flexDirection: 'row',
    marginHorizontal: 10,
  },
  hintLabel: {
    fontFamily: 'Nunito-Regular',
    color: '#8A8A8E',
    fontSize: 17,
    textAlign: 'center',
  },
  iconLogo: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  input: {
    height: 60,
    width: 70,
    backgroundColor: '#FFFF',
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
