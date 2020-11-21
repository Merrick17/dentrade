import React, {useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Text, Button, Layout} from '@ui-kitten/components';
import CountdownCircle from 'react-native-countdown-circle';
const SplashScreen = (props) => {
  useEffect(() => {}, []);
  return (
    <Layout style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <View style={styles.spinner}>
        <CountdownCircle
          seconds={10}
          radius={30}
          borderWidth={10}
          color="#d6000d"
          bgColor="#fff"
          textStyle={{fontSize: 20}}
          onTimeElapsed={() => {
            props.navigation.replace('Login');
          }}
        />
      </View>
    </Layout>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
  spinner: {
    marginTop: 10,
    //flex: 1,
  },
});
