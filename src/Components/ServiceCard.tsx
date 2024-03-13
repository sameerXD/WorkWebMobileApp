import React, { FC, ReactElement } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { ScreenWidth } from '../assets/constants'
interface serviceCardProps {
    name:string;
    icon:Element;
    handleServicePressed:()=>void;
}
export const ServiceCard =({name, icon, handleServicePressed}:serviceCardProps)=>{
    return(
        <TouchableWithoutFeedback onPress={handleServicePressed}>
        <View style={{ borderRadius:10, margin:'1%', borderColor:'#D9D9D9',borderWidth:1, width:ScreenWidth*0.3, height:ScreenWidth*0.32,alignItems:'center', padding:'2%', backgroundColor:'#fff'}}>
            {icon}
            <Text style={{textAlign:'center', color:'#000'}}>{name}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}