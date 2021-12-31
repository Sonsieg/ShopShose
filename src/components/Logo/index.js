import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Rect, Path} from 'react-native-svg';
import {Colors} from '../../config';
import {scale} from '../../libs/scaling';

const PATH =
  'M50.828 33.172a4 4 0 0 1 0 5.656l-12 12a4 4 0 0 1-5.656 0l-12-12a4 4 0 0 1 0-5.656l12-12a4 4 0 0 1 5.656 0l12 12ZM36 29.657 29.657 36 36 42.343 42.343 36 36 29.657Z';
const Logo = ({textTop, textBottom}) => {
  return (
    <View style={styles.viewContainer}>
      <Svg width={scale(72)} height={scale(72)} fill="none">
        <Rect
          width={scale(72)}
          height={scale(72)}
          rx={scale(16)}
          fill="#40BFFF"
        />
        <Path fillRule="evenodd" clipRule="evenodd" fill="#fff" d={PATH} />
      </Svg>
      <Text style={styles.textTop}>{textTop}</Text>
      <Text style={styles.textBottom}>{textBottom}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: scale(20),
  },
  textTop: {
    fontSize: scale(15),
    fontWeight: '600',
    marginTop: scale(15),
  },
  textBottom: {
    fontSize: scale(13),
    marginTop: scale(15),
    color: Colors.gray,
  },
});
export default Logo;
