import React, { useEffect } from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as api from '../api';

export const CalenderRegister = (props) => {
    const { calendar } = props;

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

    const dayEnd =
        dateEnd.getDay() === 0
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
                    {'  '}
                    {`${dayEnd}, `}
                    {moment(dateEnd).format('DD / MM / YYYY')}
                </Text>
                <Text style={styles.nameTour}>
                    <Image
                        source={require('../images/gui_check_yes_icon_157194.png')}
                        style={styles.checkIcon}
                    />
                    {'  '}
                    Khởi hành tại {calendar.ldt_lichkhoihanh.lkh_diadiem}
                </Text>
                <Text style={styles.nameTour}>
                    <Image
                        source={require('../images/gui_check_yes_icon_157194.png')}
                        style={styles.checkIcon}
                    />
                    {'  '}
                    Tour {calendar.ldt_tour.t_ten}
                </Text>
            </View>
            <View style={styles.buttonAction}>
                <View style={styles.guides}>
                    <Image
                        style={styles.guideAvatar}
                        source={{
                            uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664161366/GoTravel/avatar_fb_wmhyh2.jpg',
                        }}
                    ></Image>
                    <Image
                        style={styles.guideAvatar}
                        source={{
                            uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664161366/GoTravel/avatar_fb_wmhyh2.jpg',
                        }}
                    ></Image>
                </View>
                <View style={styles.action}>
                    <TouchableOpacity style={styles.buttonDetail}>
                        <Text style={styles.labelButton}>CHI TIẾT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRegister}>
                        <Text style={styles.labelButton}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    calendarItem: {
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#BDC3C7',
        backgroundColor: '#fff',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 7,
    },
    timeDeparture: {
        fontSize: 19,
        fontWeight: '700',
        color: '#2874A6',
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
    },
    finishDate: {
        fontSize: 17,
        fontWeight: '500',
        color: '#E74C3C',
    },
    buttonAction: {
        marginTop: 15,
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
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 5,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonDetail: {
        backgroundColor: '#2874A6',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonRegister: {
        backgroundColor: '#E74C3C',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 5,
        marginLeft: 10,
    },
    labelButton: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
});
