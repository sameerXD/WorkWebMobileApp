import React from 'react';
import {Dimensions} from 'react-native';

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
