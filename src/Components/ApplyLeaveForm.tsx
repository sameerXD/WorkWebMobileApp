import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Button from './Button';
import {FormDropDown} from './FormDropDown';
import {dateSetSelection, leaveHistoyStatusOptions} from '../assets/constants';
import DatePicker from 'react-native-date-picker';
import {useSelector} from 'react-redux';
import {MultiSelectDropDown} from './MultiSelectDropDown';
interface ApplyFormProps {
  title: string;
  handleSubmit: (val: formValueType) => void;
  formInitialValues: formValueType;
  isLoading: boolean;
}
export interface formValueType {
  leaveType: '';
  leaveFromDate: '';
  leaveTillDate: '';
  applyTo: '';
  ccTo: string[];
  alternateNumber: '';
  reason: '';
}
export const ApplyLeaveForm = ({
  title,
  handleSubmit,
  formInitialValues,
  isLoading,
}: ApplyFormProps) => {
  const [date, setDate] = useState(new Date());
  const [activeDateCalender, setActiveDateCalender] = useState('');
  const [minimumDate, setMinimumDate] = useState<Date>();
  const [formValues, setFormValues] =
    useState<formValueType>(formInitialValues);
  const {employeeList} = useSelector(state => state.employeeList);

  const employeeEmailList = employeeList.map(item => item.officialEmail);
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 0.9, width: '100%', height: '100%', marginBottom: '3%'}}>
        <Text style={styles.inputTitle}>{'Type of Leave'}</Text>
        <FormDropDown
          handleSelectedValue={val => {
            setFormValues(prev => {
              return {...prev, leaveType: val};
            });
          }}
          listOptions={leaveHistoyStatusOptions}
        />
        <Text style={styles.inputTitle}>{'From Date'}</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          placeholderTextColor={'#000'}
          onChangeText={val => {
            setFormValues(prev => {
              return {...prev, leaveFromDate: val};
            });
            setActiveDateCalender(dateSetSelection.fromDate);
          }}
          onFocus={() => {
            setActiveDateCalender(dateSetSelection.fromDate);
          }}
          value={formValues.leaveFromDate}
          style={styles.inputStyle}
        />
        <Text style={styles.inputTitle}>{'To Date'}</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          placeholderTextColor={'#000'}
          onChangeText={val => {
            setFormValues(prev => {
              return {...prev, leaveTillDate: val};
            });
            setActiveDateCalender(dateSetSelection.tillDate);
          }}
          onFocus={() => {
            setActiveDateCalender(dateSetSelection.tillDate);
          }}
          value={formValues.leaveTillDate}
          style={styles.inputStyle}
        />
        <Text style={styles.inputTitle}>{'Apply To'}</Text>
        <FormDropDown
          handleSelectedValue={val => {
            setFormValues(prev => {
              return {...prev, applyTo: val};
            });
          }}
          listOptions={employeeEmailList}
        />
        <Text style={styles.inputTitle}>{'CC To'}</Text>
        <MultiSelectDropDown
          handleSelectedValue={val => {
            setFormValues(prev => {
              return {...prev, ccTo: val};
            });
          }}
          listOptions={employeeEmailList}
        />
        <Text style={styles.inputTitle}>{'Alt No'}</Text>
        <TextInput
          keyboardType="phone-pad"
          placeholder=""
          placeholderTextColor={'#000'}
          onChangeText={val => {
            setFormValues(prev => {
              return {...prev, alternateNumber: val};
            });
          }}
          style={styles.inputStyle}
        />
        <Text style={styles.inputTitle}>{'Reason'}</Text>
        <TextInput
          placeholder=""
          placeholderTextColor={'#000'}
          onChangeText={val => {
            setFormValues(prev => {
              return {...prev, reason: val};
            });
          }}
          multiline={true}
          style={styles.inputStyle}
        />
      </ScrollView>
      <Button
        handleSubmit={() => handleSubmit(formValues)}
        title="Apply"
        size="m"
        isLoading={isLoading}
      />
      <DatePicker
        modal
        open={activeDateCalender.length > 0}
        minimumDate={minimumDate}
        date={date}
        onConfirm={date => {
          setDate(date);
          if (activeDateCalender == dateSetSelection.fromDate) {
            setFormValues({
              ...formValues,
              leaveFromDate: `${date.getDate()}/${
                date.getMonth() + 1
              }/${date.getFullYear()}`,
            });
            setMinimumDate(date);
          } else if (activeDateCalender == dateSetSelection.tillDate) {
            setFormValues({
              ...formValues,
              leaveTillDate: `${date.getDate()}/${
                date.getMonth() + 1
              }/${date.getFullYear()}`,
            });
            setMinimumDate(new Date());
          }
          setActiveDateCalender('');
        }}
        onCancel={() => {
          if (activeDateCalender == dateSetSelection.fromDate) {
            setFormValues({...formValues, leaveFromDate: ''});
          }
          if (activeDateCalender == dateSetSelection.tillDate) {
            setFormValues({...formValues, leaveTillDate: ''});
          }
          setActiveDateCalender('');
        }}
        style={{zIndex: 100}}
        mode={'date'}
      />
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
    zIndex: -1,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    marginBottom: '5%',
    alignSelf: 'flex-start',
  },
  inputStyle: {
    borderWidth: 1.5,
    width: '100%',
    borderRadius: 10,
    borderColor: '#673AB7',
    marginVertical: '2%',
    paddingHorizontal: '3%',
    fontSize: 15,
    fontWeight: '600',
  },
  inputTitle: {
    color: '#000',
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
});
