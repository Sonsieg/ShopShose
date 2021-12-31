// @flow

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Positions} from '../constants';
import Text from '../../../Text';
import { scale } from '../../../../libs/scaling';

const DEFAULT_TITLE_ALIGN = 'center';
const HAVE_TITLE_BAR = true;

const styles = StyleSheet.create({
  title: {
    padding: 24,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titleBar: {
    padding: 14,
    borderBottomWidth: 0.5,
    backgroundColor: '#F9F9FB',
    borderColor: '#DAD9DC',
  },
  titleText: {
    color: '#7F7D89',
    fontSize: scale(16),
  },
});

function DialogTitle({
  title,
  titleStyle,
  titleTextStyle,
  haveTitleBar,
  titleAlign,
}) {
  const titleBar = haveTitleBar ? styles.titleBar : null;
  const titleItemsAlign = {alignItems: Positions[titleAlign]};

  return (
    <View style={[styles.title, titleItemsAlign, titleBar, titleStyle]}>
      <Text style={[styles.titleText, titleTextStyle]}>{title}</Text>
    </View>
  );
}

DialogTitle.defaultProps = {
  titleAlign: DEFAULT_TITLE_ALIGN,
  haveTitleBar: HAVE_TITLE_BAR,
};

export default DialogTitle;
