import React from 'react'
import { LogBox, StyleSheet, Text, View } from 'react-native'
import { Header } from '../../Components/Header'
import { LeaveCard } from '../../Components/LeaveCard'
import { useSelector } from 'react-redux'
import Button from '../../Components/Button'


export const LeaveScreen =()=>{
    const userData = useSelector(state => state.user.userData);
    const leaveList = Object.entries(userData?.leave).map(([k,v]) => {return [k, v]});
    
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.leaveContainer}>
                <Text style={styles.title}>{'Leave Balance'}</Text>
                <View style={{flexDirection:'row', height:'50%', justifyContent:'space-between'}}>
                <LeaveCard leaveName={'Total'} leaveBalance={leaveList[0][1] + Math.ceil(Number(leaveList[1][1]))}/>
                {leaveList.map(item=>{
                    if(item[0] != 'casualLeave'){
                    return <LeaveCard leaveName={item[0]} leaveBalance={item[1]}/>
                    }})}

                </View>
                    <Button title={'Apply Leave'} handleSubmit={()=>{}} size='sm' />
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
        // flex:1,
        padding:'2%',
        justifyContent:'space-between',
        height:'40%'
    },
    title:{
        color:'#000',
        fontWeight:'600',
        fontSize:17
    }
})