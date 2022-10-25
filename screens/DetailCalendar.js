import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import moment from 'moment';
import * as api from '../api';

export const DetailCalendar = ({ route, navigation }) => {
    const { calendar } = route.params;

    const [amountTourist, setAmountTourist] = useState(0);
    const [touristList, setTouristList] = useState([]);

    useEffect(() => {
        api.getTouristByDeparture({
            calendar: calendar.ldt_lichkhoihanh,
        }).then((res) => {
            setAmountTourist(res.data.amountTourist);
            setTouristList(res.data.filterByCalendar);
        });
    }, []);

    const handleBackHome = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backHome}
                    onPress={handleBackHome}
                >
                    <Image
                        style={styles.homeButton}
                        source={require('../images/spacefm_103907.png')}
                    ></Image>
                </TouchableOpacity>
                <Text style={styles.labelPanel}>CHI TIẾT LỊCH DẪN TOUR</Text>
            </View>
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.inforCalendar}>
                    <View style={styles.tour}>
                        <View>
                            <Image
                                style={styles.tourIcon}
                                source={require('../images/icon8_101134.png')}
                            />
                        </View>
                        <View>
                            <Text style={styles.tourName}>
                                {calendar.ldt_tour.t_ten}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.text}>
                        Khởi hành:{' '}
                        {moment(
                            calendar.ldt_lichkhoihanh.lkh_ngaykhoihanh
                        ).format('DD/MM/YYYY')}
                    </Text>
                    <Text style={styles.text}>
                        Kết thúc:{' '}
                        {moment(
                            calendar.ldt_lichkhoihanh.lkh_ngayketthuc
                        ).format('DD/MM/YYYY')}
                    </Text>
                    <Text style={styles.text}>
                        Điểm khởi hành: {calendar.ldt_lichkhoihanh.lkh_diadiem}
                    </Text>
                    <Text style={styles.text}>
                        Loại hình: {calendar.ldt_tour.t_loaihinh.lht_ten}
                    </Text>
                    <Text style={styles.text}>
                        Số ngày: {calendar.ldt_tour.t_thoigian} ngày{' '}
                        {calendar.ldt_tour.t_thoigian - 1} đêm
                    </Text>
                    <Text style={styles.text}>
                        Tổng lượng khách: {amountTourist}
                    </Text>
                </View>
                <View style={styles.imageList}>
                    {calendar.ldt_tour.t_hinhanh.map((img, index) => (
                        <Image
                            key={index}
                            style={styles.imageTour}
                            source={{
                                uri: img,
                            }}
                        />
                    ))}
                </View>
                <View style={styles.inforGuide}>
                    <Text style={styles.labelBox}>
                        HƯỚNG DẪN VIÊN ĐÃ ĐĂNG KÝ
                    </Text>
                    {calendar.ldt_huongdanvien.map((guide, index) => (
                        <View key={index} style={styles.guideItem}>
                            <Image
                                style={styles.guideAvatar}
                                source={{
                                    uri: guide.tkhdv_anhdaidien,
                                }}
                            />
                            <View style={styles.guideDetail}>
                                <Text style={styles.nameGuide}>
                                    {guide.tkhdv_huongdanvien.hdv_hoten}
                                </Text>
                                <View style={styles.detailItem}>
                                    <Image
                                        style={styles.iconDetail}
                                        source={require('../images/phone_icon_136322.png')}
                                    />
                                    <Text style={styles.textDetail}>
                                        {
                                            guide.tkhdv_huongdanvien
                                                .hdv_sodienthoai
                                        }
                                    </Text>
                                </View>
                                <View style={styles.detailItem}>
                                    <Image
                                        style={styles.iconDetail}
                                        source={require('../images/Mail_icon-icons.com_71849.png')}
                                    />
                                    <Text style={styles.textDetail}>
                                        {guide.tkhdv_huongdanvien.hdv_mail}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={styles.inforGuide}>
                    <Text style={styles.labelBox}>KHÁCH DU LỊCH</Text>
                    {touristList.length !== 0 &&
                        touristList.map((tourist, index) => (
                            <View key={index} style={styles.touristItem}>
                                <Text style={styles.textDetail}>
                                    {index + 1}
                                    {'.'}
                                </Text>
                                <Text style={styles.nameTourist}>
                                    {tourist.bt_thongtinlienhe.firstname}{' '}
                                    {tourist.bt_thongtinlienhe.lastname}
                                </Text>
                                <View style={styles.detailItem}>
                                    <Image
                                        style={styles.iconDetail}
                                        source={require('../images/phone_icon_136322.png')}
                                    />
                                    <Text style={styles.textDetail}>
                                        {tourist.bt_thongtinlienhe.phone}
                                    </Text>
                                </View>
                            </View>
                        ))}
                </View>
                <Text style={styles.labelBox}>LỊCH TRÌNH TOUR</Text>
                <View
                    style={styles.scheduleTour}
                    // showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {calendar.ldt_tour.t_lichtrinhtour.map(
                        (schedule, index) => (
                            <View key={index} style={styles.scheduleItem}>
                                <Text style={styles.labelSchedule}>
                                    Ngày {schedule.ltt_ngay}: {schedule.ltt_ten}
                                </Text>

                                <View style={styles.contentSchedule}>
                                    <Text style={styles.describe}>
                                        {schedule.ltt_noidung}
                                    </Text>
                                </View>
                            </View>
                        )
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 5,
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
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 21,
        color: '#E74C3C',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 15,
        marginLeft: 15,
        marginTop: 20,
    },
    labelBox: {
        fontSize: 19,
        fontWeight: '700',
        color: '#E74C3C',
        borderLeftWidth: 4,
        borderColor: '#E74C3C',
        paddingLeft: 15,
        marginTop: 20,
        marginBottom: 10,
    },
    inforCalendar: {
        flex: 1,
        marginBottom: 10,
    },
    tourIcon: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    tour: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    tourName: {
        fontWeight: '500',
        fontSize: 20,
        color: '#2874A6',
        marginRight: 45,
    },
    text: {
        fontSize: 18,
        marginLeft: 50,
        lineHeight: 30,
    },
    scheduleTour: {
        flex: 1,
    },
    scheduleItem: {
        marginBottom: 15,
    },
    labelSchedule: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2E86C1',
    },
    contentSchedule: {
        flexDirection: 'row',
    },
    labelDescribe: {
        fontSize: 17,
        fontWeight: '500',
        color: '#626567',
        marginRight: 5,
        width: 100,
    },
    describe: {
        marginLeft: 0,
        fontSize: 18,
        textAlign: 'justify',
        width: 370,
    },
    imageList: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

        flexWrap: 'wrap',
    },
    imageTour: {
        width: 117,
        height: 80,
        borderRadius: 3,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
    },
    inforGuide: {
        flex: 1,
    },
    guideItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#CACFD2',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 10,
        marginBottom: 15,
    },
    guideAvatar: {
        width: 55,
        height: 55,
        borderRadius: 50,
        marginRight: 15,
    },
    touristItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    nameTourist: {
        width: 230,
        fontSize: 19,
        fontWeight: '500',
        color: '#2874A6',
        marginLeft: 10,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameGuide: {
        fontSize: 19,
        color: '#2874A6',
        fontWeight: '500',
    },
    textDetail: {
        fontSize: 18,
    },
    iconDetail: {
        width: 20,
        height: 20,
        borderRadius: 50,
        marginRight: 5,
    },
});
