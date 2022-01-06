import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {Colors, Dimens} from '../../config';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from '../../libs/scaling';
MaterialIcons.loadFont();
const HeaderShop = ({
  title,
  renderLeftItems,
  renderRightItems,
  leftBack,
  onPressBack,
}) => {
  return (
    <Animated.View style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <View style={styles.leftView}>
          {renderLeftItems ? (
            renderLeftItems()
          ) : (
            <>
              {leftBack ? (
                <MaterialIcons
                  name="arrow-back-ios"
                  size={scale(20)}
                  onPress={onPressBack}
                  style={styles.icon}
                />
              ) : null}
              <Text numberOfLines={1} style={styles.viewTitle}>
                {title}
              </Text>
            </>
          )}
        </View>
        <View style={styles.rightView}>
          {renderRightItems ? renderRightItems() : null}
        </View>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  leftView: {
    paddingHorizontal: scale(12),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 0.8,
    height: '100%',
    paddingRight: scale(30),
  },
  rightView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: scale(10),
    flex: 0.2,
  },
  viewContainer: {
    height: Dimens.navBarHeight,
    paddingTop: Dimens.navBarPaddingTop,
    width: Dimens.screenWidth,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  viewHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray,
  },
  viewTitle: {
    fontWeight: '500',
    fontSize: scale(15),
  },
  icon: {
    color: Colors.gray,
  },
});
export default HeaderShop;
