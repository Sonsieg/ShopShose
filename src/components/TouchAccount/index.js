import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {scale} from '../../libs/scaling';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Colors} from '../../config';
import Touchable from '../Touchable/index';

MaterialCommunityIcons.loadFont();
Ionicons.loadFont();
MaterialIcons.loadFont();
Feather.loadFont();

const TouchAccount = ({
  title,
  description,
  profile,
  order,
  adress,
  payment,
  gender,
  birthday,
  email,
  phone,
  password,
  onPress,
}) => {
  return (
    <Touchable style={styles.container} onPress={onPress}>
      <View style={styles.viewTitle}>
        {profile && (
          <MaterialCommunityIcons
            name="account-outline"
            size={scale(23)}
            style={styles.viewIconTitle}
          />
        )}
        {order && (
          <Feather
            name="shopping-bag"
            size={scale(23)}
            style={styles.viewIconTitle}
          />
        )}
        {adress && (
          <Ionicons
            name="location-outline"
            size={scale(23)}
            style={styles.viewIconTitle}
          />
        )}
        {payment && (
          <MaterialIcons
            name="payment"
            size={scale(23)}
            style={styles.viewIconTitle}
          />
        )}
        {gender && (
          <MaterialCommunityIcons
            name="gender-female"
            size={scale(23)}
            style={styles.viewIconTitle}
          />
        )}
        {birthday && (
          <MaterialCommunityIcons
            name="calendar-blank-outline"
            size={scale(23)}
            style={styles.viewIconTitle}
          />
        )}
        {email && (
          <MaterialCommunityIcons
            name="email-outline"
            size={scale(23)}
            style={styles.viewIconTitle}
          />
        )}
        {phone && (
          <MaterialCommunityIcons
            name="cellphone-iphone"
            size={scale(23)}
            style={styles.viewIconTitle}
          />
        )}
        {password && (
          <MaterialCommunityIcons
            name="lock-outline"
            size={scale(23)}
            style={styles.viewIconTitle}
          />
        )}

        <Text style={styles.textTitle} numberOfLines={1}>
          {title}
        </Text>
      </View>
      {gender || email || password || birthday || phone ? (
        <View style={styles.viewDescription}>
          {password ? (
            <TextInput
              editable={true}
              secureTextEntry={true}
              value={description}
              style={styles.textInput}
              textAlign="right"
            />
          ) : (
            <Text numberOfLines={1} style={styles.textDescription}>
              {description}
            </Text>
          )}
          <MaterialCommunityIcons
            name="chevron-right"
            size={scale(23)}
            style={styles.viewIconDescription}
          />
        </View>
      ) : null}
    </Touchable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  viewTitle: {
    height: scale(50),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.4,
    justifyContent: 'flex-start',
    paddingRight: scale(20),
  },
  viewDescription: {
    height: scale(50),
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: scale(30),
  },
  viewIconTitle: {
    color: Colors.royalblue,
    marginRight: scale(8),
  },
  viewIconDescription: {
    color: Colors.gray,
    marginLeft: scale(8),
  },
  textDescription: {
    color: Colors.gray,
    fontSize: scale(14),
  },
  textTitle: {
    color: Colors.black,
    fontWeight: '500',
    fontSize: scale(14),
  },
  textInput: {
    width: '100%',
    color: Colors.gray,
    fontSize: scale(11),
  },
});
export default TouchAccount;
