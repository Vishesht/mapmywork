import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../../assets/assets'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

export default function Home() {
    const navigation = useNavigation();
    const [SearchTxt, setSearchTxt] = useState()
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.txt}>Home</Text>
                <Ionicons onPress={()=> navigation.navigate('Notifications')} style={{ marginLeft: hp(2), marginRight: hp(4) }} name={'md-notifications'} size={wp(4)} color={'white'} />
            </View>
            <View style={{ flexDirection: 'row', margin: hp(2) }}>
                <TextInput style={{ color: Colors.grey, letterSpacing: 1.5, fontWeight: "700", borderWidth: hp(0.1), borderColor: Colors.grey1, width: '100%' }}
                    placeholderTextColor={Colors.med_grey} placeholder="  Search Jobs" onChangeText={txt => setSearchTxt(txt)} />
                <Ionicons onPress={null} style={{ marginLeft: hp(-5), marginRight: hp(4), alignSelf: 'center' }} name={'search'} size={wp(5)} color={'orange'} />
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
        justifyContent: 'space-between',
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