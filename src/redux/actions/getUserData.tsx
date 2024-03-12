import axios, { AxiosError } from "axios"
import { Base_url } from "../..";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
interface userLoginProps {
    email:string;
    password: string;
}
const getUserLoggedIn=async ({email, password}:userLoginProps)=>{
    try{
    const response = await axios.post(`${Base_url}/user/signin`,{
        email:email,
        password:password
    });
    return response;
    } catch(error){
              if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    console.log("Error status:", axiosError.response.status);
                    console.log("Error data:", axiosError.response.data);
                    return axiosError.response.data;
                } else {
                    return error;
                }
            } else {
                return error;
            }
    }
}


const getUserData=async ()=>{
    const jwtToken = await AsyncStorage.getItem('token');
    const response = await axios.get(`${Base_url}/user/getUserData`,  {
                headers: {
                    Authorization: jwtToken,
                },
            }).then((data)=>{
                return data?.data 
            }).catch((error)=>{
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    if (axiosError.response) {
                        Alert.alert("Error",`Status: ${axiosError.response.data}\n ${axiosError.response.data}`);
                        return axiosError.response.data;
                    } else {
                        return error;
                    }
                } else {
                    return error;
                }
            })
            return response;
        }
    
export {getUserLoggedIn, getUserData}