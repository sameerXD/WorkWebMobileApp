import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosError} from 'axios';
import {Alert} from 'react-native';
import Config from 'react-native-config';

export const getAllEmployeeList = async () => {
  try {
    const JwtToken = await AsyncStorage.getItem('token');
    const response = await axios.get(
      `${Config.BASE_URL}/user/getEmployeeList`,
      {
        headers: {
          Authorization: JwtToken,
        },
      },
    );
    return response;
  } catch (error) {
    Alert.alert('Error', error);
    // console.log('Error_________', error);
  }
};
export interface postLeave {
  leaveType: string;
  toDate: string;
  fromDate: string;
  applyTo: string;
  ccTo: string[] | [];
  contactDetails: string;
  reason: string;
  status?: number;
  jwt?: string;
  applyFor?: string;
}

export const applyLeave = async (data: postLeave) => {
  try {
    const JwtToken = await AsyncStorage.getItem('token');
    const putData = await axios.post(
      `${Config.BASE_URL}/user/applyLeave`,
      data,
      {
        headers: {
          Authorization: JwtToken,
        },
      },
    );
    return putData.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.log('Error status:', axiosError.response.status);
        console.log('Error data:', axiosError.response.data);
        return axiosError.response.data;
      } else {
        return error;
      }
    } else {
      return error;
    }
  }
};
