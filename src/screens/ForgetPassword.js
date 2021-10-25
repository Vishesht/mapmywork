import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity ,Image} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors, Images } from '../assets/assets'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function ForgetPassword() {
    const navigation = useNavigation();
    const [Email, setEmail] = useState()
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Ionicons onPress={navigation.goBack} style={{ marginLeft: hp(2), marginRight: hp(4) }} name={'arrow-back-outline'} size={wp(5)} color={'white'} />
                <Text style={styles.txt}>Forget Password</Text>
            </View>
            <Image style={{height:hp(60),width:'100%'}} source={Images.forgotPass} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Email *" onChangeText={txt => setEmail(txt)} />
            <TouchableOpacity activeOpacity={.5} onPress={null}>
                <View style={{ marginHorizontal: wp(5), marginTop: hp(5), backgroundColor: Colors.headerColor, height: hp(6), justifyContent: 'center',borderRadius:hp(1) }}>
                    <Text style={{ alignSelf: 'center', color: Colors.white, fontSize: hp(1.8) }}>Submit</Text>
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
    textInput: {
        marginHorizontal: wp(5),
        color: Colors.grey,
        fontSize: hp(2),
        letterSpacing: 1.5,
        borderColor: Colors.grey1,
        borderWidth: hp(.1),
        borderRadius: hp(0.6),marginTop:hp(2)
    }
})