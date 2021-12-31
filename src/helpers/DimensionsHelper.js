import {Dimensions, Platform, StatusBar, PixelRatio} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
import DeviceInfo from 'react-native-device-info';

const isIphoneX = () => {
  return DeviceInfo.hasNotch();
};

const isIOS = () => {
  return Platform.OS === 'ios';
};

const isSmallScreen = screenHeight < 569;

const ifIphoneX = (iphoneXStyle, regularStyle) => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

const getStatusBarHeight = safe => {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
};

const getBottomSpace = () => {
  return isIphoneX() ? 34 : 0;
};

const widthPercentageToDP = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => {
  return (screenHeight / guidelineBaseHeight) * size;
};

const horizontalScale = size => {
  return (screenWidth / guidelineBaseWidth) * size;
};

const moderateScale = (size, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

export {
  isIphoneX,
  isIOS,
  isSmallScreen,
  ifIphoneX,
  getStatusBarHeight,
  getBottomSpace,
  widthPercentageToDP,
  heightPercentageToDP,
  horizontalScale,
  moderateScale,
};
