import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, Pressable, TouchableWithoutFeedback } from 'react-native';
import Button from '../../Components/Button';
import { useFocusEffect } from '@react-navigation/native';
import { validateEmail } from '../..';
import BackgroundImage from '../../Components/BackGroundImage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
const LoginComponent =()=>{
 return(null) 
}
  return (
    <BackgroundImage>
    <View style={styles.container}>
        <View style={styles.headingBox}>
            <Text style={styles.heading}>{"Work Web"}</Text>
        </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(val)=>setEmail(val)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#fff" 
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(val)=>setPassword(val)}
        secureTextEntry
        placeholderTextColor="#fff" 
        value={password}
      />
      <TouchableWithoutFeedback style={styles.hightlightTextBox} onPressIn={()=>{console.log("*)*()*)*)*)*)(")}}>
      <Text style={styles.hightlightText}>{"Forget Password?"}</Text>
      </TouchableWithoutFeedback>
        <Button title={'Submit'} handleSubmit={handleLogin}/>
    </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    placeholderTextColor:'#fff',
    color:'#fff'
  },
  heading: {
    fontSize:38,
    color:'#fff'
  },
  headingBox: {
    marginBottom:'10%'
  },
  hightlightText:{
    color:'red',
    alignSelf:'flex-start',
    marginBottom:'2%'
  },
  hightlightTextBox:{
    alignSelf:'flex-start',
  }
});

export default LoginScreen;
