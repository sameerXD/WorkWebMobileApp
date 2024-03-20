import React, {useCallback, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../Components/Header';
import {LeaveCard} from '../../Components/LeaveCard';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../Components/Button';
import {CustomModal} from '../../Components/CustomModal';
import {ApplyLeaveForm} from '../../Components/ApplyLeaveForm';
import {useFocusEffect} from '@react-navigation/native';
import {getLeaveHistory} from '../../redux/actions/getLeaveHistory';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DropDownSmall} from '../../Components/DropDownSmall';
import {leaveHistoyStatusOptions} from '../../assets/constants';

export const LeaveScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);
  const leaveHistory = useSelector(state => state.user.leaveHistory);
  const leaveList = Object.entries(userData?.leave).map(([k, v]) => {
    return [k, v];
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [historyDropdownOpen, setHistoryDropdownOpe] = useState(false);
  const [dropdownOption, setDropdownOption] = useState(
    leaveHistoyStatusOptions[0],
  );
  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const token = await AsyncStorage.getItem('token').then(async jwt => {
            await getLeaveHistory(jwt)
              .then(data => {
                dispatch({
                  type: 'LEAVE_HISTORY',
                  payload: {leaveHistory: data},
                });
              })
              .catch(error => {
                Alert.alert('Error', error);
              });
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []),
  );
  const handleSelectOption = val => {
    console.log('handleSelectOption_______', val);
    setDropdownOption(val);
    setHistoryDropdownOpe(false);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.leaveContainer}>
        <Text style={styles.title}>{'Leave Balance'}</Text>
        <View
          style={{
            flexDirection: 'row',
            height: '50%',
            justifyContent: 'space-between',
          }}>
          <LeaveCard
            leaveName={'Total'}
            leaveBalance={leaveList[0][1] + Math.ceil(Number(leaveList[1][1]))}
          />
          {leaveList.map((item, index) => {
            if (item[0] != 'casualLeave') {
              return (
                <LeaveCard
                  key={index}
                  leaveName={item[0]}
                  leaveBalance={item[1]}
                />
              );
            }
          })}
        </View>
        <Button
          title={'Apply Leave'}
          handleSubmit={() => {
            setModalVisible(true);
            console.log('sldkfjsldjflsdjfklsd');
          }}
          size="sm"
        />
      </View>
      <View style={styles.historyBox}>
        <Text style={styles.historyText}>{'Leave History'}</Text>
        <View>
          <DropDownSmall
            title={dropdownOption}
            handleSelectStatus={handleSelectOption}
            optionList={leaveHistoyStatusOptions}
            isDropDownOpen={historyDropdownOpen}
            handleOpen={() => setHistoryDropdownOpe(!historyDropdownOpen)}
          />
          {historyDropdownOpen && (
            <View
              style={{
                position: 'absolute',
                backgroundColor: '#F6F4F9',
                marginTop: '35%',
                width: '100%',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#673AB7',
                borderRadius: 5,
                zIndex: 100,
              }}>
              {leaveHistoyStatusOptions.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    onPress={() => handleSelectOption(item)}
                    style={styles.optionsBox}>
                    <Text style={{color: '#673AB7', textAlign: 'left'}}>
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          )}
        </View>
      </View>
      <CustomModal isModalVisible={modalVisible} transparent={true}>
        <ApplyLeaveForm
          title="Apply Leave"
          handleSubmit={() => setModalVisible(!modalVisible)}
        />
      </CustomModal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  leaveContainer: {
    padding: '2%',
    justifyContent: 'space-between',
    height: '40%',
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontWeight: '600',
    fontSize: 17,
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
  },
  historyBox: {
    width: '95%',
    backgroundColor: '#F6F4F9',
    marginHorizontal: '2%',
    paddingHorizontal: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  historyText: {
    fontWeight: '600',
    color: '#000',
  },
  optionsBox: {
    zIndex: 2000,
    marginVertical: '3%',
  },
});
