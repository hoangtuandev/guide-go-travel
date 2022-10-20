import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../api';

export const CalendarFinish = (props) => {
    const { calendar } = props;
    return (
        <View style={styles.calendarItem}>
            <Text style={styles.nameTour}>
                {calendar.ldt_tour.t_ten}
                {/* {`${dayStart}, `}
                {moment(dateStart).format('DD / MM / YYYY')} */}
            </Text>
            <View style={styles.inforCalendar}>
                <Text style={styles.finishDate}>
                    <Image
                        source={require('../images/gui_check_yes_icon_157194.png')}
                        style={styles.checkIcon}
                    />
                    {'  Khởi hành '}
                    {moment(calendar.ldt_lichkhoihanh.lkh_ngaykhoihanh).format(
                        'DD/MM/YYYY'
                    )}
                    {/* {moment(dateEnd).format('DD / MM / YYYY')} */}
                </Text>
                <Text style={styles.finishDate}>
                    <Image
                        source={require('../images/gui_check_yes_icon_157194.png')}
                        style={styles.checkIcon}
                    />
                    {'  Kết thúc '}
                    {moment(calendar.ldt_lichkhoihanh.lkh_ngayketthuc).format(
                        'DD/MM/YYYY'
                    )}
                    {/* {moment(dateEnd).format('DD / MM / YYYY')} */}
                </Text>
                <Text style={styles.finishDate}>
                    <Image
                        source={require('../images/gui_check_yes_icon_157194.png')}
                        style={styles.checkIcon}
                    />{' '}
                    Thời gian: {calendar.ldt_tour.t_thoigian} ngày{' '}
                    {calendar.ldt_tour.t_thoigian - 1} đêm
                    {/* {moment(dateEnd).format('DD / MM / YYYY')} */}
                </Text>
                <Text style={styles.finishDate}>
                    <Image
                        source={require('../images/gui_check_yes_icon_157194.png')}
                        style={styles.checkIcon}
                    />
                    {'  '}
                    Khoi hanh tai {calendar.ldt_lichkhoihanh.lkh_diadiem}
                    {/* Khởi hành tại {calendar.ldt_lichkhoihanh.lkh_diadiem} */}
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
                    <TouchableOpacity style={styles.buttonDetail}>
                        <Text style={styles.labelButton}>CHI TIẾT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    calendarItem: {
        padding: 0,
        marginBottom: 30,
        borderRadius: 10,
        borderWidth: 0,
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
    nameTour: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontSize: 19,
        fontWeight: '700',
        color: '#fff',
        backgroundColor: '#EC7063',
        lineHeight: 25,
    },
    inforCalendar: {
        paddingTop: 5,
        paddingLeft: 10,
    },
    checkIcon: {
        width: 15,
        height: 15,
    },

    finishDate: {
        fontSize: 18,
        fontWeight: '400',
    },
    buttonAction: {
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
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
        width: 85,
        backgroundColor: '#3498DB',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 5,
        marginLeft: 10,
    },

    buttonCancle: {
        width: 85,
        backgroundColor: '#B3B6B7',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 5,
        marginLeft: 10,
    },
    labelButton: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
});
