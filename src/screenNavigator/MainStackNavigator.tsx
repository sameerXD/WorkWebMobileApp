import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { WorkspaceScreen } from '../screens/WorkSpaceScreen/WorkSpaceScreen';
const MainStackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator  
                screenOptions={() => ({
                    headerShown: false,
                    gestureEnabled: true,
                })}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="WorkspaceScreen" component={WorkspaceScreen} />
            </Stack.Navigator>
    )

}

export default MainStackNavigator;


