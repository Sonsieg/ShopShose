import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');
const marginTopX = 34;
const isIphoneX = () => {
  return DeviceInfo.hasNotch();
};

const Dimens = {
  baseMargin: 20,
  basePadding: 20,
  marginHorizontal: 16,
  marginVertical: 16,
  section: 25,
  doubleBaseMargin: 16,
  largeBaseMargin: 20,
  smallBaseMargin: 5,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width,
  screenHeight: height,
  navBarHeight:
    Platform.OS === 'ios' ? (isIphoneX() ? 56 + marginTopX : 80) : 62,

  tabBarHeight: Platform.OS === 'ios' ? (isIphoneX() ? 90 : 52) : 56,
  buttonRadius: 3,
  navBarPaddingTop: Platform.OS === 'ios' ? (isIphoneX() ? marginTopX : 30) : 0,
  tabBarPaddingBottom:
    Platform.OS === 'ios' ? (isIphoneX() ? marginTopX : 10) : 0,
  tabBarIconSize: Platform.OS === 'ios' ? (isIphoneX() ? 28 : 25) : 25,
  buttonHeight: 44,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 60,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300,
  },
  separatorHeight: 1,
  bottomBar: 49,
  loginViewHeight: 310,
  safetyScreenHeight: Platform.OS === 'ios' ? height : height + 64, // just for displaying fullscreen images
  paddingTopScrollTab: 72,
  marginTopX,
  statusBarHeight: Platform.OS === 'ios' ? (isIphoneX() ? 30 : 20) : 10,
};

export default Dimens;
