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
import {
  ScreenHeight,
  ScreenWidth,
  leaveHistoyStatusOptions,
} from '../../assets/constants';
import {FlatList} from 'react-native';

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
        setModalVisible(false);
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

  const renderLeaveHistoryList = ({item, index}) => {
    return (
      <View key={index} style={styles.leaveStatusBox}>
        <View style={{width: '70%', zIndex: -1}}>
          <Text style={{color: '#000', fontSize: 13}}>
            {item.leaveType == 'sick-leave'
              ? 'Sick Leave'
              : item.leaveType == 'leave-without-pay'
              ? 'Leave Without Pay'
              : 'Earned Leave'}
          </Text>
          <Text style={{fontSize: 11}}>{item.reason}</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '40%',
              justifyContent: 'space-between',
              marginTop: '2%',
            }}>
            <View style={styles.leaveHistoryDateBox}>
              <Text style={{fontSize: 13, color: '#673AB7', fontWeight: '600'}}>
                {`${new Date(item.fromDate).getDate()}-${
                  new Date(item.fromDate).getMonth() + 1
                }-${new Date(item.fromDate).getFullYear()}`}
              </Text>
            </View>
            <View style={styles.leaveHistoryDateBox}>
              <Text style={{fontSize: 13, color: '#673AB7', fontWeight: '600'}}>
                {`${new Date(item.toDate).getDate()}-${
                  new Date(item.toDate).getMonth() + 1
                }-${new Date(item.toDate).getFullYear()}`}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.leaveHistoryStatusBox}>
          <View
            style={[
              styles.leaveHistoryBox,
              {
                backgroundColor:
                  item.status == 0
                    ? '#FCD25C'
                    : item.status == 1
                    ? '#83C878'
                    : '#F05252',
              },
            ]}>
            <Text style={{color: '#fff', zIndex: -1}}>
              {item.status == 0
                ? 'Pending'
                : item.status == 1
                ? 'Accepted'
                : 'Declined'}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      {modalVisible ? (
        <ApplyLeaveForm
          title="Apply Leave"
          handleSubmit={() => setModalVisible(!modalVisible)}
        />
      ) : (
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
                leaveBalance={
                  leaveList[0][1] + Math.ceil(Number(leaveList[1][1]))
                }
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
              }}
              size="sm"
            />
          </View>
          <View style={styles.historyBox}>
            <Text style={styles.historyText}>{'Leave History'}</Text>
            <View style={{zIndex: 1000}}>
              <DropDownSmall
                title={dropdownOption}
                handleSelectStatus={handleSelectOption}
                optionList={leaveHistoyStatusOptions}
                isDropDownOpen={historyDropdownOpen}
                handleOpen={() => setHistoryDropdownOpe(!historyDropdownOpen)}
              />
              {historyDropdownOpen && (
                <View style={styles.dropdownOptionsStatusBox}>
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
          <View style={styles.leaveHistoryListBox}>
            {leaveHistory.length > 0 && (
              <FlatList
                data={leaveHistory}
                keyExtractor={item => item.id}
                renderItem={renderLeaveHistoryList}
              />
            )}
          </View>
          {/* <CustomModal isModalVisible={modalVisible} transparent={true}> */}
          {/* </CustomModal> */}
        </View>
      )}
    </>
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
    zIndex: 100,
    paddingVertical: '3%',
    width: '100%',
    alignItems: 'center',
    opacity: 1,
  },
  leaveHistoryListBox: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    paddingTop: '3%',
    zIndex: -1,
  },
  leaveStatusBox: {
    width: ScreenWidth * 0.9,
    marginVertical: '1.5%',
    borderColor: '#D9D9D9',
    padding: '2%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    zIndex: -1,
  },
  dropdownOptionsStatusBox: {
    position: 'absolute',
    backgroundColor: '#F6F4F9',
    marginTop: '35%',
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#673AB7',
    borderRadius: 5,
    zIndex: 100,
  },
  leaveHistoryBox: {
    paddingVertical: '3%',
    paddingHorizontal: '6%',
    borderRadius: 10,
    marginVertical: '1%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  leaveHistoryStatusBox: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  leaveHistoryDateBox: {
    paddingVertical: '2%',
    paddingHorizontal: '6%',
    borderRadius: 10,
    backgroundColor: '#F6F4F9',
    marginVertical: '1%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
