import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native';
function Button(props) {
    const { title, handleSubmit } =props;
    return (  
        <TouchableWithoutFeedback onPress={handleSubmit}>
            <View style={{width:'95%', height:'7%', backgroundColor:'#673AB7', borderRadius:25, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#fff', fontSize:17}}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Button;