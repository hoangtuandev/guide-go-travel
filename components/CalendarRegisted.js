import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../api';

export const CalendarRegisted = (props) => {
    const { calendar, setCalendarList } = props;

    const [userLogined, setUserLogined] = useState(null);
    const [isLoadingCancel, setIsLoadingCancel] = useState(false);

    useEffect(() => {
        getUserLogin();
    }, []);

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

    const dateStart = new Date(calendar.ldt_lichkhoihanh.lkh_ngaykhoihanh);
    const dateEnd = new Date(calendar.ldt_lichkhoihanh.lkh_ngayketthuc);
    const dayStart =
        dateStart.getDay() === 0
            ? 'Chủ nhật'
            : dateStart.getDay() === 1
            ? 'Thứ 2'
            : dateStart.getDay() === 2
            ? 'Thứ 3'
            : dateStart.getDay() === 3
            ? 'Thứ 4'
            : dateStart.getDay() === 4
            ? 'Thứ 5'
            : dateStart.getDay() === 5
            ? 'Thứ 6'
            : 'Thứ 7';

    const handleCancelCalendarGuideTour = () => {
        setIsLoadingCancel(true);
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
                    setIsLoadingCancel(false);
                }
            );
        });
    };

    return (
        <View style={styles.calendarItem}>
            <Text style={styles.timeDeparture}>
                {`${dayStart}, `}
                {moment(dateStart).format('DD / MM / YYYY')}
            </Text>
            <View style={styles.inforCalendar}>
                <Text style={styles.finishDate}>
                    <Image
                        source={require('../images/gui_check_yes_icon_157194.png')}
                        style={styles.checkIcon}
                    />
                    {'  Kết thúc '}
                    {moment(dateEnd).format('DD / MM / YYYY')}
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
                    {calendar.ldt_huongdanvien.map((guide, index) => (
                        <Image
                            key={index}
                            style={styles.guideAvatar}
                            source={{
                                uri: guide.tkhdv_anhdaidien,
                            }}
                        />
                    ))}
                </View>
                <View style={styles.action}>
                    <TouchableOpacity
                        style={styles.buttonDetail}
                        onPress={() => {
                            navigation.navigate('DetailCalendar', {
                                calendar: calendar,
                            });
                        }}
                    >
                        <Text style={styles.labelButton}>CHI TIẾT</Text>
                    </TouchableOpacity>

                    {!isLoadingCancel && (
                        <TouchableOpacity
                            style={styles.buttonCancle}
                            onPress={handleCancelCalendarGuideTour}
                        >
                            <Text style={styles.labelButton}>HỦY BỎ</Text>
                        </TouchableOpacity>
                    )}
                    {isLoadingCancel && (
                        <TouchableOpacity
                            style={styles.buttonCancle}
                            onPress={handleCancelCalendarGuideTour}
                        >
                            <Text style={styles.labelButton}>...</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
