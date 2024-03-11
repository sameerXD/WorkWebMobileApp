import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { BottomTabs } from './BottomTabNavigator';
const MainStackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator  
                screenOptions={() => ({
                    headerShown: false,
                    gestureEnabled: true,
                })}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="WorkspaceScreen" component={BottomTabs} />
            </Stack.Navigator>
    )

}

export default MainStackNavigator;


