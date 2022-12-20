/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {ReactNode} from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextStyle,
  TextInput,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
// 'Feather.ttf','Entypo.ttf','FontAwesome5.ttf','.ttf','FontAwesome5.ttf'
interface Props {
  value?: string | undefined;
  defaultValue?: string | undefined;
  style?: TextStyle;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  heightDivider?: boolean | undefined;
}

export default function AppInput({
  value,
  defaultValue,
  onChange,
  style,
  onChangeText,
  icon,
  heightDivider,
}: Props) {
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.textBoxSign}>
      {icon ? (
        <View style={styles.icons}>{icon}</View>
      ) : (
        <View style={{marginHorizontal: 13}}>
          <Text></Text>
        </View>
      )}
      <TextInput
        placeholder={defaultValue}
        placeholderTextColor="gray"
        autoCapitalize={'none'}
        multiline={heightDivider ? true : false}
        style={{
          flex: 1,
          height: 'auto',
          fontSize: 12,
          marginLeft: 2,
          color: 'gray',
          paddingBottom: 7,
          minHeight: heightDivider ? windowHeight / heightDivider : null,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  icons: {
    flex: 0.1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 10,
    // backgroundColor: 'red',
  },
  textBoxSign: {
    flexDirection: 'row',
    // height: 50,
    // backgroundColor:'blue',
    // marginHorizontal: 5,
    // paddingHorizontal: SIZES.radius,
    borderRadius: 5,
    // elevation: 2,
    marginTop: 20,
    backgroundColor: COLORS.white,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
});
