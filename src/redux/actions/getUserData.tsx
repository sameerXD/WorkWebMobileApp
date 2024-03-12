import axios, { AxiosError } from "axios"
import { Base_url } from "../.."
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

export {getUserLoggedIn}