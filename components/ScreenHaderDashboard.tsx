/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { COLORS, FONTS, icons } from '../constants';
import AppText from './AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// var onlyBack = true;
export default function ScreenHeader({
  navigation,
  onlyBack = false,
  title = '',
  // Available,
}) {
  return (
    <View>
      <View
        style={{
          height: 35,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 15,
          // ...style,
          // backgroundColor: COLORS.white,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
          style={{
            height: 45,
            width: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={icons.menu}
            style={{
              tintColor: COLORS.dark,
              height: 18,
              width: 20,
              position: 'absolute',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            marginLeft: -45,
          }}>
          <Text
            style={{
              color: COLORS.dark,
              fontSize: 20,
              fontFamily: FONTS.Black,
            }}>
            {title}
          </Text>
        </View>
        <View></View>
      </View>
    </View>
  );
}
