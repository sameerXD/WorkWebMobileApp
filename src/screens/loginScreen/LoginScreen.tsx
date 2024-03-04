import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BackgroundImage from '../../Components/BackGroundImage';
import { LoginForm } from '../../Components/LoginForm';
import { SignUpForm } from '../../Components/SignUpForm';
import { ForgetPasswordForm } from '../../Components/ForgotPasswordForm';

const LoginScreen = ({ navigation }) => {
  const [activeForm, setActiveForm] = useState('login')
  const [forgetPasswordActive, setForgetPasswordActive] = useState(false)

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headingBox}>
          <Text style={styles.heading}>{"Work Web"}</Text>
        </View>
        {forgetPasswordActive ? <ForgetPasswordForm handleGoback={() => setForgetPasswordActive(false)} /> :
          (
            <>
              {activeForm == 'login' && <LoginForm handleForgetPassword={() => setForgetPasswordActive(true)} handlleSingupPressed={() => { setActiveForm('signUp') }} />}
              {activeForm == 'signUp' && <SignUpForm handlleLoginPressed={() => { setActiveForm('login') }} />}
            </>
          )}
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
    color: '#fff'
  },
  heading: {
    fontSize: 38,
    color: '#fff'
  },
  headingBox: {
    marginBottom: '2%'
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

export default LoginScreen;
