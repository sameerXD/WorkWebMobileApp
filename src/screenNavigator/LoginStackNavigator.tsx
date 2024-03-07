import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { BottomTabs } from './BottomTabNavigator';
const LoginStackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator 
                screenOptions={() => ({
                    headerShown: false,
                    gestureEnabled: true,
                })}>
                <Stack.Screen name="Login" component={HomeScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="WorkspaceScreen" component={BottomTabs} />
            </Stack.Navigator>
    )

}

export default LoginStackNavigator;


