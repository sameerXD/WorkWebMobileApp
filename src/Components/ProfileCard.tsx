import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScreenHeight, ScreenWidth } from '../assets/constants'
import Home from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
export const ProfileCard = () => {
    const userData = useSelector(state => state.user.userData);
    return(
        <View style={styles.profileCard}>
            <View style={styles.imageBox}>
                {userData?.trackerId?.personalDetails?.I?.profilePicture ?
                    <Image
                        source={{ uri: userData?.trackerId?.personalDetails?.I?.profilePicture }}
                        style={styles.image}
                    />
                    :
                    <Home name='user-o' size={40} style={{ alignSelf: 'center' }} />
                }
            </View>
            <View style={styles.textBox}>
                <Text style={styles.nameText}>{userData?.trackerId?.personalDetails?.I?.name}</Text>
                <Text style={styles.userInfoText}>{userData?.designation}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    profileCard: {
        flexDirection: 'row',
        height: ScreenHeight * 0.1
    },
    imageBox: {
        width: ScreenWidth * 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '70%', width: '70%',
        borderRadius: 50
    },
    textBox: {
        width: ScreenWidth * 0.74,
        justifyContent: 'center'
    },
    nameText: {
        fontWeight: '400',
        fontSize: 20,
        color: '#000'
    },
    userInfoText: {
        marginTop: '2%',
        fontWeight: '400',
        color: '#000'
    }
})