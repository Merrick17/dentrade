import ReviewNav from '../components/ReviewNav';
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import globalStyles from '../styles/global';
import * as Progress from 'react-native-progress';
import StarRating from 'react-native-star-rating';
import ReviewIcon from '../components/ReviewIcon';
const ReviewScreen = ({navigation}) => {
  const reviews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <View style={globalStyles.mainContainer}>
      <ReviewNav action={()=>{
          navigation.pop()
      }} />
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#F2F2F2',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text style={styles.title}>Rating And Reviews</Text>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 5,
          }}>
          <Text style={styles.rating}>4/5</Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={4}
            fullStarColor={'#d6000d'}
            starSize={25}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 10,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.number}>5</Text>
            <Progress.Bar
              progress={0.8}
              width={175}
              color={'#d6000d'}
              unfilledColor={'#F2F2F2'}
              borderWidth={0}
              height={10}
            />
            <Text style={styles.number}>80%</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.number}>4</Text>
            <Progress.Bar
              progress={0.6}
              width={175}
              color={'#d6000d'}
              unfilledColor={'#F2F2F2'}
              borderWidth={0}
              height={10}
            />
            <Text style={styles.number}>60%</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.number}>3</Text>
            <Progress.Bar
              progress={0.5}
              width={175}
              color={'#d6000d'}
              unfilledColor={'#F2F2F2'}
              borderWidth={0}
              height={10}
            />
            <Text style={styles.number}>50%</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.number}>2</Text>
            <Progress.Bar
              progress={0.3}
              width={175}
              color={'#d6000d'}
              unfilledColor={'#F2F2F2'}
              borderWidth={0}
              height={10}
            />
            <Text style={styles.number}>30%</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.number}>1</Text>
            <Progress.Bar
              progress={0.1}
              width={175}
              color={'#d6000d'}
              unfilledColor={'#F2F2F2'}
              borderWidth={0}
              height={10}
            />
            <Text style={styles.number}>10%</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 20,
          backgroundColor: '#F2F2F2',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}></View>
      <FlatList
       
        data={reviews}
        
        renderItem={({item}) => (
          <ReviewIcon
            action={() => {
              navigation.navigate('details');
            }}
          />
        )}
      />
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  title: {
    marginLeft: 12,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
  },
  rating: {
    //marginLeft: 12,
    fontFamily: 'Nunito-Bold',
    fontSize: 45,
  },
  number: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
    marginHorizontal: 3,
  },
});
