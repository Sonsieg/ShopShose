import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from '../../libs/scaling';
const OR = ({text = 'OR', styleOR}) => {
  return (
    <View style={styles.container}>
      <View style={styles.hairline} />
      <Text style={styles.loginButtonBelowText}>{text}</Text>
      <View style={styles.hairline} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: StyleSheet.hairlineWidth,
    width: scale(130),
  },
  loginButtonBelowText: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: scale(13),
    paddingHorizontal: scale(15),
    alignSelf: 'center',
    color: '#A2A2A2',
  },
});
export default OR;
