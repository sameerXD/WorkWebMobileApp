import React, { useEffect } from 'react'
import { Alert, ScrollView, View } from 'react-native';
import { Header } from '../../Components/Header';
import { serviceList } from './HomeScreenConstants';
import { ServiceCard } from '../../Components/ServiceCard';
import { useDispatch } from 'react-redux';
import { getUserData } from '../../redux/actions/getUserData';
function HomeScreen({navigation}) {
    const dispatch = useDispatch();
    useEffect(()=>{
     getUserData().then(data=>{
          dispatch({ type: 'USER_DATA', payload: { userData: data} });    
      }).catch(error=>{
          console.log("Value for error____",error);   
      })
    },[])
    const goBack=()=>{navigation.goBack()}
    const handleCalledService =(name)=>{

        switch(name){
            case 'Workspace':
                navigation.navigate("WorkspaceScreen");
                break;
            default:
                Alert.alert("Note","Screen not yet made")
        }
    }
    return ( 
        <>
            <Header />
            <View style={{flex:1, backgroundColor:'#fff'}}>
            <ScrollView>
            <View style={{height:'100%', width:'100%',flexDirection: 'row',flexWrap: 'wrap', justifyContent:'center', marginTop:'3%'}}>
                {serviceList.map((item, index)=><ServiceCard name={item.name} icon={item.icon} key={index} handleServicePressed={()=>{handleCalledService(item.name)}}/>)}
                </View>
            </ScrollView>
            </View>
        </>
     );
}

export default HomeScreen;
