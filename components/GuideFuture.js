import { React } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const iconCalendar = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664162877/GoTravel/calendar-icon_34471_hnbkuq.png',
};

const iconRight = {
    uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664165926/GoTravel/right_arrow_icon_225540_uoeyqb.png',
};

export const GuideFuture = () => {
    return (
        <View style={styles.container}>
            <Image source={iconCalendar} style={styles.iconCalendar}></Image>
            <Text style={styles.date}>28/07/2022</Text>
            <TouchableOpacity>
                <Image source={iconRight} style={styles.iconRight}></Image>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 9,
        marginBottom: 9,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 0,
        borderRadius: 50,
        backgroundColor: '#EBF5FB',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    iconCalendar: {
        width: 30,
        height: 30,
    },
    date: {
        color: '#333',
        fontSize: 19,
        fontWeight: '600',
    },
    iconRight: {
        width: 20,
        height: 15,
    },
});
