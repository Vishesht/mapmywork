import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet ,TouchableOpacity} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../../assets/assets'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.txt}>Profile</Text>
                <Ionicons onPress={null} style={{ marginLeft: hp(2), marginRight: hp(4) }} name={'md-pencil-sharp'} size={wp(4)} color={'white'} />
            </View>
            <View style={{ marginBottom: hp(4), alignSelf: 'center', marginTop: hp(1) }}>
                <Image style={{ alignSelf: 'center', height: hp(13), width: hp(13), margin: hp(2), borderRadius: hp(10) }} source={{ uri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }} />
                <Text style={{ alignSelf: 'center', fontSize: hp(2), color: Colors.headerColor, fontWeight: '600', }}>Vishesht Gupta</Text>
                <Text style={{ alignSelf: 'center', fontSize: hp(1.6), color: Colors.grey, marginTop: 5, }}>+91 1717562525</Text>
                <Text style={{ alignSelf: 'center', fontSize: hp(1.6), color: Colors.grey, marginTop: 5, }}>gvishesht@gmail.com</Text>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: hp(6), marginBottom: hp(2) }}>
                <View style={{ marginRight: hp(2.8) }}>
                    <Text style={[styles.txt1, { color: Colors.headerColor }]}>Gender</Text>
                    <Text style={[styles.txt1, { color: Colors.headerColor }]}>Date of Birth</Text>
                    <Text style={[styles.txt1, { color: Colors.headerColor }]}>Martial Status</Text>
                    <Text style={[styles.txt1, { color: Colors.headerColor }]}>Language Knowns</Text>
                </View>
                <View>
                    <Text style={styles.txt1}>Male</Text>
                    <Text style={styles.txt1}>06/07/1978</Text>
                    <Text style={styles.txt1}>Single</Text>
                    <Text style={styles.txt1}>English,Hindi</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('EducationDetails')}>
                <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Education Details</Text>
                <Ionicons style={{ marginRight: hp(2) }} name={'caret-forward'} size={wp(5)} color={'grey'} />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('GuardianDetails')}>
            <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Guardian Details</Text>
                <Ionicons style={{ marginRight: hp(2) }} name={'caret-forward'} size={wp(5)} color={'grey'} />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Experience')}>
            <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Experience Details</Text>
                <Ionicons style={{ marginRight: hp(2) }} name={'caret-forward'} size={wp(5)} color={'grey'} />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Projects')}>
            <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Project Details</Text>
                <Ionicons style={{ marginRight: hp(2) }} name={'caret-forward'} size={wp(5)} color={'grey'} />
            </View>
            </TouchableOpacity>
        </ScrollView>
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
        alignItems: 'center'
    },
    txt: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: hp(2),
        marginLeft: hp(1.6)
    },
    txt1: {
        color: Colors.grey,
        fontSize: hp(2),
    },
    textInput: {
        marginHorizontal: wp(5),
        color: Colors.grey1,
        fontSize: hp(2),
        letterSpacing: 1.5,
        borderColor: Colors.grey1,
        borderWidth: hp(.1),
        marginTop: hp(2),
        borderRadius: hp(0.6)
    }
})