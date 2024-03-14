import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../../Components/Header'


export const LeaveScreen =()=>{
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.leaveContainer}>
                <Text style={styles.title}>{'Leave Balance'}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    leaveContainer:{
        flex:1,
        padding:'2%'
    },
    title:{
        color:'#000',
        fontWeight:'600',
        fontSize:17
    }
})