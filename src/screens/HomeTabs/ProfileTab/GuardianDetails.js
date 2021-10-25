import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../../../assets/assets';
import { useNavigation } from '@react-navigation/core';

export default function GuardianDetails() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.view}>
                <Ionicons onPress={navigation.goBack} style={{ marginLeft: hp(2), marginRight: hp(4) }} name={'arrow-back-outline'} size={wp(5)} color={'white'} />
                <Text style={styles.txt}>Guardian Details</Text>
            </View>
            <TouchableOpacity style={{position: 'absolute', bottom: hp(4), right: hp(4)}} onPress={()=>navigation.navigate('CreateGuardianDetails') }>
                <View style={styles.ViewBtn}>
                    <Ionicons style={{ alignSelf: 'center' }} name={'add'} size={wp(5)} color={'white'} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.grey
    },
    view: {
        backgroundColor: Colors.headerColor,
        height: hp(6),
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: hp(2),
        marginLeft: hp(1.6)
    },
    ViewBtn: {
        height: hp(6),
        width: hp(6),
        backgroundColor: Colors.headerColor,
        borderRadius: hp(10),
        justifyContent: 'center',
        elevation: hp(1),
    }
})