import React, { useState } from 'react'
import { View, TextInput ,StyleSheet,Text} from 'react-native'
import { heightPercentageToDP as hp ,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { Colors } from '../../assets/assets'

export default function JobFair() {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.txt}>Job Fair</Text>
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