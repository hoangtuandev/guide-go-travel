import React from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

export const DetailCalendar = ({ navigation }) => {
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
                                Tour Ha Noi - Nha Trang - Da Nang - Hoi An - Ha
                                Noi
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.text}>
                        Khoi hanh: Thu 5, ngay 22/10/2022
                    </Text>
                    <Text style={styles.text}>Kết thúc: 25/10/2022</Text>
                    <Text style={styles.text}>Khoi hanh tai:</Text>
                    <Text style={styles.text}>Loai hinh: Tour kham pha</Text>
                    <Text style={styles.text}>Số ngày: 3 ngay</Text>
                </View>

                <View style={styles.inforGuide}>
                    <Text style={styles.labelBox}>
                        HƯỚNG DẪN VIÊN ĐÃ ĐĂNG KÝ
                    </Text>
                    <View style={styles.guideItem}>
                        <Image
                            style={styles.guideAvatar}
                            source={{
                                uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1665150844/Avatar/Thoat-kiep-ta-1656037029-25-width660height660_rj4jy5_mkmuzw.jpg',
                            }}
                        />
                        <View style={styles.guideDetail}>
                            <Text style={styles.nameGuide}>
                                Pham Hoang Tuan
                            </Text>
                            <View style={styles.detailItem}>
                                <Image
                                    style={styles.iconDetail}
                                    source={require('../images/phone_icon_136322.png')}
                                />
                                <Text style={styles.textDetail}>
                                    0645876845
                                </Text>
                            </View>
                            <View style={styles.detailItem}>
                                <Image
                                    style={styles.iconDetail}
                                    source={require('../images/Mail_icon-icons.com_71849.png')}
                                />
                                <Text style={styles.textDetail}>
                                    phamhoangtuan@gmail.com
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.guideItem}>
                        <Image
                            style={styles.guideAvatar}
                            source={{
                                uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1665150844/Avatar/Thoat-kiep-ta-1656037029-25-width660height660_rj4jy5_mkmuzw.jpg',
                            }}
                        />
                        <View style={styles.guideDetail}>
                            <Text style={styles.nameGuide}>
                                Pham Hoang Tuan
                            </Text>
                            <View style={styles.detailItem}>
                                <Image
                                    style={styles.iconDetail}
                                    source={require('../images/phone_icon_136322.png')}
                                />
                                <Text style={styles.textDetail}>
                                    0645876845
                                </Text>
                            </View>
                            <View style={styles.detailItem}>
                                <Image
                                    style={styles.iconDetail}
                                    source={require('../images/Mail_icon-icons.com_71849.png')}
                                />
                                <Text style={styles.textDetail}>
                                    phamhoangtuan@gmail.com
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.labelBox}>LỊCH TRÌNH TOUR</Text>
                <View
                    style={styles.scheduleTour}
                    // showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.scheduleItem}>
                        <Text style={styles.labelSchedule}>
                            Ngay 1: Tham quan Nam Đảo Cáp treo Hòn Thơm
                        </Text>
                        <View style={styles.contentSchedule}>
                            <Text style={styles.labelDescribe}>
                                Phương tiện:
                            </Text>
                            <Text style={styles.describe}>Máy bay</Text>
                        </View>
                        <View style={styles.contentSchedule}>
                            <Text style={styles.labelDescribe}>Nội dung: </Text>
                            <Text style={styles.describe}>
                                Cơ sở sản xuất rượu Sim rừng. Cơ sở nuôi cấy
                                ngọc trai. Di tích lịch sử Nhà tù Phú Quốc. Nhà
                                thùng sản xuất nước mắm. Bãi Sao, tự do nghỉ
                                ngơi, tắm biển.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.scheduleItem}>
                        <Text style={styles.labelSchedule}>
                            Ngay 1: Tham quan Nam Đảo Cáp treo Hòn Thơm
                        </Text>
                        <View style={styles.contentSchedule}>
                            <Text style={styles.labelDescribe}>
                                Phương tiện:
                            </Text>
                            <Text style={styles.describe}>Máy bay</Text>
                        </View>
                        <View style={styles.contentSchedule}>
                            <Text style={styles.labelDescribe}>Nội dung: </Text>
                            <Text style={styles.describe}>
                                Cơ sở sản xuất rượu Sim rừng. Cơ sở nuôi cấy
                                ngọc trai. Di tích lịch sử Nhà tù Phú Quốc. Nhà
                                thùng sản xuất nước mắm. Bãi Sao, tự do nghỉ
                                ngơi, tắm biển.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.scheduleItem}>
                        <Text style={styles.labelSchedule}>
                            Ngay 1: Tham quan Nam Đảo Cáp treo Hòn Thơm
                        </Text>
                        <View style={styles.contentSchedule}>
                            <Text style={styles.labelDescribe}>
                                Phương tiện:
                            </Text>
                            <Text style={styles.describe}>Máy bay</Text>
                        </View>
                        <View style={styles.contentSchedule}>
                            <Text style={styles.labelDescribe}>Nội dung: </Text>
                            <Text style={styles.describe}>
                                Cơ sở sản xuất rượu Sim rừng. Cơ sở nuôi cấy
                                ngọc trai. Di tích lịch sử Nhà tù Phú Quốc. Nhà
                                thùng sản xuất nước mắm. Bãi Sao, tự do nghỉ
                                ngơi, tắm biển.
                            </Text>
                        </View>
                    </View>
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
        color: '#2E86C1',
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
        marginTop: 10,
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
        fontWeight: '700',
        fontSize: 19,
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
        fontSize: 18,
        textAlign: 'justify',
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
