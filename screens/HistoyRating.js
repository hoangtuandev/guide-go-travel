import { React, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CalendarFinish } from '../components/CalendarFinish';
import * as api from '../api';
import { RatingItem } from '../components/RatingItem';

export const HistoryRating = ({ navigation }) => {
    const [userLogined, setUserLogined] = useState(null);
    const [ratingList, setRatingList] = useState([]);

    useEffect(() => {
        getUserLogin();
    }, []);

    useEffect(() => {
        userLogined &&
            api
                .getRatingGuideByGuideAccount({ _id: userLogined._id })
                .then((res) => {
                    setRatingList(res.data);
                });
    }, [userLogined]);

    const handleBackHome = () => {
        navigation.navigate('Profile');
    };

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

    return (
        <ImageBackground
            source={require('../images/2752387_qbfjas.jpg')}
            resizeMode="cover"
            style={styles.image}
        >
            <TouchableOpacity style={styles.backHome} onPress={handleBackHome}>
                <Image
                    style={styles.homeButton}
                    source={require('../images/spacefm_103907.png')}
                ></Image>
            </TouchableOpacity>
            <Text style={styles.labelPanel}>LỊCH SỬ ĐÁNH GIÁ</Text>
            {userLogined && (
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {ratingList.map((rating, index) => (
                        <RatingItem key={index} rating={rating} />
                    ))}
                </ScrollView>
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
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
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
        marginTop: 45,
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '700',
    },
});
