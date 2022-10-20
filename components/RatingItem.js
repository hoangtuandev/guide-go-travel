import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image } from 'react-native';

export const RatingItem = (props) => {
    const { rating } = props;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.ratingStar}>
                    <Text style={styles.starValue}>
                        {rating.dghdv_saodanhgia}
                    </Text>
                    <Image
                        style={styles.starIcon}
                        source={require('../images/star_77949.png')}
                    />
                </View>
                <Text style={styles.ratingTime}>
                    {moment(rating.dghdv_thoigian).format('HH:mm DD/MM/YYYY')}
                </Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.ratingComment}>{rating.dghdv_nhanxet}</Text>
                <Text style={styles.text}>
                    Khởi hành:{' '}
                    {moment(
                        rating.dghdv_booking.bt_lichkhoihanh.lkh_ngaykhoihanh
                    ).format('DD/MM/YYYY')}
                </Text>
                <Text style={styles.text}>
                    Kết thúc:{' '}
                    {moment(
                        rating.dghdv_booking.bt_lichkhoihanh.lkh_ngayketthuc
                    ).format('DD/MM/YYYY')}
                </Text>
                <Text style={styles.text}>
                    Khách du lịch:{' '}
                    {
                        rating.dghdv_booking.bt_taikhoan.tkkdl_khachdulich
                            .kdl_hoten
                    }
                </Text>
                <Text style={styles.text}>Số điện thoại: 0987654321</Text>
                <Text style={styles.text}>
                    Mã booking: {rating.dghdv_booking.bt_ma}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 7,
        borderBottomWidth: 1,
        borderColor: '#CACFD2',
    },
    ratingStar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        width: 22,
        height: 22,
    },
    starValue: {
        fontSize: 20,
        fontWeight: '500',
        marginRight: 5,
    },
    ratingTime: {
        fontSize: 18,
        fontWeight: '500',
        color: '#E74C3C',
    },
    content: {
        paddingTop: 10,
    },
    ratingComment: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2874A6',
        marginBottom: 5,
    },
    text: {
        fontSize: 17,
        lineHeight: 25,
    },
});
