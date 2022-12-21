// /* eslint-disable react/jsx-key */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// import { NavigationContainer } from '@react-navigation/native';
// import React, { FC, useEffect, useState } from 'react';
// import { SectionList, Text, TouchableNativeFeedback, View } from 'react-native';
// import FastImage from 'react-native-fast-image';
// import AppText from '../../components/AppText';
// import { InAppChallengeInviteNotificationComponent } from '../../components/InAppChallengeInviteNotificationComponent';
// import ScreenWithNavHeaderLayout from '../../components/ScreenWithNavHeaderLayout';
// import { COLORS, values } from '../../constants';
// import { useData } from '.././hooks';

// const NotificationsScreen = ({ navigation, route }: any) => {
//   const notificationsData = [
//     {
//       title: 'Today',
//       data: [
//         {
//           title: 'Biginner',
//           type: 'invite'
//         }
//       ]
//     },
//     {
//       title: 'Yesterday',
//       data: [
//         {
//           title: 'New Workout is Available!',
//           subtitle: 'Check now and practice',
//           type: 'info'
//         },
//         {
//           title: 'New Features are Available',
//           subtitle: 'You can now set exercise reminder',
//           type: 'info'
//         }
//       ]
//     },
//     {
//       title: 'May 24, 2022',
//       data: [
//         {
//           title: 'Verification Successful',
//           subtitle: 'Account verification completed',
//           type: 'info'
//         },
//         {
//           title: 'New Features are Available',
//           subtitle: 'You can now set exercise reminder',
//           type: 'info'
//         }
//       ]
//     }
//   ];
//   const { notification,addFriends } = useData();
//   const [notificationData, setNotificationData] = useState(notificationsData);
//   useEffect(() => {
//     async function fetchData() {
//       const noti = await notification();
//       setNotificationData(noti);
//     }
//     fetchData();
//   }, []);

//   return (
//     <ScreenWithNavHeaderLayout navigation={navigation} title="Notifications">
//       {notificationData.map((item, index) =>{ return(<Item key={index} navigation={navigation} title={item?.title} photoUrl={item?.frinedPhotos} friendName={item?.friendName}  subtitle={item?.subtitle} type={item?.type} friendId={item?.friendId} />)})}
//     </ScreenWithNavHeaderLayout>
//   )
// };
// export default NotificationsScreen;

// type Props = {
//   title: string;
//   subtitle?: string;
//   type: string;
// };

// const Item = ({ title, subtitle, type ,photoUrl,friendName,friendId ,navigation}) => {
//   const { notification,addFriends } = useData();

//   switch (type) {
//     case 'info':
//       return (
//         <View
//           style={{
//             marginBottom: 20,
//             marginHorizontal: 20,
//             padding: 20,
//             backgroundColor: COLORS.lightGray
//           }}
//         >
//           <AppText fontWeight="SemiBold" style={{ fontSize: 14 }}>
//             {title}
//           </AppText>
//           <AppText style={{ fontSize: 14, marginTop: 10 }}>{subtitle}</AppText>
//         </View>
//       );

//     case 'invite':
//       return (
//         <View
//           style={{
//             margin: 24,
//             padding: 10,
//             shadowColor: '#00000060',
//             backgroundColor: COLORS.white,
//             shadowOffset: {
//               width: 0,
//               height: 0
//             },
//             shadowOpacity: 0.37,
//             shadowRadius: 7.49,
//             elevation: 12,
//             alignItems: 'center'
//           }}
//         >
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center'
//             }}
//           >
//             <FastImage
//               source={{ uri: photoUrl }}
//               style={{
//                 width: 65,
//                 height: 65,
//                 borderRadius: 35,
//                 backgroundColor: COLORS.gray,
//                 marginRight: 10
//               }}
//             />
//             <View style={{ flex: 1 }}>
//               <AppText fontWeight="Medium" style={{ fontSize: 14 }}>
//                 {friendName}
//               </AppText>
//             </View>
//             <View>
//               <NotificationButton
//                 onPress={() => {
//                   addFriends(friendId);
//                   alert("Friend accepted");
//                   // eslint-disable-next-line react/prop-types
//                   navigation.push('Tabs')
//                 }}
//                 text="Accept" style={undefined} />
//               <NotificationButton
//                 onPress={() => {
//                   console.log("Invited you for Challenge!");
//                 }}
//                 text="Decline"
//                 type="secondary"
//                 style={{ marginTop: 8 }}
//               />
//             </View>
//           </View>
//         </View>
//       );
//   }
//   return null;
// };

