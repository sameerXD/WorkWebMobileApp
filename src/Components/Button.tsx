import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native';
function Button(props) {
    const { title, handleSubmit, color } = props;
    return (
        <TouchableWithoutFeedback onPress={handleSubmit}>
            <View style={{ width: '95%', height: '7%', backgroundColor: color ? color : '#673AB7', borderRadius: 25, justifyContent: 'center', alignItems: 'center', borderColor: '#fff', borderWidth: 1 }}>
                <Text style={{ color: '#fff', fontSize: 20 }}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Button;