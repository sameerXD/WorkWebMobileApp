import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../Components/Header';
import { ProfileCard } from '../../Components/ProfileCard';
import { CheckinRegularizeCard } from '../../Molecules/Atoms/CheckinRegularizeCard';
import { AttendaceStatusBar } from '../../Components/AttendanceStatusBar';
import { CardBox } from '../../Components/CardBox';
export const WorkspaceScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor:'#fff'}}>
            <Header />
            <ScrollView>
            <View style={{ flex: 1, paddingHorizontal: '3%', paddingBottom:'12%' }}>
                <ProfileCard />
                <Text style={styles.cardHeading}>{'Check In'}</Text>
                <CheckinRegularizeCard buttonTitle={'Check In'} texts={['Monday/ General', 'Working Hours - 05:30']} dateTitle={'Date: 4 March 2024'} />
                <Text style={styles.cardHeading}>{'Attendance'}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '16%' }}>
                    <AttendaceStatusBar title='Today' checkinTime='05:00' checkoutTime='05:00' />
                    <AttendaceStatusBar title='Yesterday' checkinTime='05:00' checkoutTime='05:00' />
                </View>
                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={styles.cardHeading}>{'Check In'}</Text>
                    <CheckinRegularizeCard buttonTitle={'Regularize'} texts={['22 Feb 2024', '26 Feb 2024']} dateTitle={'4 Gap in Attendance'} titleColor='#e3842c' />
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