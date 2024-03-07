import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../Components/Button'
export const CheckinRegularizeCard =()=>{
    return(
           <View style={styles.cardBox}>
                <View style={styles.timeTextBox}>
                    <Text style={styles.cardTitle}>{"Date: 4 March 2024"}</Text>
                    <Text style={styles.cardTextNormal}>{'Monday/ General'}</Text>
                    <Text style={styles.cardTextNormal}>{'Working Hours - 05:30'}</Text>
                </View>
                <View style={styles.buttonBox}>
                    <Button size={'sm'} ghost={true} title={'Check In'} handleSubmit={()=>{console.log("Checked In Pressed")}}/>
                </View>
           </View> 
          )}

const styles = StyleSheet.create({
    cardBox:{
        width:'100%', 
        backgroundColor:'#F6F4F9', 
        paddingHorizontal:'2%',
        paddingVertical:'4%',
        flexDirection:'row',
        borderRadius:10,
        marginVertical:'2%'
    },
    timeTextBox:{
        width:'65%'
    },
    cardTitle:{
        fontSize:15,
        fontWeight:'600',
        marginBottom:'3%',
        color:'#000'
    },
    cardTextNormal:{
        color:'#000'
    },
    buttonBox:{ 
        width:'35%', 
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        marginRight:'5%'
    }
})