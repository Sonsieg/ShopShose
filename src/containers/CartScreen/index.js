import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Animated} from 'react-native';
import {HeaderShop, InputNormal, ItemCart, TouchButton} from '../../components';
import {Colors} from '../../config';
import {scale} from '../../libs/scaling';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Touchable from '../../components/Touchable/index';
import NavigationHelper from '../../helpers/NavigationHelper';

MaterialCommunityIcons.loadFont();
Feather.loadFont();
const price = [
  {key: '1', name: 'Items (3)', value: '$598.86'},
  {key: '2', name: 'Shipping', value: '$40.00'},
  {key: '3', name: 'Import charges', value: '$128.00'},
  {key: '4', name: 'Total Price', value: '$766.86'},
];
const CartScreen = () => {
  const [like, setLike] = useState(false);
  const [number, setNumber] = useState([{id: 5, soluong: 1}]);
  console.log('this is number', number);
  const onSub = id => {
    const newNumber = number.map(item => {
      if (item.id == id) {
        return {...item, soluong: item.soluong - 1};
      }
      return item;
    });
    setNumber(newNumber);
  };

  const onIncrease = id => {
    const newNumber = number.map(item => {
      if (item.id == id) {
        return {...item, soluong: item.soluong + 1};
      }
      return item;
    });
    setNumber(newNumber);
  };

  return (
    <View style={styles.container}>
      <HeaderShop title="Your Cart" />
      <ScrollView style={styles.viewContent}>
        <ItemCart
          title={'Meo'}
          description={`${25 * number.find(x => x.id === 5)?.soluong}$`}
          like={like}
          onLike={() => setLike(!like)}
          onSub={() => onSub(5)}
          onIncrease={() => onIncrease(5)}
          number={number.find(x => x.id === 5)?.soluong || 1}
        />
        <View style={styles.viewCoupon}>
          <InputNormal
            nullIcon
            propStyle={styles.viewInput}
            placeholder="Enter coupon code"
          />
          <Touchable style={styles.touchApply}>
            <Text style={styles.textCoupon}>Apply</Text>
          </Touchable>
        </View>
        <Animated.View style={styles.viewDetail}>
          {price.map(item => (
            <View key={item.key} style={styles.viewPrice}>
              <Text
                style={[
                  styles.textGender,
                  item.key === '4' && styles.viewFour,
                ]}>
                {item.name}
              </Text>
              <Text
                style={[
                  styles.textMoney,
                  item.key === '4' && styles.textPrice,
                ]}>
                {item.value}
              </Text>
            </View>
          ))}
        </Animated.View>
        <TouchButton
          title="Check Out"
          onPress={() => NavigationHelper.navigate('ShipToScreen')}
        />
      </ScrollView>
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
  viewCoupon: {
    width: '100%',
    flexDirection: 'row',
    marginTop: scale(15),
  },
  touchApply: {
    width: '20%',
    backgroundColor: Colors.royalblue,
    height: scale(50),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewInput: {
    width: '80%',
  },
  textCoupon: {
    color: Colors.white,
    fontWeight: '500',
  },
  viewDetail: {
    width: '100%',
    paddingHorizontal: scale(10),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray,
    borderRadius: scale(5),
    marginVertical: scale(30),
  },
  textGender: {
    marginVertical: scale(10),
    color: Colors.gray,
  },
  textMoney: {
    marginVertical: scale(10),
    color: Colors.black,
  },
  viewPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewFour: {
    color: Colors.black,
    fontWeight: '500',
  },
  textPrice: {
    color: Colors.royalblue,
    fontWeight: '500',
  },
});
export default CartScreen;
