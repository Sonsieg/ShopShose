import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
} from 'react-native';
import {HeaderShop} from '../../components';
import {Colors, Images} from '../../config';
import {scale} from '../../libs/scaling';
const OfferScreen = () => {
  const [time, setTime] = useState({
    h: 10,
    m: 0,
    s: 0,
  });
  const [timer, setTimer] = useState(null);
  const startTimer = () => {
    let myInterval = setInterval(() => {
      setTime(time => {
        const updatedTime = {...time};
        if (time.s > 0) {
          updatedTime.s--;
        }

        if (time.s === 0) {
          if (time.h === 0 && time.m === 0) {
            clearInterval(myInterval);
          } else if (time.m > 0) {
            updatedTime.m--;
            updatedTime.s = 59;
          } else if (updatedTime.h > 0) {
            updatedTime.h--;
            updatedTime.m = 59;
            updatedTime.s = 59;
          }
        }

        return updatedTime;
      });
    }, 1000);
    setTimer(myInterval);
  };
  useEffect(() => {
    startTimer();
  }, []);
  return (
    <View style={styles.container}>
      <HeaderShop title="Offer" />
      <ScrollView style={styles.viewContent}>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Use "MEGSL" Cupon For</Text>
          <Text style={styles.textTitle}>Get 90%off</Text>
        </View>
        <ImageBackground
          resizeMode="cover"
          source={Images.shoseBgOne}
          imageStyle={{borderRadius: scale(5)}}
          style={styles.imageBackground}>
          <Text style={styles.textDetail}>{`Super Flash Sale \n50%`}</Text>
          <View style={styles.viewCountDown}>
            <View style={styles.viewTime}>
              <Text style={styles.textWeight}>
                {time.h < 10 && time.h !== 0
                  ? `0${time.h}`
                  : time.h >= 10 && `${time.h}`}
              </Text>
            </View>
            <View style={styles.viewTime}>
              <Text style={styles.textWeight}>
                {time.m < 10 ? `0${time.m}` : time.m}
              </Text>
            </View>
            <View style={styles.viewTime}>
              <Text style={styles.textWeight}>
                {time.s < 10 ? `0${time.s}` : time.s}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <ImageBackground
          resizeMode="cover"
          source={Images.shoseBgTwo}
          imageStyle={{borderRadius: scale(5)}}
          style={styles.imageBackground}>
          <Text style={styles.textDetail}>{`Super Flash Sale \n50%`}</Text>
          <Text style={styles.textNormal}>{`Special birthday Layfuu`}</Text>
        </ImageBackground>
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
  viewTitle: {
    width: '100%',
    backgroundColor: Colors.royalblue,
    padding: scale(10),
    borderRadius: scale(5),
  },
  textTitle: {
    fontWeight: '600',
    color: Colors.white,
    margin: scale(4),
  },
  imageBackground: {
    width: '100%',
    height: scale(180),
    marginTop: scale(10),
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  textDetail: {
    color: Colors.white,
    fontSize: scale(24),
    marginHorizontal: scale(10),
    fontWeight: '600',
  },
  viewCountDown: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: scale(10),
  },
  viewTime: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(5),
    backgroundColor: Colors.white,
    marginRight: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWeight: {
    fontWeight: '500',
  },
  textNormal: {
    color: Colors.white,
    marginHorizontal: scale(10),
    fontWeight: '600',
  },
});
export default OfferScreen;
