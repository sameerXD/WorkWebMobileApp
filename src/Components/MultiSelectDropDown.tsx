import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../assets/constants';
import Icon from 'react-native-vector-icons/AntDesign';
interface MultiSelectDropDownProps {
  listOptions: string[];
  handleSelectedValue: (item: string[]) => void;
}
export const MultiSelectDropDown = ({
  listOptions,
  handleSelectedValue,
}: MultiSelectDropDownProps) => {
  const [historyDropdownOpen, setHistoryDropdownOpen] = useState(false);
  const [renderList, setRenderList] = useState(listOptions);
  const [inputValue, setInputValue] = useState<string[]>([]);
  useEffect(() => {
    handleSelectedValue(inputValue);
  }, [inputValue]);
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
        <View style={{flexDirection: 'row', marginLeft: '2%'}}>
          {inputValue.length == 0 ? (
            <Text>{'Select'}</Text>
          ) : (
            inputValue.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    justifyContent: 'space-between',
                    backgroundColor: '#F6F4F9',
                    borderRadius: 5,
                    padding: '1.5%',
                    marginRight: '3%',
                    // width: '100%',
                  }}>
                  <Text
                    style={{
                      marginRight: '1%',
                    }}>
                    {item}
                  </Text>
                  <Icon
                    name={'close'}
                    size={18}
                    color={'#673AB7'}
                    onPress={() => {
                      const updatedArray = inputValue.filter(selectedValue => {
                        return selectedValue != item;
                      });
                      setInputValue(updatedArray);
                      setHistoryDropdownOpen(false);
                      setRenderList(prev => [...prev, item]);
                    }}
                  />
                </View>
              );
            })
          )}
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            height: '100%',
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={historyDropdownOpen ? 'up' : 'down'}
            size={18}
            color={'#673AB7'}
            onPress={() => {
              setHistoryDropdownOpen(!historyDropdownOpen);
            }}
          />
        </View>
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
                    setInputValue(prev => [...prev, item]);
                    handleSelectedValue(inputValue);
                    setHistoryDropdownOpen(false);
                    const remainingEmailList = renderList.filter(
                      uniqueValue => {
                        return uniqueValue != item;
                      },
                    );
                    setRenderList(remainingEmailList);
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
    // paddingHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    color: '#000',
    fontSize: 14,
  },
});
