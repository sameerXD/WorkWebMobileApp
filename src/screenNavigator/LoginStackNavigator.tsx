import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import { BottomTabs } from './BottomTabNavigator';
const LoginStackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator 
                screenOptions={() => ({
                    headerShown: false,
                    gestureEnabled: true,
                })}>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
    )

}

export default LoginStackNavigator;


