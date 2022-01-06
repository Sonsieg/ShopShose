import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Images} from '../../config';
import {scale} from '../../libs/scaling';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Touchable from '../Touchable/index';
import Feather from 'react-native-vector-icons/Feather';

MaterialCommunityIcons.loadFont();
Feather.loadFont();

const ItemCart = ({
  like,
  onLike,
  onSub,
  onIncrease,
  number,
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image source={Images.cat} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.viewTop}>
        <View style={styles.viewTitle}>
          <Text numberOfLines={1} style={styles.textTitle}>
            {title}
          </Text>
          <View style={styles.viewIcon}>
            <MaterialCommunityIcons
              name={like ? 'heart' : 'heart-outline'}
              size={scale(20)}
              style={like && {color: Colors.red}}
              onPress={onLike}
            />
            <Feather name="trash" size={scale(20)} />
          </View>
        </View>
        <View style={styles.viewBottom}>
          <Text numberOfLines={1} style={styles.textDescription}>
            {description}
          </Text>
          <View style={styles.viewDraw}>
            <Touchable style={styles.touchSub} onPress={onSub}>
              <Text>{`-`}</Text>
            </Touchable>
            <View style={styles.viewNumber}>
              <Text style={styles.textNumber}>{number}</Text>
            </View>

            <Touchable style={styles.touchSub} onPress={onIncrease}>
              <Text>{`+`}</Text>
            </Touchable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: scale(15),
    backgroundColor: Colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    borderColor: Colors.gray,
    borderRadius: scale(5),
    marginTop: scale(15),
  },
  viewImage: {
    width: '25%',
    height: scale(70),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    width: scale(70),
    height: scale(70),
  },
  viewTop: {
    width: '75%',
    height: scale(70),
  },
  viewTitle: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    width: '80%',
    fontWeight: '500',
  },
  viewIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
  },
  viewBottom: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewDraw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: scale(4),
    height: scale(25),
  },
  touchSub: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  viewNumber: {
    width: '34%',
    textAlign: 'center',
    backgroundColor: Colors.grayAston,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNumber: {
    textAlign: 'center',
  },
  textDescription: {
    width: '60%',
    fontSize: scale(11),
    color: Colors.royalblue,
  },
});
export default ItemCart;
