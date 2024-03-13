import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { WorkspaceScreen } from '../screens/WorkSpaceScreen/WorkSpaceScreen';
import Home from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Fontisto';
import OfficeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumetIcon from 'react-native-vector-icons/AntDesign';
import { LogOutScreen } from '../screens/LogOutScreen/LogOutScreen';
const Tab = createBottomTabNavigator();

export const BottomTabs=()=> {
  return (
    <Tab.Navigator screenOptions={() => ({
        headerShown: false,
        gestureEnabled: true,
    })}
    >
      <Tab.Screen options={{tabBarIcon:()=><Home size={30} color={'#B4B4B8'} name='home'/>,  tabBarStyle: {paddingBottom:'2.5%',height:'7.5%'}}} name="Home" component={WorkspaceScreen} />
      <Tab.Screen options={{tabBarIcon:()=><OfficeIcon size={30} color={'#B4B4B8'} name='office-building-marker'/>}} name="Attendance" component={HomeScreen} />
      <Tab.Screen options={{tabBarIcon:()=><DocumetIcon size={30} color={'#B4B4B8'} name='copy1'/>}} name="Documents" component={HomeScreen} />
      <Tab.Screen options={{tabBarIcon:()=><Icon size={30} color={'#B4B4B8'} name='holiday-village'/>}} name="Leaves" component={HomeScreen} />
      <Tab.Screen options={{tabBarIcon:()=><Home size={30} color={'#B4B4B8'} name='user'/>}} name="Profile" component={LogOutScreen} />
    </Tab.Navigator>
  );
}