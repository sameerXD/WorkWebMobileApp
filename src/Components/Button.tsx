import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native';
interface ButtonProps {
    title: string;
    handleSubmit: ()=>void;
    color?: string;
    size: 'l'|'m'|'sm';
    ghost?: boolean;
}
function Button(props:ButtonProps) {
    const { title, handleSubmit, color, size, ghost } = props;
    return (
        <TouchableWithoutFeedback onPress={handleSubmit}>
            <View style={{ width: size == 'l'?'95%':size == 'm' ? '100%' : '100%', backgroundColor: ghost ? '#fff' : color ? color :'#673AB7', borderRadius: size == 'l' ? 30 : 10, justifyContent: 'center', alignItems: 'center', borderColor: ghost ? '#673AB7':'#fff', borderWidth: 1 , paddingVertical:size == 'l' ? '3%':'6%'}}>
                <Text style={{ color: ghost ? '#673AB7':'#fff', fontSize: 20 }}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Button;