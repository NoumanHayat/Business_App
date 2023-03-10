/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  DeviceEventEmitter,
  LogBox,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {COLORS} from './constants';
import SplashScreen from 'react-native-splash-screen';
// import AfterLoadSplashScreen from './screens/AfterLoadSplashScreen/AfterLoadSplashScreen';
import {DataProvider} from './screens/hooks';
import Home from './screens/Dashbord/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import admin from './screens/Admin';
import user from './screens/User';
import GateKeeper from './screens/gatekeeper';

const Stack = createNativeStackNavigator();
const AppStarting = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  const [getStarted, setGetStarted] = useState(false);

  return  (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        paddingBottom: 0,
      }}>
      <View style={{flex: 1}}>
        {/* <Notification /> */}
        <NavigationContainer>
          {/* <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} /> */}
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Select Type">
            <Stack.Screen name="Select Type" component={Home} />
            <Stack.Screen name="admin" component={admin} />
            <Stack.Screen name="worker" component={user} />
            <Stack.Screen name="GateKeeper" component={GateKeeper} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};
export default function App() {
  return (
    <DataProvider>
      <AppStarting />
    </DataProvider>
  );
}
