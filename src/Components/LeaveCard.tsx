import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
interface LeaveCardProps {
    leaveName: string ;
    leaveBalance: string ;
}
export const LeaveCard =({ leaveName,leaveBalance}:LeaveCardProps)=>{
    return(
        <View style={styles.cardBox}>
            <Text style={styles.balanceText}>{Math.ceil(leaveBalance)}</Text>
            <Text>{leaveName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBox:{
        width:'30%',
        height:'100%',
        borderRadius:8,
        borderColor:'#673AB7',
        borderWidth:1,
        marginVertical:'2%',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:'4%'
    },
    balanceText:{
        fontWeight:'600',
        fontSize:30
    }
})