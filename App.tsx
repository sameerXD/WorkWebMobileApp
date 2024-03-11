/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import RootNavigator from './src/screenNavigator/RootNaivagtor';
import { Provider } from 'react-redux'
import store from './src/redux/store';


function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
