import axios from "axios";
import Config from "react-native-config";

const swipeUserAttendance =async(jwtToken:string)=>{
    const response = await axios.put(
            `${Config.BASE_URL}/user/swipe`,
            {},
            {
                    headers: {
                            Authorization: jwtToken,
                        },
                    }
                )
        
    return response.data
}


export {swipeUserAttendance};