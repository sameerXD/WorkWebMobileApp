import axios from "axios";
import Config from "react-native-config";
interface getLeaveHistoryProps {
    token: string;
}
export const getLeaveHistory =async (token:getLeaveHistoryProps)=>{
    const response = await axios.get(
        `${Config.BASE_URL}/user/getLeaveHistory`,
        {
            headers: {
                Authorization: token,
            },
        }
    )
    return response.data
    console.log("leaveScreen Called",Config.BASE_URL);

    
}