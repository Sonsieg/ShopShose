import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {HeaderShop} from '../../../components';
import {Colors} from '../../../config';
import NavigationHelper from '../../../helpers/NavigationHelper';
import {scale} from '../../../libs/scaling';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

const ShipToScreen = () => {
  const renderRightItems = () => {
    return (
      <View style={styles.viewPlus}>
        <MaterialCommunityIcons
          name="plus"
          size={scale(25)}
          style={{color: Colors.royalblue}}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderShop
        title="Ship To"
        leftBack
        onPressBack={() => NavigationHelper.goBack()}
        renderRightItems={renderRightItems}
      />
      <ScrollView style={styles.viewContent}></ScrollView>
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
  viewPlus: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ShipToScreen;
