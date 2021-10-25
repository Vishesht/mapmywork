import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../assets/assets';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateProjects(props) {
    const navigation = useNavigation();
    const [Field, setField] = useState()
    const [DateModel, setDateModel] = useState(false)
    const [date, setDate] = useState(new Date());

    return (
        <ScrollView style={styles.container}>
            <View style={styles.view}>
                <Ionicons onPress={navigation.goBack} style={{ marginLeft: hp(2), marginRight: hp(4) }} name={'arrow-back-outline'} size={wp(5)} color={'white'} />
                <Text style={styles.txt}>Project Details</Text>
            </View>
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Project Name*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Members*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Marks*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Description*" onChangeText={txt => setField(txt)} multiline={true} numberOfLines={4} />
            <TouchableOpacity onPress={() => setDateModel(!DateModel)}>
                <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                    <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Start Date*</Text>
                    <Ionicons style={{ marginRight: hp(2) }} name={'calendar'} size={wp(5)} color={Colors.headerColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDateModel(!DateModel)}>
                <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                    <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>End Date</Text>
                    <Ionicons style={{ marginRight: hp(2) }} name={'calendar'} size={wp(5)} color={Colors.headerColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} onPress={null}>
                <View style={{ marginHorizontal: wp(5), marginTop: hp(5), backgroundColor: Colors.headerColor, height: hp(6), justifyContent: 'center', borderRadius: hp(1) }}>
                    <Text style={{ alignSelf: 'center', color: Colors.white, fontSize: hp(1.8) }}>Save</Text>
                </View>
            </TouchableOpacity>
            {DateModel && (
                <DateTimePicker
                    // minimumDate={new Date(Date.now() + (10 * 60 * 1000))}
                    style={{ flex: 1 }}
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={false}
                    display="default"
                // onChange={onChange}
                />
            )}
        </ScrollView>
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
    textInput: {
        marginHorizontal: wp(5),
        color: Colors.grey,
        fontSize: hp(2),
        letterSpacing: 1.5,
        borderColor: Colors.grey1,
        borderWidth: hp(.1),
        marginTop: hp(3),
        borderRadius: hp(0.6)
    }
})