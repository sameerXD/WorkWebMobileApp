import React, { useState } from 'react'
import { LogBox, StyleSheet, Text, View, Modal, Pressable, Alert } from 'react-native'
import { Header } from '../../Components/Header'
import { LeaveCard } from '../../Components/LeaveCard'
import { useSelector } from 'react-redux'
import Button from '../../Components/Button'
import { CustomModal } from '../../Components/CustomModal'
import { ApplyLeaveForm } from '../../Components/ApplyLeaveForm'


export const LeaveScreen =()=>{
    const userData = useSelector(state => state.user.userData);
    const leaveList = Object.entries(userData?.leave).map(([k,v]) => {return [k, v]});
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.leaveContainer}>
                <Text style={styles.title}>{'Leave Balance'}</Text>
                <View style={{flexDirection:'row', height:'50%', justifyContent:'space-between'}}>
                <LeaveCard leaveName={'Total'} leaveBalance={leaveList[0][1] + Math.ceil(Number(leaveList[1][1]))}/>
                {leaveList.map(item=>{
                    if(item[0] != 'casualLeave'){
                    return <LeaveCard leaveName={item[0]} leaveBalance={item[1]}/>
                    }})}

                </View>
                    <Button title={'Apply Leave'} handleSubmit={()=>{setModalVisible(true); console.log("sldkfjsldjflsdjfklsd")}} size='sm' />
            </View>
            <CustomModal isModalVisible={modalVisible} transparent={true}>
                <ApplyLeaveForm title='Apply Leave' handleSubmit={()=>setModalVisible(!modalVisible)}/>
            </CustomModal>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }, 
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
    leaveContainer:{
        // flex:1,
        padding:'2%',
        justifyContent:'space-between',
        height:'40%'
    },
    title:{
        color:'#000',
        fontWeight:'600',
        fontSize:17
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      }
})