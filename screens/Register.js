import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    ImageBackground,
    StatusBar,
} from 'react-native';
import * as api from '../api';
import { CalenderRegister } from '../components/CalenderRegister';

export const Register = () => {
    const [calenderList, setCalenderList] = useState([]);

    useEffect(() => {
        api.getCalendarGuide().then((res) => {
            // console.log(res.data);
            setCalenderList(
                res.data.sort(
                    (a, b) =>
                        Date.parse(a.ldt_lichkhoihanh.lkh_ngaykhoihanh) -
                        Date.parse(b.ldt_lichkhoihanh.lkh_ngaykhoihanh)
                )
            );
        });
    }, []);

    return (
        <ImageBackground
            source={require('../images/2752387_qbfjas.jpg')}
            resizeMode="cover"
            style={styles.image}
        >
            {/* <StatusBar style={styles.statusBar} /> */}
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Text style={styles.labelPanel}>ĐĂNG KÝ DẪN TOUR</Text>
                <View style={styles.calenderList}>
                    {calenderList.map((calendar, index) => (
                        <CalenderRegister
                            key={index}
                            calendar={calendar}
                        ></CalenderRegister>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 45,
    },
    labelPanel: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '700',
    },
    calenderList: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
    },
});
