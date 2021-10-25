import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../assets/assets';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/core';

export default function PrivacyPolicy() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.view}>
                <Ionicons onPress={navigation.goBack} style={{ marginLeft: hp(2), marginRight: hp(4) }} name={'arrow-back-outline'} size={wp(5)} color={'white'} />
                <Text style={styles.txt}>Privacy Policy</Text>
            </View>
            
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
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: hp(2),
        marginLeft: hp(1.6)
    },
  
})