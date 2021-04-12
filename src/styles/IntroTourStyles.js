import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: wp('8%'),
    paddingRight: wp('8%'),
  },
  slideWrapper: {
    backgroundColor: '#6a00a8',
  },
  logoText: {
    color: '#fff',
    fontWeight: '100',
    fontSize: wp('15'),
    marginBottom: wp('2'),
    fontFamily: 'heading',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    marginTop: wp('10'),
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    fontSize: wp('5'),
    marginBottom: wp('5'),
  },
  title: {
    fontSize: wp('7'),
    fontWeight: 'bold',
    marginBottom: wp('2'),
    marginTop: wp('15'),
    color: '#fdd700',
    textAlign: 'center',
  },
  referenceCodeText: {
    color: '#fdd700',
  },
});

export default { styles };
