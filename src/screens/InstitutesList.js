import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../assets/assets';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

export default function InstitutesList() {
    const navigation = useNavigation();
    const [InsData, setInsData] = useState()
    var Data = [{ name: 'Gulzar Group of institute', number: '+919914666777', address: 'Grand trunk road liba, Khanna,India', img: 'https://pbs.twimg.com/profile_images/603106581476085761/eqM5d7W-_400x400.png' },
    { name: 'I.K Gujral Punjab Technical University', number: '0182 228 2533', address: 'Jalandhar-Kapurthala, Highway, Vpo, Ibban, Punjab', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvPQU3635y2OvpJF1QvizhO-V7J1bvhJxEg&usqp=CAU' }]
    useEffect(() => {
        getInstituteList()
    }, [])
    const getInstituteList = async () => {
        await axios.get(`https://api.mapmyworkers.com/api/website/get-all-tenants?pagination=false&page=1`)
            .then((response) => {
                console.log("hitiing getInstituteList", response.data.data)
                setInsData(response.data.data)
            }, (error) => {
                console.log("Errorr in getInstituteList---", error.response);
            });
    }
    const ItemView = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('LoginScreen', { item: item })}>
                <View style={styles.itemView}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: hp(2), marginHorizontal: hp(5) }}>
                        <View>
                            <Image style={{ width: hp(10), height: hp(10), borderRadius: hp(8) }} source={{ uri: item.logo === "" ? "https://pbs.twimg.com/profile_images/603106581476085761/eqM5d7W-_400x400.png" : item.logo }} />
                        </View>
                        <View style={{ width: hp(34) }}>
                            <Text style={[styles.txt1, { fontWeight: 'bold', width: hp(26) }]}>{item.tenantName.firstName}</Text>
                            <Text style={styles.txt1}>{item.tenantContact.dialCode + " " + item.tenantContact.number}</Text>
                            <Text style={styles.txt1}>{item.tenantAddress.city + ", " + item.tenantAddress.country}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.txt}>Select Your Organisation</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={InsData}
                renderItem={ItemView}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:Colors.white
    },
    view: {
        backgroundColor: Colors.headerColor,
        height: hp(8),
        justifyContent: 'center'
    },
    txt: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: hp(2),
        marginLeft: hp(1.6)
    },
    txt1: {
        color: Colors.black,
        fontSize: hp(1.6),
        marginBottom: hp(1)
    },
    itemView: {
        margin: wp(2),
        marginHorizontal: wp(5),
        height: hp(15),
        backgroundColor: Colors.white,
        borderRadius: hp(2),
        elevation: hp(1)
    }
});