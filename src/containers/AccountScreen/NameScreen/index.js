import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HeaderShop, InputNormal, TouchButton} from '../../../components';
import {Colors} from '../../../config';
import NavigationHelper from '../../../helpers/NavigationHelper';
import {scale} from '../../../libs/scaling';

const NameScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderShop
        title="Name"
        leftBack
        onPressBack={() => NavigationHelper.goBack()}
      />
      <View style={styles.viewContent}>
        <Text style={styles.title}>First Name</Text>
        <InputNormal placeholder="Đặng Anh" nullIcon />
        <Text style={styles.title}>Last Name</Text>
        <InputNormal placeholder="Sơn" nullIcon />
      </View>
      <View style={styles.viewBottom}>
        <TouchButton title="Save" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  viewContent: {
    paddingHorizontal: scale(10),
    marginTop: scale(20),
  },
  title: {
    fontSize: scale(14),
    fontWeight: '500',
    color: Colors.black,
    marginBottom: scale(10),
  },
  viewBottom: {
    position: 'absolute',
    bottom: scale(30),
    width: '100%',
    paddingHorizontal: scale(10),
  },
});
export default NameScreen;
