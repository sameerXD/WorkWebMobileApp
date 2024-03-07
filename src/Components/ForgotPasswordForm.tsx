import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, TextInput, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native'
import { validateEmail } from '..';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
interface ForgorPasswordFormProps {
    handleGoback: () => void;
}
export const ForgetPasswordForm = ({ handleGoback }: ForgorPasswordFormProps) => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    useFocusEffect(
        React.useCallback(() => {
            setEmail('');
        }, []));
    const handleForgetPasswordPressed = () => {
        if (!email.trim()) {
            Alert.alert('Error', 'Please enter both email');
            return;
        }

        if (validateEmail(email)) {
            navigation.navigate('HomeScreen')
        } else {
            Alert.alert('Error', 'Invalid email');
        }
    };
    return (
        <>
            <Icon
                style={{ alignSelf: 'flex-end', marginRight: '2%' }}
                name='cross'
                size={30}
                color={'#fff'}
                onPress={handleGoback}
            />
            <Text style={styles.subTitleText}>{"Forget Password"}</Text>
            <Text style={styles.normalText}>{"Enter your email and we will send you a link to reset your password"}</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(val) => setEmail(val)}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#fff"
            />
            <Button title={'Request'} size={'l'} handleSubmit={handleForgetPasswordPressed} />
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        marginVertical: '5%',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: '#fff',
    },
    hightlightText: {
        color: '#EC2727',
        alignSelf: 'flex-start',
        marginBottom: '2%',
        fontWeight: 'bold'
    },
    subTitleText: {
        alignSelf: 'flex-start',
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
    },
    normalText: {
        alignSelf: 'flex-start',
        color: '#fff',
        // fontSize: 20,
        // fontWeight: '600'
    }
});