import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Button from './Button';
import {FormDropDown} from './FormDropDown';
import {leaveHistoyStatusOptions} from '../assets/constants';
interface ApplyFormProps {
  title: string;
  handleSubmit: () => void;
}
export const ApplyLeaveForm = ({title, handleSubmit}: ApplyFormProps) => {
  return (
    <View style={styles.formContainer}>
      <ScrollView style={{flex: 0.9, width: '100%'}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.inputTitle}>{'Type of Leave'}</Text>
        <FormDropDown
          handleSelectedValue={val => {
            console.log('Selcted Value Bro________', val);
          }}
          listOptions={leaveHistoyStatusOptions}
        />
        <Text style={styles.inputTitle}>{'From Date'}</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          placeholderTextColor={'#000'}
          onChangeText={val => {
            console.log(val);
          }}
          style={styles.inputStyle}
        />
        <Text style={styles.inputTitle}>{'To Date'}</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          placeholderTextColor={'#000'}
          onChangeText={val => {
            console.log(val);
          }}
          style={styles.inputStyle}
        />
        <Text style={styles.inputTitle}>{'Apply To'}</Text>
        <TextInput
          placeholder=""
          placeholderTextColor={'#000'}
          onChangeText={val => {
            console.log(val);
          }}
          style={styles.inputStyle}
        />
        <Text style={styles.inputTitle}>{'CC To'}</Text>
        <TextInput
          placeholder=""
          placeholderTextColor={'#000'}
          onChangeText={val => {
            console.log(val);
          }}
          style={styles.inputStyle}
        />
        <Text style={styles.inputTitle}>{'Alt No'}</Text>
        <TextInput
          placeholder=""
          placeholderTextColor={'#000'}
          onChangeText={val => {
            console.log(val);
          }}
          style={styles.inputStyle}
        />
        <Text style={styles.inputTitle}>{'Reason'}</Text>
        <TextInput
          placeholder=""
          placeholderTextColor={'#000'}
          onChangeText={val => {
            console.log(val);
          }}
          multiline={true}
          style={styles.inputStyle}
        />
      </ScrollView>
      <Button handleSubmit={handleSubmit} title="Apply" size="m" />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    height: '100%',
    paddingVertical: '8%',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    marginBottom: '5%',
  },
  inputStyle: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    borderColor: '#673AB7',
    marginVertical: '2%',
    paddingHorizontal: '3%',
  },
  inputTitle: {
    color: '#000',
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
});
