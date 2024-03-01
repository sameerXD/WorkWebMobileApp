import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
const LoginStackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator 
                screenOptions={() => ({
                    headerShown: false,
                    gestureEnabled: true,
                })}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
    )

}

export default LoginStackNavigator;


