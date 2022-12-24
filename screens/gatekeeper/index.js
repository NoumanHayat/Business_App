/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  ImageBackground,
  Text,
  View,
} from 'react-native';
import { images, SIZES } from '../../constants';
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './account/SignIn';
import dashboard from './dashboard';
// import addProposal from './dashboard/addProposal';
import proposalDetails from './dashboard/proposalDetails';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
function AppStarting() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="dashboard" component={dashboard} />

    </Stack.Navigator>
  );
}
export default AppStarting;