import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../assets/constants';
import Icon from 'react-native-vector-icons/AntDesign';
interface FormDropDownProps {
  listOptions: string[];
  handleSelectedValue: (item: string) => void;
}
export const FormDropDown = ({
  listOptions,
  handleSelectedValue,
}: FormDropDownProps) => {
  const [historyDropdownOpen, setHistoryDropdownOpen] = useState(false);
  const [renderList, setRenderList] = useState(listOptions);
  const [inputValue, setInputValue] = useState('');
  const handleChange = val => {
    if (val.length > 0) {
      setHistoryDropdownOpen(true);
    } else if (val.length == 0) {
      setHistoryDropdownOpen(false);
    }
    setInputValue(val);
    const updatedList = listOptions.filter((item, index) => {
      return item.toLocaleLowerCase().includes(val.toLocaleLowerCase());
    });
    setRenderList(updatedList);
  };
  return (
    <View style={styles.dropDownBox}>
      <View style={styles.inputBox}>
        <TextInput
          placeholder={'Select'}
          placeholderTextColor={'#000'}
          value={inputValue}
          onChangeText={handleChange}
          style={{width: ScreenWidth * 0.8}}
        />
        <Icon
          name={historyDropdownOpen ? 'up' : 'down'}
          size={18}
          color={'#673AB7'}
          onPress={() => {
            setHistoryDropdownOpen(!historyDropdownOpen);
          }}
        />
      </View>
      {historyDropdownOpen && (
        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',
            position: 'absolute',
            zIndex: 100,
            marginTop: ScreenHeight * 0.08,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#673AB7',
            padding: '2%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {listOptions &&
            renderList.map((item, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    setInputValue(item);
                    handleSelectedValue(item);
                    setHistoryDropdownOpen(false);
                  }}
                  style={{
                    paddingVertical: '2%',
                    width: '95%',
                    borderTopWidth: index != 0 ? 1 : 0,
                    borderBottomWidth: index != renderList.length - 1 ? 1 : 0,
                    borderColor: '#673AB7',
                  }}>
                  <Text style={{color: '#000'}}>{item}</Text>
                </Pressable>
              );
            })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownBox: {
    width: ScreenWidth * 0.9,
  },
  inputBox: {
    width: ScreenWidth * 0.9,
    height: ScreenHeight * 0.07,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#673AB7',
    marginVertical: '2%',
    alignItems: 'center',
    paddingHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    color: '#000',
    fontSize: 14,
  },
});
