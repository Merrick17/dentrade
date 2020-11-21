import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginTop: 100,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFF',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default globalStyles;
