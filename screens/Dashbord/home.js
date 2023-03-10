/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';

import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity

} from 'react-native';
import { icons, images, SIZES } from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FAB, Card } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Screen = ({ navigation }) => {
    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <View style={{ flex: 0.8, justifyContent: 'center',alignItems:'center' }}>
                <Text style={{ fontSize: 30, color: 'black', fontWeight: "bold" }}>Please Select User Type?</Text>
            </View>
            <View style={{ alignItems: 'center'}}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '50%' }}>
                        <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.push("worker"); }}>
                                <View style={{ alignItems: 'center', padding: 20,paddingBottom:0 }}>
                                    <Card.Image
                                        style={{ width: 80, height: 70 }}
                                        resizeMode="cover"
                                        source={images.introPic1}
                                    />
                                </View>
                                <Card.Title>Worker</Card.Title>
                            </TouchableOpacity>
                        </Card>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.push("admin"); }}>
                                <View style={{ alignItems: 'center', padding: 20,paddingBottom:0 }}>
                                    <Card.Image
                                        style={{ width: 70, height: 70 }}
                                        resizeMode="cover"
                                        source={images.introPic2}
                                    />
                                </View>
                                <Card.Title>Admin</Card.Title>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </View>

            </View>
            <View style={{  alignItems: 'flex-start'}}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '50%' }}>
                        <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.push('GateKeeper'); }}>
                                <View style={{ alignItems: 'center', padding: 20,paddingBottom:0 }}>
                                    <Card.Image
                                        style={{ width: 80, height: 70 }}
                                        resizeMode="cover"
                                        source={icons.gateKeeper}
                                    />
                                </View>
                                <Card.Title>Gate Keeper</Card.Title>
                            </TouchableOpacity>
                        </Card>
                    </View>
                    </View>

            </View>
        </ImageBackground >
    );
};

export default Screen;