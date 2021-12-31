import React, {useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  BackHandler,
  Text,
} from 'react-native';

import {Colors, Dimens, Images} from '../../config';
import NavigationHelper from '../../helpers/NavigationHelper';

import {
  createDynamicStyle,
  createDynamicValue,
  useDynamicStyleSheet,
} from '../../core/theme';
import {scale} from '../../libs/scaling';
import Touchable from './../Touchable/index';
import {widthPercentageToDP} from '../../helpers/DimensionsHelper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

FontAwesome.loadFont();
MaterialIcons.loadFont();

const iconSize = scale(20);
const navBarItemSize = Dimens.navBarHeight - Dimens.navBarPaddingTop;
const NavBar = ({
  title,
  titleColor,
  barShadow,
  titleStyle,
  extraPadding,
  style,
  rightItems,
  leftItems,
  hideBackButton,
  customBackAction,
  onCallBack,
  children,
  titleTextView,
  rightItemComponent,
  home,
  logo,
  nothing,
  titleLeftBack = 'Weather Today',
  rightCalendar,
  savePlan,
  openListPlan,
  rightPlan,
  removePlan,
  play,
  shareCalendar,
}) => {
  const theme = 'light';
  const styles = useDynamicStyleSheet(dynamicStyles, theme);
  const navigation = useNavigation();
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (customBackAction) {
        customBackAction();
      } else {
        NavigationHelper.goBack();
        if (onCallBack) {
          onCallBack();
        }
      }
      return true;
    });

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
    };
  }, [onCallBack, customBackAction]);

  let barStyle = [styles.mainBackground, style];
  if (barShadow === true) {
    barStyle.push({
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    });
  }

  const renderLeftItems = () => {
    let items = [];
    if (leftItems === undefined) {
      if (hideBackButton === undefined || hideBackButton === false) {
        items.push(
          <Touchable
            key={'0'}
            style={{
              // width: navBarItemSize - scale(16),
              height: navBarItemSize,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              if (customBackAction) {
                customBackAction();
              } else {
                NavigationHelper.goBack();
                if (onCallBack) {
                  onCallBack();
                }
              }
            }}>
            <Text style={styles.titleText}>{titleLeftBack}</Text>
          </Touchable>,
        );
      }
    } else if (leftItems === 'Calendar') {
      if (hideBackButton === undefined || hideBackButton === false) {
        items.push(
          <Touchable
            key={'0'}
            style={{
              height: navBarItemSize,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            {shareCalendar ? (
              <FontAwesome
                name="share-square-o"
                style={styles.iconshare}
                size={scale(25)}
              />
            ) : (
              <MaterialIcons name="arrow-back-ios" style={styles.iconWeather} />
            )}
          </Touchable>,
        );
      }
    } else {
      for (const i in leftItems) {
        const {key, icon, title, onPress} = leftItems[i];
        items.push(
          <Touchable
            key={key.toString()}
            style={{
              width: navBarItemSize,
              height: navBarItemSize,
              justifyContent: 'center',
            }}
            onPress={() => {
              if (onPress) {
                onPress();
              }
            }}>
            {!!title && (
              <Text
                numberOfLines={1}
                style={{
                  color: titleColor ? titleColor : Colors.crimson,
                  fontSize: scale(15),
                  textAlign: 'center',
                  fontFamily: 'Monoton-Regular',
                }}>
                {title}
              </Text>
            )}
            {icon && (
              <Image
                source={icon}
                resizeMode={'contain'}
                style={{
                  width: iconSize,
                  height: iconSize,
                  tintColor: titleColor ? titleColor : Colors.crimson,
                }}
              />
            )}
          </Touchable>,
        );
      }
    }

    return items;
  };

  const renderRightItems = () => {
    let items = [];
    for (const i in rightItems) {
      let {
        key,
        icon,
        title,
        onPress,
        sizeIcon,
        titleStyle,
        component,
        enableTouch = true,
        hasTootip = false,
        itemsTooltip = [],
      } = rightItems[i];
      if (sizeIcon === undefined) {
        sizeIcon = navBarItemSize;
      }
      items.push(
        <Touchable
          key={key.toString()}
          style={{
            width: sizeIcon,
            height: sizeIcon,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
          disable={!enableTouch}
          onPress={() => {
            if (onPress) {
              onPress();
            }
          }}>
          {!!title && (
            <Text
              numberOfLines={1}
              style={{
                color: titleColor ? titleColor : Colors.crimson,
                fontSize: scale(15),
                ...titleStyle,
              }}>
              {title}
            </Text>
          )}
          {icon && (
            <Image
              source={icon}
              resizeMode={'contain'}
              style={{
                width: iconSize,
                height: iconSize,
                tintColor: titleColor ? titleColor : Colors.crimson,
              }}
            />
          )}
          {component}
        </Touchable>,
      );
    }

    return items;
  };

  return (
    <Animated.View style={barStyle}>
      <View style={styles.barContent}>
        <View
          style={{
            ...styles.titleTextView,
            flexDirection: 'row',
            alignItems: 'center',
            ...titleTextView,
          }}>
          {home && (
            <Image
              source={logo ? logo : Images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          )}
          {!!title && (
            <Text
              numberOfLines={2}
              style={[
                styles.titleText,
                titleColor && {
                  color: titleColor,
                },
                titleStyle,
              ]}>
              {title}
            </Text>
          )}
          {children}
        </View>
        <View style={{...styles.leftView, paddingLeft: extraPadding || 6}}>
          {nothing ? null : renderLeftItems()}
        </View>
        <View style={{...styles.rightView}}>
          {rightItemComponent ? (
            <View style={styles.viewRight}>
              {rightCalendar ? (
                <FontAwesome
                  name="list-ol"
                  style={styles.icon1}
                  size={scale(22)}
                  onPress={openListPlan}
                />
              ) : (
                <FontAwesome
                  name="share-square-o"
                  style={styles.icon1}
                  size={scale(25)}
                />
              )}
              {rightCalendar ? (
                <FontAwesome
                  onPress={savePlan}
                  name="save"
                  style={styles.icon2}
                  size={scale(25)}
                />
              ) : (
                <FontAwesome
                  name="play"
                  style={styles.icon2}
                  size={scale(20)}
                  onPress={play}
                />
              )}
            </View>
          ) : rightPlan ? (
            <MaterialIcons
              onPress={removePlan}
              name="clear"
              style={styles.icon2}
              size={scale(25)}
            />
          ) : (
            renderRightItems()
          )}
        </View>
      </View>
    </Animated.View>
  );
};

const dynamicStyles = createDynamicStyle({
  mainBackground: {
    height: Dimens.navBarHeight,
    paddingTop: Dimens.navBarPaddingTop,
    width: Dimens.screenWidth,
    justifyContent: 'center',
    backgroundColor: createDynamicValue(Colors.blueAston, Colors.violetAston),
  },
  barContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: createDynamicValue(Colors.violetAston, Colors.blackRussian),
  },
  bottomLine: {
    height: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  titleTextView: {
    position: 'absolute',
    top: 0,
    left: Dimens.screenWidth * 0.22,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimens.screenWidth * 0.56,
  },
  titleText: {
    color: createDynamicValue(Colors.violetAston, Colors.blueAston),
    fontSize: scale(20),
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Monoton-Regular',
  },
  leftView: {
    paddingLeft: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  iconMenu: {
    width: widthPercentageToDP('12%'),
    height: widthPercentageToDP('12%'),
    tintColor: createDynamicValue(Colors.crimson, Colors.crimson),
  },
  touchRightImg: {
    width: navBarItemSize,
    height: navBarItemSize,
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '60%',
  },
  titleName: {
    textAlign: 'center',
    fontSize: scale(18),
    color: createDynamicValue(Colors.crimson, Colors.crimson),
    fontWeight: '800',
  },
  viewLogo: {
    backgroundColor: 'transparent',
    paddingHorizontal: '50%',
  },
  iconLeftBack: {
    width: widthPercentageToDP('5%'),
    height: widthPercentageToDP('5%'),
    marginLeft: widthPercentageToDP('1.5'),
    tintColor: createDynamicValue(Colors.crimson, Colors.crimson),
  },
  icRight: {
    marginLeft: 10,
    marginRight: 5,
    fontSize: scale(20),
    color: Colors.crimson,
  },
  viewChild: {
    paddingTop: scale(4),
    paddingRight: scale(20),
    flexDirection: 'row',
  },
  rightView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: scale(10),
  },
  viewRight: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(70),
  },
  icon1: {
    color: createDynamicValue(Colors.violetAston, Colors.blueAston),
  },
  icon2: {
    color: createDynamicValue(Colors.violetAston, Colors.blueAston),
  },
  iconWeather: {
    fontSize: scale(25),
    color: createDynamicValue(Colors.violetAston, Colors.blueAston),
    marginLeft: scale(12),
  },
  iconshare: {
    color: createDynamicValue(Colors.violetAston, Colors.blueAston),
    marginLeft: scale(12),
  },
});

export default NavBar;
