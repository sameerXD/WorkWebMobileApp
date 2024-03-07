import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScreenHeight, ScreenWidth } from '../assets/constants'
export const ProfileCard =()=>{
    return(
        <View style={styles.profileCard}>
          <View style={styles.imageBox}>
            <Image  source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={styles.image}/>
          </View>  
          <View style={styles.textBox}>
            <Text style={styles.nameText}>{'Ananya Joshi'}</Text>
            <Text style={styles.userInfoText}>{'UI/UX Designer'}</Text>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
profileCard:{
    flexDirection:'row',
    height:ScreenHeight*0.1
    },
imageBox:{
    width:ScreenWidth*0.2, 
    justifyContent:'center', 
    alignItems:'center'
},
image:{
    height:'70%', width:'70%', 
    borderRadius:50
},
textBox:{
    width:ScreenWidth*0.74, 
    justifyContent:'center'
},
nameText:{
    fontWeight:'400', 
    fontSize:20, 
    color:'#000'
},
userInfoText:{
    marginTop:'2%', 
    fontWeight:'400', 
    color:'#000'
}
})