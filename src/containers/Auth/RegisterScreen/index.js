import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {InputNormal, Logo, OR, TouchButton} from '../../../components';
import {Colors, Dimens} from '../../../config';
import NavigationHelper from '../../../helpers/NavigationHelper';
import {scale} from '../../../libs/scaling';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.viewScrollView}
        showsVerticalScrollIndicator={false}>
        <Logo textTop="Let's Get Started" textBottom="Create an new account" />
        <InputNormal person placeholder="Your Email" />
        <InputNormal email placeholder="Password" />
        <InputNormal password placeholder="Password" />
        <InputNormal password placeholder="Password" />
        <TouchButton title="Sign Up" />
        <View style={styles.viewText}>
          <Text>
            <Text style={styles.textGray}>have a account?</Text>
            <Text
              onPress={() => NavigationHelper.navigate('LoginScreen')}
              style={styles.textBlue}>
              {' Sign In'}
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  viewScrollView: {
    paddingHorizontal: scale(20),
    marginTop: Dimens.navBarHeight,
  },
  viewText: {
    width: '100%',
    alignItems: 'center',
  },
  textForgot: {
    marginVertical: scale(8),
    color: Colors.royalblue,
    fontWeight: '500',
  },
  textGray: {
    color: Colors.gray,
  },
  textBlue: {
    color: Colors.royalblue,
    fontWeight: '500',
  },
});
export default RegisterScreen;
