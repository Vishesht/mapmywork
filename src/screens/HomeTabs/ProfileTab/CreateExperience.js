import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Modal, FlatList, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../assets/assets';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateExperience(props) {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [ModelTitle, setModelTitle] = useState()
    const [ModelData, setModelData] = useState()
    const [Field, setField] = useState()
    const [WorkDays, setWorkDays] = useState()
    const [DateModel, setDateModel] = useState(false)
    const [date, setDate] = useState(new Date());

    const ModalView = (props) => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ backgroundColor: Colors.white, width: hp(100), position: 'absolute', bottom: 0, height: hp(40), }}>
                    <View style={{ margin: hp(2), flexDirection: 'row', }}>
                        <Text style={{ fontSize: hp(2), fontWeight: 'bold' }}>{props.title}</Text>
                        <Ionicons onPress={() => setModalVisible(!modalVisible)} style={{ marginLeft: hp(41) }} name={'close'} size={wp(5)} color={'grey'} />
                    </View>
                    <View style={{ height: 0.8, width: "100%", backgroundColor: 'black', marginBottom: hp(1) }}></View>
                    <FlatList
                        data={props.listData}
                        renderItem={ItemView}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={{ height: 0.6, width: "100%", backgroundColor: 'black' }}></View>
                            )
                        }
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </Modal>
        )
    }
    const ItemView = ({ item }) => {
        return (
            <TouchableOpacity onPress={
                // () => selectByID(item)
                () => setModalVisible(!modalVisible)
            }>
                <View style={{ margin: hp(1) }}>
                    <Text style={{ fontSize: hp(2), color: Colors.grey, marginTop: hp(0.5) }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.view}>
                <Ionicons onPress={navigation.goBack} style={{ marginLeft: hp(2), marginRight: hp(4) }} name={'arrow-back-outline'} size={wp(5)} color={'white'} />
                <Text style={styles.txt}>Create Experience</Text>
            </View>
            <TouchableOpacity onPress={
                () => {
                    setModalVisible(!modalVisible)
                    setModelTitle('Relation')
                    setModelData([{ name: 'Capgemini' }, { name: 'Santoshi Nirwaan Sewa' }, { name: 'InnovationM' }, { name: 'Techniexe Infolab LLP' }, { name: 'Penthara Technologies' }, { name: 'Vedantu' }, { name: 'PlanetSpark' }])
                }
            }>
                <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                    <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Company Name</Text>
                    <Ionicons style={{ marginRight: hp(2) }} name={'caret-down'} size={wp(5)} color={'grey'} />
                </View>
            </TouchableOpacity>
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Designation*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Job Profile*" onChangeText={txt => setField(txt)} />
            <TouchableOpacity onPress={
                () => {
                    setModalVisible(!modalVisible)
                    setModelTitle('Relation')
                    setModelData([{ name: 'Full Time' }, { name: 'Part Time' }, { name: 'Internship' }, { name: 'Self Employes' }, { name: 'Freelance' }, { name: 'Trainee' }])
                }
            }>
                <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                    <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Employee Type</Text>
                    <Ionicons style={{ marginRight: hp(2) }} name={'caret-down'} size={wp(5)} color={'grey'} />
                </View>
            </TouchableOpacity>
            <Text style={{ marginTop: hp(2), marginLeft: hp(3), fontSize: hp(1.6) }}>Currently Working</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: hp(8), marginTop: hp(3) }}>
                <TouchableOpacity onPress={() => setWorkDays(0)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name={WorkDays ? 'radio-button-off' : 'radio-button-on'} size={wp(5)} color={Colors.headerColor} />
                        <Text>Yes</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setWorkDays(1)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name={WorkDays ? 'radio-button-on' : 'radio-button-off'} size={wp(5)} color={Colors.headerColor} />
                        <Text>No</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setDateModel(!DateModel)}>
                <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                    <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Start Date*</Text>
                    <Ionicons style={{ marginRight: hp(2) }} name={'calendar'} size={wp(5)} color={Colors.headerColor} />
                </View>
            </TouchableOpacity>
            {WorkDays ?
                <TouchableOpacity onPress={() => setDateModel(!DateModel)}>
                    <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>End Date*</Text>
                        <Ionicons style={{ marginRight: hp(2) }} name={'calendar'} size={wp(5)} color={Colors.headerColor} />
                    </View>
                </TouchableOpacity>
                : null
            }
            <Text style={{ marginTop: hp(3), fontSize: hp(2), color: Colors.grey, marginLeft: hp(3) }}>Location*</Text>
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Address Line1*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Address Line2*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="City*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Postal*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="State*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Country*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Description" onChangeText={txt => setField(txt)} multiline={true} numberOfLines={4} />
            <TouchableOpacity activeOpacity={.5} onPress={null}>
                <View style={{ marginHorizontal: wp(5), marginTop: hp(5), backgroundColor: Colors.headerColor, height: hp(6), justifyContent: 'center', borderRadius: hp(1), marginBottom: hp(3) }}>
                    <Text style={{ alignSelf: 'center', color: Colors.white, fontSize: hp(1.8) }}>Save</Text>
                </View>
            </TouchableOpacity>
            <ModalView title={ModelTitle} listData={ModelData} />
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
        backgroundColor: Colors.white
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