import React, {useState, useEffect} from 'react';
import {Flags} from '../components/Flags';
import {
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Icon} from '@ui-kitten/components';

import globalStyles from '../styles/global';
import {ScrollView} from 'react-native-gesture-handler';
import AntdDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AdressLocationScreen = ({navigation}) => {
  const [value, setValue] = useState('');
  const [img, setImg] = useState('https://restcountries.eu/data/are.svg');
  const [selectedValue, setSelectedValue] = useState('971');
  const [adressType, setAddressType] = useState('home');
  useEffect(() => {
    //console.log(flags);
  }, []);
  return (
    <ImageBackground
      style={globalStyles.image}
      source={require('../assets/bg_wave.png')}>
      <Text style={styles.mainLabel}>Create Account </Text>
      <Image
        source={require('../assets/location.png')}
        style={styles.mainLogo}
      />

      <ScrollView style={styles.Scrollview}>
        <TouchableOpacity style={styles.locationBtn}>
          <FontAwesome5
            name="map-pin"
            size={20}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              marginRight: 15,
            }}
          />
          <Text style={styles.locationlabel}>Pin Your Location</Text>
        </TouchableOpacity>

        <View style={styles.hint}>
          <Text style={styles.hintLabel}>Country</Text>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FFFF',
            width: '90%',
            //height: 40,
          }}>
          <Image
            source={require('../assets/flag.png')}
            style={{
              width: 20,
              height: 20,
              borderRadius: 50 / 2,

              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <Text style={styles.countryLabel}>United Arab Emirates</Text>
        </View> */}
        <TextInput
          placeholder=""
          style={{
            height: 50,
            width: '90%',
            backgroundColor: '#FFFF',
            marginBottom: 22,
          }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <View style={styles.hint}>
          <Text style={styles.hintLabel}>City </Text>
        </View>
        <TextInput
          placeholder=""
          style={{
            height: 50,
            width: '90%',
            backgroundColor: '#FFFF',
            marginBottom: 20,
          }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <View style={styles.hint}>
          <Text style={styles.hintLabel}>Clinic Name </Text>
        </View>
        <TextInput
          placeholder=""
          style={{
            height: 50,
            width: '90%',
            backgroundColor: '#FFFF',
            marginBottom: 20,
          }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <View style={styles.hint}>
          <Text style={styles.hintLabel}> Complete Delivery Address </Text>
        </View>
        <TextInput
          placeholder=""
          style={{
            height: 50,
            width: '90%',
            backgroundColor: '#FFFF',
            marginBottom: 20,
          }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text
            style={{
              fontFamily: 'Nunito-Regular',
              fontSize: 17,
              alignSelf: 'center',
              //marginLeft: 20,
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Address label{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setAddressType('home');
            }}
            style={
              adressType == 'home' ? styles.bottomBtn : styles.bottomBtnDisabled
            }>
            <AntdDesign name="home" size={20} />
            <Text
              style={{
                fontFamily: 'Nunito-Regular',
                fontSize: 15,
                marginLeft: 20,
              }}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAddressType('work');
            }}
            style={
              adressType == 'work' ? styles.bottomBtn : styles.bottomBtnDisabled
            }>
            <Icon
              name="briefcase-outline"
              fill="#8A8A8E"
              style={{
                height: 22,
                width: 30,
                color: 'black',
                alignSelf: 'flex-start',
              }}
            />
            <Text
              style={{
                fontFamily: 'Nunito-Regular',
                fontSize: 15,
                marginLeft: 20,
              }}>
              Work
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('main');
          }}>
          <Text style={styles.btnText}>Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default AdressLocationScreen;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    justifyContent: 'center',
    height: 50,
    borderColor: 'black',
    borderWidth: 0.1,
    backgroundColor: '#d6000d',
    paddingBottom: 3,
  },
  bottomBtn: {
    width: '30%',
    height: 60,
    borderColor: '#d6000d',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    fontFamily: 'Nunito-Regular',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  bottomBtnDisabled: {
    width: '30%',
    height: 60,
    borderColor: '#8A8A8E',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    fontFamily: 'Nunito-Regular',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  cancelBtn: {
    marginTop: 5,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
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
    flexDirection: 'row',
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
  Scrollview: {
    alignSelf: 'center',
    flex: 1,
    width: '100%',
    marginLeft: 35,
    marginBottom: 30,
  },
  locationBtn: {
    width: '90%',
    justifyContent: 'center',
    height: 60,
    borderColor: 'black',
    borderWidth: 0.1,
    backgroundColor: '#FFFF',
    paddingBottom: 3,
    marginTop: 20,
    flexDirection: 'row',
  },
  locationlabel: {
    fontFamily: 'Nunito-Regular',
    color: 'black',
    fontSize: 17,
    textAlign: 'center',
    alignSelf: 'center',
  },
  countryLabel: {
    fontFamily: 'Nunito-Regular',
    color: 'black',
    fontSize: 17,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
