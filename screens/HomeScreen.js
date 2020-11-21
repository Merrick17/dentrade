import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles/global';
import Navbar from '../components/Navbar';
import {SliderBox} from 'react-native-image-slider-box';
import Product from '../components/Product';
const HomeScreen = () => {
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ];
  return (
    <View style={globalStyles.mainContainer}>
      <Navbar />
      <View
        style={{
          width: '100%',
          height: 210,
          alignSelf: 'flex-start',
        }}>
        <SliderBox
          images={images}
          sliderBoxHeight={200}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
          imageLoadingColor="#2196F3"
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          }}
        />
      </View>
      <Product/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
