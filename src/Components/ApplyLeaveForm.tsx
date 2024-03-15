import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Button from './Button'
interface ApplyFormProps {
    title: string;
    handleSubmit:()=>void;
}
export const ApplyLeaveForm =({title, handleSubmit}:ApplyFormProps)=>{
    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.inputTitle}>{"Type of Leave"}</Text>
            <TextInput 
                placeholder='Alt No'
                placeholderTextColor={'#000'} 
                onChangeText={val=>{console.log(val)}}
                style={styles.inputStyle}/>
            <Text style={styles.inputTitle}>{"From Date"}</Text>
            <TextInput 
                placeholder='Reason'
                placeholderTextColor={'#000'} 
                onChangeText={val=>{console.log(val)}}
                style={styles.inputStyle}/>
            <Text style={styles.inputTitle}>{"To Date"}</Text>
            <TextInput 
                placeholder='Type'
                placeholderTextColor={'#000'} 
                onChangeText={val=>{console.log(val)}}
                style={styles.inputStyle}/>
            <Text style={styles.inputTitle}>{"To Date"}</Text>
            <TextInput 
                placeholder='Type'
                placeholderTextColor={'#000'} 
                onChangeText={val=>{console.log(val)}}
                style={styles.inputStyle}/>
            <Text style={styles.inputTitle}>{"To Date"}</Text>
            <TextInput 
                placeholder='Type'
                placeholderTextColor={'#000'} 
                onChangeText={val=>{console.log(val)}}
                style={styles.inputStyle}/>
            <Text style={styles.inputTitle}>{"To Date"}</Text>
            <TextInput 
                placeholder='Type'
                placeholderTextColor={'#000'} 
                onChangeText={val=>{console.log(val)}}
                style={styles.inputStyle}/>
            <Text style={styles.inputTitle}>{"To Date"}</Text>
            <TextInput 
                placeholder='Type'
                placeholderTextColor={'#000'} 
                onChangeText={val=>{console.log(val)}}
                style={styles.inputStyle}/>
            <Text style={styles.inputTitle}>{"To Date"}</Text>
            <TextInput 
                placeholder='Type'
                placeholderTextColor={'#000'} 
                onChangeText={val=>{console.log(val)}}
                style={styles.inputStyle}/>
            <Text style={styles.inputTitle}>{"To Date"}</Text>
            <TextInput 
                placeholder='Type'
                placeholderTextColor={'#000'} 
                onChangeText={val=>{console.log(val)}}
                style={styles.inputStyle}/>
            <Button handleSubmit={handleSubmit} title='Apply' size='m'/>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer:{
        height:'100%',
        paddingVertical:'8%',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingHorizontal:'5%'
    },
    title:{
        fontSize:20,
        color:'#000',
        fontWeight:'600'
    },
    inputStyle:{
        borderWidth:1,
        width:'100%',
        borderRadius:10,
        borderColor:'#673AB7',
        marginVertical:'2%'
    },
    inputTitle:{
        color:'#000',
        alignSelf:'flex-start',
        fontWeight:'600'
    }
})