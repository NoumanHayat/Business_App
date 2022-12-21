/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, FONTS, icons } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {AppCardButton} from '../../components/AppCardButton';

const Screen = ({ navigation }) => {
    const [status, setStatus] = useState('Post');

    const tablist = [
        { status: 'Post' },
        { status: 'Today' },
        { status: 'Upcoming' },
    ];
    const Data = [
        { image: 'https://assets-news.housing.com/news/wp-content/uploads/2021/07/20183815/Bathtubs-and-modern-bath-spaces-that-are-redefining-luxury-shutterstock_421151362.jpg', title: 'Luxe Bath House', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Post' },
        { image: 'https://i.pinimg.com/564x/2f/8b/ae/2f8baefbb97b1dabdff1a518f9494b52.jpg', title: 'Luxe Bath House', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Post' },
        { image: 'https://bellabathrooms.co.za/media/Freestanding.png', title: 'Luxe Bath House', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Post' },
        { image: 'https://bellabathrooms.co.za/media/Victorian_edit.png', title: 'Luxe Bath House', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Post' },
        { image: 'https://bellabathrooms.co.za/media/DuravitBaths.png', title: 'Luxe Bath House', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Today' },
        { image: 'https://bellabathrooms.co.za/media/DecorTiles.png', title: 'Luxe Bath House', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Today' },
        { image: 'https://bellabathrooms.co.za/media/Freestanding.png', title: 'Luxe Bath House', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Upcoming' },
        { image: 'https://bellabathrooms.co.za/media/Built-inBaths.png', title: 'Luxe Bath House', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Upcoming' },
        { image: 'https://bellabathrooms.co.za/media/SpaBaths.png', title: 'Luxe Bath House', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Upcoming' },
        { image: 'https://bellabathrooms.co.za/media/Freestanding.png', title: 'Luxe Bath House', description: 'Axis bath house house is the best bath near your home.', location: 'California Stereet 8 AE', date: '01st, October, 2022', time: '12:00 PM', status: 'Post' },


    ];
    const [dataList, setDataList] = useState([...Data.filter(e => e.status === 'Post')]);

    const setStatusFilter = (status) => {
        setStatus(status);
        setDataList([...Data.filter(e => e.status === status)]);

    }

    const RenderCard = ({ item, index }) => {
        console.log(index);
        return (
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ flexDirection: 'row', width: "100%" }} >
                        <View>
                            <Image source={{ uri: item.image }} style={{ width: 146, height: 146, borderRadius: 5 }} />
                        </View>
                        <View style={{ width: 210 }}>
                            <Text style={{ margin: 5, color: COLORS.dark, fontSize: 16, fontFamily: FONTS.Bold }}>{item.title}</Text>
                            <View style={{flexDirection:'row'}}>
                            <View style={{ padding: 2, paddingLeft: 5, paddingRight: 5, width: 130 }}>
                                <Text style={{ color: '#7279B3', fontSize: 10 }}>{item.description}</Text>
                                <View style={{ marginTop: '5%' }}>
                                    <Text
                                        style={{
                                            color: '#7279B3',
                                            fontSize: 10,
                                            fontFamily: FONTS.Normal
                                        }}>
                                        <Ionicons name="location-outline" size={9} color="gray" />
                                        {item.location}
                                    </Text>

                                    {item.status == 'Post' ? (
                                        <><Text
                                            style={{
                                                color: COLORS.darkgray,
                                                fontSize: 10,
                                                fontFamily: FONTS.Normal,
                                                marginTop: 10,
                                                textDecorationLine: 'line-through'
                                            }}>
                                            <AntDesign name="calendar" size={9} color="gray" />

                                            {item.date}
                                        </Text><View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 6 }}>

                                                <Text
                                                    style={{
                                                        color: COLORS.darkgray,
                                                        fontSize: 10,
                                                        textDecorationLine: 'line-through'
                                                    }}>
                                                    <AntDesign name="clockcircleo" size={10} color="black" />
                                                    {item.time}
                                                </Text>
                                                <View style={{ backgroundColor: 'red', paddingLeft: 11, paddingRight: 11, paddingTop: 6, paddingBottom: 5, borderRadius: 3, marginLeft: 10 }}>
                                                    <Text style={{ color: 'black', fontSize: 6 }}>Completed</Text>
                                                </View>
                                            </View></>) : null}


                                    {item.status == 'Today' ? (
                                        <><Text
                                            style={{
                                                color: COLORS.darkgray,
                                                fontSize: 10,
                                                fontFamily: FONTS.Normal,
                                                marginTop: 10,

                                            }}>
                                            <AntDesign name="calendar" size={9} color="gray" />

                                            {item.date}
                                        </Text><View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 6 }}>

                                                <Text
                                                    style={{
                                                        color: COLORS.darkgray,
                                                        fontSize: 10,

                                                    }}>
                                                    <AntDesign name="clockcircleo" size={10} color="black" />
                                                    {item.time}
                                                </Text>
                                                <View style={{ backgroundColor: '#13FF1D', paddingLeft: 11, paddingRight: 11, paddingTop: 6, paddingBottom: 5, borderRadius: 3, marginLeft: 10 }}>
                                                    <Text style={{ color: 'black', fontSize: 6 }}>Today</Text>
                                                </View>
                                            </View></>
                                        //  <><Text
                                        //     style={{
                                        //         color: COLORS.darkgray,
                                        //         fontSize: 10,
                                        //         fontFamily: FONTS.Normal,
                                        //         marginTop: 10,
                                        //     }}>
                                        //     <AntDesign name="calendar" size={9} color="gray" />

                                        //     {item.date}
                                        // </Text><View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 3 }}>
                                        //         <Text
                                        //             style={{
                                        //                 color: COLORS.darkgray,
                                        //                 fontSize: 14,
                                        //             }}>
                                        //             <AntDesign name="clockcircleo" size={14} color="black" />
                                        //             {item.time}
                                        //         </Text>
                                        //         <View style={{ backgroundColor: 'green', padding: 3, borderRadius: 10 }}>
                                        //             <Text style={{ color: COLORS.white }}>Today</Text>
                                        //         </View>
                                        //         <Text
                                        //             style={{
                                        //                 color: COLORS.darkgray,
                                        //                 fontSize: 14,
                                        //             }}>
                                        //             <AntDesign name="rightcircleo" size={24} color="black" />
                                        //         </Text>
                                        //     </View></>
                                    ) : null}

                                    {item.status == 'Upcoming' ? (
                                       <><Text
                                       style={{
                                           color: COLORS.darkgray,
                                           fontSize: 10,
                                           fontFamily: FONTS.Normal,
                                           marginTop: 10,
                                           textDecorationLine: 'line-through'
                                       }}>
                                       <AntDesign name="calendar" size={9} color="gray" />

                                       {item.date}
                                   </Text><View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 6 }}>

                                           <Text
                                               style={{
                                                   color: COLORS.darkgray,
                                                   fontSize: 10,
                                                   textDecorationLine: 'line-through'
                                               }}>
                                               <AntDesign name="clockcircleo" size={10} color="black" />
                                               {item.time}
                                           </Text>
                                           <View style={{ backgroundColor: '#FFC107', paddingLeft: 11, paddingRight: 11, paddingTop: 6, paddingBottom: 5, borderRadius: 3, marginLeft: 10 }}>
                                               <Text style={{ color: 'black', fontSize: 6 }}>Tomorrow</Text>
                                           </View>
                                       </View></>) : null}
                                </View>
                            </View>
                            {item.status != 'Today' ? (<View style={{ width: 40,justifyContent:'flex-end',alignItems:'flex-end',padding:5}}>
                                <Image source={icons.Next} style={{ width: 15, height: 15 }} />
                            </View>): null}
                            
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard navigation={navigation} title={"Status"} />
            <SafeAreaView style={styles.container}>
                <View style={styles.listTab}>
                    {
                        tablist.map((tab) => {
                            return (
                                <TouchableOpacity key={tab.status} style={[styles.btnTab, tab.status === status && styles.tnTabActive]}
                                    onPress={() => { setStatusFilter(tab.status); }}>
                                    <Text style={[styles.textTab, tab.status === status && styles.tnTabTextActive]}>{tab.status}</Text>
                                </TouchableOpacity>)
                        })
                    }
                </View>
                <FlatList
                    data={dataList}
                    // keyExtractor={({ item, index }) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index}>
                                <RenderCard item={item} index={index} />
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    // =============================================================
    modalView: {
        width: "100%",
        // margin: 5,
        backgroundColor: "white",
        borderRadius: 4,
        padding: 15,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    container: {
        flex: 1,
        // paddingHorizontal: 10,
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
        // marginHorizontal:30,
    },
    listTab: {
        flexDirection: 'row',
        marginBottom: 20,
        alignSelf: 'center',
    },
    btnTab: {
        width: 115,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#E9EBEB',
        padding: 10,
        justifyContent: 'center',
        marginLeft: 5,
        backgroundColor: 'rgba(61, 38, 69, 0.2)'

    },

    textTab: {
        fontSize: 14,
        color: 'black',
    },
    tnTabActive: {
        backgroundColor: COLORS.dark
    },
    tnTabTextActive: {
        color: COLORS.white
    }
});
export default Screen;
