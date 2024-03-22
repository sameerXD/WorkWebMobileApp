import React from 'react';
import {Dimensions} from 'react-native';
import {formValueType} from '../Components/ApplyLeaveForm';

export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;

export const leaveHistoyStatusOptions = [
  'Select',
  'Pending',
  'Approved',
  'Declined',
];

export const dateSetSelection = {
  fromDate: 'FromDate',
  tillDate: 'TillDate',
};

export const ApplyLEaveFormValues: formValueType = {
  leaveType: '',
  leaveFromDate: '',
  leaveTillDate: '',
  applyTo: '',
  ccTo: [],
  alternateNumber: '',
  reason: '',
};
