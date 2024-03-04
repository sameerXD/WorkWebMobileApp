import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { TextInput, StyleSheet, Alert, Text, View } from 'react-native'
import { validateEmail } from '..';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';
interface SignupFormProps {
    handlleLoginPressed: () => void;
}
export const SignUpForm = ({ handlleLoginPressed }: SignupFormProps) => {
    const [compName, setcompName] = useState('');
    const [compEmail, setcompEmail] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const navigation = useNavigation();
    useFocusEffect(
        React.useCallback(() => {
            setcompEmail('');
            setaddress('');
            setcompName('');
            setphone('');
        }, []));
    const HandleSignUp = () => {
        if (!compEmail.trim() || !phone.trim() || !address.trim() || !compName.trim()) {
            Alert.alert('Error', 'Please fill all the values');
            return;
        }
        if (validateEmail(compEmail) && address.length > 4 && phone.length > 10 && compName.length > 4) {
            navigation.navigate('HomeScreen')
        } else {
            Alert.alert('Error', 'Invalid Company Name or Company Email, Phone, Addrress');
        }
    };
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Company Name"
                onChangeText={(val) => setcompName(val)}
                value={compName}
                autoCapitalize="words"
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                placeholder="Company Email"
                onChangeText={(val) => setcompEmail(val)}
                value={compEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                onChangeText={(val) => setphone(val)}
                value={phone}
                keyboardType="numeric"
                autoCapitalize="none"
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                placeholder="Company Address"
                onChangeText={(val) => setaddress(val)}
                placeholderTextColor="#fff"
                value={address}
            />
            <Button color={'#FFC727'} title={'Get Started'} handleSubmit={HandleSignUp} />
            <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                <Text style={{ color: '#fff', fontWeight: '600' }}>
                    {`Already have an account ? `}
                </Text>
                <Text onPress={handlleLoginPressed} style={{ color: '#fff', fontWeight: '600', textDecorationLine: 'underline', fontSize: 15 }}>{'Login'}</Text>
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
        color: '#fff',
    },
    hightlightText: {
        color: 'red',
        alignSelf: 'flex-start',
        marginBottom: '2%'
    },
    hightlightTextBox: {
        alignSelf: 'flex-start',
    }
});