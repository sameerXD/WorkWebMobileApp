/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import RootNavigator from './src/screenNavigator/RootNaivagtor';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {

  return <RootNavigator />;
}

export default App;
