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
  circles: {
    width: wp('20'),
    height: wp('30'),
    marginLeft: wp('80'),
  },
  logoText: {
    color: '#fff',
    fontWeight: '100',
    fontSize: wp('15'),
    marginBottom: wp('2'),
    fontFamily: 'heading',
  },
  ReferlogoText: {
    marginTop: wp('10'),
  },
  zigzag: {
    width: wp('38'),
    height: wp('10'),
    marginBottom: wp('5'),
    marginLeft: wp('0'),
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    fontSize: wp('5'),
    marginBottom: wp('5'),
  },
  title: {
    fontFamily: 'bodytext',
    fontSize: wp('7'),
    fontWeight: 'bold',
    marginBottom: wp('2'),
    color: '#fdd700',
    textAlign: 'center',
  },
  referenceCodeText: {
    color: '#fdd700',
  },
});

export default { styles };
