import { React } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const bgImage = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664079867/GoTravel/2752387_qbfjas.jpg',
};
const iconStar = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664159533/GoTravel/star-alt-icon_34347_xjwyys.png',
};

const iconRight = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664162059/GoTravel/arrow_right_chevron_icon_176220_kw36qt.png',
};

export const UserHome = (props) => {
    const { userLogined, handleViewProfile } = props;

    const handleClickViewProfile = () => {
        handleViewProfile();
    };

    return (
        <ImageBackground
            source={bgImage}
            resizeMode="cover"
            style={styles.image}
        >
            {userLogined && (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.avatar}>
                        <Image
                            source={{
                                uri: userLogined.tkhdv_anhdaidien,
                            }}
                            style={styles.imgAvatar}
                        ></Image>
                    </TouchableOpacity>
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
                    <TouchableOpacity
                        style={styles.buttonProfile}
                        onPress={handleClickViewProfile}
                    >
                        <Text style={styles.labelBtn}>HỒ SƠ</Text>
                        <Image
                            source={iconRight}
                            style={styles.iconRight}
                        ></Image>
                    </TouchableOpacity>
                </View>
            )}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imgAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 40,
    },
    nameGuide: {
        color: '#fff',
        marginTop: 10,
        fontSize: 22,
        fontWeight: '600',
    },
    rating: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
    },
    iconStar: {
        width: 23,
        height: 23,
        margin: 3,
    },
    buttonProfile: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 15,
        paddingRight: 10,
        marginBottom: 10,
        marginTop: 10,
    },
    labelBtn: {
        color: '#2E86C1',
        fontSize: 15,
        fontWeight: '800',
    },
    iconRight: {
        width: 12,
        height: 12,
        marginLeft: 5,
    },
});
