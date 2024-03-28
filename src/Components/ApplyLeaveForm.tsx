import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from './Button';
import {FormDropDown} from './FormDropDown';
import {dateSetSelection, leaveHistoyStatusOptions} from '../assets/constants';
import DatePicker from 'react-native-date-picker';
import {useSelector} from 'react-redux';
import {MultiSelectDropDown} from './MultiSelectDropDown';
import Icon from 'react-native-vector-icons/AntDesign';
interface ApplyFormProps {
  title: string;
  handleSubmit: (val: formValueType) => void;
  formInitialValues: formValueType;
  isLoading: boolean;
  handleFormClose: () => void;
}
export interface formValueType {
  leaveType: '';
  leaveFromDate: Date | '';
  leaveTillDate: Date | '';
  applyTo: '';
  ccTo: string[];
  alternateNumber: '';
  reason: '';
}
export const ApplyLeaveForm = ({
  title,
  handleSubmit,
  formInitialValues,
  handleFormClose,
  isLoading,
}: ApplyFormProps) => {
  const [date, setDate] = useState(new Date());
  const [activeDateCalender, setActiveDateCalender] = useState('');
  const [minimumDate, setMinimumDate] = useState<Date>();
  const [formValues, setFormValues] =
    useState<formValueType>(formInitialValues);
  const {employeeList} = useSelector(state => state.employeeList);
  const leaveTypes = ['sick-leave', 'earned-leave', 'leave-without-pay'];

  const employeeEmailList = employeeList.map(item => item.officialEmail);
  return (
    <View style={styles.formContainer}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
        <Icon
          onPress={handleFormClose}
          name={'close'}
          size={25}
          color={'#000'}
        />
      </View>
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
          listOptions={leaveTypes}
        />
        <Text style={styles.inputTitle}>{'From Date'}</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          placeholderTextColor={'#000'}
          onChangeText={val => {
            setFormValues(prev => {
              return {...prev, leaveFromDate: `${new Date(val)}`};
            });
            setActiveDateCalender(dateSetSelection.fromDate);
          }}
          onFocus={() => {
            setActiveDateCalender(dateSetSelection.fromDate);
          }}
          value={
            typeof formValues.leaveFromDate == 'string'
              ? ''
              : `${formValues.leaveFromDate.getDate()}/${
                  formValues.leaveFromDate.getMonth() + 1
                }/${formValues.leaveFromDate.getFullYear()}`
          }
          style={styles.inputStyle}
        />
        <Text style={styles.inputTitle}>{'To Date'}</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          placeholderTextColor={'#000'}
          onChangeText={val => {
            setFormValues(prev => {
              return {...prev, leaveTillDate: `${new Date(val)}`};
            });
            setActiveDateCalender(dateSetSelection.tillDate);
          }}
          onFocus={() => {
            setActiveDateCalender(dateSetSelection.tillDate);
          }}
          value={
            typeof formValues.leaveTillDate == 'string'
              ? ''
              : `${formValues.leaveTillDate.getDate()}/${
                  formValues.leaveTillDate.getMonth() + 1
                }/${formValues.leaveTillDate.getFullYear()}`
          }
          style={styles.inputStyle}
        />
        <Text style={styles.inputTitle}>{'Apply To'}</Text>
        <FormDropDown
          handleSelectedValue={val => {
            const selectedUserID = employeeList.filter(item => {
              return item.officialEmail == val;
            });
            setFormValues(prev => {
              return {...prev, applyTo: selectedUserID[0].id};
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
          listOptions={employeeList}
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
        handleSubmit={() => {
          if (
            formValues.alternateNumber == '' ||
            formValues.leaveType == '' ||
            formValues.leaveFromDate == '' ||
            formValues.leaveTillDate == '' ||
            formValues.applyTo == '' ||
            formValues.reason == '' ||
            formValues.ccTo.length == 0
          ) {
            Alert.alert('Error', 'Please Fill all values');
          } else {
            handleSubmit(formValues);
          }
        }}
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
              leaveFromDate: date,
            });
            setMinimumDate(date);
          } else if (activeDateCalender == dateSetSelection.tillDate) {
            setFormValues({
              ...formValues,
              leaveTillDate: date,
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
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
