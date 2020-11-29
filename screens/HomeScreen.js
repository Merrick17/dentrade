import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import globalStyles from '../styles/global';
import Navbar from '../components/Navbar';
import {SliderBox} from 'react-native-image-slider-box';
import Product from '../components/Product';
import {ScrollView} from 'react-native-gesture-handler';
import EventItem from '../components/EventItem';
import ProductItem from '../components/ProductItem';
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
      <ScrollView style={{height: '100%', width: '100%'}}>
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
        <FlatList
          style={{marginBottom: 5, height: 250}}
          horizontal={true}
          data={images}
          renderItem={(item, ind) => <Product />}
          keyExtractor={(item) => item}
        />
        <Text style={styles.title}>Today's Deal</Text>
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
        <Text style={styles.title}>Events & Courses</Text>
        <FlatList
          style={{height: 220}}
          horizontal={true}
          data={images}
          renderItem={(item, ind) => <EventItem />}
          keyExtractor={(item) => item}
        />
        <Text style={styles.title}>Order Again</Text>
        <FlatList
          style={{height: 250,marginBottom:20}}
          horizontal={true}
          data={images}
          renderItem={(item, ind) => <ProductItem />}
          keyExtractor={(item) => item}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    justifyContent: 'flex-start',
    fontSize: 24,
    fontFamily: 'Nunito-SemiBold',
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
});
