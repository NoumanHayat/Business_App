/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../../Components/CustomDrawer';
import Report from './Report';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NotificationsScreen from './NotificationsScreen';


// import { TouchableOpacity } from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
const AppStarting = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Report"
        component={Report}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
       <Drawer.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default AppStarting;