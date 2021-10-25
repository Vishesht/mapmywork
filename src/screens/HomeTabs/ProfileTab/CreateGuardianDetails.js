import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Modal, FlatList, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../assets/assets';

export default function CreateGuardianDetails(props) {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [ModelTitle, setModelTitle] = useState()
    const [ModelData, setModelData] = useState()
    const [Field, setField] = useState()

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
                <Text style={styles.txt}>Guardian Details</Text>
            </View>
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="First Name*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Last Name*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Phone Number*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Email*" onChangeText={txt => setField(txt)} />

            <TouchableOpacity onPress={
                () => {
                    setModalVisible(!modalVisible)
                    setModelTitle('Relation')
                    setModelData([{ name: 'Father' }, { name: 'Mother' }, { name: 'Brother' }, { name: 'Sister' }, { name: 'Others' }])
                }
            }>
                <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                    <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Relation</Text>
                    <Ionicons style={{ marginRight: hp(2) }} name={'caret-down'} size={wp(5)} color={'grey'} />
                </View>
            </TouchableOpacity>
            <Text style={{marginTop:hp(3),fontSize:hp(2),color:Colors.grey,marginLeft:hp(3)}}>Location*</Text>
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="City*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Postal*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="State*" onChangeText={txt => setField(txt)} />
            <TextInput style={styles.textInput} placeholderTextColor={Colors.grey} placeholder="Country*" onChangeText={txt => setField(txt)} />
            <TouchableOpacity activeOpacity={.5} onPress={null}>
                <View style={{ marginHorizontal: wp(5), marginTop: hp(5), backgroundColor: Colors.headerColor, height: hp(6), justifyContent: 'center' ,borderRadius:hp(1),marginBottom:hp(3)}}>
                    <Text style={{ alignSelf: 'center', color: Colors.white, fontSize: hp(1.8) }}>Save</Text>
                </View>
            </TouchableOpacity>
            <ModalView title={ModelTitle} listData={ModelData} />
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