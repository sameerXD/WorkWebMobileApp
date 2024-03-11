import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../Components/Button'
import { useDispatch, useSelector } from 'react-redux'

export const LogOutScreen = ()=>{
    const dispatch = useDispatch();
    const loggedIn = useSelector(state=>state.user.isLoggedIn);
    const handleLogoutUser =()=>{
        dispatch({type:"USER_LOGGEDIN", payload:{ isLoggedIn: false}})
    }
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>{"Logout"}</Text>
                <Button title={'Logout'} size='l' handleSubmit={handleLogoutUser}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    box:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    title:{
        fontSize:20,
        color:'#000'
    }
})