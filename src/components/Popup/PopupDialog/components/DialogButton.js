// @flow

import React from 'react';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {scale} from '../../../../libs/scaling';
import Text from '../../../Text';

import {Positions} from '../constants';

const isAndroid = Platform.OS === 'android';

const DISABLED = false;
const ALIGN = 'center';

const styles = StyleSheet.create({
  text: {
    fontWeight: isAndroid ? '400' : '500',
    fontSize: isAndroid ? scale(19) : scale(18),
  },
  disabledText: {
    color: '#C5C6C5',
  },
  textContainer: {
    minWidth: 48,
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* eslint max-len: [0] */
function DialogButton({
  text,
  activeOpacity,
  disabled,
  align,
  onPress,
  buttonStyle,
  textStyle,
  textContainerStyle,
}) {
  const buttonAlign = {alignSelf: Positions[align]};
  const disabledText = disabled ? styles.disabledText : null;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[styles.button, buttonAlign, buttonStyle]}>
      <View style={[styles.textContainer, textContainerStyle]}>
        <Text style={[styles.text, disabledText, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

DialogButton.defaultProps = {
  disabled: DISABLED,
  align: ALIGN,
};

export default DialogButton;
