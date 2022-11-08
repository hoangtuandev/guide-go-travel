import { React, useEffect, useState } from 'react';
import moment from 'moment';
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
    const [isLoadingCancel, setIsLoadingCancel] = useState(false);

    useEffect(() => {
        getUserLogin();
    }, []);

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

    const handleDate = (date) => {
        const dateConvert = new Date(date);
        const result =
            dateConvert.getDay() === 0
                ? 'Chủ nhật'
                : dateConvert.getDay() === 1
                ? 'Thứ 2'
                : dateConvert.getDay() === 2
                ? 'Thứ 3'
                : dateConvert.getDay() === 3
                ? 'Thứ 4'
                : dateConvert.getDay() === 4
                ? 'Thứ 5'
                : dateConvert.getDay() === 5
                ? 'Thứ 6'
                : 'Thứ 7';

        return result;
    };

    const handleCancelCalendarGuideTour = (calendar) => {
        api.cancelCalendarGuideTour({
            idCalendar: calendar._id,
            guide: userLogined,
        }).then((res) => {
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
        });
    };

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
            <Text style={styles.labelPanel}>LỊCH DẪN TOUR SẮP TỚI</Text>
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
                        <View key={index} style={styles.calendarItem}>
                            <Text style={styles.timeDeparture}>
                                {`${handleDate(
                                    calendar.ldt_lichkhoihanh.lkh_ngaykhoihanh
                                )}, `}
                                {moment(
                                    calendar.ldt_lichkhoihanh.lkh_ngaykhoihanh
                                ).format('DD/MM/YYYY')}
                            </Text>
                            <View style={styles.inforCalendar}>
                                <Text style={styles.finishDate}>
                                    <Image
                                        source={require('../images/gui_check_yes_icon_157194.png')}
                                        style={styles.checkIcon}
                                    />
                                    {'  Kết thúc '}
                                    {moment(
                                        calendar.ldt_lichkhoihanh
                                            .lkh_ngayketthuc
                                    ).format('DD/MM/YYYY')}
                                </Text>

                                <Text style={styles.nameTour}>
                                    <Image
                                        source={require('../images/gui_check_yes_icon_157194.png')}
                                        style={styles.checkIcon}
                                    />{' '}
                                    <Text> Tour {calendar.ldt_tour.t_ten}</Text>
                                </Text>
                            </View>
                            <View style={styles.buttonAction}>
                                <View style={styles.guides}>
                                    {calendar.ldt_huongdanvien.map(
                                        (guide, index) => (
                                            <Image
                                                key={index}
                                                style={styles.guideAvatar}
                                                source={{
                                                    uri: guide.tkhdv_anhdaidien,
                                                }}
                                            />
                                        )
                                    )}
                                </View>
                                <View style={styles.action}>
                                    <TouchableOpacity
                                        style={styles.buttonDetail}
                                        onPress={() => {
                                            navigation.navigate(
                                                'DetailCalendar',
                                                {
                                                    calendar: calendar,
                                                }
                                            );
                                        }}
                                    >
                                        <Text style={styles.labelButton}>
                                            CHI TIẾT
                                        </Text>
                                    </TouchableOpacity>

                                    {!isLoadingCancel && (
                                        <TouchableOpacity
                                            style={styles.buttonCancle}
                                            onPress={() =>
                                                handleCancelCalendarGuideTour(
                                                    calendar
                                                )
                                            }
                                        >
                                            <Text style={styles.labelButton}>
                                                HỦY BỎ
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                    {isLoadingCancel && (
                                        <TouchableOpacity
                                            style={styles.buttonCancle}
                                        >
                                            <Text style={styles.labelButton}>
                                                ...
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>
                        </View>
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
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 20,
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
    calendarItem: {
        padding: 0,
        marginBottom: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#3498DB',
        backgroundColor: '#fff',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 3,
    },
    timeDeparture: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        backgroundColor: '#3498DB',
    },
    inforCalendar: {
        paddingTop: 5,
        paddingLeft: 10,
    },
    checkIcon: {
        width: 15,
        height: 15,
    },
    nameTour: {
        fontSize: 17,
        fontWeight: '500',
        color: '#333',
        paddingRight: 10,
    },
    finishDate: {
        fontSize: 17,
        fontWeight: '500',
        color: '#E74C3C',
    },
    buttonAction: {
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
        marginTop: 7,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    guides: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    guideAvatar: {
        width: 37,
        height: 37,
        borderRadius: 50,
        marginRight: 5,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonDetail: {
        width: 80,
        backgroundColor: '#3498DB',
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 5,
        marginLeft: 10,
    },

    buttonCancle: {
        width: 80,
        backgroundColor: '#E74C3C',
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 5,
        marginLeft: 10,
    },
    labelButton: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
    },
});
