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
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
const FirstAccountScreen = ({navigation}) => {
  const [value, setValue] = useState('');
  const [img, setImg] = useState('');
  const options = {
    title: 'Select Image',

    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  return (
    <ImageBackground
      style={globalStyles.image}
      source={require('../assets/bg_wave.png')}>
      <Text style={styles.mainLabel}>Create Account </Text>
      <TouchableOpacity
        onPress={() => {
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = {uri: response.uri};

              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };

              setImg(source);
            }
          });
        }}>
        <Image
          source={require('../assets/add_image.png')}
          style={styles.mainLogo}
        />
      </TouchableOpacity>

      <ScrollView style={styles.Scrollview}>
        <View style={styles.hint}>
          <FontAwesome5
            name={'user'}
            size={18}
            style={{
              color: 'black',
              alignSelf: 'flex-start',
              marginRight: 3,
              color: '#8A8A8E',
            }}
          />
          <Text style={styles.hintLabel}> Full Name </Text>
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
        <View style={styles.hint}>
          <FeatherIcon
            name={'mail'}
            size={18}
            style={{
              color: 'black',
              alignSelf: 'flex-start',
              marginRight: 3,
              color: '#8A8A8E',
              marginTop: 1,
            }}
          />
          <Text style={styles.hintLabel}>Email </Text>
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
        <View style={styles.hint}>
          <FontAwesome5
            name="users"
            fill="#8A8A8E"
            size={18}
            style={{
              color: 'black',
              alignSelf: 'flex-start',
              marginRight: 3,
              color: '#8A8A8E',
            }}
          />
          <Text style={styles.hintLabel}>Organization </Text>
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
        <View style={styles.hint}>
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
          <Text style={styles.hintLabel}> Speciality Of Interest </Text>
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
        <View style={styles.hint}>
          <MaterialCommunityIcon
            name="tooth-outline"
            size={18}
            style={{
              color: 'black',
              alignSelf: 'flex-start',
              marginRight: 3,
              color: '#8A8A8E',
            }}
          />
          <Text style={styles.hintLabel}> Title </Text>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('location');
          }}>
          <Text style={styles.btnText}>Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default FirstAccountScreen;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    //alignSelf: 'center',
    justifyContent: 'center',
    //position: 'absolute',
    //bottom: 250,
    height: 50,
    borderColor: 'black',
    borderWidth: 0.1,
    backgroundColor: '#d6000d',
    paddingBottom: 3,
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
    flexDirection: 'row',
    //marginLeft: 14,
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
});
