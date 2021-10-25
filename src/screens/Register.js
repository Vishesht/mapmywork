import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Modal, FlatList, TouchableOpacity } from 'react-native'
import { Colors, Images } from '../assets/assets';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { CountryCode } from '../common/countryCode';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios'

export default function Register(props) {
    const navigation = useNavigation();
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [number, setNumber] = useState()
    const [Code, setCode] = useState()
    const [Gender, setGender] = useState()
    const [About, setAbout] = useState()
    const [MartialStatus, setMartialStatus] = useState()
    const [Role, setRole] = useState()
    const [modalVisible, setModalVisible] = useState(false);
    const [ModelTitle, setModelTitle] = useState()
    const [ModelData, setModelData] = useState()
    const [DateModel, setDateModel] = useState(false)
    const [date, setDate] = useState(new Date());
    const [Address, setAddress] = useState()
    const [Address2, setAddress2] = useState()
    const [ComAddress, setComAddress] = useState()
    const [ComAddress2, setComAddress2] = useState()
    const [WorkDays, setWorkDays] = useState()
    const [CompanyName, setCompanyName] = useState()
    const [EmpNumber, setEmpNumber] = useState()
    const [ImageDp, setImageDp] = useState(Images.person)
    const [WebsiteUrl, setWebsiteUrl] = useState()
    const [ComCity, setComCity] = useState()
    const [City, setCity] = useState()
    const [ComCountry, setComCountry] = useState()
    const [Country, setCountry] = useState()
    const [ComState, setComState] = useState()
    const [PinCode, setPinCode] = useState()
    const [ConPinCode, setConPinCode] = useState()
    const [ComNumber, setComNumber] = useState()
    const [ConCode, setConCode] = useState()
    const [State, setState] = useState()
    const martialStatusData = [{ name: 'MARRIED' }, { name: 'SEPERATED' }, { name: 'DIVORCED' }, { name: 'SINGLE' }, { name: 'WIDOWED' }]
    const genderModalData = [{ name: 'MALE' }, { name: 'FEMALE' }, { name: 'OTHERS' }]
    const LanguageModalData = [{ name: 'English' }, { name: 'Hindi' }, { name: 'Punjabi' }, { name: 'Kannada' }, { name: 'Tamil' }]
    // console.log(firstname + " " + lastname + " " + " " + Gender + " " + Email + " " + Password + " " + Number + " " + Gender + " " + MartialStatus + " " + Code+" "+State+" "+ConCode+" "+Role)
    const Register = async () => {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'tenant': props.route.params.tenant
            }
        };
        await axios.post(`https://api.mapmyworkers.v2support.dev/api/auth/signup`,
            {
                "role": Role ? "PROVIDER" : 'APPLICANT',
                "name": {
                    "firstName": firstname,
                    "lastName": lastname
                },
                "password": Password,
                "contact": {
                    "email": Email,
                    "phone": {
                        "dialCode": Code,
                        "number": number,
                    },
                    "address": {
                        "pinCode": PinCode,
                        "state": State,
                        "country":Country,
                        "city": City,
                        "line2": Address2,
                        "line1": Address
                    }
                },
                "martialStatus": MartialStatus,
                "languagesKnown": [
                    "hindi",
                    "english"
                ],
                "DOB": {
                    "date": 10,
                    "month": 6,
                    "year": 1979
                },
                "gender": Gender,
                "picture": "https://www.unigreet.com/wp-content/uploads/2020/12/smile-please-dp-988x1024.jpg",
                "companyName": CompanyName,
                "companyAddress": {
                    "pinCode": ConPinCode,
                    "state": ComState,
                    "country": ComCountry,
                    "city": ComCity,
                    "line2": ComAddress2,
                    "line1": ComAddress
                },
                "noOfEmployees": EmpNumber,
                "companyContact": {
                    "dialCode": ConCode,
                    "number": ComNumber,
                },
                "establishedIn": "2021-10-06T07:28:49.534Z",
                "websiteUrl": WebsiteUrl,
                "workingDays": WorkDays ? "Mon-Sat (6 Days Working)" : "Mon-Fri (5 Days Working)",
                "bioInformation": {
                    "about": About,
                    "others": [
                        {
                            "title": "string",
                            "value": "string"
                        }
                    ]
                },
                "fcmToken": "string",
                "deviceId": "string",
                "sessionType": "ANDROID"
            },
            options)
            .then((response) => {
                alert('User Created')
                console.log("created user...", response)
            }
                , (error) => {
                    console.log("Errorr in update---", error.response);
                });
    }

    function selectImage() {
        ImagePicker.openPicker({
            width: wp('75'),
            height: hp('50'),
            cropping: true,
            compressImageQuality: 0.6
        }).then(image => {
            console.log("image---", image.mime);
            setImageDp({ uri: image.path })
            //   UploadAws(image.mime, image.path)
        }).catch(e => {
            console.log("Please try again!", e)
        })
    }
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
                () => {
                    if (ModelTitle === 'Select Gender') {
                        setGender(item.name)
                    } else if (ModelTitle === 'Martial Status') {
                        setMartialStatus(item.name)
                    } else if (ModelTitle === 'Country Code') {
                        setCode(item.dial_code)
                    } else if (ModelTitle === 'Company Country Code') {
                        setConCode(item.dial_code)
                    }
                    setModalVisible(!modalVisible)
                }
            }>
                <View style={{ margin: hp(1) }}>
                    <Text style={{ fontSize: hp(2), color: Colors.grey, marginTop: hp(0.5) }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <ScrollView style={styles.container}>
            <View style={{ marginBottom: hp(6) }}>
                <View style={styles.view}>
                    <Ionicons onPress={navigation.goBack} style={{ marginLeft: hp(2), marginRight: hp(4) }} name={'arrow-back-outline'} size={wp(5)} color={'white'} />
                    <Text style={styles.txt}>Sign Up</Text>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.txt1}>Basic Details</Text>
                </View>
                <TouchableOpacity onPress={selectImage}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ height: hp(10), width: hp(10), borderRadius: hp(9), alignSelf: 'center', marginVertical: hp(3) }} source={ImageDp} />
                        <Ionicons style={{ marginTop: hp(-6), marginLeft: hp(8) }} name={'camera'} size={wp(5)} color={Colors.headerColor} />
                    </View>
                </TouchableOpacity>
                <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="First Name *" onChangeText={txt => setfirstname(txt)} />
                <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Last Name *" onChangeText={txt => setlastname(txt)} />
                <TouchableOpacity onPress={
                    () => {
                        setModalVisible(!modalVisible)
                        setModelTitle('Select Gender')
                        setModelData(genderModalData)
                    }
                }>
                    <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Gender</Text>
                        <Ionicons style={{ marginRight: hp(2) }} name={'caret-down'} size={wp(5)} color={'grey'} />
                    </View>
                </TouchableOpacity>
                <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Email *" onChangeText={txt => setEmail(txt)} />
                <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Enter Password *" onChangeText={txt => setPassword(txt)} />
                <Text style={{ marginTop: hp(2), marginLeft: hp(3), fontSize: hp(1.6) }}>Role *</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: hp(8), marginTop: hp(3) }}>
                    <TouchableOpacity onPress={() => setRole(0)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name={Role ? 'radio-button-off' : 'radio-button-on'} size={wp(5)} color={Colors.headerColor} />
                            <Text>Job Seeker</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRole(1)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name={Role ? 'radio-button-on' : 'radio-button-off'} size={wp(5)} color={Colors.headerColor} />
                            <Text>Job Provider</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.txt1}>Personal Details</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    setModalVisible(!modalVisible)
                    setModelTitle('Martial Status')
                    setModelData(martialStatusData)
                }}>
                    <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Martial Status</Text>
                        <Ionicons style={{ marginRight: hp(2) }} name={'caret-down'} size={wp(5)} color={'grey'} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDateModel(!DateModel)}>
                    <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Date Of Birth *</Text>
                        <Ionicons style={{ marginRight: hp(2) }} name={'calendar'} size={wp(5)} color={Colors.headerColor} />
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: hp(4), width: '80%', alignSelf: 'center' }}>
                    <TouchableOpacity style={{ width: '20%', marginRight: hp(3) }} onPress={() => {
                        setModalVisible(!modalVisible)
                        setModelTitle('Country Code')
                        setModelData(CountryCode)
                    }}>
                        <View style={[styles.textInput1, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                            <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>+91</Text>
                            <Ionicons style={{ marginRight: hp(1) }} name={'caret-down'} size={wp(5)} color={'grey'} />
                        </View>
                    </TouchableOpacity>
                    <TextInput style={[styles.textInput1, { width: '80%' }]} placeholderTextColor={Colors.grey1} placeholder="Phone Number *" onChangeText={txt => setNumber(txt)} />
                </View>
                <TouchableOpacity onPress={() => {
                    setModalVisible(!modalVisible)
                    setModelTitle('Languages')
                    setModelData(LanguageModalData)
                }}>
                    <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Language Known</Text>
                        <Ionicons style={{ marginRight: hp(2) }} name={'caret-down'} size={wp(5)} color={'grey'} />
                    </View>
                </TouchableOpacity>
                <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Address *" onChangeText={txt => setAddress(txt)} />
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Address Line 2" onChangeText={txt => setAddress2(txt)} />
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="City *" onChangeText={txt => setCity(txt)} />
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Pin Code*" onChangeText={txt => setPinCode(txt)} />
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="State*" onChangeText={txt => setState(txt)} />
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Country*" onChangeText={txt => setCountry(txt)} />
                <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="About *" onChangeText={txt => setAbout(txt)} multiline={true} numberOfLines={4} />
                {Role ?
                    <View>
                        <View style={styles.view1}>
                            <Text style={styles.txt1}>Company Details</Text>
                        </View>
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Company Name*" onChangeText={txt => setCompanyName(txt)} />
                        <TouchableOpacity onPress={() => setDateModel(!DateModel)}>
                            <View style={[styles.textInput, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                                <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>Established Date *</Text>
                                <Ionicons style={{ marginRight: hp(2) }} name={'calendar'} size={wp(5)} color={Colors.headerColor} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: hp(4), width: '80%', alignSelf: 'center' }}>
                            <TouchableOpacity style={{ width: '20%', marginRight: hp(3) }} onPress={() => {
                                setModalVisible(!modalVisible)
                                setModelTitle('Company Country Code')
                                setModelData(CountryCode)
                            }}>
                                <View style={[styles.textInput1, { height: hp(5), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]}>
                                    <Text style={{ fontSize: hp(2), color: Colors.grey, marginLeft: hp(1), }}>+91</Text>
                                    <Ionicons style={{ marginRight: hp(1) }} name={'caret-down'} size={wp(5)} color={'grey'} />
                                </View>
                            </TouchableOpacity>
                            <TextInput style={[styles.textInput1, { width: '80%' }]} placeholderTextColor={Colors.grey1} placeholder="Phone Number *" onChangeText={txt => setComNumber(txt)} />
                        </View>
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="No. of Employees *" onChangeText={txt => setEmpNumber(txt)} />
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Address *" onChangeText={txt => setComAddress(txt)} />
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Address Line 2" onChangeText={txt => setComAddress2(txt)} />
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="City *" onChangeText={txt => setComCity(txt)} />
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Pin Code*" onChangeText={txt => setConPinCode(txt)} />
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="State*" onChangeText={txt => setComState(txt)} />
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Country*" onChangeText={txt => setComCountry(txt)} />
                        <Text style={{ marginTop: hp(2), marginLeft: hp(3), fontSize: hp(1.6) }}>Working Days</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: hp(8), marginTop: hp(3) }}>
                            <TouchableOpacity onPress={() => setWorkDays(0)}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name={WorkDays ? 'radio-button-off' : 'radio-button-on'} size={wp(5)} color={Colors.headerColor} />
                                    <Text>Mon-Fri(5 Days)</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setWorkDays(1)}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name={WorkDays ? 'radio-button-on' : 'radio-button-off'} size={wp(5)} color={Colors.headerColor} />
                                    <Text>Mon-Sat(6 Days)</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TextInput style={styles.textInput} placeholderTextColor={Colors.grey1} placeholder="Website URL" onChangeText={txt => setWebsiteUrl(txt)} />
                    </View>
                    : null}
                <TouchableOpacity activeOpacity={.5} onPress={Register}>
                    <View style={{ marginHorizontal: wp(5), marginTop: hp(5), backgroundColor: Colors.headerColor, height: hp(6), justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center', color: Colors.white, fontSize: hp(1.8) }}>Done</Text>
                    </View>
                </TouchableOpacity>

            </View>
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
    view1: {
        backgroundColor: Colors.headerColor,
        height: hp(4),
        justifyContent: 'center',
        marginTop: hp(2)
    },
    txt1: {
        color: Colors.white,
        fontSize: hp(1.6),
        textAlign: 'center'
    },
    textInput: {
        marginHorizontal: wp(5),
        color: Colors.grey,
        fontSize: hp(2),
        letterSpacing: 1.5,
        borderColor: Colors.grey1,
        borderWidth: hp(.1),
        marginTop: hp(4),
        borderRadius: hp(0.6)
    },
    textInput1: {
        color: Colors.grey,
        fontSize: hp(2),
        letterSpacing: 1.5,
        borderColor: Colors.grey1,
        borderWidth: hp(.1),
        borderRadius: hp(0.6),
        height: hp(5)
    }
});