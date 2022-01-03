import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {HeaderShop, Touchable, TouchAccount} from '../../../components';
import {Colors, Images} from '../../../config';
import {scale} from '../../../libs/scaling';
import NavigationHelper from '../../../helpers/NavigationHelper';
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderShop
        title="Profile"
        leftBack
        onPressBack={() => NavigationHelper.goBack()}
      />
      <View style={styles.viewContent}>
        <Touchable style={styles.viewAvatar}>
          <Image
            source={Images.cat}
            style={styles.imageAvatar}
            resizeMode="contain"
          />
          <View style={styles.viewInfo}>
            <Text style={styles.textName}>Đặng Anh Sơn</Text>
            <Text style={styles.textMail}>@gmail.com</Text>
          </View>
        </Touchable>
        <TouchAccount title="Gender" gender description="xin chòa" />
        <TouchAccount title="Birthday" birthday description="xin chòa" />
        <TouchAccount title="Email" email description="xin chòa" />
        <TouchAccount title="Phone" phone description="xin chòa" />
        <TouchAccount title="Password" password description="xin chòa" />
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
  },
  viewAvatar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: scale(20),
  },
  imageAvatar: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
  },
  viewInfo: {
    justifyContent: 'space-evenly',
    marginLeft: scale(12),
    flexDirection: 'column',
  },
  textName: {
    fontSize: scale(15),
    fontWeight: '500',
  },
  textMail: {
    fontSize: scale(13),
    color: Colors.gray,
  },
});
export default ProfileScreen;
