import { React, useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const bgImage = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664079867/GoTravel/2752387_qbfjas.jpg',
};

const logoLogin = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664080577/GoTravel/Pngtree_female_traveler_character_who_is_6728271_prrqpb.png',
};
const userIcon = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664085539/GoTravel/user-login9_tbuabt.png',
};
const passIcon = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664086500/GoTravel/images-lock_yslo7s.png',
};

export const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorContent, setErrorContent] = useState('');

    const saveUserLogin = async (user) => {
        try {
            await AsyncStorage.setItem('User', JSON.stringify(user));
        } catch (error) {
            // Alert.alert('Error', '' + error.message, [{ Text: 'OK' }]);
        }
    };

    const handleLogin = () => {
        api.handleLoginGuide({ username, password }).then((res) => {
            if (res.data.notFoundUsername) {
                setErrorContent('Tài khoản không tồn tại');
            } else if (res.data.wrongPassword) {
                setErrorContent('Mật khẩu không đúng');
            } else {
                saveUserLogin(res.data.others).then(() => {
                    navigation.navigate('Home');
                    setErrorContent('');
                    setUsername('');
                    setPassword('');
                });
            }
        });
    };

    return (
        <ImageBackground
            source={bgImage}
            resizeMode="cover"
            style={styles.image}
        >
            <View style={styles.container}>
                <View style={styles.panel}>
                    <Image
                        source={logoLogin}
                        resizeMode="stretch"
                        style={styles.logoLogin}
                    ></Image>
                    <Text style={styles.textPanel}>Đăng nhập</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.textField}>
                        <Image
                            style={styles.iconTextField}
                            source={userIcon}
                            resizeMode="stretch"
                        ></Image>
                        <TextInput
                            placeholder="Tên đăng nhập"
                            style={styles.input}
                            onChangeText={setUsername}
                            value={username}
                            autoCapitalize={false}
                        />
                    </View>
                    <View style={styles.textField}>
                        <Image
                            style={styles.iconTextField}
                            source={passIcon}
                            resizeMode="stretch"
                        ></Image>
                        <TextInput
                            placeholder="Mật khẩu"
                            style={styles.input}
                            onChangeText={setPassword}
                            value={password}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonSubmit}
                        title="ĐĂNG NHẬP"
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonLabel}> ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                    <Text style={styles.error}>{errorContent}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
    },
    panel: {
        marginTop: 65,
        flex: 1,
        alignItems: 'center',
    },
    logoLogin: {
        width: 220,
        height: 220,
    },
    textPanel: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 35,
        fontWeight: '700',
    },
    login: {
        flex: 1,
    },
    form: {
        flex: 2,
        marginTop: 70,
        marginLeft: 15,
        marginRight: 15,
    },
    textField: {
        position: 'relative',
        backgroundColor: '#fff',
        marginTop: 12,
        marginBottom: 12,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 7,
    },
    iconTextField: {
        position: 'absolute',
        top: 13,
        left: 15,
        width: 28,
        height: 26,
    },
    input: {
        borderRadius: 5,
        color: '#444',
        fontWeight: '600',
        borderWidth: 0,
        fontSize: 20,
        padding: 13,
        paddingLeft: 57,
    },
    buttonSubmit: {
        backgroundColor: '#E74C3C',
        marginTop: 30,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    buttonLabel: {
        textAlign: 'center',
        color: '#fff',
        borderRadius: 5,
        fontSize: 20,
        fontWeight: '700',
        padding: 10,
    },
    error: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        color: '#fff',
    },
});
