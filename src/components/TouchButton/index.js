import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../config';
import {scale} from '../../libs/scaling';
import {Svg, Path} from 'react-native-svg';
import Touchable from '../Touchable/index';

const PATH_GOOGLE_ONE =
  'M19.845 10.933H19.2V10.9H12v3.2h4.521A4.798 4.798 0 0 1 7.2 12.5 4.8 4.8 0 0 1 12 7.7c1.224 0 2.337.462 3.184 1.216l2.263-2.263A7.963 7.963 0 0 0 12 4.5a8 8 0 1 0 7.845 6.433Z';

const PATH_GOOGLE_TWO =
  'm4.922 8.776 2.628 1.928A4.798 4.798 0 0 1 12 7.7c1.223 0 2.336.462 3.184 1.216l2.263-2.263A7.963 7.963 0 0 0 12 4.5a7.995 7.995 0 0 0-7.078 4.276Z';

const PATH_GOOGLE_THREE =
  'M12 20.5c2.066 0 3.944-.79 5.364-2.077l-2.476-2.095A4.764 4.764 0 0 1 12 17.3a4.798 4.798 0 0 1-4.513-3.178l-2.609 2.01A7.994 7.994 0 0 0 12 20.5Z';

const PATH_GOOGLE_FOUR =
  'M19.844 10.933H19.2V10.9H12v3.2h4.521a4.816 4.816 0 0 1-1.635 2.229l.002-.001 2.476 2.095C17.188 18.583 20 16.5 20 12.5c0-.536-.055-1.06-.156-1.567Z';

const PATH_FACEBOOK =
  'M18 2.5h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 0 1 1-1h3v-4Z';

const TouchButton = ({
  icon,
  google,
  facebook,
  onPress,
  title = 'button',
  onPressLogin,
  propStyle,
}) => {
  return (
    <Touchable style={[styles.containerNormal, {propStyle}]} onPress={onPress}>
      {icon ? (
        <Touchable style={styles.viewIcon} onPress={onPressLogin}>
          {google ? (
            <Svg width={scale(25)} height={scale(25)} fill="none">
              <Path d={PATH_GOOGLE_ONE} fill="#FFC107" />
              <Path d={PATH_GOOGLE_TWO} fill="#FF3D00" />
              <Path d={PATH_GOOGLE_THREE} fill="#4CAF50" />
              <Path d={PATH_GOOGLE_FOUR} fill="#1976D2" />
            </Svg>
          ) : null}
          {facebook ? (
            <Svg width={scale(25)} height={scale(25)} fill="none">
              <Path d={PATH_FACEBOOK} fill="#4092FF" />
            </Svg>
          ) : null}
        </Touchable>
      ) : null}
      <Text style={icon ? styles.textTitleLogin : styles.textTitle}>
        {title}
      </Text>
    </Touchable>
  );
};
const styles = StyleSheet.create({
  containerNormal: {
    width: '100%',
    height: scale(55),
    backgroundColor: Colors.royalblue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8),
    marginBottom: scale(10),
  },
  viewIcon: {
    width: '100%',
    height: scale(56),
    borderRadius: scale(8),
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: scale(15),
    backgroundColor: Colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray,
  },
  textTitle: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: scale(15),
  },
  textTitleLogin: {
    color: Colors.gray,
    fontWeight: '500',
    fontSize: scale(15),
  },
});
export default TouchButton;
