import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native';
import * as api from '../api';
import { CalendarItem } from '../components/CalendarItem';

export const Register = ({ navigation }) => {
    const [calenderList, setCalenderList] = useState([]);
    const [userLogined, setUserLogined] = useState(null);
    const [registedCalendarList, setRegistedCalendarList] = useState([]);

    console.log('fvbdfhbvsdhfsh');

    useEffect(() => {
        getUserLogin();
    }, []);

    useEffect(() => {
        api.getAvairiableCalendarGuide().then((res) => {
            setCalenderList(
                res.data.sort(
                    (a, b) =>
                        Date.parse(a.ldt_lichkhoihanh.lkh_ngaykhoihanh) -
                        Date.parse(b.ldt_lichkhoihanh.lkh_ngaykhoihanh)
                )
            );
        });
    }, []);

    useEffect(() => {
        if (userLogined) {
            for (let i = 0; i < calendar.ldt_huongdanvien.length; i++) {
                if (
                    calendar.ldt_huongdanvien[i].tkhdv_tendangnhap ===
                    userLogined.tkhdv_tendangnhap
                ) {
                    setIsRegisted(true);
                }
            }
        }
    }, [userLogined]);

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

    const handleBackHome = () => {
        navigation.navigate('Home', {
            registedCalendarList: registedCalendarList,
        });
    };

    return (
        <ImageBackground
            source={require('../images/2752387_qbfjas.jpg')}
            resizeMode="cover"
            style={styles.image}
        >
            <TouchableOpacity style={styles.backHome} onPress={handleBackHome}>
                <Image
                    style={styles.homeButton}
                    source={require('../images/spacefm_103907.png')}
                ></Image>
            </TouchableOpacity>
            <Text style={styles.labelPanel}>ĐĂNG KÝ DẪN TOUR</Text>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.calenderList}>
                    {calenderList.map((calendar, index) => (
                        <CalendarItem
                            key={index}
                            calendar={calendar}
                            setCalenderList={setCalenderList}
                            setRegistedCalendarList={setRegistedCalendarList}
                        ></CalendarItem>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 10,
    },
    backHome: {
        zIndex: 9,
        position: 'absolute',
        top: 45,
        left: 10,
    },
    homeButton: {
        width: 40,
        height: 40,
    },
    labelPanel: {
        marginTop: 45,
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '700',
    },
    calenderList: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
    },
});
