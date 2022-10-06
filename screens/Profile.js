import { React, useState, useEffect, Fragment } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InforPerson } from '../components/InforPerson';
import { InforAccount } from '../components/InforAccount';

const iconStar = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664159533/GoTravel/star-alt-icon_34347_xjwyys.png',
};

export const Profile = ({ navigation }) => {
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
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.backHome}
                        onPress={handleBackHome}
                    >
                        <Image
                            style={styles.homeButton}
                            source={require('../images/spacefm_103907.png')}
                        ></Image>
                    </TouchableOpacity>
                    <View style={styles.avatar}>
                        <Image
                            style={styles.imgAvatar}
                            source={{
                                uri: userLogined.tkhdv_anhdaidien,
                            }}
                        />
                    </View>
                    <Text style={styles.nameGuide}>
                        {userLogined.tkhdv_huongdanvien.hdv_hoten}
                    </Text>
                    <View style={styles.rating}>
                        <Image
                            source={iconStar}
                            style={styles.iconStar}
                        ></Image>
                        <Image
                            source={iconStar}
                            style={styles.iconStar}
                        ></Image>
                        <Image
                            source={iconStar}
                            style={styles.iconStar}
                        ></Image>
                        <Image
                            source={iconStar}
                            style={styles.iconStar}
                        ></Image>
                        <Image
                            source={iconStar}
                            style={styles.iconStar}
                        ></Image>
                    </View>
                    <InforPerson></InforPerson>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.labelButton}>
                            Chỉnh sửa thông tin hồ sơ
                        </Text>
                    </TouchableOpacity>
                    <InforAccount></InforAccount>
                </View>
            )}
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 50,
    },
    backHome: {
        position: 'absolute',
        top: 45,
        left: 10,
    },
    homeButton: {
        width: 40,
        height: 40,
    },
    avatar: {
        alignItems: 'center',
    },
    imgAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    nameGuide: {
        color: '#2874A6',
        marginTop: 10,
        fontSize: 21,
        fontWeight: '600',
        textAlign: 'center',
    },
    rating: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
    },
    iconStar: {
        width: 20,
        height: 20,
        margin: 3,
    },

    editButton: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        paddingTop: 7,
        paddingBottom: 9,
        backgroundColor: '#2E86C1',
        marginTop: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 5,
    },
    labelButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
});
