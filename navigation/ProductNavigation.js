import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from '../screens/CategoryScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ReviewScreen from '../screens/ReviewScreen';
const ProductNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="category" headerMode="none">
      <Stack.Screen name="category" component={CategoryScreen} />
      <Stack.Screen name="products" component={ProductsScreen} />
      <Stack.Screen name="details" component={ProductDetailsScreen}/>
      <Stack.Screen name="review" component={ReviewScreen}/>
    </Stack.Navigator>
  );
};

export default ProductNavigation;
