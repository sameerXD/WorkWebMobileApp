import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../assets/constants';
import Icon from 'react-native-vector-icons/AntDesign';
interface DropDownSmallPops {
  isDropDownOpen: boolean;
  handleOpen: () => void;
  optionList: string[];
  handleSelectStatus: (item: string) => void;
  title: string;
}
export const DropDownSmall = ({
  isDropDownOpen,
  handleOpen,
  title,
}: DropDownSmallPops) => {
  return (
    <View>
      <Pressable onPress={handleOpen} style={styles.box}>
        <Text style={styles.text}>{title}</Text>
        <Icon
          name={isDropDownOpen ? 'up' : 'down'}
          size={18}
          color={'#673AB7'}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: ScreenWidth * 0.3,
    height: ScreenHeight * 0.04,
    borderRadius: 10,
    borderColor: '#673AB7',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '8%',
    paddingHorizontal: '6%',
  },
  text: {
    color: '#673AB7',
  },
  optionsBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsText: {
    color: '#673AB7',
    textAlign: 'left',
  },
});
