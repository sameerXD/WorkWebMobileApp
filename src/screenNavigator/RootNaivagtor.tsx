import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackNavigator from './LoginStackNavigator';
import MainStackNavigator from './MainStackNavigator';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';
const RootNavigator = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        setIsLoading(true);
        AsyncStorage.getItem('token').then(data=>{
            if(data){
                dispatch({ type: 'USER_LOGGEDIN', payload: { isLoggedIn: true} }); 
            }
            setIsLoading(false);
        }).catch(error=>{
            console.log("error for Storage");
            setIsLoading(false);
        })
    },[])
    const Stack = createNativeStackNavigator();
    const isLoggedin = useSelector(state=>state.user.isLoggedIn)
    return (
        <NavigationContainer>
            {isLoading ? <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator
                animating={isLoading}
                size='large'
                color='#0000ff'
                />
            </View> :
            <Stack.Navigator  screenOptions={() => ({
                headerShown: false,
                gestureEnabled: true,
            })}>
                <Stack.Screen name="root" component={isLoggedin ? MainStackNavigator :LoginStackNavigator} />
            </Stack.Navigator>}
        </NavigationContainer>
    )

}

export default RootNavigator;


