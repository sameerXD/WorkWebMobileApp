import React from 'react'
import { Text, View } from 'react-native';
interface AttendaceStatusBarProps {
    title:string;
    checkinTime:string;
    checkoutTime:string;
}
export const AttendaceStatusBar =({title,checkinTime, checkoutTime}:AttendaceStatusBarProps)=>{
    return(
        <View style={{width:'48%',justifyContent:'space-between', backgroundColor:'#F6F4F9', padding:'2%', borderRadius:5, height:'80%', marginVertical:'2%'}}>
            <Text style={{color:'#000'}}>{title}</Text>
            {<View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{color:'#000'}}>{`In \n${checkinTime}`}</Text>
                    <View style={{width:`${65*(0.9)}%`, height:5,backgroundColor:'#673AB7',marginVertical:'3%', position:'absolute', marginHorizontal:'9%'}}/>
                <Text style={{color:'#000'}}>{`Out \n${checkoutTime}`}</Text>
            </View>}
            
        </View>
    )
}