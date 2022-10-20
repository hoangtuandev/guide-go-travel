import { React, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CalendarFinish } from '../components/CalendarFinish';
import * as api from '../api';

export const HistoryCalendar = ({ navigation }) => {
    const [userLogined, setUserLogined] = useState(null);
    const [historyCalendars, setHistoryCalendars] = useState([]);

    useEffect(() => {
        getUserLogin();
    }, []);

    useEffect(() => {
        userLogined &&
            api
                .getGuideTimesByAccount({
                    username: userLogined.tkhdv_tendangnhap,
                })
                .then((res) => {
                    console.log('GUIDE TIMES: ', res.data);
                    setHistoryCalendars(res.data);
                });
    }, [userLogined]);

    const handleBackHome = () => {
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
            <Text style={styles.labelPanel}>LỊCH SỬ DẪN TOUR</Text>
            {userLogined && (
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {historyCalendars &&
                        historyCalendars.map((calendar, index) => (
                            <CalendarFinish
                                key={index}
                                calendar={calendar}
                            ></CalendarFinish>
                        ))}

                    {/* <CalendarFinish></CalendarFinish>
                    <CalendarFinish></CalendarFinish>
                    <CalendarFinish></CalendarFinish> */}
                </ScrollView>
            )}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
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
});
