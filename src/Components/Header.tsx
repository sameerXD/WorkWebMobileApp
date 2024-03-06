import React from 'react'
import { View } from 'react-native';
import WorkWebLogo from '../assets/icons/logo.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
export const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={{ width: '100%', height: '9%', backgroundColor:'#F6F4F9', flexDirection:'row', alignItems:'center', paddingHorizontal:'2%', justifyContent:'space-between'}}>
            <WorkWebLogo onPress={()=>{navigation.goBack()
        console.log("Naviation PRessed")
        }}/>
            <Icon
                name='notifications'
                size={35}
                color={'#673AB7'}
                // onPress={handleGoback}
            />
            {/* <Text style={{ color: 'red', fontSize: 20 }}>{'title'}</Text> */}
        </View>
    );
}