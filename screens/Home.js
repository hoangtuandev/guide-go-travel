import { React, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GuideFuture } from '../components/GuideFuture';
import { UserHome } from '../components/UserHome';

const iconLogout = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664429085/GoTravel/log-out_icon-icons.com_50106_x9axlk.png',
};

export const Home = ({ navigation }) => {
    // useEffect(() => {
    //     getUserLogin();
    // }, []);

    const removeUserLogin = async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {}
    };
    const handleLogout = () => {
        removeUserLogin().then(() => {
            navigation.navigate('Login');
        });
    };

    // const getUserLogin = async () => {
    //     try {
    //         const userString = await AsyncStorage.getItem('User');
    //         console.log('USER: ', JSON.parse(userString));
    //     } catch (error) {
    //         console.log(error);
    //         // Alert.alert('Error', '' + error.message, [{ Text: 'OK' }]);
    //     }
    // };
    return (
        <View style={styles.container}>
            <UserHome></UserHome>
            <Text style={styles.labelPanel}>Lịch dẫn tour sắp tới</Text>
            <View style={styles.calendarList}>
                <GuideFuture></GuideFuture>
                <GuideFuture></GuideFuture>
                <GuideFuture></GuideFuture>
                <GuideFuture></GuideFuture>
                <TouchableOpacity style={styles.viewAll}>
                    <Text style={styles.textView}>Xem tất cả </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.registerBtn}>
                <Text style={styles.labelBtn}>ĐĂNG KÝ DẪN TOUR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logout} onPress={handleLogout}>
                <Image source={iconLogout} style={styles.iconLogout}></Image>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', backgroundColor: '#fff' },
    main: {
        flex: 2,
        backgroundColor: '#fff',
    },
    labelPanel: {
        marginTop: 15,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 21,
        fontWeight: '600',
        color: '#2E86C1',
    },
    calendarList: {
        flex: 2,
    },
    viewAll: {
        marginRight: 20,
    },
    textView: {
        marginTop: 5,
        textAlign: 'right',
        fontSize: 17,
        fontWeight: '700',
        marginRight: 0,
        color: '#E74C3C',
    },
    registerBtn: {
        backgroundColor: '#fff',
    },
    labelBtn: {
        backgroundColor: '#E74C3C',
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        borderRadius: 50,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 7,
        paddingBottom: 7,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    logout: {
        position: 'absolute',
        top: 40,
        right: 7,
    },
    iconLogout: {
        width: 30,
        height: 30,
    },
});
