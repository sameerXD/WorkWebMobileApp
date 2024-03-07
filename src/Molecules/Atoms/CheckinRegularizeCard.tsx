import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../Components/Button'
interface CheckinRegularizeCardProps {
    buttonTitle: string,
    dateTitle:string,
    texts:[string, string],
    titleColor?: string
}
export const CheckinRegularizeCard =({buttonTitle,dateTitle, texts, titleColor}:CheckinRegularizeCardProps)=>{
    return(
           <View style={styles.cardBox}>
                <View style={styles.timeTextBox}>
                    <Text style={[styles.cardTitle, {color:titleColor ? titleColor : '#000', fontWeight: titleColor ? '500': '600'}]}>{dateTitle}</Text>
                    {texts?.map(item=>{
                        return(
                            <Text style={styles.cardTextNormal}>{item}</Text>
                        )
                    })}
                </View>
                <View style={styles.buttonBox}>
                    <Button size={'sm'} ghost={true} title={buttonTitle} handleSubmit={()=>{console.log("Checked In Pressed")}}/>
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
        marginBottom:'3%'
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