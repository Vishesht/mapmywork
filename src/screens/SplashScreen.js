import React, { useEffect } from 'react'
import { View,  ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.addListener('focus', () => {
            setTimeout(async () => {
                navigation.navigate('InstitutesList')
            }, 1200);
        });
    }, [navigation]);
    return (
        <View style={{ flex: 1 }}>
            <ActivityIndicator style={styles.actInd} size={'large'} color='grey' />
        </View>
    )
}
const styles = StyleSheet.create({
    actInd: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        marginTop: '0%'
    }
});