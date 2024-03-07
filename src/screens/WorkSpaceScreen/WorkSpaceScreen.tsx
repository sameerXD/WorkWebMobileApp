import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../Components/Header';
import { ProfileCard } from '../../Components/ProfileCard';
import { CheckinRegularizeCard } from '../../Molecules/Atoms/CheckinRegularizeCard';
import { AttendaceStatusBar } from '../../Components/AttendanceStatusBar';
export const WorkspaceScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{ flex: 1, backgroundColor: '#fff', padding: '3%' }}>
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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardHeading: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
        marginVertical: '2%'
    }
})