import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import StarRating from 'react-native-star-rating';
const ReviewIcon = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/avatar.png')} style={styles.img} />
      <View style={{marginHorizontal: 22}}>
        <Text style={styles.title}>Khaldoun</Text>
        <Text style={styles.subTitle}>5 June 2020 </Text>
        <Text style={styles.subTitle}>The Product is great </Text>
      </View>
      <StarRating
        disabled={true}
        maxStars={5}
        rating={4}
        fullStarColor={'#d6000d'}
        starSize={25}
        style={{alignSelf: 'flex-end', marginLeft: 25}}
      />
    </View>
  );
};

export default ReviewIcon;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:12
  },
  img: {
    height: 50,
    width: 50,
    marginLeft: 10,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 22,
  },
  subTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
    color: 'gray',
  },
});
