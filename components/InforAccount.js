import { React, useState, useEffect, Fragment } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const InforAccount = ({ navigation }) => {
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
                <View style={styles.accountProfile}>
                    <Text style={styles.labelPanel}>Thông tin tài khoản</Text>
                    <View style={styles.form}>
                        <View style={styles.textField}>
                            <Image
                                style={styles.iconTextField}
                                source={require('../images/user-login9_tbuabt.png')}
                                resizeMode="stretch"
                            ></Image>
                            <TextInput
                                editable={false}
                                placeholder="Tên đăng nhập"
                                style={styles.input}
                                autoCapitalize={false}
                                value={userLogined.tkhdv_tendangnhap}
                            />
                        </View>
                        <View style={styles.textField}>
                            <Image
                                style={styles.iconTextField}
                                source={require('../images/images-lock_yslo7s.png')}
                                resizeMode="stretch"
                            ></Image>
                            <TextInput
                                editable={false}
                                secureTextEntry={true}
                                placeholder="Mật khẩu"
                                style={styles.input}
                                value={userLogined.tkhdv_tendangnhap}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.labelButton}>
                            Thay đổi mật khẩu
                        </Text>
                    </TouchableOpacity>
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
    accountProfile: {
        marginLeft: 10,
        marginRight: 10,
    },
    form: {
        marginTop: 0,
        marginLeft: 15,
        marginRight: 15,
    },
    textField: {
        position: 'relative',
        backgroundColor: '#fff',
        marginTop: 9,
        marginBottom: 9,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    iconTextField: {
        position: 'absolute',
        top: 8,
        left: 10,
        width: 28,
        height: 26,
    },
    input: {
        borderColor: '#CACFD2',
        borderRadius: 5,
        color: '#444',
        fontWeight: '600',
        borderWidth: 1,
        fontSize: 18,
        padding: 7,
        paddingLeft: 57,
    },
});
