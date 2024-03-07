import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, TextInput, TouchableWithoutFeedback, StyleSheet, Alert, View } from 'react-native'
import { validateEmail } from '..';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

interface LoginFormProps {
    handleForgetPassword: () => void;
    handlleSingupPressed: () => void;
}
export const LoginForm = ({ handleForgetPassword, handlleSingupPressed }: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    useFocusEffect(
        React.useCallback(() => {
            setEmail('');
            setPassword('');
        }, []));
    const handleLogin = () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Error', 'Please enter both email and password');
            return;
        }

        if (validateEmail(email) && password.length > 8 && password.length < 14) {
            navigation.navigate('HomeScreen')
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    };
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(val) => setEmail(val)}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(val) => setPassword(val)}
                secureTextEntry
                placeholderTextColor="#fff"
                value={password}
            />
            <TouchableWithoutFeedback style={styles.hightlightTextBox} onPress={handleForgetPassword}>
                <Text style={styles.hightlightText}>{"Forget Password?"}</Text>
            </TouchableWithoutFeedback>
            <Button title={'Submit'} size='l' handleSubmit={handleLogin} />
            <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                <Text style={{ color: '#fff', fontWeight: '600' }}>
                    {`Don't have an account ? `}
                </Text>
                <Text onPress={handlleSingupPressed} style={{ color: '#fff', fontWeight: '600', textDecorationLine: 'underline', fontSize: 15 }}>{'SingnUp'}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: '#fff'
    },
    hightlightText: {
        color: '#EC2727',
        alignSelf: 'flex-start',
        marginBottom: '2%',
        fontWeight: 'bold'
    },
    hightlightTextBox: {
        alignSelf: 'flex-start',
    }
});