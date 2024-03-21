import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ScreenWidth} from '../assets/constants';
interface ButtonProps {
  title: string;
  handleSubmit: () => void;
  color?: string;
  size: 'l' | 'm' | 'sm';
  ghost?: boolean;
  isLoading?: boolean;
}
function Button(props: ButtonProps) {
  const {title, handleSubmit, color, size, ghost, isLoading} = props;
  return (
    <TouchableWithoutFeedback disabled={isLoading} onPress={handleSubmit}>
      <View
        style={{
          width:
            size == 'l'
              ? ScreenWidth * 0.91
              : size == 'm'
              ? ScreenWidth * 0.4
              : ScreenWidth * 0.3,
          backgroundColor: ghost ? '#fff' : color ? color : '#673AB7',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: ghost ? '#673AB7' : '#fff',
          borderWidth: 1,
          paddingVertical: '3%',
        }}>
        {isLoading ? (
          <ActivityIndicator animating={true} size="large" color="#fff" />
        ) : (
          <Text
            style={{
              color: ghost ? '#673AB7' : '#fff',
              fontSize: size == 'l' ? 20 : size == 'm' ? 16 : 15,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Button;
