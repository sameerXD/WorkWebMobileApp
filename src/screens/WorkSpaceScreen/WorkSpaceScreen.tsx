import * as React from 'react';
import { Text, View } from 'react-native';
import { Header } from '../../Components/Header';
export const WorkspaceScreen =()=>{
    return(
        <View style={{flex:1}}>
            <Header />
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>{'Workspace Screen'}</Text>
        </View>
        </View>
    )
}
