import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../Components/Header';
import { ProfileCard } from '../../Components/ProfileCard';
import { CheckinRegularizeCard } from '../../Molecules/Atoms/CheckinRegularizeCard';
import { AttendaceStatusBar } from '../../Components/AttendanceStatusBar';
import { CardBox } from '../../Components/CardBox';
import { useSelector } from 'react-redux';
import { useState } from 'react';
export const WorkspaceScreen = () => {
  const userData = useSelector(state => state.user.userData);
  const [isUserCheckedIn, setUserCheckedIn] = useState(userData?.signIn?.online);
  const handleCheckIn = ()=>{
    setUserCheckedIn(!isUserCheckedIn)
  }
    return (
        <View style={{ flex: 1, backgroundColor:'#fff'}}>
            <Header />
            <ScrollView>
            <View style={{ flex: 1, paddingHorizontal: '3%', paddingBottom:'12%' }}>
                <ProfileCard />
                <Text style={styles.cardHeading}>{'Check In'}</Text>
                <CheckinRegularizeCard handleCheckIn={handleCheckIn} buttonTitle={isUserCheckedIn ? 'Check Out':'Check In'} texts={[`${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date())}/ General`, `Working Hours - ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`]} dateTitle={`Date: ${new Date().getDate()} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())} ${new Date().getFullYear()}`} />
                <Text style={styles.cardHeading}>{'Attendance'}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '16%' }}>
                    <AttendaceStatusBar title='Today' checkinTime='05:00' checkoutTime='05:00' />
                    <AttendaceStatusBar title='Yesterday' checkinTime='05:00' checkoutTime='05:00' />
                </View>
                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={styles.cardHeading}>{'Check In'}</Text>
                    <CheckinRegularizeCard handleCheckIn={()=>{}} buttonTitle={'Regularize'} texts={['22 Feb 2024', '26 Feb 2024']} dateTitle={'4 Gap in Attendance'} titleColor='#e3842c' />
                </View>
                <View>
                  <View style={styles.titleRow}>
                    <Text style={styles.cardHeading}>{'Task'}</Text>
                    <Text style={styles.smallText}>{'View All'}</Text>
                  </View>  
                  <View style={styles.rowCard}>
                    <CardBox title={'Task'} date='02 March 2023' status={'Pending'}/>
                    <CardBox title={'Task'} date='02 March 2023' status={'Pending'}/>
                  </View>  
                </View>
                <View>
                  <View style={styles.titleRow}>
                    <Text style={styles.cardHeading}>{'Task'}</Text>
                    <Text style={styles.smallText}>{'View All'}</Text>
                  </View>  
                  <View style={styles.rowCard}>
                    <CardBox title={'Task'} date='02 March 2023' status={'Pending'}/>
                    <CardBox title={'Task'} date='02 March 2023' status={'Pending'}/>
                  </View>  
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cardHeading: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
        marginVertical: '2%'
    },
    titleRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    smallText:{
        fontWeight:'500',
        color:'#000'
    },
    rowCard:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})