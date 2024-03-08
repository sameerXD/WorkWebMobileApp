import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenHeight } from '../assets/constants'

interface CardBoxProps {
    title: string;
    date: string;
    status: string;
}
export const CardBox =({title, date, status}:CardBoxProps)=>{
    return(
        <View style={styles.box}>
            <Text style={styles.titileText}>{title}</Text>
            <Text style={styles.normalText}>{`Date- ${date}`}</Text>
            <Text style={styles.normalText}>{`Status- ${status}`}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    box:{
        width:'48%',
        height:ScreenHeight*0.11,
        borderRadius:10,
        padding:'3%',
        backgroundColor:'#F6F4F9',
        justifyContent:'space-evenly'
    },
    titileText:{
        fontWeight:'600',
        color:'#000',
        fontSize:15
    },
    normalText:{
        color:'#000',
        fontSize:14
    }
})