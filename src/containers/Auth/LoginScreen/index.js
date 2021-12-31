import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {InputNormal, Logo, OR, TouchButton} from '../../../components';
import {Colors, Dimens} from '../../../config';
import {scale} from '../../../libs/scaling';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.viewScrollView}
        showsVerticalScrollIndicator={false}>
        <Logo textTop="Welcome to Lafyuu" textBottom="Sign in to continue" />
        <InputNormal email placeholder="Your Email" />
        <InputNormal password placeholder="Password" />
        <TouchButton title="Sign In" />
        <OR />
        <TouchButton icon google title="Login with Google" />
        <TouchButton icon facebook title="Login with facebook" />
        <View style={styles.viewText}>
          <Text style={styles.textForgot}>Forgot Password?</Text>
          <Text>
            <Text style={styles.textGray}>Don’t have a account?</Text>
            <Text style={styles.textBlue}>{' Register'}</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default LoginScreen;
