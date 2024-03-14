import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, TextInput, TouchableWithoutFeedback, StyleSheet, Alert, View } from 'react-native'
import { validateEmail } from '..';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, getUserLoggedIn } from '../redux/actions/getUserData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ViewIcon  from 'react-native-vector-icons/Feather'

interface LoginFormProps {
    handleForgetPassword: () => void;
    handlleSingupPressed: () => void;
}
export const LoginForm = ({ handleForgetPassword, handlleSingupPressed }: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true)
    const isLoading = useSelector(state => state.user.isLoading);
    const dispatch = useDispatch();
    useFocusEffect(
        React.useCallback(() => {
            setEmail('');
            setPassword('');
        }, []));

    const handleLogin = async () => {
        dispatch({ type: 'USER_LOGINED_LOADING', payload: { isLoading: true } })
        if (!email.trim() || !password.trim()) {
            Alert.alert('Error', 'Please enter both email and password', [
                {
                    text: 'ok',
                    onPress: () => dispatch({ type: 'USER_LOGINED_LOADING', payload: { isLoading: false } })
                }
            ]);
            return;
        }

        if (validateEmail(email) && password.length > 2 && password.length < 25) {
            const result = await getUserLoggedIn({ email: email, password: password })
                .then(async data => {
                    if (data?.data) {
                        try {
                            AsyncStorage.setItem(
                                'token',
                                data?.data?.token,
                            );
                        } catch (error) {
                            Alert.alert("Errors", error, [
                                {
                                    text: 'ok',
                                    onPress: () => dispatch({ type: 'USER_LOGINED_LOADING', payload: { isLoading: false } })
                                }
                            ]);
                        }
                        await AsyncStorage.getItem('token').then(data=>{
                            updateUser(data);
                        })
                    }
                    if (data?.errors) {
                        Alert.alert("Errors", data?.errors[0]?.message, [
                            {
                                text: 'ok',
                                onPress: () => dispatch({ type: 'USER_LOGINED_LOADING', payload: { isLoading: false } })
                            }
                        ]);
                    }
                }
                ).catch(error => {
                    Alert.alert('Errors', error, [
                        {
                            text: 'ok',
                            onPress: () => dispatch({ type: 'USER_LOGINED_LOADING', payload: { isLoading: false } })
                        }
                    ]);
                })
        } else {
            Alert.alert('Error', 'Invalid email or password', [
                {
                    text: 'ok',
                    onPress: () => dispatch({ type: 'USER_LOGINED_LOADING', payload: { isLoading: false } })
                }
            ]);
        }
    };
    const updateUser = async (jwtToken:string) => {
        if (jwtToken) {
           await getUserData();
            dispatch({ type: 'USER_LOGINED_LOADING', payload: { isLoading: false } })
            dispatch({ type: 'USER_LOGINED', payload: { isLogined: true } });
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
            <View style={styles.passwordBox}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    onChangeText={(val) => setPassword(val)}
                    secureTextEntry={hidePassword}
                    placeholderTextColor="#fff"
                    value={password}
                />
                <ViewIcon name='eye' color={'#fff'} size={25} onPress={() => setHidePassword(!hidePassword)} />
            </View>
            <TouchableWithoutFeedback style={styles.hightlightTextBox} onPress={handleForgetPassword}>
                <Text style={styles.hightlightText}>{"Forget Password?"}</Text>
            </TouchableWithoutFeedback>
            <Button title={'Submit'} isLoading={isLoading} size='l' handleSubmit={handleLogin} />
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
    },
    passwordInput: {
        width: '90%',
        color: '#fff',
    },
    passwordBox: {
        width: '100%',
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});