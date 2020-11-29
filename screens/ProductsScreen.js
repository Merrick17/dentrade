import SearchField from '../components/SearchField';
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import globalStyles from '../styles/global';
import ProductItem from '../components/ProductItem';
const ProductsScreen = ({navigation, route}) => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <View style={globalStyles.mainContainer}>
      <Text style={styles.title}>{route.params.name}</Text>
      <SearchField />
      <FlatList
        style={{marginBottom: 30, alignSelf: 'center', height: 50}}
        data={products}
        renderItem={({item}) => (
          <ProductItem action={()=>{
            navigation.navigate('details')
          }} />
        )}
        //Setting the number of column
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  title: {
    justifyContent: 'flex-start',
    fontSize: 24,
    fontFamily: 'Nunito-SemiBold',
    alignSelf: 'center',
    paddingLeft: 10,
    marginTop: 10,
  },
});
