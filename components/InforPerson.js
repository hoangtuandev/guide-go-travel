import { React, useState, useEffect, Fragment } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const InforPerson = ({ navigation }) => {
    const [userLogined, setUserLogined] = useState(null);
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

    const handleBackHome = () => {
        navigation.navigate('Home');
    };

    return (
        <Fragment>
            {userLogined && (
                <View style={styles.informations}>
                    <Text style={styles.labelPanel}>Thông tin hồ sơ</Text>
                    <View style={styles.inforItem}>
                        <Image
                            style={styles.inforIcon}
                            source={require('../images/gender_transgender_icon_136551.png')}
                        />
                        <Text style={styles.inforContent}>
                            {userLogined.tkhdv_huongdanvien.hdv_gioitinh}
                        </Text>
                    </View>

                    <View style={styles.inforItem}>
                        <Image
                            style={styles.inforIcon}
                            source={require('../images/phone_icon_136322.png')}
                        />
                        <Text style={styles.inforContent}>
                            {userLogined.tkhdv_huongdanvien.hdv_sodienthoai}
                        </Text>
                    </View>
                    <View style={styles.inforItem}>
                        <Image
                            style={styles.inforIcon}
                            source={require('../images/identity_card_id_icon_123863.png')}
                        />
                        <Text style={styles.inforContent}>
                            {userLogined.tkhdv_huongdanvien.hdv_cccd}
                        </Text>
                    </View>
                    <View style={styles.inforItem}>
                        <Image
                            style={styles.inforIcon}
                            source={require('../images/mail-black-envelope-symbol_icon-icons.com_56519.png')}
                        />
                        <Text style={styles.inforContent}>
                            {userLogined.tkhdv_huongdanvien.hdv_mail}
                        </Text>
                    </View>
                    <View style={styles.inforItem}>
                        <Image
                            style={styles.inforIcon}
                            source={require('../images/home_icon-icons.com_73532.png')}
                        />
                        <Text style={styles.inforContent}>
                            {userLogined.tkhdv_huongdanvien.hdv_quequan}
                        </Text>
                    </View>
                </View>
            )}
        </Fragment>
    );
};

const styles = StyleSheet.create({
    labelPanel: {
        fontSize: 19,
        fontWeight: '700',
        borderLeftWidth: 4,
        paddingLeft: 15,
        borderLeftColor: '#D91B1B',
        paddingTop: 2,
        paddingBottom: 2,
        marginBottom: 10,
        color: '#D91B1B',
    },
    informations: {
        marginTop: 20,
        alignItems: 'baseline',
        paddingLeft: 10,
    },
    inforItem: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left',
        marginTop: 7,
        marginBottom: 7,
    },
    inforIcon: {
        width: 22,
        height: 22,
        marginRight: 15,
    },
    inforContent: {
        fontSize: 18,
        marginRight: 20,
        paddingRight: 20,
        fontWeight: '400',
    },
    labelButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    accountProfile: {
        marginLeft: 10,
        marginRight: 10,
    },
});
