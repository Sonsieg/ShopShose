import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HeaderShop, TouchAccount} from '../../components';
import {Colors} from '../../config';
import NavigationHelper from '../../helpers/NavigationHelper';
import {scale} from '../../libs/scaling';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderShop title="Account" />
      <View style={styles.viewContent}>
        <TouchAccount
          title="Profile"
          profile
          onPress={() => NavigationHelper.navigate('ProfileScreen')}
        />
        <TouchAccount title="Order" order />
        <TouchAccount title="Adress" adress />
        <TouchAccount title="Payment" payment />
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
});
export default AccountScreen;
