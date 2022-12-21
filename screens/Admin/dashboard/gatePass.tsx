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

const CustomCard = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = React.useState('first');
    const [status, setStatus] = useState('Male');
    return (
        <View>

            <TouchableOpacity onPress={() => {
                setVisible(true);
            }}>
                <View style={{
                    backgroundColor: '#F7F7FE', borderRadius: 10, marginBottom: 15,
                    padding: 5, shadowColor: 'black',
                    shadowOffset: {
                        width: 10,
                        height: 10,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 1,
                    elevation: 10,
                }}>
                    <View>
                        <Image style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 1,
                        }} source={{ uri: 'https://clashofclans.com/uploaded-images-blog/_1440xAUTO_crop_center-center_90/Clash-at-Home_thumbnail_builder_906x506.jpg' }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 15, color: 'gray', alignSelf: 'flex-end' }}>Posted 40 min ago</Text>
                            <Text style={{ fontSize: 23, color: 'black' }}>Here we Go!</Text>
                            <Text style={{ color: 'black' }}>We will remove extra Barracks and Dark Barracks buildings and
                                only keep one of each. The highest level building will be kept,
                                and in case all the highest level buildings are under construction
                                you will keep the one with the shortest upgrade time left.</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}
            >
                <ModalLayout
                    onClose={() => {
                        setVisible(!visible);
                    }}
                >
                    <View >
                        <View>
                            <Image style={{
                                width: '100%',
                                height: 200,
                                borderRadius: 1,
                            }} source={{ uri: 'https://clashofclans.com/uploaded-images-blog/_1440xAUTO_crop_center-center_90/Clash-at-Home_thumbnail_builder_906x506.jpg' }} />

                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 23, color: 'black' }}>Here we Go!</Text>
                                <Text style={{ color: 'black' }}>We will remove extra Barracks and Dark Barracks buildings and
                                    only keep one of each. The highest level building will be kept,
                                    and in case all the highest level buildings are under construction
                                    you will keep the one with the shortest upgrade time left....</Text>

                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                <LinearGradient
                                    colors={['#21D4FD', '#2152FF']}
                                    end={{ x: 0, y: 1 }}
                                    start={{ x: 1, y: 0 }}
                                    style={{ borderRadius: 30 }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            alignItems: "center",
                                            padding: 10,
                                            flexDirection: 'row'
                                        }}
                                        onPress={() => { navigation.push("proposalDetails"); }}
                                    >
                                        <MaterialIcons name="account-tree" size={24} color="black" />
                                        <Text style={{ color: 'black' }}>Details</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                                <LinearGradient
                                    colors={['#FF0080', '#7928CA']}
                                    end={{ x: 0, y: 1 }}
                                    start={{ x: 1, y: 0 }}
                                    style={{ borderRadius: 30, marginLeft: '10%' }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            alignItems: "center",
                                            padding: 10,
                                            flexDirection: "row",
                                        }}
                                        onPress={() => {
                                            alert('working');
                                        }}
                                    >
                                        <MaterialIcons name="edit" size={24} color="black" />
                                        <Text style={{ color: 'black' }}>Edit</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                                <LinearGradient
                                    colors={['#FBCF33', '#F53939']}
                                    end={{ x: 0, y: 1 }}
                                    start={{ x: 1, y: 0 }}
                                    style={{ borderRadius: 30, marginLeft: '17%' }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            alignItems: "center",
                                            padding: 10,
                                            flexDirection: "row",
                                        }}
                                        onPress={() => {
                                            alert('ok');
                                        }}
                                    >
                                        <MaterialIcons name="delete" size={24} color="black" />
                                        <Text style={{ color: 'black' }}>Delete</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </ModalLayout>
            </Modal>
        </View>
    );
};
const Profile = ({ navigation }) => {
    const [selected, setSelected] = useState('Appliances');
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = React.useState('No');
    const data = [
        { key: '1', value: 'Main Gate' },
        { key: '2', value: 'Civil Gate' },
        { key: '3', value: 'Aluminium Plant Gate' },

    ];
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
                    <View
                        style={{

                            margin: 20,

                        }}>
                        <View >
                            <Text style={styles.title}>Select Gate</Text>
                            <View>
                                <SelectList
                                    setSelected={(val) => setSelected(val)}
                                    data={data}
                                    inputStyles={{ color: 'gray' }}
                                    dropdownTextStyles={{ color: 'gray' }}
                                    boxStyles={styles.dropdownBox}
                                    save="value"
                                    search={false}
                                    searchPlaceholder={'Selected'}
                                    arrowicon={<View >
                                        <Feather name="chevron-down" size={24} color="black" />
                                    </View>
                                    }
                                />
                            </View>

                            <View style={{ marginTop: '5%' }}>
                                <Text style={styles.title}>Worker Id</Text>
                                <AppInput placeholder="Worker Id" />
                            </View>

                            {/* <AppInput icon={null} heightDivider={2.5} defaultValue={'Please Enter details here'} /> */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                                <View>
                                    <Text style={styles.title}>Taking Material</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: COLORS.dark, fontSize: 14 }}>Yes</Text>
                                        <RadioButton
                                            value="Yes"
                                            color='#3D2645'
                                            status={checked === 'Yes' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('Yes')}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: COLORS.dark, fontSize: 14 }}>No</Text>
                                        <RadioButton
                                            value="No"
                                            color='#3D2645'

                                            status={checked === 'No' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('No')}
                                        />

                                    </View>
                                </View>
                            </View>
                            {checked == 'Yes' ? (<View style={{ marginTop: '5%' }}>
                                <Text style={styles.title}>Material Details</Text>
                                <AppInput placeholder="Material Details" heightDivider={3.5} />
                            </View>) : null}

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '2%', paddingBottom: 30 }}>
                            {/* <View style={{alignSelf:'stretch'}}> */}
                            <AppButton onPress={() => { navigation.navigate('CheckOut') }}
                                text="Submit"
                                style={{
                                    width: '100%',
                                    // marginTop: 30
                                }}
                                textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                            />
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
