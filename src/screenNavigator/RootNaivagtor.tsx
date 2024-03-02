import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackNavigator from './LoginStackNavigator';
import MainStackNavigator from './MainStackNavigator';
const RootNavigator = () => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={() => ({
                headerShown: false,
                gestureEnabled: true,
            })}>
                <Stack.Screen name="root" component={isLoggedin ? MainStackNavigator :LoginStackNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default RootNavigator;


