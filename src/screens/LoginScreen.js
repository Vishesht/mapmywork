import React, { useState } from 'react'
import { View, Text, Image, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../assets/assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LoginScreen(props) {
    const navigation = useNavigation();
    const [Username, setUsername] = useState()
    const [Password, setPassword] = useState()
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <Image style={{ width: hp(14), height: hp(14), borderRadius: hp(8), alignSelf: 'center', marginTop: hp(6) }} source={{ uri: props.route.params.item.logo }} />
            <TextInput style={{ marginHorizontal: wp(5), color: Colors.grey, fontSize: hp(2), letterSpacing: 1.5, borderColor: Colors.grey1, borderWidth: hp(.1), marginTop: hp(8), borderRadius: hp(0.6) }} placeholderTextColor={Colors.grey1} placeholder="Username *" onChangeText={txt => setUsername(txt)} />
            <TextInput style={{ marginHorizontal: wp(5), color: Colors.grey, fontSize: hp(2), letterSpacing: 1.5, borderColor: Colors.grey1, borderWidth: hp(.1), marginTop: hp(4), borderRadius: hp(0.6) }} placeholderTextColor={Colors.grey1} placeholder="Enter Password *" onChangeText={txt => setPassword(txt)} />
            <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')}><Text style={{ fontSize: hp(1.5), alignSelf: 'flex-end', marginRight: hp(5), marginVertical: hp(2) }}>Forget Password ?</Text></TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} onPress={() => navigation.navigate('HomeTab')}>
                <View style={{ marginHorizontal: wp(5), marginTop: hp(2), backgroundColor: Colors.headerColor, height: hp(6), justifyContent: 'center',borderRadius:hp(1) }}>
                    <Text style={{ alignSelf: 'center', color: Colors.white, fontSize: hp(1.8) }}>Sign In</Text>
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: hp(4) }}>
                <Text>Don't have an account ?</Text>
                <TouchableOpacity activeOpacity={.4} onPress={() => navigation.navigate('Register',{tenant:props.route.params.item._tenant})}><Text style={{ color: Colors.headerColor }}>   Sign Up</Text></TouchableOpacity>
            </View>
        </View>
    )
}
