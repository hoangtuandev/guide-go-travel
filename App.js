import { React, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login } from './screens/Login';
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { Register } from './screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
    // const [userToken, setUserToken] = useState(async () =>
    //     JSON.parse(await AsyncStorage.getItem('User'))
    // );

    // useEffect(() => {
    //     getUserLogin();
    // }, [AsyncStorage]);

    // const getUserLogin = async () => {
    //     try {
    //         const userString = await AsyncStorage.getItem('User');
    //         setUserToken(JSON.parse(userString));
    //     } catch (error) {
    //         console.log(error);
    //         // Alert.alert('Error', '' + error.message, [{ Text: 'OK' }]);
    //     }
    // };
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Register'}>
                <Stack.Screen
                    name="Login"
                    options={{
                        header: () => <View></View>,
                    }}
                    component={Login}
                />
                <Stack.Screen
                    name="Home"
                    options={{
                        header: () => <View></View>,
                    }}
                    component={Home}
                />
                <Stack.Screen
                    name="Profile"
                    options={{
                        header: () => <View></View>,
                    }}
                    component={Profile}
                />
                <Stack.Screen
                    name="Register"
                    options={{
                        header: () => <View></View>,
                    }}
                    component={Register}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
