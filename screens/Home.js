import { React, useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserHome } from '../components/UserHome';
import * as api from '../api';
import { CalendarRegisted } from '../components/CalendarRegisted';

const iconLogout = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664429085/GoTravel/log-out_icon-icons.com_50106_x9axlk.png',
};

export const Home = ({ navigation, route }) => {
    const { registedCalendarList } = route.params || [];

    const [userLogined, setUserLogined] = useState(null);
    const [calendarList, setCalendarList] = useState([]);

    useEffect(() => {
        getUserLogin();
    }, []);

    console.log('hfsdghsdb');

    useEffect(() => {
        if (userLogined) {
            api.getCalendarGuideByAccount({ idAccount: userLogined._id }).then(
                (res) => {
                    setCalendarList(
                        res.data.sort(
                            (a, b) =>
                                Date.parse(
                                    a.ldt_lichkhoihanh.lkh_ngaykhoihanh
                                ) -
                                Date.parse(b.ldt_lichkhoihanh.lkh_ngaykhoihanh)
                        )
                    );
                }
            );
        }
    }, [userLogined, registedCalendarList]);

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

    const handleViewProfile = () => {
        navigation.navigate('Profile');
    };

    const getUserLogin = async () => {
        try {
            const userString = await AsyncStorage.getItem('User');
            // console.log('USER: ', JSON.parse(userString));
            setUserLogined(JSON.parse(userString));
            return JSON.parse(userString);
        } catch (error) {
            // Alert.alert('Error', '' + error.message, [{ Text: 'OK' }]);
        }
    };
    return (
        <View style={styles.container}>
            <UserHome
                userLogined={userLogined}
                handleViewProfile={handleViewProfile}
            ></UserHome>
            <Text style={styles.labelPanel}>Lịch dẫn tour sắp tới</Text>
            <View style={styles.calendarList}>
                <TouchableOpacity style={styles.viewAll}>
                    <Text style={styles.textView}>Xem tất cả </Text>
                </TouchableOpacity>
                <ScrollView
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {calendarList.map((calendar, index) => (
                        <CalendarRegisted
                            key={index}
                            calendar={calendar}
                            setCalendarList={setCalendarList}
                        ></CalendarRegisted>
                    ))}
                </ScrollView>
            </View>
            <TouchableOpacity
                style={styles.registerBtn}
                onPress={() => navigation.navigate('Register')}
            >
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
        marginTop: 10,
        marginBottom: 0,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700',
        color: '#2E86C1',
    },
    calendarList: {
        flex: 2,
    },
    list: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    viewAll: {
        marginRight: 20,
        paddingBottom: 5,
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
        paddingTop: 10,
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
