import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const CategoryBtn = ({img, title,action}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Image
        source={img}
        style={styles.img}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryBtn;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderColor: '#EDEDED',
    borderWidth: 0.5,
    //backgroundColor: 'red',
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {height: 75, width: 75, resizeMode: 'contain'},
  title: {
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
    marginLeft: 5,
    marginTop: 13,
  },
});
