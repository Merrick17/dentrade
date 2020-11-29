import EventItem from '../components/EventItem';
import React from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import globalStyles from '../styles/global';
import Navbar from '../components/Navbar';
import {Layout, Tab, TabView, Icon} from '@ui-kitten/components';
import CategoryBtn from '../components/CategoryBtn';
import {TextInput} from 'react-native-gesture-handler';
import BrandItem from '../components/BrandItem';
import SupplierItem from '../components/SupplierItem';
import SearchField from '../components/SearchField';
const CategoryScreen = ({navigation}) => {
  const Categories = [
    {
      title: 'Endodonitics',
      img: require('../assets/category/Endodontics.png'),
    },
    {
      title: 'Burs & Rotary Instruments',
      img: require('../assets/category/BursRotary.png'),
    },
    {
      title: 'Prosthodontics',
      img: require('../assets/category/orthodontics.png'),
    },
    {
      title: 'Restorative',
      img: require('../assets/category/restroActive.png'),
    },
    {
      title: 'Devices And Equipement',
      img: require('../assets/category/device.png'),
    },
    {
      title: 'Our Speciality',
      img: require('../assets/logo.png'),
    },
    {
      title: 'Hand Pieces and Micromotors',
      img: require('../assets/category/handpiece.png'),
    },
    {
      title: 'Laboratory Products',
      img: require('../assets/category/laboratory.png'),
    },
    {
      title: 'Orthodontics',
      img: require('../assets/category/orthodontics.png'),
    },
    {
      title: 'Infection control and Barries Products',
      img: require('../assets/category/mask.png'),
    },
    {
      title: 'Surgical Supplies',
      img: require('../assets/category/dentist.png'),
    },
    {
      title: 'Periodontics',
      img: require('../assets/category/periodontics.png'),
    },
    {
      title: 'Anesthtic and Pain Management',
      img: require('../assets/category/pain.png'),
    },
    {
      title: 'Instruments',
      img: require('../assets/category/instruments.png'),
    },
    {
      title: 'Cosmetic Dentistry Products',
      img: require('../assets/category/cosmetic.png'),
    },
    {
      title: 'Dental Photography',
      img: require('../assets/category/camera.png'),
    },
    {
      title: 'X-ray Products',
      img: require('../assets/category/xray.png'),
    },
    {
      title: 'Disposables',
      img: require('../assets/category/mask.png'),
    },
  ];
  const Brands = [
    'Endodonitics',
    'Burs & Rotary Instruments',
    'Prosthodontics',
    'Restorative',
    'Devices And Equipement',
    'Our Speciality',
    'Hand Pieces and Micromotors',
    'Laboratory Products',
    'Orthodontics',
    'Infection control and Barries Products',
    'Surgical supplies',
    'Periodontics',
    'Anesthtic and Pain Management',
    'Instruments',
    'Cosmetic Dentistry Products',
    'Dental Photography',
    'X-ray Products',
    'Disposables',
  ];
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <View style={globalStyles.mainContainer}>
      <Navbar />
      <TabView
        style={styles.tabView}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}>
        <Tab title="Categories">
          <SafeAreaView style={styles.tabContainer}>
            <SearchField />
            <FlatList
              style={{marginBottom: 30, alignSelf: 'center', height: 50}}
              data={Categories}
              renderItem={({item}) => (
                <CategoryBtn
                  title={item.title}
                  img={item.img}
                  action={() => {
                    navigation.navigate('products', {
                      name: item.title,
                    });
                  }}
                />
              )}
              //Setting the number of column
              numColumns={2}
            />
          </SafeAreaView>
        </Tab>
        <Tab title="Brands">
          <View style={styles.tabContainer}>
            <FlatList
              style={{marginBottom: 30, alignSelf: 'center', height: 50}}
              data={Brands}
              renderItem={({item}) => <BrandItem brandTitle={item} />}
              //Setting the number of column
            />
          </View>
        </Tab>
        <Tab title="Suppliers">
          <View style={styles.tabContainer}>
            <FlatList
              style={{marginBottom: 30, alignSelf: 'center', height: 50}}
              data={Brands}
              renderItem={({item}) => <SupplierItem name={item} />}
              //Setting the number of column
              numColumns={2}
            />
          </View>
        </Tab>
        <Tab title="Offer">
          <View style={styles.tabContainer}>
            <Text category="h5">TRANSACTIONS</Text>
          </View>
        </Tab>
      </TabView>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  tabContainer: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    //backgroundColor:'red'
  },
  tabView: {
    height: '92%',
    width: '100%',
  },
});
