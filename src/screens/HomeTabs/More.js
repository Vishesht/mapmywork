import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Images } from '../../assets/assets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

export default function More() {
    const navigation = useNavigation();
    const [listItems1, setListItems1] = useState([
        { id: '1', value: 'Notifications', },
        { id: '2', value: 'Change Password', },
        { id: '3', value: 'Job Fair', },
        { id: '4', value: 'Feed', },
        { id: '5', value: 'Favourite', },
        { id: '6', value: 'Resume', },
        { id: '7', value: 'Terms & Conditions' },
        { id: '8', value: 'Privacy & Policy' },
    ]);
    const selectByID = (id) => {
        switch (id) {
            case 1:
                navigation.navigate('Notifications')
                break;
            case 2:
                navigation.navigate('ChangePassword')
                break;
            case 3:
                navigation.navigate('JobFair')
                break;
            case 4:
                navigation.navigate('Feed')
                break;
            case 5:
                navigation.navigate('FavJobs')
                break;
            case 6:
                navigation.navigate('Resume')
                break;
            case 7:
                navigation.navigate('TermsConditions')
                break;
            case 8:
                navigation.navigate('PrivacyPolicy')
                break;
            default:
                break;
        }
    }
    const ItemView = ({ item }) => {
        switch (parseInt(item.id)) {
            case 1:
                var iconName = 'notifications'
                break;
            case 2:
                var iconName = 'lock-closed'
                break;
            case 3:
                var iconName = 'business'
                break;
            case 4:
                var iconName = 'newspaper'
                break;
            case 5:
                var iconName = 'heart'
                break;
            case 6:
                var iconName = 'ios-attach'
                break;
            case 7:
                var iconName = 'copy-sharp'
                break;
            case 8:
                var iconName = 'lock-open-outline'
                break;
            default:
                break;
        }
        return (
            <TouchableOpacity onPress={
                () => selectByID(parseInt(item.id))
            }>
                <View style={{ margin: hp(1) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(4), alignItems: 'center' }} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons style={{ marginRight: hp(2), marginTop: hp(.8) }} name={iconName} size={wp(4)} color={'orange'} />
                            <Text style={{ fontSize: hp(2), color: Colors.grey, marginTop: 5 }}>{item.value}</Text>
                        </View>
                        <Image style={{ height: hp(1.4), width: hp(1), tintColor: 'grey' }} source={Images.right_icon} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <View style={styles.view}>
                <Text style={styles.txt}>More</Text>
                <Ionicons onPress={null} style={{ marginLeft: hp(2), marginRight: hp(4) }} name={'md-exit'} size={wp(4)} color={'white'} />
            </View>
            <FlatList
                data={listItems1}
                renderItem={ItemView}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{ height: 0.6, width: "100%", backgroundColor: 'black' }}></View>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    view: {
        backgroundColor: Colors.headerColor,
        height: hp(6),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(2)
    },
    txt: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: hp(2),
        marginLeft: hp(1.6)
    },
})