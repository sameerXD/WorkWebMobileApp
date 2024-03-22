import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
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
  }
};
