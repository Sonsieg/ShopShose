import {Dimensions, Platform} from 'react-native';
import {PLATFORM} from '.';
import {scale} from '../scaling';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const platform = Platform.OS;
const ipX =
  platform === Platform.OS &&
  ((height === 812 && width === 375) || (height === 896 && width === 414));
const ipXOnly = platform === PLATFORM.IOS && height === 812 && width === 375;
const ip11 = platform === PLATFORM.IOS && height === 896 && width === 414;
const android = Platform.OS === 'android';
export default {
  width,
  height,
  ipX,
  ip11,
  ipXOnly,
  android,
  toolbarHeight: scale(56),
};