// const NotificationButton = ({ type = 'primary', onPress, text, style }) => {
//   return (
//     <View
//       style={{
//         borderRadius: 5,
//         overflow: 'hidden',
//         ...style
//       }}
//     >
//       <TouchableNativeFeedback
//         onPress={() => (onPress ? onPress() : null)}
//         style={{ borderRadius: 5, overflow: 'hidden' }}
//       >
//         <View
//           style={{
//             paddingVertical: 8,
//             paddingHorizontal: 20,
//             backgroundColor: type === 'primary' ? COLORS.primary : COLORS.lightPrimary
//           }}
//         >
//           <AppText
//             style={{
//               fontSize: 14,
//               color: type === 'primary' ? COLORS.white : COLORS.primary
//             }}
//           >
//             {text}
//           </AppText>
//         </View>
//       </TouchableNativeFeedback>
//     </View>
//   );
// };
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View, Modal, FlatList,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, images, SIZES, GRADIENTS } from '../../../constants';
import { Avatar, Title } from 'react-native-paper';
import ModalLayout from './ModalLayout';
import { FAB, Card } from 'react-native-elements';
import ScreenHaderDashboard from '../../../components/ScreenHaderDashboard';
import AppInput from '../../../components/AppInput';
import { SelectList } from 'react-native-dropdown-select-list';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../../components/AppButton';
import { RadioButton } from 'react-native-paper';

// import auth from '@react-native-firebase/auth';

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types

const CustomCard = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
      <View style={{ marginLeft: 14 }}>
        <Text style={{ color: COLORS.dark, fontSize: 18, fontWeight: 'bold' }}>Albert Flores Followed you.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class ptent taciti sociosqu ad litora torquent per . Aliquam in elementum wf  dictum est are mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget est condimentum velit, sit amet feugiat lectus. Class ptent taciti eget  et stsociosqu ad litora torquent per conubia nostra, per inceptos ege et himenaeos. Praesent auctor purus luctus enim egestas, ac eget are scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac we honcus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum wf tellus.urabitur tempor quis eros tempus lacinia. Nam bibendum we pellentesque quam a convallis</Text>
      </View>
    </View>

  )
}
const Profile = ({ navigation }) => {
  return (
    <ImageBackground
      source={images.background}
      resizeMode="cover"
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        // justifyContent: 'center',
      }}>
      <SafeAreaView>
        <ScreenHaderDashboard navigation={navigation} title={'Report'} />
        <KeyboardAwareScrollView>
          <View style={{ margin: 20 }}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: '#95B0B1' }}>Today</Text>
            </View>
            <View style={{ marginTop: 0 }}>
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
            </View>
            <View style={{ marginBottom: 29, marginTop: 29 }}>
              <Text style={{ color: '#95B0B1' }}>20 September 2022</Text>
            </View>
            <View style={{ marginTop: 3 }}>
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>

    </ImageBackground >
  );
};

export default Profile;
const styles = StyleSheet.create({

  dropdownBox: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: COLORS.white,
    marginBottom: 0,
    borderWidth: 0,
  },
  title: {
    color: COLORS.dark,
    fontSize: 19
  },
  shadow: {
    shadowColor: '#000', // for iphone drop shadow (specifies the android equivalent, elevation: 1)
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  textBoxSign: {
    flexDirection: 'row',
    height: 45,
    marginHorizontal: 5,
    marginTop: 5,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray,
    elevation: 2,
    justifyContent: 'center', alignItems: 'center',
  },
  textAbove: { fontSize: 14, marginLeft: 12 },
  modalContainer: {
    margin: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,

  },
  modalView: {
    width: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  EventDetails: {

  },
  card: {
    backgroundColor: '#E9E8F3',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
  },
  OrganizedEvent: {
    margin: 10,
  },
  shadow: {
    shadowColor: '#000', // for iphone drop shadow (specifies the android equivalent, elevation: 1)
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  // =============================================================
  userInfoSection: {
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});
