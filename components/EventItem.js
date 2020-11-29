import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const EventItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://source.unsplash.com/1024x768/?tree'}}
        style={styles.image}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={{marginLeft: 10}}>
          <Text style={styles.hint}>17</Text>
          <Text style={styles.hintMonth}>Aug</Text>
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.eventTitle}>Event Name</Text>
          <Text style={styles.eventDesc}>Place Event | Time Event </Text>
        </View>
      </View>
    </View>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    width: 250,
    height: 200,
    borderRadius: 25,
    //padding: 10,
    alignSelf: 'flex-start',
    borderColor: '#EDEDED',
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'flex-start',
  },
  image: {
    resizeMode: 'cover',
    alignSelf: 'center',
    width: 250,
    height: 110,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EDEDED',
  },
  productName: {
    textAlign: 'justify',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 17,
    marginLeft: 5,
  },
  productPrice: {
    textAlign: 'justify',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 17,
    marginLeft: 5,
    color: '#d6000d',
  },
  imageContainer: {
    flex: 1,
    width: 250,
    height: 150,
  },
  hint: {
    marginTop: 5,
    fontSize: 25,
    fontFamily: 'Nunito-SemiBold',
    color: '#d6000d',
  },
  hintMonth: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
    color: 'black',
  },
  eventTitle:{
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: 'black',
  }, 
  eventDesc:{
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
    color: 'gray',
  }
});
