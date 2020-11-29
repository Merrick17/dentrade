import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import globalStyles from '../styles/global';
import {SliderBox} from 'react-native-image-slider-box';
import ProductNav from '../components/ProductNav';
import StarRating from 'react-native-star-rating';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Layout, Tab, TabView, Icon} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import ReviewIcon from '../components/ReviewIcon';
import ProductItem from '../components/ProductItem';
const ProductDetailsScreen = ({navigation, route}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ];
  return (
    <View style={globalStyles.mainContainer}>
      <ProductNav
        action={() => {
          navigation.pop();
        }}
      />
      <ScrollView style={{width: '100%', height: '50%'}}>
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
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginTop: 5,
            justifyContent: 'center',
          }}>
          <Text style={styles.productTitle}>Product Name testing details</Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={4}
            fullStarColor={'#d6000d'}
            starSize={25}
          />
        </View>
        <Text style={styles.productDesc}>
          Only the best is good enough. You can achieve a perfectly harmonious
          workflow if you and your treatment center interact optimally.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginTop: 5,
            justifyContent: 'flex-start',
            alignSelf: 'center',
            marginLeft: 15,
          }}>
          <Text style={styles.productUnit}>AED</Text>
          <Text style={styles.productPrice}>592.00</Text>
          <Image
            source={require('../assets/verif.png')}
            style={{alignSelf: 'center', marginLeft: 30, resizeMode: 'contain'}}
          />
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
            borderTopWidth: 0.5,
            borderTopColor: 'gray',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginTop: 10,
          }}>
          <Text style={styles.deliverTitle}>Deliver To</Text>
          <Text style={styles.location}>Knaies</Text>
          <SimpleLineIcons
            name="arrow-right"
            size={28}
            style={{
              width: 32,
              height: 32,
              marginRight: 10,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Nunito-SemiBold',
              alignSelf: 'flex-start',
              paddingLeft: 10,
              textAlign: 'justify',
              marginRight: 10,
              color: 'gray',
            }}>
            Order in the next
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Nunito-SemiBold',
              alignSelf: 'flex-start',
              paddingLeft: 2,
              textAlign: 'justify',
              marginRight: 10,
              color: 'black',
            }}>
            19hrs 53 mins
          </Text>
        </View>
        <View style={{width: '100%', flexDirection: 'row', marginLeft: 12}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Nunito-SemiBold',
              alignSelf: 'flex-start',
              paddingLeft: 2,
              textAlign: 'justify',
              marginRight: 10,
              color: '#d6000d',
            }}>
            Wed,Oct 28
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 20,
            marginTop: 10,
            backgroundColor: '#F2F2F2',
          }}
        />
        <View style={{width: '100%', height: 250}}>
          <TabView
            style={styles.tabView}
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}>
            <Tab title="Overview">
              {/* <SafeAreaView style={styles.tabContainer}>
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
            </SafeAreaView> */}
            </Tab>
            <Tab title="Brands">
              <View style={styles.tabContainer}>
                {/* <FlatList
                style={{marginBottom: 30, alignSelf: 'center', height: 50}}
                data={Brands}
                renderItem={({item}) => <BrandItem brandTitle={item} />}
                //Setting the number of column
              /> */}
              </View>
            </Tab>
            <Tab title="Suppliers">
              <View style={styles.tabContainer}>
                {/* <FlatList
                style={{marginBottom: 30, alignSelf: 'center', height: 50}}
                data={Brands}
                renderItem={({item}) => <SupplierItem name={item} />}
                //Setting the number of column
                numColumns={2}
              /> */}
              </View>
            </Tab>
            <Tab title="Offer">
              {/* <View style={styles.tabContainer}>
              <Text category="h5">TRANSACTIONS</Text>
            </View> */}
            </Tab>
          </TabView>
        </View>
        <View
          style={{
            width: '100%',
            marginVertical: 10,

            marginHorizontal: 2,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              //marginVertical: 20,
            }}>
            <Text style={styles.productTitle}>Customer Review</Text>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={4}
              fullStarColor={'#d6000d'}
              starSize={25}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '60%',
            borderTopColor: 'gray',
            borderTopWidth: 0.5,
          }}>
          {images.map((elm) => (
            <ReviewIcon />
          ))}
          <TouchableOpacity
            style={{
              width: '100%',
              height: 50,

              borderTopWidth: 0.5,
              borderTopColor: 'gray',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginTop: 10,
            }}
            onPress={() => {
              navigation.navigate('review');
            }}>
            <Text style={styles.reviewTitle}>
              See All Customers Reviews (33)
            </Text>

            <SimpleLineIcons
              name="arrow-right"
              size={25}
              style={{
                width: 32,
                height: 32,
                marginRight: 10,
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              height: 20,
              //marginTop: 10,
              backgroundColor: '#F2F2F2',
              opacity: 0.7,
            }}
          />
          <Text style={styles.productTitle}>Customers also viewed</Text>
          <FlatList
            style={{marginBottom: 30, alignSelf: 'center'}}
            data={images}
            horizontal={true}
            renderItem={({item}) => (
              <ProductItem
                action={() => {
                  navigation.navigate('details');
                }}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  productTitle: {
    //justifyContent: 'flex-start',
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    textAlign: 'justify',
    marginRight: 10,
  },
  productDesc: {
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    textAlign: 'justify',
    marginRight: 10,
    color: 'gray',
  },
  productUnit: {
    fontSize: 25,
    fontFamily: 'Nunito-Regular',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    textAlign: 'justify',
    marginRight: 5,
    color: '#d6000d',
  },
  productPrice: {
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    textAlign: 'justify',
    marginRight: 10,
    color: '#d6000d',
  },
  deliverTitle: {
    fontSize: 17,
    fontFamily: 'Nunito-SemiBold',
    alignSelf: 'center',
    paddingLeft: 10,
    textAlign: 'justify',
    marginRight: 10,
    color: 'gray',
  },
  location: {
    fontSize: 17,
    fontFamily: 'Nunito-SemiBold',
    alignSelf: 'center',
    paddingLeft: 10,
    textAlign: 'justify',
    marginLeft: 170,
  },
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
  reviewTitle: {
    fontSize: 17,
    fontFamily: 'Nunito-SemiBold',
    alignSelf: 'center',
    paddingLeft: 10,
    textAlign: 'justify',
    marginRight: 10,
  },
});
