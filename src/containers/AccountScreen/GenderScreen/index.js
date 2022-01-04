import React, {useState} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {HeaderShop, Touchable, TouchButton} from '../../../components';
import {Colors} from '../../../config';
import NavigationHelper from '../../../helpers/NavigationHelper';
import {scale} from '../../../libs/scaling';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

const gender = [
  {key: '1', name: 'Male'},
  {key: '2', name: 'Female'},
  {key: '3', name: 'Other'},
];
const GenderScreen = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderShop
        title="Gender"
        leftBack
        onPressBack={() => NavigationHelper.goBack()}
      />
      <View style={styles.viewPadding}>
        <Text style={styles.textTitle}>Choose Gender</Text>
        <Touchable onPress={() => setShow(!show)} style={styles.viewShow}>
          <Text style={styles.viewIcon}>Male</Text>
          {show ? (
            <MaterialCommunityIcons
              name="chevron-up"
              size={scale(23)}
              style={styles.viewIcon}
            />
          ) : (
            <MaterialCommunityIcons
              name="chevron-down"
              size={scale(23)}
              style={styles.viewIcon}
            />
          )}
        </Touchable>
        {show ? (
          <Animated.View style={styles.viewDetail}>
            {gender.map(item => (
              <Text key={item.key} style={styles.textGender}>
                {item.name}
              </Text>
            ))}
          </Animated.View>
        ) : null}
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
  viewIcon: {
    color: Colors.gray,
  },
  viewBottom: {
    position: 'absolute',
    bottom: scale(30),
    width: '100%',
    paddingHorizontal: scale(10),
  },
  viewDetail: {
    width: '100%',
    paddingHorizontal: scale(10),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray,
    borderRadius: scale(5),
  },
  viewShow: {
    width: '100%',
    height: scale(50),
    backgroundColor: Colors.white,
    borderWidth: scale(1),
    borderColor: Colors.gray,
    borderRadius: scale(5),
    marginVertical: scale(10),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  textTitle: {
    fontWeight: '500',
    fontSize: scale(14),
    color: Colors.black,
  },
  viewPadding: {
    paddingHorizontal: scale(10),
    marginTop: scale(20),
  },
  textGender: {
    marginVertical: scale(10),
    color: Colors.gray,
  },
});
export default GenderScreen;
