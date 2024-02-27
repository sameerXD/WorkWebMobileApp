import React, { useState } from 'react'
import LoginScreen from '../loginScreen/LoginScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
const RootNavigator=()=>{
    const [isLoggedin, setIsLoggedin] = useState(false);
    return (isLoggedin ?<LoginScreen/>:<HomeScreen />)
    
}

export default RootNavigator;