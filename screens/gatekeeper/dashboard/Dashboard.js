/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View, FlatList,Modal
} from 'react-native';
import { COLORS, images, SIZES } from '../../../constants';
import ScreenHeader from '../../Components/ScreenHader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import ModalLayout from '../../../components/ModalLayout';

// import auth from '@react-native-firebase/auth';

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const Profile = ({ navigation }) => {
    const Data = [
        { title: 'Worker Name', description: 'Axis bath house house is the best bath near your home.Axis bath house house is the best bath near your home.Axis bath house house is the best bath near your home.Axis bath house house is the best bath near your home.Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Post' },
        { title: 'Worker Name', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Post' },
        { title: 'Worker Name', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Post' },
        { title: 'Worker Name', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Post' },
        { title: 'Worker Name', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Today' },
        { title: 'Worker Name', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Today' },
        { title: 'Worker Name', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Upcoming' },
        { title: 'Worker Name', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Upcoming' },
        { title: 'Worker Name', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Upcoming' },
        { title: 'Worker Name', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Post' },
    ];
    const RenderCard = ({ item, index }) => {
        console.log(index);
        const [visible, setVisible] = useState(false);
        return (
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{ color: COLORS.dark, fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ padding: 2, paddingLeft: 5, paddingRight: 5 }}>
                            <Text style={{ color: '#7279B3', fontSize: 13 }}>{item.description}</Text>
                            <View style={{ marginTop: '5%' }}>
                                <Text
                                    style={{
                                        color: COLORS.darkgray,
                                        fontSize: 10,

                                        marginTop: 10,
                                    }}>
                                    <AntDesign name="calendar" size={9} color="gray" />

                                    {item.date}
                                </Text>

                                <Text
                                    style={{
                                        color: COLORS.darkgray,
                                        fontSize: 10,

                                    }}>
                                    <AntDesign name="clockcircleo" size={10} color="black" />
                                    {item.time}
                                </Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '15%' }}>

                                    <Text
                                        style={{
                                            color: COLORS.darkgray,
                                            fontSize: 15,
                                        }}>
                                        Worker Name
                                    </Text>
                                    <Text
                                        style={{
                                            color: COLORS.darkgray,
                                            fontSize: 15,
                                        }}>
                                        7589656
                                    </Text>

                                </View>
                            </View>
                        </View>


                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => { alert('Accept') }}>
                            <View style={{ width: 100, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', borderRadius: 10, height: 30 }}>
                                <Text style={{ color: 'white', fontSize: 15 }}>Accept</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setVisible(true);}}>
                            <View style={{ width: 100, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 10, height: 30 }}>
                                <Text style={{ color: 'white', fontSize: 15 }}>Reject</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Modal
                        animationType={'fade'}
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
                            <View style={{ justifyContent: 'center', alignItems: 'center',  }}>
                            
                                <View>
                                  
                                </View>
                            </View>
                        </ModalLayout>
                    </Modal>
                </View>
            </View>
        );
    }
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
                <View style={{ margin: 15, marginTop: 10 }}>
                    <ScreenHeader navigation={navigation} title={'Report'} />
                    <FlatList
                        data={Data}
                        // keyExtractor={({ item, index }) => index}
                        renderItem={({ item, index }) => {
                            console.log("ok");
                            return (
                                <View key={index}>
                                    <RenderCard item={item} index={index} />
                                </View>
                            )
                        }}
                    />



                </View>
            </SafeAreaView>
        </ImageBackground >
    );
};

export default Profile;
const styles = StyleSheet.create({
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
        marginBottom: 0,
        marginTop: 0,

    },
    modalView: {
        width: '100%',
        margin: 20,
        marginBottom: 0,
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
