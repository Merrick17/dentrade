import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Icon} from '@ui-kitten/components';
const SearchField = () => {
  return (
    <View
      style={{
        width: '90%',
        height: 50,
        flexDirection: 'row',
        borderColor: '#EDEDED',
        borderWidth: 0.6,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
      }}>
      <Icon
        style={{
          height: 32,
          width: 32,
          alignSelf: 'center',
          marginLeft: 10,
        }}
        fill="black"
        name="search-outline"
      />
      <TextInput
        placeholder="type words"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'Nunito-Regular',
        }}
      />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
