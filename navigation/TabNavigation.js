import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CoursesScreen from '../screens/CoursesScreen';
import CartScreen from '../screens/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntdDesign from 'react-native-vector-icons/AntDesign';
import ProductNavigation from './ProductNavigation';
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'Home':
              console.log(focused);
              return focused ? (
                <AntdDesign name="home" size={25} />
              ) : (
                <AntdDesign
                  name="home"
                  size={25}
                  style={{
                    color: 'gray',
                  }}
                />
              );
            case 'Category':
              return focused ? (
                <AntdDesign name="appstore-o" size={25} />
              ) : (
                <AntdDesign
                  name="appstore-o"
                  size={25}
                  style={{
                    color: 'gray',
                  }}
                />
              );
            case 'Courses':
              return focused ? (
                <Ionicons name="book-outline" size={25} />
              ) : (
                <Ionicons
                  name="book-outline"
                  size={25}
                  style={{
                    color: 'gray',
                  }}
                />
              );
            case 'Cart':
              return focused ? (
                <AntdDesign name="shoppingcart" size={25} />
              ) : (
                <AntdDesign
                  name="shoppingcart"
                  size={25}
                  style={{
                    color: 'gray',
                  }}
                />
              );
            default:
              break;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        labelStyle: {
          marginBottom: 10,
          fontSize: 15,
          fontFamily: 'Nunito-Regular',
        },
        style: {
          height: 70,
          borderColor: 'transparent',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={ProductNavigation} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
