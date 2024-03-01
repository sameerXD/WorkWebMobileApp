import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, Pressable, TouchableWithoutFeedback } from 'react-native';
import Button from '../../Components/Button';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    
    if (email === 'user@example.com' && password === 'password') {
      Alert.alert('Success', 'Login successful');
    } else {
      Alert.alert('Error', 'Invalid email or password');
    }
  };
const LoginComponent =()=>{
 return(null) 
}
  return (
    <View style={styles.container}>
        <View style={styles.headingBox}>
            <Text style={styles.heading}>{"Work Web"}</Text>
        </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableWithoutFeedback style={styles.hightlightTextBox} onPressIn={()=>{console.log("*)*()*)*)*)*)(")}}>
      <Text style={styles.hightlightText}>{"Forget Password?"}</Text>
      </TouchableWithoutFeedback>
        <Button title={'Submit'} handleSubmit={()=>navigation.navigate('HomeScreen')}/>
    </View>
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
  },
  heading: {
    fontSize:38,
    color:'#000'
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
