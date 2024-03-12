import Config from "react-native-config";
export const Base_url = Config.BASE_URL;
export function validateEmail(email:string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }