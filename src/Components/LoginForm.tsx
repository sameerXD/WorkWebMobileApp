import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, TextInput, TouchableWithoutFeedback, StyleSheet, Alert, View } from 'react-native'
import { validateEmail } from '..';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, getUserLoggedIn } from '../redux/actions/getUserData';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginFormProps {
    handleForgetPassword: () => void;
    handlleSingupPressed: () => void;
}
export const LoginForm = ({ handleForgetPassword, handlleSingupPressed }: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [jwtToken, setJwtToken] = useState('');
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const dispatch = useDispatch();
    useFocusEffect(
        React.useCallback(() => {
            setEmail('');
            setPassword('');
        }, []));
    const handleLogin =async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Error', 'Please enter both email and password');
            return;
        }

        if (validateEmail(email) && password.length > 2 && password.length < 14) {
            const result = await getUserLoggedIn({email:email, password:password})
            .then( data=>{
                if(data?.data){
                        try {
                         AsyncStorage.setItem(
                            'token',
                            data?.data?.token,
                            );
                        } catch(error){
                            Alert.alert("Errors",error);
                        }
                        updateUser();
                        {data?.data?.token && setJwtToken(data?.data?.token)}
                    }
                    if(data?.errors){
                        Alert.alert("Errors",data?.errors[0]?.message);
                    }
                }
            ).catch( error=>{
                    Alert.alert('Errors',error);
                })
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    };
    const updateUser =async () => {
      if(jwtToken) {
         getUserData();
         dispatch({ type: 'USER_LOGGEDIN', payload: { isLoggedIn: true} });
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