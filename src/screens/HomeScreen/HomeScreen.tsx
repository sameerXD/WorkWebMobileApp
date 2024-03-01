import React, { useState } from 'react'
import { Text, View } from 'react-native';
import Button from '../../Components/Button';
function HomeScreen({navigation}) {
    const goBack=()=>{navigation.goBack()}
    return ( 
        <View style={{alignItems:'center', paddingTop:'10%', flex:1}}>

            <Text>{"HomeScreen"}</Text>
            <Button title={'GoBack'} handleSubmit={goBack}/>
        </View>
     );
}

export default HomeScreen;
