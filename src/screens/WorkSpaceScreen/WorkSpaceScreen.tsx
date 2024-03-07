import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../Components/Header';
import { ProfileCard } from '../../Components/ProfileCard';
import { CheckinRegularizeCard } from '../../Molecules/Atoms/CheckinRegularizeCard';
export const WorkspaceScreen =()=>{
    return(
        <View style={{flex:1}}>
            <Header />
        <View style={{flex:1, backgroundColor:'#fff', padding:'3%'}}>
            <ProfileCard />
            <Text style={styles.cardHeading}>{'Check In'}</Text>
            <CheckinRegularizeCard />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardHeading:{
        fontSize:18,
        fontWeight:'400',
        color:'#000'
    }
})